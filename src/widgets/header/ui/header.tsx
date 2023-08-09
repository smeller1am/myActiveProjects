import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__burger">
        <div className="header__burger-line"></div>
      </div>
      <a className="logo">
        <Image src="/img/logo/1.svg" alt="" width="207" height="60" />
      </a>
      <ul className="list">
        <li className="userBasket">
          <a href="#" className="icon-user"></a>
          <div className="userBasket__basket">
            <a href="#" className="icon-basket"></a>
            <div className="basket__digital">
              <p>3</p>
            </div>
          </div>
        </li>
        <li className="list__menu">
          <a className="list__item-link" href="#">
            Меню
          </a>
        </li>
        <li className="list__item">
          <Link className="list__item-link list__item-link--active" href="/">
            Главная
          </Link>
        </li>
        <li className="list__item">
          <Link className="list__item-link" href="/discounts">
            Акции и скидки
          </Link>
        </li>
        <li className="list__item">
          <a className="list__item-link" href="">
            Условия доставки
          </a>
        </li>
        <li className="list__item">
          <a className="list__item-link" href="">
            Вакансии
          </a>
        </li>
        <li className="list__item">
          <a className="list__item-link" href="">
            Контакты
          </a>
        </li>
      </ul>
      <div className="info">
        <div className="info__number">
          <div className="icon-phone"></div>
          <a href="#" className="info__number-link">
            +7 (8425) 460-460
          </a>
        </div>
        <div className="info__time">Ежедневно с 10:00 до 23:00</div>
      </div>
      <div className="social">
        <a href="#" className="icon-tg"></a>
        <a href="#" className="icon-ok"></a>
        <a href="#" className="icon-vk"></a>
      </div>
      <div className="user">
        <a href="#" className="icon-user"></a>
      </div>
      <div className="basket">
        <a href="#" className="icon-basket"></a>
        <div className="basket__digital">
          <p>3</p>
        </div>
      </div>
    </header>
  );
};
