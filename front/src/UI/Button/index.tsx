import { Component } from "solid-js";
import { ButtonProps } from "./interfaces";
import classes from './style.module.css'

export const Button: Component<ButtonProps> = ({title, action}) => {

    return <button class={classes.base} type="button" onClick={action}>{title ?? 'button'}</button>
}