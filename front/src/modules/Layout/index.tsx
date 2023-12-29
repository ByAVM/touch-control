import { Component, For } from "solid-js";
import { Pane } from "@UI/Pane";
import { LayoutProps } from "./interfaces";
import { Control } from "@components/Control";
import { useClient } from "@App/WSClient/context";

export const Layout: Component<LayoutProps> = (props) => {
  const [state] = useClient()

  return (
    <>
      <Pane>
        <For each={props.layout.controls}>
          {(control) => (
          <Control
            {...control}
            disabled={state() !== 'connected'}
          />
        )}
        </For>
      </Pane>
    </>
  );
};
