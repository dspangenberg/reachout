import type { StateCreator } from "zustand";
import type { Task } from "../types.js";
import type { Store } from "./index.js";
import { deleteTask, upsertTask } from "./storage.js";

export type TasksSlice = {
    tasks: Task[];
    addTask: (listId: string, title: string) => string | null;
    setDone: (id: string, done: boolean) => void;
    setImportant: (id: string, important: boolean) => void;
    updateTask: (id: string, fields: Partial<Pick<Task, "title" | "notes" | "due" | "listId">>) => void;
    moveToTrash: (id: string) => void;
    restore: (id: string) => void;
    deleteForever: (id: string) => void;
    reorder: (draggedId: string, targetId: string) => void;
};

const patch = (tasks: Task[], id: string, fields: Partial<Task>): Task[] =>
    tasks.map((task) => (task.id === id ? { ...task, ...fields } : task));

export const createTasksSlice: StateCreator<Store, [], [], TasksSlice> = (set, get) => ({
    tasks: [],
    addTask: (listId, title) => {
        const trimmed = title.trim();
        if (trimmed === "") return null;
        const id = crypto.randomUUID();
        const task: Task = {
            id,
            listId,
            title: trimmed,
            notes: "",
            done: false,
            important: false,
            deleted: false,
            due: null,
            position: get().tasks.length,
            createdAt: new Date().toISOString(),
            completedAt: null,
        };
        upsertTask(task);
        set((state) => ({ tasks: [...state.tasks, task] }));
        return id;
    },
    setDone: (id, done) => {
        upsertTask({ ...get().tasks.find((task) => task.id === id)!, done, completedAt: done ? new Date().toISOString() : null });
        set((state) => ({
            tasks: patch(state.tasks, id, { done, completedAt: done ? new Date().toISOString() : null }),
        }));
    },
    setImportant: (id, important) => {
        upsertTask({ ...get().tasks.find((task) => task.id === id)!, important });
        set((state) => ({ tasks: patch(state.tasks, id, { important }) }));
    },
    updateTask: (id, fields) => {
        upsertTask({ ...get().tasks.find((task) => task.id === id)!, ...fields });
        set((state) => ({ tasks: patch(state.tasks, id, fields) }));
    },
    moveToTrash: (id) => {
        upsertTask({ ...get().tasks.find((task) => task.id === id)!, deleted: true });
        set((state) => ({ tasks: patch(state.tasks, id, { deleted: true }) }));
    },
    restore: (id) => {
        upsertTask({ ...get().tasks.find((task) => task.id === id)!, deleted: false });
        set((state) => ({ tasks: patch(state.tasks, id, { deleted: false }) }));
    },
    deleteForever: (id) => {
        deleteTask(id);
        set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) }));
    },
    reorder: (draggedId, targetId) => {
        set((state) => {
            const tasks = [...state.tasks];
            const from = tasks.findIndex((task) => task.id === draggedId);
            const to = tasks.findIndex((task) => task.id === targetId);
            if (from < 0 || to < 0 || from === to) return {};
            const [moved] = tasks.splice(from, 1);
            if (moved === undefined) return {};
            tasks.splice(to, 0, moved);
            const reordered = tasks.map((task, index) => ({ ...task, position: index }));
            for (const task of reordered) upsertTask(task);
            return { tasks: reordered };
        });
    },
});
