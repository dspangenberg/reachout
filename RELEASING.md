# Veröffentlichung (Flatpak)

Github-Projekt: `gCRM`, App-ID `de.twiceware.gcrm`.

Dieses Dokument erklärt, wie ein Flatpak-Release veröffentlicht wird und wie
die Lokalisierungen dabei funktionieren. Es gibt **eine zentrale Regel**:

> **Hoste das Repo, nicht das einzelne `.flatpak`-Bundle.**

## Warum diese Regel?

`gtkx deploy` legt bei einer Flatpak-App die Übersetzungen NICHT direkt in die
App. Flatpak verschiebt `share/locale` beim Build automatisch in eine eigene
Erweiterung:

    de.twiceware.gcrm/x86_64/stable                    (die App)
    de.twiceware.gcrm.Locale/x86_64/stable             (Übersetzungen: de, fr, …)

Das einzelne, per `flatpak build-bundle` erzeugte `.flatpak` enthält nur den
App-Ref — die Locale-Erweiterung fehlt darin. Ein aus dem Bundle installierter
Flatpak rendert deshalb immer auf Englisch (gettext findet keinen `.mo`).

Erst die Installation **aus dem Repo** bringt App **und** Locale-Erweiterung;
Flatpak wählt dabei automatisch die Hauptsprache des Nutzersystems aus (z. B.
`de_DE.UTF-8` → `de`-Unter-Erweiterung). Genau dafür ist die Erweiterung da —
es gibt keinen gtkx-Config-Schalter, das ist reine Flatpak-Logik.

> Nur Flatpak spaltet Übersetzungen so ab. Bei `deb`/`rpm`/AppImage (ebenfalls
> in `gtkx.config.ts` aktiviert) landen die `.mo` unter `/usr/share/locale`
> und sind direkt einsatzbereit.

## Lokal testen (offline)

`./deploy.sh` baut und installiert aus dem lokalen Repo (siehe Skript):
installiert wahlweise systemweit (`--system`) oder — für die andere Route —
`--user`.

```sh
./deploy.sh
flatpak run de.twiceware.gcrm
```

## Veröffentlichen

1. **Bauen**
   ```sh
   npx gtkx deploy
   ```
   erzeugt das staatliche Repo unter `build/targets/flatpak/repo`.

2. **Repo hosten.** Lade den Inhalt von `build/targets/flatpak/repo` auf einen
   Server (wichtig: `summary`, `summary.idx` und das `config`-Verzeichnis
   mitliefern). Üblich bei GitHub: das Repo als Artefakt eines Release
   hochladen und als zip von der Release-Seite bereitstellen.

   ```sh
   # lokal: als Remo verfügbar machen
   flatpak remote-add --user rel gtkx https://example.com/repo
   ```

3. **`.flatpakrepo`-Datei** bereitstellen (damit GNOME-Software/KDE Discover
   das Repo über die Plus-Schaltfläche anbinden kann):
   ```
   [Flatpak Repo]
   Title=gCRM (CRM fur Gnome)
   Url=https://example.com/repo
   Homepage=https://gtkx.dev
   Icon=https://example.com/icon.png
   Description=Aufgabenverwaltung gCRM fur GNOME
   ```
   Vor dem Verteilen signieren (sonst lehnen Client-Installationen das
   `--no-gpg-verify`-ausgehendes unsignierte Repo ggf. ab) — siehe
   `flatpak build-sign`.

4. **Nutzer installieren.** Flatpak zieht App + passende Locale-Erweiterung
   automatisch:
   ```sh
   flatpak install --user https://example.com/repo.flatpakrepo de.twiceware.gcrm
   ```

## Übersetzungen verwalten

- Quellen: `po/*.po` (de, fr, …). `gtkx codegen < built bei `gtkx deploy` die
  `.mo` und packt sie in die Locale-Erweiterung.
- Neue Sprache: neue `po/<code>.po` anlegen; der Build übernimmt sie.
- Die `AppStore`-Metadaten (Name/Summary je Sprache im AppCenter) stammen aus
  denselben `.po`-Dateien (via `msgfmt --desktop` / `--xml`).

## Lizenz

Der Projektcode (diese Tasks-App, `src/`, Skripte) ist unter
**EUPL-1.2** veröffentlicht (`"license": "EUPL-1.2"` in `package.json`,
Volltext in `LICENSE`). EUPL-1.2 ist OSI- und GPL-kompatibel und damit auch
mit GTKs **GNU LGPL-2.1+** vereinbar.

Die Lizenz gilt **nur für den eigenen Code** — Frameworks und Bibliotheken
(GTK/GLib, Adw, das `gtkx.node`-Runtime-Addon sowie alle npm-Abhängigkeiten)
bleiben unter ihren eigenen Lizenzen (überwiegend LGPL/MIT/Apache). Diese
müssen unverändert mitgeliefert werden; gtkx erzeugt dafür automatisch die
`THIRD-PARTY-NOTICES` im Paket. Diese Datei und die Lizenzen darin werden
**nicht** durch die Umstellung auf EUPL angetastet.

Ein Wechsel der Projektlizenz ändert nichts daran, wie GTK eingebettet wird:
Die App linkt zur Laufzeit gegen die GTK-Library (via `gtkx.node`); die
LGPL-Pflichten (Lizenztext mitliefern, Möglichkeit zum Neulink) bleiben
gewahrt. `LICENSE.mpl-2.bak` enthält die zuvor verwendete MPL-2.0 zum
Vergleich.