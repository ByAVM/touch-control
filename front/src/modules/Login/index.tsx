import { ActionButton } from "@UI/ActionButton";
import { Input } from "@UI/Input";
import { Component } from "solid-js";
import { useAppStore } from "@App/AppStore/context";

export const Login: Component = () => {
  const [store, { setPort, setKey }] = useAppStore();

  return (
    <div>
      <Input
        value={store.key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Key"
      />

      <Input
        value={store.port}
        onChange={(e) => setPort(e.target.value)}
        placeholder="Port number"
      />

      <ActionButton>Start</ActionButton>
    </div>
  );
};
