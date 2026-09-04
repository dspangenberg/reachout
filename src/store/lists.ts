import type { StateCreator } from "zustand";
import type { TaskList } from "../types.js";
import type { Store } from "./index.js";
import { upsertList } from "./storage.js";

export type ListsSlice = {
    lists: TaskList[];
    addList: (name: string, color: string) => void;
};

export const createListsSlice: StateCreator<Store, [], [], ListsSlice> = (set) => ({
    lists: [],
    addList: (name, color) => {
        const trimmed = name.trim();
        if (trimmed === "") return;
        const list: TaskList = { id: crypto.randomUUID(), name: trimmed, color };
        upsertList(list);
        set((state) => ({ lists: [...state.lists, list] }));
    },
});
