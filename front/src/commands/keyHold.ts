import { Command } from "@common/types";

export type KeyHoldCommand = (
  key: string,
  modifier?: string,
  duration?: number
) => Command;

export const keyHold: KeyHoldCommand = (key, modifier, duration) => {
  // Нажать на кнопку
  return ["keyboard.keyhold", {key, modifier, duration}];
};

export type KeyHoldCommandKey = "keyboard.keyhold"
