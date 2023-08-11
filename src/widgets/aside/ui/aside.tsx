import { FC } from 'react';
import { SideMenu } from './side-menu/side-menu';
import { getMenuItems } from '@/shared/api';

export const Aside: FC = async () => {
  const sideMenuItems = await getMenuItems();

  return <SideMenu sideMenuItems={sideMenuItems} />;
};
