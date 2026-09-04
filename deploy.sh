#!/usr/bin/env sh
set -eu

# Builds the app and installs it into the current user/system as a Flatpak from
# the LOCAL repo (not the single-file bundle).
#
# Why from the repo? The bundle carries only the app ref. Flatpak moves all
# translations into a separate `de.twiceware.gcrm.Locale` extension at build
# time, and that extension is not part of the single-file bundle — so a
# bundle-only install would render the UI in English. Installing from the repo
# makes Flatpak auto-install the Locale extension matching your active locale,
# so the Germany UI works and stays offline.
#
# Usage:
#   ./deploy.sh            # build + install (reinstall)
#   ./deploy.sh --no-build # only install, skip `gtkx deploy`
#
# Requires: gtkx, flatpak. Only the Flatpak target is exercised here.

APP_ID="de.twiceware.gcrm"
BRANCH="stable"
REMOTE="tutorial-local"
REPO_PATH="build/targets/flatpak/repo"

install="true"

case "${1:-}" in
  --no-build) install="false" ;;
  --*|-h|--help)
    echo "Usage: $0 [--no-build]" >&2
    exit 1
    ;;
esac

if [ "$install" = "true" ]; then
  echo "==> gtkx deploy (builds src + po + flatpak repo)"
  npx gtkx deploy
fi

if [ ! -d "$REPO_PATH" ]; then
  echo "error: no repo at $REPO_PATH — run \`gtkx deploy\` first" >&2
  exit 1
fi

echo "==> registering local remote '$REMOTE'"
if ! flatpak remotes --system | grep -q "^${REMOTE}$"; then
  flatpak remote-add --if-not-exists --system "$REMOTE" "$REPO_PATH"
fi
flatpak remote-modify --system "$REMOTE" --no-gpg-verify

echo "==> installing $APP_ID from $REMOTE (app + locale extension)"
flatpak install --system --assumeyes "$REMOTE" "$APP_ID"

echo "==> install done. Launch with:"
echo "    flatpak run $APP_ID"