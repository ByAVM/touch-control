import { Navbar } from "@modules/Navbar";
import { ParentComponent } from "solid-js";
import classes from './style.module.css'
import { StatusBar } from "@modules/StatusBar";

export const Wrapper: ParentComponent = (props) => {

    return <>
        <div class={classes.statusContainer}><StatusBar /></div>
        <div class={classes.wrapper}>{props.children}</div>
        <div class={classes.navbarContainer}><Navbar /></div>
    </>
}