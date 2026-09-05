import { t } from '@gtkx/i18n'
import { AdwAboutDialog } from '@gtkx/jsx/adw'

export const About = ({ onClose }: { onClose: () => void }) => (
  <AdwAboutDialog
    onClosed={onClose}
    applicationName="Reach Out"
    applicationIcon="de.twiceware.reachout"
    version="0.0.1"
    developerName="Danny Spangenberg"
    website="https://dspangenberg.github.io/reachout"
    issueUrl="https://github.com/dspangenberg/reachout/issues"
    copyright="© 2026 Danny Spangenberg"
    license={
      'This application is licensed under the European Union Public Licence (EUPL), version 1.2.\n' +
      '\n' +
      'Licensed under the EUPL.\n\n' +
      'Full licence text: <a href="https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12">' +
      'https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12</a>'
    }
    developers={['Danny Spangenberg', t('GTKX Contributors') as string]}
  />
)
