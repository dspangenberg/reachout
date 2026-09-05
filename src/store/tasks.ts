import type { StateCreator } from 'zustand'
import type { Task } from '../types.js'
import { deleteTask, upsertTask } from './data/tasks.js'
import type { Store } from './index.js'

export type TasksSlice = {
  tasks: Task[]
  addTask: (listId: string, title: string) => string | null
  setDone: (id: string, done: boolean) => void
  setImportant: (id: string, important: boolean) => void
  updateTask: (id: string, fields: Partial<Pick<Task, 'title' | 'notes' | 'due' | 'listId'>>) => void
  moveToTrash: (id: string) => void
  restore: (id: string) => void
  deleteForever: (id: string) => void
  reorder: (draggedId: string, targetId: string) => void
}

const patch = (tasks: Task[], id: string, fields: Partial<Task>): Task[] =>
  tasks.map(task => (task.id === id ? { ...task, ...fields } : task))

const findTask = (tasks: Task[], id: string): Task | undefined => tasks.find(task => task.id === id)

export const createTasksSlice: StateCreator<Store, [], [], TasksSlice> = (set, get) => ({
  tasks: [],
  addTask: (listId, title) => {
    const trimmed = title.trim()
    if (trimmed === '') return null
    const id = crypto.randomUUID()
    const task: Task = {
      id,
      listId,
      title: trimmed,
      notes: '',
      done: false,
      important: false,
      deleted: false,
      due: null,
      position: get().tasks.length,
      createdAt: new Date().toISOString(),
      completedAt: null
    }
    upsertTask(task)
    set(state => ({ tasks: [...state.tasks, task] }))
    return id
  },
  setDone: (id, done) => {
    const task = findTask(get().tasks, id)
    if (task === undefined) return
    const completedAt = done ? new Date().toISOString() : null
    upsertTask({ ...task, done, completedAt })
    set(state => ({
      tasks: patch(state.tasks, id, { done, completedAt })
    }))
  },
  setImportant: (id, important) => {
    const task = findTask(get().tasks, id)
    if (task === undefined) return
    upsertTask({ ...task, important })
    set(state => ({ tasks: patch(state.tasks, id, { important }) }))
  },
  updateTask: (id, fields) => {
    const task = findTask(get().tasks, id)
    if (task === undefined) return
    upsertTask({ ...task, ...fields })
    set(state => ({ tasks: patch(state.tasks, id, fields) }))
  },
  moveToTrash: id => {
    const task = findTask(get().tasks, id)
    if (task === undefined) return
    upsertTask({ ...task, deleted: true })
    set(state => ({ tasks: patch(state.tasks, id, { deleted: true }) }))
  },
  restore: id => {
    const task = findTask(get().tasks, id)
    if (task === undefined) return
    upsertTask({ ...task, deleted: false })
    set(state => ({ tasks: patch(state.tasks, id, { deleted: false }) }))
  },
  deleteForever: id => {
    deleteTask(id)
    set(state => ({ tasks: state.tasks.filter(task => task.id !== id) }))
  },
  reorder: (draggedId, targetId) => {
    set(state => {
      const tasks = [...state.tasks]
      const from = tasks.findIndex(task => task.id === draggedId)
      const to = tasks.findIndex(task => task.id === targetId)
      if (from < 0 || to < 0 || from === to) return {}
      const [moved] = tasks.splice(from, 1)
      if (moved === undefined) return {}
      tasks.splice(to, 0, moved)
      const reordered = tasks.map((task, index) => ({ ...task, position: index }))
      for (const task of reordered) upsertTask(task)
      return { tasks: reordered }
    })
  }
})
