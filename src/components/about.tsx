import { t } from "@gtkx/i18n";
import { AdwAboutDialog } from "@gtkx/jsx/adw";

export const About = ({ onClose }: { onClose: () => void }) => (
    <AdwAboutDialog
        onClosed={onClose}
        applicationName="Reach Out"
        applicationIcon="de.twiceware.reachout"
        version="1.0.0"
        developerName={t("Contact manager") as unknown as string}
        website="https://gtkx.dev"
        issueUrl="https://github.com/gtkx-org/gtkx/issues"
        copyright="© 2026 Danny Spangenberg"
        license={
            "This application is licensed under the European Union Public Licence (EUPL), version 1.2.\n" +
            "\n" +
            "Licensed under the EUPL.\n\n" +
            "Full licence text: <a href=\"https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12\">" +
            "https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12</a>"
        }
        developers={["Danny Spangenberg", t("GTKX Contributors") as string]}
    />
);