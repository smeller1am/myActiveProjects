import { FC, ReactNode } from 'react';
import Image from 'next/image';

const MenuIcon: FC<{ src: string; alt?: string }> = ({ src, alt = '' }) => (
  <Image src={src} alt={alt} width={120} height={120} />
);

export interface IMenuItem {
  title: ReactNode;
  icon?: ReactNode;
  link: string;
}
export type TMenuRecord = Record<string, IMenuItem>;

export const menuRecord = {
  pizzas: {
    title: 'Пицца',
    icon: <MenuIcon src="/img/menu/1.png" />,
    link: '/pizzas',
  },
  hotDishes: {
    title: 'Горячие блюда',
    icon: <MenuIcon src="/img/menu/2.png" />,
    link: '',
  },
  rolls: {
    title: 'Роллы',
    icon: <MenuIcon src="/img/menu/3.png" />,
    link: '',
  },
  hotRolls: {
    title: 'Горячие роллы',
    icon: <MenuIcon src="/img/menu/4.png" />,
    link: '',
  },
  setsAndKidboxes: {
    title: 'Сеты / Kids Box',
    icon: <MenuIcon src="/img/menu/5.png" />,
    link: '',
  },
  sushi: {
    title: 'Суши',
    icon: <MenuIcon src="/img/menu/6.png" />,
    link: '',
  },
  saladsAndSnacks: {
    title: 'Салаты и закуски',
    icon: <MenuIcon src="/img/menu/7.png" />,
    link: '',
  },
  deserts: {
    title: 'Десерты',
    icon: <MenuIcon src="/img/menu/8.png" />,
    link: '',
  },
  spicesAndDrinks: {
    title: 'Специи / Напитки',
    icon: <MenuIcon src="/img/menu/9.png" />,
    link: '',
  },
  businessLunches: {
    title: 'Бизнес-ланчи',
    icon: <MenuIcon src="/img/menu/10.png" />,
    link: '',
  },
  soups: {
    title: 'Супы',
    link: '',
  },
  hosomaki: {
    title: 'Хосомаки',
    link: '',
  },
  uramaki: {
    title: 'Урамаки',
    link: '',
  },
  futomaki: {
    title: 'Футомаки',
    link: '',
  },
  friedRolls: {
    title: 'Жаренные роллы',
    link: '',
  },
  bakedRolls: {
    title: 'Запечённые роллы',
    link: '',
  },
  sets: {
    title: 'Сеты',
    link: '',
  },
  kidBoxes: {
    title: 'Kids box',
    link: '',
  },
  salads: {
    title: 'Салаты',
    link: '',
  },
  snacks: {
    title: 'Закуски',
    link: '',
  },
  sandwiches: {
    title: 'Сэндвичи',
    link: '',
  },
  drinks: {
    title: 'Напитки',
    link: '',
  },
  species: {
    title: 'Специи',
    link: '',
  },
  sweetRolls: {
    title: 'Сладкие роллы',
    link: '',
  },
  promotionsAndDiscounts: {
    title: 'Акции и скидки',
    link: '',
  },
  deliveryTerms: {
    title: 'Условия доставки',
    link: '',
  },
  vacancies: {
    title: 'Вакансии',
    link: '',
  },
  contacts: {
    title: 'Контакты',
    link: '',
  },
} satisfies TMenuRecord;
