import { useAppStore } from "@App/AppStore/context";
import { LayoutNotFound } from "@components/LayoutNotFound";
import { Layout } from "@modules/Layout";
import { useParams } from "@solidjs/router";
import { Show } from "solid-js";

export const LayoutActivity = () => {
  const { layout } = useParams();

  const [, { getLayout }] = useAppStore();

  const layoutData = getLayout(layout);
  
  return (
    <Show when={!!layoutData} fallback={<LayoutNotFound/>}>
      <Layout layout={layoutData!} />
    </Show>
  );
};
