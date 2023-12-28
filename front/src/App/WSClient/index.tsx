import { ParentComponent, onMount } from "solid-js";
import { wsClientStore } from "./store";
import { useLogger } from "@modules/Logger/context";
import { ActionDataType, CommandMethod } from "@common/types";
import { wsClientContext } from "./context";

export const WSClientContextProvider: ParentComponent = (props) => {
    const [state, setState] = wsClientStore
    const {push} = useLogger()
  
    const isConnected = () => {
      return !!state.ws && !(
        state.ws.readyState === WebSocket.CLOSED ||
        state.ws.readyState === WebSocket.CLOSING
      )
    }
  
    const connect = () => {
      const wsInstance = new WebSocket(`ws://${location.host}/ws`)
  
      wsInstance.addEventListener('open', () => {
        setState('state', 'connected')
        push('Connected', 'CLIENT')
      })
  
      wsInstance.addEventListener('error', () => {
        setState('state', 'error')
        push('Error', 'CLIENT')
      })
  
      wsInstance.addEventListener('close', () => {
        setState('state', 'disconnected')
        push('Disconnected', 'CLIENT')
      })
  
      setState('ws', wsInstance)
    }
    
    // Connect to ws server
    onMount(() => connect())
  
    const call = (method: CommandMethod, data: ActionDataType) => {
      if (!isConnected()) {
        push(`${method} ${
          data.modifier ? `${data.modifier} + ${data.key}` : data.key
        } FAILED`,
        "CLIENT")
  
        return
      }
  
      state.ws?.send(JSON.stringify({method, data}))
    }
  
    const clientState = () => state.state

    return <wsClientContext.Provider value={[clientState, {call}]}>{props.children}</wsClientContext.Provider>
  }