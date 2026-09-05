import { readFileSync, renameSync, rmSync } from 'node:fs'
import type { Task, TaskList } from '../../types.js'
import { db, legacyFile } from '../storage.js'
import { replaceAllLists } from './lists.js'
import { loadTasks, replaceAllTasks } from './tasks.js'

export const replaceAll = (inputLists: TaskList[], inputTasks: Task[]): void => {
  db.transaction(() => {
    replaceAllTasks(inputTasks)
    replaceAllLists(inputLists)
  })
}

export const resetDatabase = (inputLists: TaskList[], inputTasks: Task[]): void => replaceAll(inputLists, inputTasks)

export const importLegacyJson = (seedLists: TaskList[], seedTasks: Task[]): void => {
  const existing = loadTasks()
  if (existing.length > 0) return
  try {
    const raw = readFileSync(legacyFile, 'utf8')
    const parsed = JSON.parse(raw) as { lists?: TaskList[]; tasks?: Task[] }
    replaceAll(parsed.lists ?? seedLists, parsed.tasks ?? seedTasks)
  } catch {
    replaceAll(seedLists, seedTasks)
  }
  try {
    renameSync(legacyFile, `${legacyFile}.migrated`)
  } catch {
    rmSync(legacyFile, { force: true })
  }
}
