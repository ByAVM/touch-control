import { ParentComponent, JSX } from "solid-js";
import classes from "./style.module.css";

export const ActionButton: ParentComponent<
  JSX.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
  return (
    <button class={classes.actionButton} {...props}>
      {children}
    </button>
  );
};
