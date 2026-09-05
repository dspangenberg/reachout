import * as Gtk from '@gtkx/gi/gtk'
import { t } from '@gtkx/i18n'
import { AdwActionRow } from '@gtkx/jsx/adw'
import { GtkBox, GtkImage, GtkListBox, GtkSeparator } from '@gtkx/jsx/gtk'
import type { Section } from '../types.js'

const SECTIONS: { section: Section; label: string; icon: string }[] = [
  { section: 'contacts', label: t('Contacts'), icon: 'contact-book-symbolic' },
  { section: 'projects', label: t('Projects'), icon: 'kanban-symbolic' },
  { section: 'tasks', label: t('Tasks'), icon: 'task-daily-01-symbolic' }
]

export type SectionNavProps = {
  current: Section
  onSelect: (section: Section) => void
}

export const SectionNav = ({ current, onSelect }: SectionNavProps) => {
  const activeIndex = SECTIONS.findIndex(({ section }) => section === current)

  return (
    <GtkBox orientation={Gtk.Orientation.VERTICAL} cssClasses={['section-nav']}>
      <GtkSeparator />
      <GtkListBox
        cssClasses={['navigation-sidebar']}
        selectedIndex={activeIndex}
        onRowSelected={row => {
          if (!row) return
          const entry = SECTIONS[row.getIndex()]
          if (entry) onSelect(entry.section)
        }}
      >
        {SECTIONS.map(({ section, label, icon }) => (
          <AdwActionRow key={section} title={label} prefix={<GtkImage iconName={icon} />} />
        ))}
      </GtkListBox>
    </GtkBox>
  )
}
