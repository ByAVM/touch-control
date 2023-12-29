export enum IconKey {
  cogs = "Cogs",
  list = 'List',
  spaceship = 'Spaceship'
}

export type IconName = keyof typeof IconKey;

export type IconSize = 'sm' | 'md' | 'lg'

export interface IconProps {
  name: IconName;
  size?: IconSize;
}
