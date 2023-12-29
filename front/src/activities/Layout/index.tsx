import { useAppStore } from "@App/AppStore/context";
import { LayoutNotFound } from "@components/LayoutNotFound";
import { Layout } from "@modules/Layout";
import { useParams } from "@solidjs/router";
import { Show } from "solid-js";

export const LayoutActivity = () => {
  const params = useParams();

  const [, { getLayout }] = useAppStore();

  const layoutData = () => getLayout(params.layout)
  
  return (
    <Show when={!!layoutData()} fallback={<LayoutNotFound/>}>
      <Layout layout={layoutData()!} />
    </Show>
  );
};
