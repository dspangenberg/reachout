import * as Gtk from '@gtkx/gi/gtk'
import { AdwHeaderBar, AdwNavigationPage, AdwNavigationSplitView, AdwStatusPage, AdwToolbarView } from '@gtkx/jsx/adw'
import { GtkBox, GtkLabel, GtkListBox, GtkScrolledWindow } from '@gtkx/jsx/gtk'
import type { Section } from '../types.js'
import { MainMenu } from './main-menu.js'
import { SectionNav } from './section-nav.js'

export type PlaceholderSectionProps = {
  section: Section
  title: string
  description: string
  icon: string
  onSelect: (section: Section) => void
}

export const PlaceholderSection = ({ section, title, description, icon, onSelect }: PlaceholderSectionProps) => (
  <AdwNavigationSplitView
    collapsed={false}
    sidebarWidthFraction={0.25}
    minSidebarWidth={220}
    maxSidebarWidth={300}
    sidebar={
      <AdwNavigationPage title={title}>
        <AdwToolbarView
          topBar={
            <AdwHeaderBar
              showTitle={true}
              titleWidget={<GtkLabel cssClasses={['title']} label={title} />}
              end={<MainMenu />}
            />
          }
        >
          <GtkBox orientation={Gtk.Orientation.VERTICAL}>
            <GtkScrolledWindow vexpand>
              <GtkListBox cssClasses={['navigation-sidebar']} />
            </GtkScrolledWindow>
            <SectionNav current={section} onSelect={onSelect} />
          </GtkBox>
        </AdwToolbarView>
      </AdwNavigationPage>
    }
  >
    <AdwNavigationPage title={title}>
      <AdwStatusPage
        iconName={icon}
        title={title}
        description={description}
        valign={Gtk.Align.CENTER}
        halign={Gtk.Align.CENTER}
      />
    </AdwNavigationPage>
  </AdwNavigationSplitView>
)
