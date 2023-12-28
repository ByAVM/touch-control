import { A } from "@solidjs/router";
import { Component } from "solid-js";
import classes from './style.module.css'

export const Navbar: Component = () => {
    return <div class={classes.navbar}>
        <A href="/">Layouts</A>
    </div>
}