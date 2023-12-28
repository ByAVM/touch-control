import { ParentComponent } from "solid-js";
import classes from "./style.module.css";
import { PaneProps } from "./interfaces";

export const Pane: ParentComponent<PaneProps> = ({ children }) => {
  return <div class={classes.pane}>{children}</div>;
};
