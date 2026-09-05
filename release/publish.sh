#!/usr/bin/env sh
set -eu

# Baut die App als Flatpak und veröffentlicht sie in ein eigenes, GPG-signiertes
# Flatpak-Repository (kein Flathub). Das Repo kannst du auf einen Webserver bzw.
# einen statischen Host (GitHub Pages, Netlify, eigenen Server) legen und dann
# als externe Quelle in GNOME Software / `flatpak` einrichten.
#
# Usage:
#   ./release/publish.sh            # bauen, ins Repo committen + signieren
#   ./release/publish.sh --repo <pfad>   # anderes Ausgabe-Repo-Verzeichnis
#
# Ergebnis: das veröffentlichbare Repo liegt unter dem `--repo`-Pfad (Standard:
# `release/repo`). Den gesamten Inhalt dieses Ordners hochladen (inkl. `config`,
# `summary`, `summaries/`, `objects/`, `keyring`).

APP_ID="de.twiceware.outreach"
BRANCH="stable"
OUT_REPO="release/repo"
BUILD_DIR="build/targets/flatpak/build"
# Basis-URL, unter der das Repo gehostet wird (Pages-Root, kein /repo-Suffix,
# da der Workflow den Inhalt von release/repo flach in die Pages-Root ablegt).
# Ohne abschließenden Slash, damit die Joins unten keine doppelten Slashes erzeugen.
REPO_URL="${REPO_URL:-https://dspangenberg.github.io/outreach}"
REPO_URL="${REPO_URL%/}"

case "${1:-}" in
    --repo) OUT_REPO="$2"; shift 2 ;;
    --help|-h|--*) echo "Usage: $0 [--repo <repopfad>]" >&2; exit 1 ;;
esac

# --- 1. GPG-Key sicherstellen ---------------------------------------------
# Der Signier-Key kann auf drei Wegen gesetzt werden (in dieser Reihenfolge):
#   1. Umgebungsvariable SIGNING_KEY_FINGERPRINT (u. a. von CI gesetzt)
#   2. release/.signing-key (vom lokalen ./release/setup-gpg.sh geschrieben)
#   3. neu erzeugen (nur lokal sinnvoll)
GTKX_GPG_HOMEDIR="${GTKX_GPG_HOMEDIR:-$HOME/.gnupg}"
SIGNING_KEY="${SIGNING_KEY_FINGERPRINT:-}"
if [ -z "$SIGNING_KEY" ]; then
    KEY_FILE="$(cd "$(dirname "$0")" && pwd)/.signing-key"
    if [ -f "$KEY_FILE" ]; then
        SIGNING_KEY="$(cat "$KEY_FILE")"
    else
        echo "Kein Signier-Key vorhanden. Starte Einrichtung…"
        ./release/setup-gpg.sh
        SIGNING_KEY="$(cat "$KEY_FILE")"
    fi
fi
gpg --homedir "$GTKX_GPG_HOMEDIR" --list-keys "$SIGNING_KEY" >/dev/null 2>&1 \
    || { echo "error: signing key '$SIGNING_KEY' not in keyring '$GTKX_GPG_HOMEDIR'" >&2; exit 1; }
echo "==> Signieren mit GPG-Key $SIGNING_KEY (homedir $GTKX_GPG_HOMEDIR)"

# --- 2. Flatpak bauen (gtkx erzeugt Manifest + Refs) ----------------------
echo "==> gtkx deploy --target=flatpak"
npx gtkx deploy --target=flatpak

MANIFEST="build/targets/flatpak/$APP_ID.yml"
[ -f "$MANIFEST" ] || { echo "error: manifest not found at $MANIFEST" >&2; exit 1; }

# --- 3. Repo bauen und Refs committen --------------------------------------
rm -rf "$OUT_REPO" "$BUILD_DIR"
mkdir -p "$OUT_REPO"
ostree init --repo="$OUT_REPO" --mode=archive-z2

