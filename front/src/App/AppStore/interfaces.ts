import { LayoutType } from "@common/types";

export interface AppStore {
    key: string,
    port: string,
    layouts: LayoutType[],
}

export interface AppStoreMethods {
    setPort: (port: string) => void
    setKey: (key: string) => void
    getLayout: (layout: string) => LayoutType | undefined
    resetLayout: () => void;
}

export type AppStoreContext = [
    AppStore,
    AppStoreMethods
]