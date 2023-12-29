import { A } from "@solidjs/router";
import { Component, For, Show, createSignal } from "solid-js";
import classes from "./style.module.css";
import { Icon } from "@UI/Icon";
import { useAppStore } from "@App/AppStore/context";
import { IconName } from "@UI/Icon/interfaces";

export const Navbar: Component = () => {
  const [state] = useAppStore();
  const [showList, setShowList] = createSignal(false);
  return (
    <div
      class={classes.navbar}
      classList={{
        [classes.open]: showList(),
      }}
    >
      <div class={classes.nav}>
        <button onClick={() => setShowList((prev) => !prev)}>
          <Icon name="list" />
        </button>
      </div>

      <div
        class={classes.list}
        classList={{
          [classes.show]: showList(),
        }}
      >
        <For each={state.layouts}>
          {(layout) => (
            <div>
              <A href={`/layout/${layout.id}`}>
                <Show when={layout.icon}>
                  <Icon name={layout.icon as IconName} />
                </Show>
                {layout.title}
              </A>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};
