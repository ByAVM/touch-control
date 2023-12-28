import { useClient } from "@App/WSClient/context";
import { Component } from "solid-js";
import classes from './style.module.css'

export const StatusBar: Component = () => {
    const [state] = useClient()

    return <div class={classes.statusBar} classList={{
        [classes.disconnected]: state() !== 'connected'
    }}></div>
}