echo "==> flatpak-builder (baut aus Manifest und committet in das Repo)"
flatpak-builder --user --disable-rofiles-fuse --repo="$OUT_REPO" --force-clean \
    --gpg-sign="$SIGNING_KEY" --gpg-homedir="$GTKX_GPG_HOMEDIR" \
    "$BUILD_DIR" "$MANIFEST"

# Öffentlichen Signier-Key in das Repo exportieren, damit Clients die
# Commit-Signaturen ohne manuelles --gpg-import verifizieren können.
gpg --homedir "$GTKX_GPG_HOMEDIR" --export "$SIGNING_KEY" > "$OUT_REPO/keyring"

# --- 3b. .flatpakrepo / .flatpakref erzeugen (Schlüssel eingebettet) ---------
# Eine .flatpakrepo-Datei erspart den Nutzern das manuelle --gpg-import:
#   flatpak remote-add --if-not-exists outreach https://dspangenberg.github.io/outreach/outreach.flatpakrepo
# Der GPG-Key wird automatisch importiert und die Commit-Signaturen verifiziert.
GPG_KEY_B64="$(gpg --homedir "$GTKX_GPG_HOMEDIR" --export "$SIGNING_KEY" | base64 --wrap=0)"

cat > "$OUT_REPO/outreach.flatpakrepo" <<EOF
[Flatpak Repo]
Title=Outreach
Name=outreach
Url=$REPO_URL
Homepage=https://github.com/dspangenberg/outreach
Comment=Outreach – Contact manager
Description=Outreach, ein Kontakt- und Aufgabenmanager für GNOME
GPGKey=$GPG_KEY_B64
EOF

# .flatpakref für den 1-Klick-Install einer einzelnen App (flatpak install --from).
cat > "$OUT_REPO/outreach.flatpakref" <<EOF
[Flatpak Ref]
Title=Outreach
Name=$APP_ID
Branch=$BRANCH
Url=$REPO_URL
Homepage=https://github.com/dspangenberg/outreach
Icon=$REPO_URL/icons/de.twiceware.outreach.png
RuntimeRepo=$REPO_URL/outreach.flatpakrepo
IsRuntime=false
GPGKey=$GPG_KEY_B64
EOF

# --- 3c. App-Icon + deutsche Homepage (index.html) erzeugen ------------------
# Damit die Pages-Root-URL statt einer 404 eine schlichte Landing-Page zeigt.
# Die Seite wird bei jedem Release neu geschrieben (force_orphan) und die
# Versionsnummer/das Build-Datum automatisch eingetragen.
ICON_SRC="data/icons/hicolor/scalable/apps/$APP_ID.svg"
if [ -f "$ICON_SRC" ]; then
    mkdir -p "$OUT_REPO/icons"
    cp -f "$ICON_SRC" "$OUT_REPO/icons/$APP_ID.svg"
else
    echo "Warnung: Icon '$ICON_SRC' nicht gefunden – Homepage ohne Logo." >&2
fi

