import type { StateCreator } from 'zustand'
import type { DialogKind, Filter, Section } from '../types.js'
import type { Store } from './index.js'

export type UiSlice = {
  collapsed: boolean
  filter: Filter
  searchMode: boolean
  searchQuery: string
  dialog: DialogKind
  taskToDelete: string | null
  setSection: (section: Section) => void
  section: Section
  setCollapsed: (collapsed: boolean) => void
  setFilter: (filter: Filter) => void
  setSearchMode: (searchMode: boolean) => void
  setSearchQuery: (searchQuery: string) => void
  resetSearch: () => void
  showDialog: (dialog: DialogKind) => void
  askDeleteTask: (taskToDelete: string | null) => void
}

export const createUiSlice: StateCreator<Store, [], [], UiSlice> = set => ({
  collapsed: false,
  filter: 'all',
  searchMode: false,
  searchQuery: '',
  dialog: 'none',
  taskToDelete: null,
  section: 'tasks',
  setSection: section => set({ section }),
  setCollapsed: collapsed => set({ collapsed }),
  setFilter: filter => set({ filter }),
  setSearchMode: searchMode => set({ searchMode }),
  setSearchQuery: searchQuery => set({ searchQuery }),
  resetSearch: () => set({ searchMode: false, searchQuery: '' }),
  showDialog: dialog => set({ dialog }),
  askDeleteTask: taskToDelete => set({ taskToDelete, dialog: taskToDelete === null ? 'none' : 'delete-task' })
})
