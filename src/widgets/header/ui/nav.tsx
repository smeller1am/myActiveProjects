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
        <a href="#" className="icon-user"></a>
        <a className="userBasket__basket">
          <a href="#" className="icon-basket"></a>
          <div className="basket__digital">
            <p>3</p>
          </div>
        </a>
      </li>
      <li className="list__menu">
        <a className="list__item-link" href="#">
          Меню
        </a>
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
