import { createContext, useContext } from "solid-js";
import { WSClientContext } from "./interfaces";

export const wsClientContext = createContext<WSClientContext>()

export const useClient = () => {
  const value = useContext(wsClientContext);

  if (!value) {
    throw new Error("Client context use only with provider");
  }

  return value;
};