import { defineRelations } from 'drizzle-orm'
import { type AnySQLiteColumn, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const lists = sqliteTable('lists', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  color: text('color').notNull()
})

export const tasks = sqliteTable('tasks', {
  id: text('id').primaryKey(),
  listId: text('listId').notNull(),
  title: text('title').notNull(),
  notes: text('notes').notNull(),
  done: integer('done', { mode: 'boolean' }).notNull().default(false),
  important: integer('important', { mode: 'boolean' }).notNull().default(false),
  deleted: integer('deleted', { mode: 'boolean' }).notNull().default(false),
  due: text('due'),
  position: integer('position').notNull().default(0),
  createdAt: text('createdAt').notNull(),
  completedAt: text('completedAt')
})

export const contacts = sqliteTable('contacts', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  firstName: text('firstName'),
  companyId: text('companyId').references((): AnySQLiteColumn => contacts.id)
})

export const contactsRelations = defineRelations({ contacts }, r => ({
  contacts: {
    company: r.one.contacts({
      from: r.contacts.companyId,
      to: r.contacts.id
    })
  }
}))

export type ContactRow = typeof contacts.$inferSelect
