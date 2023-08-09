import Image from 'next/image';
import { FC, ReactNode } from 'react';

const MenuIcon: FC<{ src: string; alt?: string }> = ({ src, alt = '' }) => (
  <Image src={src} alt={alt} width={120} height={120} />
);

interface IMenuItem {
  title: ReactNode;
  icon: ReactNode;
  link: string;
}

export const menuItems: IMenuItem[] = [
  {
    title: 'Пицца',
    icon: <MenuIcon src="/img/menu/1.png" />,
    link: '',
  },
  {
    title: 'Горячие блюда',
    icon: <MenuIcon src="/img/menu/2.png" />,
    link: '',
  },
  {
    title: 'Роллы',
    icon: <MenuIcon src="/img/menu/3.png" />,
    link: '',
  },
  {
    title: 'Горячие роллы',
    icon: <MenuIcon src="/img/menu/4.png" />,
    link: '',
  },
  {
    title: 'Сеты Kids Box',
    icon: <MenuIcon src="/img/menu/5.png" />,
    link: '',
  },
  {
    title: 'Суши',
    icon: <MenuIcon src="/img/menu/6.png" />,
    link: '',
  },
  {
    title: 'Салаты и закуски',
    icon: <MenuIcon src="/img/menu/7.png" />,
    link: '',
  },
  {
    title: 'Десерты',
    icon: <MenuIcon src="/img/menu/8.png" />,
    link: '',
  },
  {
    title: 'Специи Напитки',
    icon: <MenuIcon src="/img/menu/9.png" />,
    link: '',
  },
  {
    title: 'Бизнес-ланчи',
    icon: <MenuIcon src="/img/menu/10.png" />,
    link: '',
  },
];
