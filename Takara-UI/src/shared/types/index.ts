import { ReactNode } from 'react';

export interface IMenuItem {
  key?: number;
  title: ReactNode;
  icon?: ReactNode;
  link: string;
}
