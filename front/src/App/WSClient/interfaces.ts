import { ActionDataType, CommandMethod } from "@common/types"

export type ClientState = 'connected' | 'disconnected' | 'error'

export type ClientCallMethod = (method: CommandMethod, data: ActionDataType) => void

export interface WSClientStore {
    state: ClientState,
    ws: WebSocket | null,
}

export type WSClientContext = [
    () => ClientState,
    {call: ClientCallMethod}
]