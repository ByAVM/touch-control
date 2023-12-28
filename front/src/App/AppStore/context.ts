import { createContext, useContext } from "solid-js";
import { AppStoreContext } from "./interfaces";

export const appStoreContext = createContext<AppStoreContext>()

export const useAppStore = () => {
    const context = useContext(appStoreContext)
    
    if (!context) {
        throw new Error('context use only with provider')
    }

    return context
}