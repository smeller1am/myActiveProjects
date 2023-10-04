import { FC } from 'react';

export const BasketModal: FC = () => {
  return (
    <div
      className="modalBasket"
      // style={{ display: isBasketOpen ? 'block' : 'none' }}
    >
      <div className="modalBasket__container">
        <div className="order">
          <div className="order__item">
            <img src="/img/pizza/1.png" alt="" />
            <div className="order__itemText">
              <div className="order__itemTitle">Дьябло</div>
              <div className="order__itemPrice">480 ₽</div>
            </div>
            <div className="order__plusMinus">
              <div className="order__block">
                <button className="order__plus">-</button>
                <div className="order__digital">1</div>
                <button className="order__minus">+</button>
              </div>
            </div>
          </div>
          <div className="order__item">
            <img src="/img/pizza/1.png" alt="" />
            <div className="order__itemText">
              <div className="order__itemTitle">Дьябло</div>
              <div className="order__itemPrice">280 ₽</div>
            </div>
            <div className="order__plusMinus">
              <div className="modalBasket__order-block">
                <button className="order__plus">-</button>
                <div className="order__digital">1</div>
                <button className="order__minus">+</button>
              </div>
            </div>
          </div>
          <div className="order__item">
            <img src="/img/pizza/1.png" alt="" />
            <div className="order__itemText">
              <div className="order__itemTitle">Дьябло</div>
              <div className="order__itemPrice">480 ₽</div>
            </div>
            <div className="order__plusMinus">
              <div className="modalBasket__order-block">
                <button className="order__plus">-</button>
                <div className="order__digital">1</div>
                <button className="order__minus">+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="buttonOrder">
          <button className="buttonOrder__checkout">
            <div className="buttonOrder__price">1480 Р</div>
            <p>Оформить заказ</p>
          </button>
          <button className="buttonOrder__clearBasket">
            Очистить корзину
          </button>
        </div>
      </div>
    </div>
  );
};
