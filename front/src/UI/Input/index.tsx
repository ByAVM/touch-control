import { Component, JSX } from "solid-js";
import classes from "./style.module.css";

export const Input: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return <input class={classes.input} type="text" {...props} />;
};
