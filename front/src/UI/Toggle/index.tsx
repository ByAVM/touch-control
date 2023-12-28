import { Component, createEffect, createSignal, on } from "solid-js";
import { ToggleProps } from "./interfaces";
import classes from "./style.module.css";

export const Toggle: Component<ToggleProps> = ({
  action,
  baseState = false,
  title,
}) => {
  const [enabled, setEnabled] = createSignal(baseState);
  let thumb: HTMLDivElement | undefined;

  createEffect(on(enabled, (value) => action(value), {defer: true}));

  return (
    <>
      {title && <div class={classes.title}>{title}</div>}
      <div
        class={classes.root}
        classList={{ [classes.enabled]: enabled() }}
        onClick={() => setEnabled((prev) => !prev)}
      >
        <div class={classes.thumb} ref={thumb}></div>
      </div>
    </>
  );
};
