import { Component } from "solid-js";
import { Pane } from "@UI/Pane";
import { LayoutProps } from "./interfaces";
import { Control } from "@components/Control";
import { useClient } from "@App/WSClient/context";

export const Layout: Component<LayoutProps> = ({ layout }) => {
  const [state] = useClient()

  return (
    <>
      <Pane>
        {layout.controls.map((control) => (
          <Control
            {...control}
            disabled={state() !== 'connected'}
          />
        ))}
      </Pane>
    </>
  );
};
