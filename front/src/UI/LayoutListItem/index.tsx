import { Component, Show } from "solid-js";
import { LayoutListItemProps } from "./interfaces";
import classes from "./style.module.css";
import { Icon } from "@UI/Icon";
import { IconName } from "@UI/Icon/interfaces";

export const LayoutListItem: Component<LayoutListItemProps> = (props) => {
  return (
    <div class={classes.root}>
      <div class={classes.icon}>
        <Show when={props.icon}>
          <Icon name={props.icon as IconName} size="lg" />
        </Show>
      </div>
      <div>{props.title}</div>
    </div>
  );
};
