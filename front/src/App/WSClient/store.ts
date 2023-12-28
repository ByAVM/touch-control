import { createStore } from "solid-js/store";
import { ClientState } from "./interfaces";

export const wsClientStore = createStore<{
    state: ClientState,
    ws: WebSocket | null,
}>({
    state: 'disconnected',
    ws: null,
})