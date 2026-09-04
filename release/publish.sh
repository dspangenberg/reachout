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

APP_ID="de.twiceware.reachout"
BRANCH="stable"
OUT_REPO="release/repo"
BUILD_DIR="build/targets/flatpak/build"

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
    "$BUILD_DIR" "$MANIFEST"

# --- 4. Repo signieren (generiert signierte `summary`) ---------------------
echo "==> Repo signieren"
flatpak build-update-repo --repo="$OUT_REPO" \
    --gpg-sign="$SIGNING_KEY" --gpg-homedir="$GTKX_GPG_HOMEDIR" \
    --generate-static-deltas \
    --prune --prune-depth=3

echo ""
echo "==> Fertig. Veröffentlichtes Repo: $OUT_REPO"
echo ""
echo "Hosten: Inhalt von '$OUT_REPO' (inkl. config, summary, summaries/,"
echo "objects/, keyring) auf einen statischen HTTP-Server legen, z. B.:"
echo "  rsync -av release/repo/ meinserver:/var/www/reachout/repo/"
echo ""
echo "Einbinden als externe Quelle:"
echo "  flatpak remote-add --user reachout https://DEINE-DOMAIN/repo"
echo "  flatpak install --user reachout $APP_ID"
echo ""
echo "Für GNOME Software: eine \`.flatpakrepo\`-Datei bereitstellen (siehe"
echo "RELEASING.md, Abschnitt 'Eigene Quelle in Software einrichten')."
