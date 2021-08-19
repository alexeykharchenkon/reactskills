import { createContext, useContext } from "react";
import { TableStore } from "@stores/tableStore";

interface RootStore {
    tableStore: TableStore;
}

export const rootStore: RootStore = {
    tableStore : new TableStore(),
}

export const StoreContext = createContext(rootStore);

export const useStore = () => useContext(StoreContext);