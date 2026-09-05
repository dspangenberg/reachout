import { eq } from 'drizzle-orm'
import type { Task } from '../../types.js'
import { tasks } from '../schema.js'
import { db } from '../storage.js'

const taskToRow = (task: Task): typeof tasks.$inferInsert => ({
  id: task.id,
  listId: task.listId,
  title: task.title,
  notes: task.notes,
  done: task.done,
  important: task.important,
  deleted: task.deleted,
  due: task.due,
  position: task.position,
  createdAt: task.createdAt,
  completedAt: task.completedAt
})

export const loadTasks = (): Task[] => db.select().from(tasks).all()

export const replaceAllTasks = (input: Task[]): void => {
  db.delete(tasks).run()
  if (input.length > 0) db.insert(tasks).values(input.map(taskToRow)).run()
}

export const upsertTask = (task: Task): void => {
  db.insert(tasks)
    .values(taskToRow(task))
    .onConflictDoUpdate({
      target: tasks.id,
      set: taskToRow(task)
    })
    .run()
}

export const deleteTask = (id: string): void => {
  db.delete(tasks).where(eq(tasks.id, id)).run()
}
