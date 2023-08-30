'use client';
import Link from 'next/link';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import { staticMenuItems } from '@/entities/menu/';

export const Nav: FC = () => {
  const pathName = usePathname();

  return (
    <ul className="list">
      <li className="userBasket">
        <Link href="#" className="icon-user"></Link>
        <Link href="#" className="userBasket__basket">
          <div className="icon-basket"></div>
          <div className="basket__digital">
            <p>3</p>
          </div>
        </Link>
      </li>
      <li className="list__menu">
        <Link className="list__item-link" href="#">
          Меню
        </Link>
      </li>
      {staticMenuItems.map(({ title, link }, idx) => {
        const isActive = pathName === link;

        return (
          <li className="list__item" key={idx}>
            <Link
              className={cn('list__item-link', {
                'list__item-link--active': isActive,
              })}
              href={link}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
