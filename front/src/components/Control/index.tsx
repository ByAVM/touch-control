import { Component } from "solid-js";
import { Button } from "@UI/Button";
import { useClient } from "@App/WSClient/context";
import classes from "./style.module.css";
import { Toggle } from "@UI/Toggle";
import { ControlProps } from "./interfaces";



export const Control: Component<ControlProps> = (props) => {
  const [, { call }] = useClient();

  const callback = () => {
    navigator.vibrate([50, 50, 50])

    switch (props.action) {
      case "keyboard.keypress": {
        const {key, modifier} = props

        call('keyboard.keypress', {key, modifier})
        break;
      }
      case "keyboard.keyhold": {
        const {key, modifier, duration} = props

        call('keyboard.keyhold', {key, modifier, duration});
        break;
      }
    }
  };

  switch (props.type) {
    case "button": {
      return (
        <div class={classes.root}>
          <Button disabled={props.disabled} action={callback} title={props.title} />
        </div>
      );
    }
    case "toggle": {
      return (
        <div class={classes.root}>
          <Toggle
            disabled={props.disabled}
            action={callback}
            title={props.title}
            baseState={props.baseState}
          />
        </div>
      );
    }
  }
};
