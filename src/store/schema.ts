import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const lists = sqliteTable("lists", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    color: text("color").notNull(),
});

export const tasks = sqliteTable("tasks", {
    id: text("id").primaryKey(),
    listId: text("listId").notNull(),
    title: text("title").notNull(),
    notes: text("notes").notNull(),
    done: integer("done", { mode: "boolean" }).notNull().default(false),
    important: integer("important", { mode: "boolean" }).notNull().default(false),
    deleted: integer("deleted", { mode: "boolean" }).notNull().default(false),
    due: text("due"),
    position: integer("position").notNull().default(0),
    createdAt: text("createdAt").notNull(),
    completedAt: text("completedAt"),
});
