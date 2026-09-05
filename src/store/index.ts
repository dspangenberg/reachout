import { create } from 'zustand'
import type { Task, TaskList } from '../types.js'
import { type ContactsSlice, createContactsSlice } from './contacts.js'
import { loadContacts } from './data/contacts.js'
import { loadLists } from './data/lists.js'
import { importLegacyJson } from './data/seed.js'
import { loadTasks } from './data/tasks.js'
import { createListsSlice, type ListsSlice } from './lists.js'
import { seedLists, seedTasks } from './seed.js'
import { createTasksSlice, type TasksSlice } from './tasks.js'
import { createUiSlice, type UiSlice } from './ui.js'

export type Store = TasksSlice & ListsSlice & UiSlice & ContactsSlice

const isEmpty = (lists: TaskList[], tasks: Task[]): boolean => lists.length === 0 && tasks.length === 0

const initialLists = loadLists()
const initialTasks = loadTasks()

if (isEmpty(initialLists, initialTasks)) {
  importLegacyJson(seedLists, seedTasks)
}

export const useStore = create<Store>((...a) => ({
  ...createTasksSlice(...a),
  ...createListsSlice(...a),
  ...createUiSlice(...a),
  ...createContactsSlice(...a)
}))

useStore.setState({ lists: loadLists(), tasks: loadTasks(), contacts: loadContacts() })
