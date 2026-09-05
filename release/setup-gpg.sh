#!/usr/bin/env sh
set -eu

# Erstellt oder importiert den GPG-Schlüssel, mit dem die eigene Flatpak-Quelle
# signiert wird, und legt die Key-ID in `release/.signing-key` ab.
#
# Die `.flatpakrepo`-Quelle wird damit authentisch (Nutzer sehen GPG-Fingerprint
# statt `--no-gpg-verify`). Ohne Signatur verweigern GNOME-Software/`flatpak
# install` eine Remote von Drittanbietern standardmäßig.
#
# Usage:
#   ./release/setup-gpg.sh                     # interaktiv neuen Key erzeugen
#   ./release/setup-gpg.sh <keyid-or-email>    # vorhandenen Key verwenden
#
# Requires: gpg, pass
#
# WICHTIG: Der so erzeugte private Key muss gesichert werden. Exporte ihn z. B.
# nach dem Erzeugen mit:
#   gpg --export-secret-keys --armor <KEYID> > ~/outreach-signing-key.asc
# Bewahre die Datei offline auf; verlierst du den privaten Key, können spätere
# Updates der Quelle nicht mehr signiert werden.

CONF_DIR="$(cd "$(dirname "$0")" && pwd)"
KEY_FILE="$CONF_DIR/.signing-key"
KEY_HOMEDIR="${GTKX_GPG_HOMEDIR:-$HOME/.gnupg}"

ensure_key() {
    # 1) explizit übergebener Key
    if [ "${1:-}" != "" ]; then
        gpg --homedir "$KEY_HOMEDIR" --list-keys "$1" >/dev/null 2>&1 \
            || { echo "error: key '$1' not found in $KEY_HOMEDIR" >&2; exit 1; }
        KEYID="$1"
        return
    fi
    # 2) zuvor gespeicherte Key-ID
    if [ -f "$KEY_FILE" ]; then
        KEYID="$(cat "$KEY_FILE")"
        gpg --homedir "$KEY_HOMEDIR" --list-keys "$KEYID" >/dev/null 2>&1 \
            || { echo "error: saved key '$KEYID' from $KEY_FILE is not present" >&2; exit 1; }
        return
    fi
    # 3) keinen Key → neuen erzeugen
    echo "No signing key configured. Creating a new GPG key (no passphrase)…"
    mkdir -p "$KEY_HOMEDIR"
    KEYID=$(gpg --homedir "$KEY_HOMEDIR" --batch --passphrase '' \
        --quick-gen-key "Outreach Release <danny.spangenberg@twiceware.de>" rsa4096 sign 0 \
        | grep -o '[0-9A-F]\{40\}' | head -1)
    [ -n "$KEYID" ] || { echo "error: could not determine new key id" >&2; exit 1; }
}

case "${1:-}" in
    --help|-h|--*) echo "Usage: $0 [keyid-or-email]" >&2; exit 1 ;;
esac

KEYID=""
ensure_key "${1:-}"

# normale Key-ID in Fingerprint auflösen, falls per Email übergeben
FPR=$(gpg --homedir "$KEY_HOMEDIR" --with-colons --list-keys "$KEYID" \
    | awk -F: '$1=="fpr"{print $10; exit}')
[ -n "$FPR" ] || { echo "error: could not resolve fingerprint for '$KEYID'" >&2; exit 1; }

printf '%s\n' "$FPR" > "$KEY_FILE"
echo "Signing key saved to $KEY_FILE"
echo "  fingerprint: $FPR"
echo ""
echo "Exportieren und sichern (einmalig, offline aufbewahren):"
echo "  gpg --export-secret-keys --armor $FPR > ~/outreach-signing-key.asc"
