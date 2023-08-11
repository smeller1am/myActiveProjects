'use client';

import { store } from '@/app/store';
import {
  useDecreaseBasketProductCountMutation,
  useGetBasketProductsQuery,
  useIncreaseBasketProductCountMutation,
  useRemoveProductFromBasketMutation,
} from '@/shared/clientApi/basketApi';
import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { Provider } from 'react-redux';
import { BasketModal } from './basket-modal';
import { utils } from '@/shared/lib';
import Image from 'next/image';

export const Basket: FC = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const onBasketClick = () => setIsBasketOpen(!isBasketOpen);

  const target = document.querySelector('#category');

  const { data: basketProducts } = useGetBasketProductsQuery();
  const [removeProductFromBasket] = useRemoveProductFromBasketMutation();
  const [increaseBasketProductCount] = useIncreaseBasketProductCountMutation();
  const [decreaseBasketProductCount] = useDecreaseBasketProductCountMutation();

  const count = basketProducts?.length ?? 0;

  const totalPrice = basketProducts?.reduce(
    (acc, { product, count }) => acc + product.Price * count,
    0,
  );

  return (
    <>
      <div className="basket">
        <a href="#" className="icon-basket" onClick={onBasketClick}></a>
        {count > 0 && (
          <div className="basket__digital">
            <p>{count}</p>
          </div>
        )}
      </div>
      {target &&
        createPortal(
          // todo: move to basketModal
          <div
            className="modalBasket"
            style={{ display: isBasketOpen ? 'block' : 'none' }}
          >
            <div className="modalBasket__container">
              {count > 0 ? (
                <>
                  <div className="modalBasket__order">
                    {basketProducts?.map(
                      ({ product: { Id, PhotoPath, Name, Price }, count }) => (
                        <div
                          className="modalBasket__order-item"
                          key={Id}
                          onClick={() => removeProductFromBasket(Id)}
                        >
                          <Image
                            src={PhotoPath ?? ''}
                            alt=""
                            width={72}
                            height={72}
                          />
                          <div className="modalBasket__order-itemText">
                            <div className="modalBasket__order-itemTitle">
                              {Name}
                            </div>
                            <div className="modalBasket__order-itemPrice">
                              {utils.renderPrice(Price)}
                            </div>
                          </div>
                          <div className="modalBasket__order-plusMinus">
                            <div className="modalBasket__order-block">
                              <button
                                className="modalBasket__order-plus"
                                onClick={e => {
                                  e.stopPropagation();
                                  if (count === 1) {
                                    return removeProductFromBasket(Id);
                                  }
                                  decreaseBasketProductCount(Id);
                                }}
                              >
                                -
                              </button>
                              <div className="modalBasket__order-digital">
                                {count}
                              </div>
                              <button
                                className="modalBasket__order-minus"
                                onClick={e => {
                                  e.stopPropagation();
                                  increaseBasketProductCount(Id);
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="modalBasket__button">
                    <button className="modalBasket__button-checkout">
                      <div className="modalBasket__button-price">
                        {utils.renderPrice(totalPrice)}
                      </div>
                      <p>Оформить заказ</p>
                    </button>
                    <button className="modalBasket__button-clearBasket">
                      Очистить корзину
                    </button>
                  </div>
                </>
              ) : (
                <span style={{ color: '#fff' }}>
                  Ваша корзина пуста (нужно стилизовать по дизайну)
                </span>
              )}
            </div>
          </div>,
          target,
        )}
    </>
  );
};

export const BasketWithProvider: FC = () => (
  <Provider store={store}>
    <Basket />
  </Provider>
);
