import { KeyHoldCommandKey } from "@commands/keyHold";
import { KeyPressCommandKey } from "@commands/keyPress";
import { ControlProps } from "@components/Control/interfaces";

export type CommandMethodKeyboard = KeyPressCommandKey | KeyHoldCommandKey;

export type CommandMethod = CommandMethodKeyboard;

export type LayoutControlType = ControlProps;

export interface LayoutType {
  id: string;
  title: string;
  controls: LayoutControlType[];
}

export interface ActionDataType {
  key: string;
  modifier?: string;
  duration?: number;
}

export type Command = [CommandMethod, ActionDataType]