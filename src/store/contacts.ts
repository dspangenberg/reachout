import type { StateCreator } from 'zustand'
import type { Contact, ContactWithCompany } from '../types.js'
import { deleteContact, loadCompany, loadContacts, upsertContact } from './data/contacts.js'
import type { Store } from './index.js'

export type ContactsSlice = {
  contacts: ContactWithCompany[]
  loadContacts: () => ContactWithCompany[]
  getCompany: (id: string) => ContactWithCompany | null
  addContact: (name: string, firstName?: string | null, companyId?: string | null) => string
  setCompany: (id: string, companyId: string | null) => void
  deleteContact: (id: string) => void
}

export const createContactsSlice: StateCreator<Store, [], [], ContactsSlice> = (set, get) => ({
  contacts: [],

  loadContacts: () => {
    const contacts = loadContacts()
    set({ contacts })
    return contacts
  },

  getCompany: id => loadCompany(id),

  addContact: (name, firstName = null, companyId = null) => {
    const trimmed = name.trim()
    if (trimmed === '') return ''
    const contact: Contact = {
      id: crypto.randomUUID(),
      name: trimmed,
      firstName,
      companyId
    }
    upsertContact(contact)
    set(state => ({ contacts: [...state.contacts, contact] }))
    return contact.id
  },

  setCompany: (id, companyId) => {
    const contact = get().contacts.find(c => c.id === id)
    if (!contact) return
    upsertContact({ ...contact, companyId })
    set(state => ({
      contacts: state.contacts.map(c => (c.id === id ? { ...c, companyId } : c))
    }))
  },

  deleteContact: id => {
    deleteContact(id)
    set(state => ({ contacts: state.contacts.filter(c => c.id !== id) }))
  }
})
