'use client';

import { store } from '@/app/store';
import {
  useClearBasketMutation,
  useDecreaseBasketProductCountMutation,
  useGetBasketProductsQuery,
  useIncreaseBasketProductCountMutation,
  useRemoveProductFromBasketMutation,
} from '@/shared/clientApi/basketApi';
import { FC, MouseEventHandler, useState } from 'react';
import { createPortal } from 'react-dom';
import { Provider } from 'react-redux';
import { BasketModal } from './basket-modal';
import { utils } from '@/shared/lib';
import Image from 'next/image';
import { ProductModel } from '@/shared/contracts';
import cn from 'classnames';

export const Basket: FC = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const onBasketClick = () => setIsBasketOpen(!isBasketOpen);

  const target = document.querySelector('#category');

  const { data: basketProducts } = useGetBasketProductsQuery();
  const [removeProductFromBasket] = useRemoveProductFromBasketMutation();
  const [increaseBasketProductCount] = useIncreaseBasketProductCountMutation();
  const [decreaseBasketProductCount] = useDecreaseBasketProductCountMutation();
  const [clearBasket] = useClearBasketMutation();

  const count = basketProducts?.length ?? 0;

  const totalPrice = basketProducts?.reduce(
    (acc, { product, count }) => acc + product.Price * count,
    0,
  );

  const handleDecreaseBasketProductCount =
    (productId: ProductModel['Id'], count: number): MouseEventHandler =>
    () => {
      if (count <= 1) {
        return removeProductFromBasket(productId);
      }
      decreaseBasketProductCount(productId);
    };

  const handleIncreaseBasketProductCount =
    (productId: ProductModel['Id']): MouseEventHandler =>
    () => {
      increaseBasketProductCount(productId);
    };

  const handleClearBasket = () => clearBasket();

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
            className={cn('modalBasket', {
              'modalBasket--visible': isBasketOpen,
            })}
          >
            <div className="modalBasket__container">
              {count > 0 ? (
                <>
                  <div className="modalBasket__order">
                    {basketProducts?.map(
                      ({ product: { Id, PhotoPath, Name, Price }, count }) => (
                        <div className="modalBasket__order-item" key={Id}>
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
                                onClick={handleDecreaseBasketProductCount(
                                  Id,
                                  count,
                                )}
                              >
                                -
                              </button>
                              <div className="modalBasket__order-digital">
                                {count}
                              </div>
                              <button
                                onClick={handleIncreaseBasketProductCount(Id)}
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
                    <button
                      className="modalBasket__button-clearBasket"
                      onClick={handleClearBasket}
                    >
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
          document.body,
        )}
    </>
  );
};

export const BasketWithProvider: FC = () => (
  <Provider store={store}>
    <Basket />
  </Provider>
);
