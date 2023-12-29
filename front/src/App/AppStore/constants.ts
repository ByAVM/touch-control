import { AppStore } from "./interfaces";

export const DEFAULT_STORE: AppStore = {
  key: '',
  port: "8080",
  layouts: [
    {
      id: 'spaceship',
      title: "Spaceship",
      icon: 'spaceship',
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
    {
      id: 'mining',
      title: "Mining",
      icon: 'spaceship',
      controls: []
    },
    {
      id: 'onfoot',
      title: "On foot",
      icon: 'spaceship',
      controls: []
    }
  ],
};
