import { FC } from 'react';

export const BasketModal: FC = () => {
  return (
    <div
      className="modalBasket"
      // style={{ display: isBasketOpen ? 'block' : 'none' }}
    >
      <div className="modalBasket__container">
        <div className="modalBasket__order">
          <div className="modalBasket__order-item">
            <img src="/img/pizza/1.png" alt="" />
            <div className="modalBasket__order-itemText">
              <div className="modalBasket__order-itemTitle">Дьябло</div>
              <div className="modalBasket__order-itemPrice">480 ₽</div>
            </div>
            <div className="modalBasket__order-plusMinus">
              <div className="modalBasket__order-block">
                <button className="modalBasket__order-plus">-</button>
                <div className="modalBasket__order-digital">1</div>
                <button className="modalBasket__order-minus">+</button>
              </div>
            </div>
          </div>
          <div className="modalBasket__order-item">
            <img src="/img/pizza/1.png" alt="" />
            <div className="modalBasket__order-itemText">
              <div className="modalBasket__order-itemTitle">Дьябло</div>
              <div className="modalBasket__order-itemPrice">280 ₽</div>
            </div>
            <div className="modalBasket__order-plusMinus">
              <div className="modalBasket__order-block">
                <button className="modalBasket__order-plus">-</button>
                <div className="modalBasket__order-digital">1</div>
                <button className="modalBasket__order-minus">+</button>
              </div>
            </div>
          </div>
          <div className="modalBasket__order-item">
            <img src="/img/pizza/1.png" alt="" />
            <div className="modalBasket__order-itemText">
              <div className="modalBasket__order-itemTitle">Дьябло</div>
              <div className="modalBasket__order-itemPrice">480 ₽</div>
            </div>
            <div className="modalBasket__order-plusMinus">
              <div className="modalBasket__order-block">
                <button className="modalBasket__order-plus">-</button>
                <div className="modalBasket__order-digital">1</div>
                <button className="modalBasket__order-minus">+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modalBasket__button">
          <button className="modalBasket__button-checkout">
            <div className="modalBasket__button-price">1480 Р</div>
            <p>Оформить заказ</p>
          </button>
          <button className="modalBasket__button-clearBasket">
            Очистить корзину
          </button>
        </div>
      </div>
    </div>
  );
};
