import { Component } from "solid-js";
import { LayoutListItemProps } from "./interfaces";
import classes from './style.module.css'

export const LayoutListItem: Component<LayoutListItemProps> = (props) => {
    return <div class={classes.root}>
        <div class={classes.icon}></div>
        <div>{props.title}</div>
    </div>
}