import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'
import { DatabaseSync } from 'node:sqlite'
import { drizzle } from 'drizzle-orm/node-sqlite'
import { migrate } from 'drizzle-orm/node-sqlite/migrator'
import { migrations } from './migrations.js'
import { contactsRelations } from './schema.js'

const directory = join(
  process.env.XDG_DATA_HOME ?? join(homedir(), '.local', 'share'),
  'de.twiceware.reachout',
  import.meta.env.DEV ? 'dev' : ''
)
const dbFile = join(directory, 'tasks.db')
export const legacyFile = join(directory, 'tasks.json')
const migrationsDir = join(directory, 'drizzle')

const ensureMigrationsOnDisk = (): void => {
  for (const { name, sql } of migrations) {
    const targetDir = join(migrationsDir, name)
    mkdirSync(targetDir, { recursive: true })
    const migrationFile = join(targetDir, 'migration.sql')
    if (!existsSync(migrationFile) || readFileSync(migrationFile, 'utf8') !== sql) {
      writeFileSync(migrationFile, sql)
    }
  }
}

mkdirSync(directory, { recursive: true })

const sqlite = new DatabaseSync(dbFile)
export const db = drizzle({ client: sqlite, relations: contactsRelations })
ensureMigrationsOnDisk()
migrate(db, { migrationsFolder: migrationsDir })
