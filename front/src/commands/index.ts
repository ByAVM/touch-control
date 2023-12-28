import { keyHold } from "./keyHold";
import { keyPress } from "./keyPress";

export interface Actions {
    
}

export const ACTIONS = {
    "keyboard.keyhold": keyHold,
    "keyboard.keypress": keyPress
}