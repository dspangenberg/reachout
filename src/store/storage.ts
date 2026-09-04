import { DatabaseSync } from "node:sqlite";
import { homedir } from "node:os";
import { join } from "node:path";
import { mkdirSync, readFileSync, renameSync, rmSync } from "node:fs";
import { drizzle } from "drizzle-orm/node-sqlite";
import { eq } from "drizzle-orm";
import type { Task, TaskList } from "../types.js";
import { lists, tasks } from "./schema.js";

const directory = join(process.env.XDG_DATA_HOME ?? join(homedir(), ".local", "share"), "de.twiceware.reachout");
const dbFile = join(directory, "tasks.db");
const legacyFile = join(directory, "tasks.json");

mkdirSync(directory, { recursive: true });

const sqlite = new DatabaseSync(dbFile);
sqlite.exec(`
    CREATE TABLE IF NOT EXISTS lists (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        color TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS tasks (
        id TEXT PRIMARY KEY,
        listId TEXT NOT NULL,
        title TEXT NOT NULL,
        notes TEXT NOT NULL,
        done INTEGER NOT NULL DEFAULT 0,
        important INTEGER NOT NULL DEFAULT 0,
        deleted INTEGER NOT NULL DEFAULT 0,
        due TEXT,
        position INTEGER NOT NULL DEFAULT 0,
        createdAt TEXT NOT NULL,
        completedAt TEXT
    );
`);

export const db = drizzle({ client: sqlite });

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
    completedAt: task.completedAt,
});

export const loadLists = (): TaskList[] =>
    db.select().from(lists).all().map((row) => ({
        id: row.id,
        name: row.name,
        color: row.color,
    }));

export const loadTasks = (): Task[] => db.select().from(tasks).all();

export const replaceAllLists = (input: TaskList[]): void => {
    db.delete(lists).run();
    if (input.length > 0) db.insert(lists).values(input).run();
};

export const replaceAllTasks = (input: Task[]): void => {
    db.delete(tasks).run();
    if (input.length > 0) db.insert(tasks).values(input.map(taskToRow)).run();
};

export const replaceAll = (inputLists: TaskList[], inputTasks: Task[]): void => {
    db.transaction((tx) => {
        tx.delete(tasks).run();
        if (inputTasks.length > 0) tx.insert(tasks).values(inputTasks.map(taskToRow)).run();
        tx.delete(lists).run();
        if (inputLists.length > 0) tx.insert(lists).values(inputLists).run();
    });
};

export const upsertTask = (task: Task): void => {
    db.insert(tasks).values(taskToRow(task)).onConflictDoUpdate({
        target: tasks.id,
        set: taskToRow(task),
    }).run();
};

export const deleteTask = (id: string): void => {
    db.delete(tasks).where(eq(tasks.id, id)).run();
};

export const upsertList = (list: TaskList): void => {
    db.insert(lists).values(list).onConflictDoUpdate({
        target: lists.id,
        set: list,
    }).run();
};

export const resetDatabase = (inputLists: TaskList[], inputTasks: Task[]): void => {
    replaceAll(inputLists, inputTasks);
};

export const importLegacyJson = (seedLists: TaskList[], seedTasks: Task[]): void => {
    const existing = loadTasks();
    if (existing.length > 0) return;
    try {
        const raw = readFileSync(legacyFile, "utf8");
        const parsed = JSON.parse(raw) as { lists?: TaskList[]; tasks?: Task[] };
        replaceAll(parsed.lists ?? seedLists, parsed.tasks ?? seedTasks);
    } catch {
        replaceAll(seedLists, seedTasks);
    }
    try {
        renameSync(legacyFile, `${legacyFile}.migrated`);
    } catch {
        rmSync(legacyFile, { force: true });
    }
};
