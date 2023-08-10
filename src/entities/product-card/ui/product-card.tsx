import { FC } from 'react';

export const ProductCard: FC = () => (
  <div className="pizza__grid-item">
    <img id="pic1" src="/img/pizza/1.png" alt="" />
    <div className="pizza__grid-info">
      <div className="pizza__grid-infoTitle">Дьябло</div>
      <div className="pizza__grid-infoText">
        Томатный неаполитанский coус, буженина из свинины, красный лук, сладкая
        кукуруза, болгарский перец, моцарелла, колбаски BBQ
      </div>
      <div className="pizza__grid-infoBottom">
        <div className="pizza__grid-bottomPrice">
          <div className="pizza__grid-bottomRub">480 ₽</div>
          <div className="pizza__grid-bottomGr">680гр</div>
        </div>
        <button className="pizza__grid-bottomButton">
          <div className="icon-basket"></div>В корзину
        </button>
      </div>
    </div>
  </div>
);
