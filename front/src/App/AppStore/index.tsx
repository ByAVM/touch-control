import { ParentComponent } from "solid-js";
import { appStoreContext } from "./context";
import { appStore } from "./store";
import { AppStoreContext } from "./interfaces";

export const AppStoreContextProvider: ParentComponent = (props) => {
  const [state, setState] = appStore;
  const value = [
    state,
    {
      setPort: (port) => setState("port", port),
      setKey: (key) => {
        setState("key", key);
      },
      getLayout: (layout) => {
        return state.layouts.find(({id}) => id === layout)
      },
    },
  ] as AppStoreContext;

  return (
    <appStoreContext.Provider value={value}>
      {props.children}
    </appStoreContext.Provider>
  );
};
