import { defineConfig } from '@gtkx/config'

export default defineConfig({
  applicationId: 'de.twiceware.reachout',
  applicationIcon: 'data/icons',
  deploy: {
    name: 'Reach Out',
    genericName: 'Contact manager',
    binaryName: 'reachout',
    summary: 'Manage your tasks and to-dos',
    description: [
      'A task manager built with GTKX, demonstrating how to build React-based GTK4 and Adwaita ' +
        'desktop applications.',
      'It shows an adaptive sidebar layout, boxed lists, a task editor, GSettings-backed preferences, ' +
        'undo toasts, drag-to-reorder, desktop notifications, and local JSON persistence.'
    ],
    categories: ['Office', 'ProjectManagement'],
    keywords: ['Task', 'Tasks', 'Todo', 'To-do', 'Checklist'],
    developer: { id: 'de.twiceware', name: 'Danny Spangenberg', email: 'danny.spangenberg@twiceware.de' },
    homepage: 'https://dspangenberg.github.io/reachout',
    urls: {
      bugtracker: 'https://github.com/dspangenberg/reachout/issues',
      'vcs-browser': 'https://dspangenberg.github.io/reachout/'
    },
    screenshots: [
      { file: 'assets/screenshot.png', caption: 'Browsing task lists in the sidebar', isDefault: true },
      { file: 'assets/screenshot-editor.png', caption: 'Editing a task' }
    ],
    releases: [
      { version: '0.0.1', date: '2026-07-13', notes: ['Initial release.'] },
      {
        version: '0.0.2',
        date: '2026-09-05',
        notes: [
          'Persist data to a local SQLite database (Drizzle ORM) with automatic migrations.',
          'Add contacts with company relationships.',
          'Separate development and production databases.',
          'Split the data layer into per-domain repositories and Zustand slices.',
          'Enforce standard JavaScript style via Biome.'
        ]
      }
    ],
    branding: { light: '#3584e4', dark: '#1a5fb4' },
    contentRating: {},
    isDbusActivatable: true,
    desktopEntry: { 'X-GNOME-UsesNotifications': 'true' },
    screenshotBaseUrl: 'https://raw.githubusercontent.com/gtkx-org/gtkx/main/examples/tutorial',
    targets: ['flatpak', 'deb', 'rpm', 'appimage'],
    flatpak: { shouldUseRofilesFuse: false }
  }
})
