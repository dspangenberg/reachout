import { beforeEach, describe, expect, it } from 'vitest'
import { deleteContact, loadCompany, loadContacts } from '../src/store/data/contacts.js'
import { useStore } from '../src/store/index.js'

describe('ContactsSlice', () => {
  beforeEach(() => {
    const rows = loadContacts()
    for (const child of rows.filter(c => c.companyId)) deleteContact(child.id)
    for (const row of rows) deleteContact(row.id)
    useStore.setState({ contacts: [] })
  })

  it('adds a contact and persists it', () => {
    const id = useStore.getState().addContact('ACME', null, null)
    expect(id).not.toBe('')

    expect(useStore.getState().contacts).toHaveLength(1)
    expect(loadContacts().map(c => c.id)).toContain(id)
  })

  it('attaches a company and loads it through the relation', () => {
    const companyId = useStore.getState().addContact('ACME')
    const personId = useStore.getState().addContact('John Doe', 'John')
    useStore.getState().setCompany(personId, companyId)

    const loaded = loadContacts()
    const john = loaded.find(c => c.id === personId)
    expect(john?.company?.id).toBe(companyId)

    expect(loadCompany(personId)?.company?.name).toBe('ACME')
  })

  it('removes a contact from state and database', () => {
    const id = useStore.getState().addContact('Ghost')

    useStore.getState().deleteContact(id)

    expect(useStore.getState().contacts).toHaveLength(0)
    expect(loadContacts().find(c => c.id === id)).toBeUndefined()
  })
})