APP_VERSION="$(grep -m1 '"version"' package.json | sed -E 's/.*"version"[[:space:]]*:[[:space:]]*"([^"]+)".*/\1/')"
BUILD_DATE="$(date -u +%Y-%m-%d)"

cat > "$OUT_REPO/index.html" <<EOF
<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Outreach</title>
<style>
  :root { color-scheme: light dark; }
  * { box-sizing: border-box; }
  body {
    margin: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
    background: #f6f5f4; color: #241f31; line-height: 1.55; padding: 3rem 1rem;
  }
  @media (prefers-color-scheme: dark) {
    body { background: #24292f; color: #e6e6e6; }
    code { background: #1f2429; }
  }
  main { max-width: 720px; margin: 0 auto; }
  .hero { text-align: center; margin-bottom: 2rem; }
  .hero img { width: 96px; height: 96px; }
  h1 { margin: .5rem 0 .2rem; font-size: 2.2rem; }
  .tag { color: #77767b; margin: 0 0 1.2rem; }
  @media (prefers-color-scheme: dark) { .tag { color: #9a9996; } }
  .box {
    background: #fff; border: 1px solid #deddda; border-radius: 12px;
    padding: 1.25rem 1.5rem; margin-bottom: 1.25rem;
  }
  @media (prefers-color-scheme: dark) { .box { background: #1c2126; border-color: #3a4147; } }
  code { background: #f0efec; padding: .15em .4em; border-radius: 6px; font-size: .95em; }
  @media (prefers-color-scheme: dark) { code { background: #1f2429; } }
  pre {
    background: #2c3136; color: #e6e6e6; padding: 1rem; border-radius: 10px;
    overflow-x: auto; font-size: .95em;
  }
  a { color: #3584e4; }
  ul { margin: .5rem 0; padding-left: 1.3rem; }
  .meta { color: #77767b; font-size: .9em; }
  @media (prefers-color-scheme: dark) { .meta { color: #9a9996; } }
</style>
</head>
<body>
<main>
  <div class="hero">
    <img src="$REPO_URL/icons/$APP_ID.svg" alt="Outreach" width="96" height="96">
    <h1>Outreach</h1>
    <p class="tag">Kontakt- und Aufgabenmanager für GNOME</p>
    <p class="meta">Version $APP_VERSION &middot; Build $BUILD_DATE</p>
  </div>

  <div class="box">
    <h2>Installation</h2>
    <p>Füge dieses Repository als Quelle hinzu und installiere die App:</p>
    <pre>flatpak remote-add --if-not-exists outreach \\
  $REPO_URL/outreach.flatpakrepo
flatpak install --user outreach $APP_ID</pre>
    <p>Oder 1-Klick-Installation über die Referenzdatei:</p>
    <pre><a href="$REPO_URL/outreach.flatpakref">$REPO_URL/outreach.flatpakref</a></pre>
  </div>

  <div class="box">
    <h2>Links</h2>
    <ul>
      <li><a href="$REPO_URL/outreach.flatpakrepo">outreach.flatpakrepo</a> – Repo als Quelle hinzufügen</li>
      <li><a href="$REPO_URL/outreach.flatpakref">outreach.flatpakref</a> – Install-Referenz</li>
      <li><a href="https://github.com/dspangenberg/outreach">Quellcode auf GitHub</a></li>
    </ul>
  </div>
  <p class="meta" style="text-align:center">GPG-signiertes, selbst-gehostetes Flatpak-Repository.</p>
</main>
</body>
</html>
EOF

# --- 4. Repo signieren (generiert signierte `summary`) ---------------------
echo "==> Repo signieren"
flatpak build-update-repo "$OUT_REPO" \
    --gpg-sign="$SIGNING_KEY" --gpg-homedir="$GTKX_GPG_HOMEDIR" \
    --generate-static-deltas \
    --prune --prune-depth=3

echo ""
echo "==> Fertig. Veröffentlichtes Repo: $OUT_REPO"
echo ""
echo "Hosten: Inhalt von '$OUT_REPO' (inkl. config, summary, summaries/,"
echo "objects/, keyring, outreach.flatpakrepo, outreach.flatpakref, index.html,"
echo "icons/) auf einen statischen HTTP-Server legen, z. B.:"
echo "  rsync -av release/repo/ meinserver:/var/www/outreach/repo/"
echo ""
echo "Einbinden als externe Quelle (Schlüssel wird automatisch importiert):"
echo "  flatpak remote-add --if-not-exists outreach $REPO_URL/outreach.flatpakrepo"
echo "  flatpak install --user outreach $APP_ID"
echo ""
echo "Oder 1-Klick-Install der App über die .flatpakref-Datei:"
echo "  flatpak install --from $REPO_URL/outreach.flatpakref"
echo ""
echo "Für GNOME Software: die .flatpakrepo-Datei bereitstellen (siehe"
echo "RELEASING.md, Abschnitt 'Eigene Quelle in Software einrichten')."
