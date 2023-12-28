import { Component } from "solid-js";
import { A } from "@solidjs/router";

export const LayoutNotFound: Component = () => {

    return <div>
        Layout not found.
        <A href="/">Go back</A>
    </div>
}