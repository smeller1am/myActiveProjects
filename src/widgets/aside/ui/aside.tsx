import { FC } from 'react';
import { SideMenu } from './side-menu/side-menu';
import { getMenuItems } from '@/shared/serverApi';

export const Aside: FC = async () => {
  const sideMenuItems = await getMenuItems();
  console.log('-> sideMenuItems', sideMenuItems);

  return <SideMenu sideMenuItems={sideMenuItems} />;
};
