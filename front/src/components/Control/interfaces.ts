import { KeyHoldCommandKey } from "@commands/keyHold";
import { KeyPressCommandKey } from "@commands/keyPress";

export enum ControlType {
  Button = "button",
  Toggle = "toggle",
}

export type ControlTypeValue = `${ControlType}`;

export interface ControlPropsBase {
  key: string;
  title?: string;
  modifier?: string;
  disabled?: boolean;
}

type ControlTypeProps<T> = T &
  (
    | {
        type: "button";
      }
    | {
        type: "toggle";
        baseState?: boolean;
      }
  );

type ControlActionProps<T> = T & (
  | {
    action: KeyPressCommandKey;
  }
| {
    action: KeyHoldCommandKey;
    duration: number;
  }
)

export type ControlProps = ControlTypeProps<ControlActionProps<ControlPropsBase>>;
