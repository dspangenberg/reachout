import type { TaskList } from '../../types.js'
import { lists } from '../schema.js'
import { db } from '../storage.js'

export const loadLists = (): TaskList[] =>
  db
    .select()
    .from(lists)
    .all()
    .map(row => ({
      id: row.id,
      name: row.name,
      color: row.color
    }))

export const replaceAllLists = (input: TaskList[]): void => {
  db.delete(lists).run()
  if (input.length > 0) db.insert(lists).values(input).run()
}

export const upsertList = (list: TaskList): void => {
  db.insert(lists)
    .values(list)
    .onConflictDoUpdate({
      target: lists.id,
      set: list
    })
    .run()
}
