import { Component } from "solid-js"
import { useLogger } from "./context"
import classes from './style.module.css'

export const LoggerMessages: Component = () => {
    const {session} = useLogger()

    return <div class={classes.root}>
        {session().map((msg) => <div class={classes.message}>[{msg.tag}] {msg.msg}</div>)}
    </div>
}