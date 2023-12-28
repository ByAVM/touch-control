import { useAppStore } from "@App/AppStore/context";
import { LayoutListItem } from "@UI/LayoutListItem";
import { A } from "@solidjs/router";
import { Component, For } from "solid-js";

export const Layouts: Component = () => {
  const [store] = useAppStore();

  return (
    <For each={store.layouts}>
      {(layout) => (
        <A href={`/layout/${layout.id}`}>
          <LayoutListItem title={layout.title} />
        </A>
      )}
    </For>
  );
};
