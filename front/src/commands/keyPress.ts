import { Command } from "@common/types";

export type KeyPressCommand = (
  key: string,
  modifier?: string
) => Command;

export const keyPress: KeyPressCommand = (key, modifier) => {
  // Нажать на кнопку
  return ['keyboard.keypress', {key, modifier}]
};

export type KeyPressCommandKey = "keyboard.keypress"
