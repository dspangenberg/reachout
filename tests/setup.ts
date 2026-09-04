import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, beforeEach } from "vitest";

const dataHome = mkdtempSync(join(tmpdir(), "gcrm-"));

process.env.XDG_DATA_HOME = dataHome;

const { useStore } = await import("../src/store/index.js");
const { seedLists, seedTasks } = await import("../src/store/seed.js");
const { resetDatabase, loadTasks, loadLists } = await import("../src/store/storage.js");

beforeEach(() => {
    resetDatabase(seedLists, seedTasks);
    useStore.setState({
        tasks: loadTasks(),
        lists: loadLists(),
        collapsed: false,
        filter: "all",
        searchMode: false,
        searchQuery: "",
        dialog: "none",
        taskToDelete: null,
    });
});

afterAll(() => {
    rmSync(dataHome, { recursive: true, force: true });
});
