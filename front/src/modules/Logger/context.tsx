import {
  ParentComponent,
  createContext,
  createSignal,
  useContext,
  createUniqueId,
} from "solid-js";
import { LoggerMessage } from "./interfaces";

export const useLoggerContextValue = (enabled: boolean) => {
  const [session, setSession] = createSignal<LoggerMessage[]>([]);
  const push = (msg: string, tag = "LOG") => {
    const id = createUniqueId();

    if (!enabled) {
      return;
    }

    setSession((messages) => [...messages, { id, msg, tag }]);

    setTimeout(() => {
      setSession((messages) => messages.filter((msg) => msg.id !== id));
    }, 2000);
  };

  return { session, push };
};

export type LoggerContext = ReturnType<typeof useLoggerContextValue>;

export const loggerContext = createContext<LoggerContext>();

export const LoggerProvider: ParentComponent<{ enabled: boolean }> = (
  props
) => {
  const store = useLoggerContextValue(props.enabled);
  return (
    <loggerContext.Provider value={store}>
      {props.children}
    </loggerContext.Provider>
  );
};

export const useLogger = () => {
  const value = useContext(loggerContext);

  if (!value) {
    throw new Error("Logger context must used with provider");
  }

  return value;
};
