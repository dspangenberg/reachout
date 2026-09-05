import * as Gtk from '@gtkx/gi/gtk'
import { t } from '@gtkx/i18n'
import { rootElement } from '@gtkx/react'
import { render, screen, userEvent } from '@gtkx/testing'
import { describe, expect, it } from 'vitest'
import { App } from '../src/app.js'
import { useStore } from '../src/store/index.js'

describe('Tasks in German', () => {
  it('renders translated controls and starter content', async () => {
    await render(<App />, { container: rootElement })

    expect(await screen.findByRole(Gtk.AccessibleRole.BUTTON, { name: 'Neue Aufgabe (Strg+N)' })).toBeDefined()

    expect(await screen.findByRole(Gtk.AccessibleRole.LIST_ITEM, { name: 'Pflanzen gießen' })).toBeDefined()
  })

  it('uses German interpolation and plural forms', async () => {
    const due = new Date()
    due.setDate(due.getDate() - 2)
    const tasks = useStore.getState().tasks.map(task => (task.id === 't2' ? { ...task, due: due.toISOString() } : task))
    useStore.setState({ tasks })

    await render(<App />, { container: rootElement })

    expect(await screen.findByText('Vor 2 Tagen')).toHaveTextContent('Vor 2 Tagen')

    await userEvent.click(screen.getByRole(Gtk.AccessibleRole.BUTTON, { name: 'Suchen (Strg+F)' }))
    const search = await screen.findByPlaceholderText('Aufgaben suchen…')
    await userEvent.type(search, 'introuvable')

    expect(await screen.findByText('Keine Aufgaben entsprechen „introuvable“')).toHaveTextContent(
      'Keine Aufgaben entsprechen „introuvable“'
    )
  })

  it('rejects a plural count gettext cannot represent', () => {
    expect(() =>
      t('{{count}} day ago', {
        count: 1.5,
        defaultValue_one: '{{count}} day ago',
        defaultValue_other: '{{count}} days ago'
      })
    ).toThrow()
  })
})
