import { AppStore } from "./interfaces";

export const DEFAULT_STORE: AppStore = {
  key: '',
  port: "8080",
  layouts: [
    {
      id: 'test',
      title: "Test layout",
      controls: [
        {
          action: "keyboard.keypress",
          title: "Запрос диспетчеру",
          key: "N",
          modifier: "LShift",
          type: "button",
        },
        {
          title: "Вооружение",
          type: "toggle",
          key: "P",
          action: "keyboard.keypress",
        },
        {
          title: "Свет",
          type: "toggle",
          key: "L",
          action: "keyboard.keypress",
        },
        {
          title: "Quantum drive",
          type: "toggle",
          key: "B",
          action: "keyboard.keypress",
        },
        {
          title: "Шасси",
          type: "toggle",
          key: "N",
          action: "keyboard.keypress",
        },
        {
          title: "Двигатель",
          type: "toggle",
          key: "I",
          action: "keyboard.keypress",
        },
      ],
    },
  ],
};
