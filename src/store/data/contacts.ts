import { eq } from 'drizzle-orm'
import type { ContactWithCompany } from '../../types.js'
import { type ContactRow, contacts } from '../schema.js'
import { db } from '../storage.js'

export const loadContacts = (): ContactWithCompany[] => db.query.contacts.findMany({ with: { company: true } }).sync()

export const loadCompany = (id: string): ContactWithCompany | null =>
  db.query.contacts.findFirst({ where: { id }, with: { company: true } }).sync() ?? null

export const upsertContact = (contact: ContactRow): void => {
  db.insert(contacts)
    .values(contact)
    .onConflictDoUpdate({
      target: contacts.id,
      set: contact
    })
    .run()
}

export const deleteContact = (id: string): void => {
  db.delete(contacts).where(eq(contacts.id, id)).run()
}
