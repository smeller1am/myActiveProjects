'use client';

import { RootState, store } from '@/app/store';
import { closeModal, ModalType, openModal } from '@/app/store/modalSlice';
import {
  useClearBasketMutation,
  useDecreaseBasketProductCountMutation,
  useGetBasketProductsQuery,
  useIncreaseBasketProductCountMutation,
  useRemoveProductFromBasketMutation,
} from '@/shared/clientApi/basketApi';
import { ProductModel } from '@/shared/contracts';
import { utils } from '@/shared/lib';
import cn from 'classnames';
import Image from 'next/image';
import { FC, MouseEventHandler, useState } from 'react';
import { createPortal } from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
const getModalState = (state: RootState) =>
  state.modal.isOpen === ModalType.Basket;
export const Basket: FC = () => {
  const isModalOpen = useSelector(getModalState);

  const dispatch = useDispatch();
  const onBasketClick = () => {
    if (!isModalOpen) {
      dispatch(openModal(ModalType.Basket));
    } else {
      dispatch(closeModal());
    }
  };

  const giftTarget = document.querySelector('.titleMain');

  const { data: basketProducts } = useGetBasketProductsQuery();
  const [removeProductFromBasket] = useRemoveProductFromBasketMutation();
  const [increaseBasketProductCount] = useIncreaseBasketProductCountMutation();
  const [decreaseBasketProductCount] = useDecreaseBasketProductCountMutation();
  const [clearBasket] = useClearBasketMutation();

  const count = basketProducts?.length ?? 0;

  const totalPrice = basketProducts?.reduce(
    (acc, { product, count }) => acc + product.price * count,
    0,
  );

  const handleDecreaseBasketProductCount =
    (productId: ProductModel['id'], count: number): MouseEventHandler =>
    () => {
      if (count <= 1) {
        return removeProductFromBasket(productId);
      }
      decreaseBasketProductCount(productId);
    };

  const handleIncreaseBasketProductCount =
    (productId: ProductModel['id']): MouseEventHandler =>
    () => {
      increaseBasketProductCount(productId);
    };

  const handleClearBasket = () => clearBasket();

  return (
    <>
      <div className="basket" onClick={onBasketClick}>
        <span className="icon-basket"></span>
        {count > 0 && (
          <div className="basket__digital">
            <p>{count}</p>
          </div>
        )}
      </div>
      {createPortal(
        // todo: move to basketModal
        <div
          className={cn('modalBasket', {
            'modalBasket--visible': isModalOpen,
          })}
        >
          <div className="modalBasket__container">
            {count > 0 ? (
              <>
                <div className="modalBasket__order">
                  {basketProducts?.map(
                    ({ product: { id, photoPath, name, price }, count }) => (
                      <div className="modalBasket__order-item" key={id}>
                        <Image
                          src={photoPath ?? ''}
                          alt=""
                          width={72}
                          height={72}
                        />
                        <div className="modalBasket__order-itemText">
                          <div className="modalBasket__order-itemTitle">
                            {name}
                          </div>
                          <div className="modalBasket__order-itemPrice">
                            {utils.renderPrice(price)}
                          </div>
                        </div>
                        <div className="modalBasket__order-plusMinus">
                          <div className="modalBasket__order-block">
                            <button
                              onClick={handleDecreaseBasketProductCount(
                                id,
                                count,
                              )}
                            >
                              -
                            </button>
                            <div className="modalBasket__order-digital">
                              {count}
                            </div>
                            <button
                              onClick={handleIncreaseBasketProductCount(id)}
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
      {giftTarget &&
        createPortal(
          <div
            className={cn('titleMain__gift', {
              translate: isModalOpen,
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M34.5992 17.7187C34.5992 18.7818 34.5992 19.8483 34.5992 20.9114C34.5992 21.0632 34.5992 21.2151 34.5992 21.367C34.9438 21.0295 35.2883 20.692 35.6328 20.3545C35.3538 20.3545 35.0747 20.3545 34.7956 20.3545C34.0376 20.3545 33.2797 20.3545 32.5217 20.3545C31.3985 20.3545 30.2788 20.3545 29.1556 20.3545C27.7878 20.3545 26.4166 20.3545 25.0488 20.3545C23.5501 20.3545 22.0514 20.3545 20.5526 20.3545C19.0401 20.3545 17.5276 20.3545 16.0117 20.3545C14.6026 20.3545 13.19 20.3545 11.7808 20.3545C10.5888 20.3545 9.39668 20.3545 8.2046 20.3545C7.35016 20.3545 6.49572 20.3545 5.64127 20.3545C5.23473 20.3545 4.82818 20.3477 4.42163 20.3545C4.4044 20.3545 4.38718 20.3545 4.36995 20.3545C4.71448 20.692 5.05902 21.0295 5.40355 21.367C5.40355 20.2802 5.40355 19.1935 5.40355 18.1068C5.40355 17.9144 5.39321 17.722 5.41733 17.5297C5.40355 17.6208 5.39321 17.7085 5.37943 17.7997C5.4001 17.6647 5.43456 17.5331 5.48968 17.4048C5.45523 17.4858 5.42077 17.5668 5.38632 17.6478C5.42422 17.5668 5.46901 17.4892 5.51724 17.4149C5.59993 17.2799 5.36909 17.5769 5.45178 17.4959C5.48279 17.4656 5.51035 17.4284 5.54136 17.3981C5.56892 17.3711 5.59649 17.3474 5.62405 17.3238C5.74808 17.2057 5.40699 17.4588 5.55859 17.3744C5.63783 17.3306 5.71363 17.2833 5.79631 17.2462C5.71363 17.2799 5.63094 17.3137 5.54825 17.3474C5.67917 17.2934 5.8101 17.2597 5.95135 17.2394C5.85833 17.2529 5.76875 17.2631 5.67573 17.2766C5.97547 17.2428 6.28555 17.2631 6.58529 17.2631C7.26747 17.2631 7.94964 17.2631 8.62837 17.2631C9.64474 17.2631 10.6611 17.2631 11.6775 17.2631C12.9212 17.2631 14.165 17.2631 15.4088 17.2631C16.7731 17.2631 18.1375 17.2631 19.5018 17.2631C20.8799 17.2631 22.2546 17.2631 23.6328 17.2631C24.911 17.2631 26.1892 17.2631 27.4674 17.2631C28.5492 17.2631 29.6311 17.2631 30.7129 17.2631C31.4847 17.2631 32.2599 17.2631 33.0316 17.2631C33.3899 17.2631 33.7448 17.2631 34.1031 17.2631C34.1789 17.2631 34.2547 17.2664 34.3305 17.2766C34.2375 17.2631 34.1479 17.2529 34.0549 17.2394C34.1927 17.2597 34.327 17.2934 34.458 17.3474C34.3753 17.3137 34.2926 17.2799 34.2099 17.2462C34.2926 17.2833 34.3718 17.3272 34.4476 17.3744C34.5854 17.4554 34.2823 17.2293 34.3649 17.3103C34.396 17.3407 34.4339 17.3677 34.4649 17.3981C34.4924 17.4251 34.5165 17.4521 34.5407 17.4791C34.6612 17.6006 34.4028 17.2664 34.489 17.4149C34.5338 17.4926 34.582 17.5668 34.6199 17.6478C34.5854 17.5668 34.551 17.4858 34.5165 17.4048C34.5717 17.5331 34.6061 17.6613 34.6268 17.7997C34.613 17.7085 34.6027 17.6208 34.5889 17.5297C34.5958 17.5938 34.5992 17.6579 34.5992 17.7187C34.6061 18.2485 35.0678 18.7548 35.6328 18.7312C36.1841 18.7075 36.6768 18.2857 36.6664 17.7187C36.6458 16.3485 35.5191 15.2516 34.1203 15.2381C33.9791 15.2381 33.8413 15.2381 33.7 15.2381C32.9282 15.2381 32.1565 15.2381 31.3847 15.2381C30.1134 15.2381 28.8421 15.2381 27.5708 15.2381C25.9997 15.2381 24.4321 15.2381 22.861 15.2381C21.1831 15.2381 19.5018 15.2381 17.8239 15.2381C16.2219 15.2381 14.6198 15.2381 13.0212 15.2381C11.7016 15.2381 10.382 15.2381 9.06248 15.2381C8.21149 15.2381 7.35705 15.2381 6.50605 15.2381C6.31656 15.2381 6.13051 15.2381 5.94102 15.2381C5.02801 15.2381 4.19424 15.6667 3.705 16.4294C3.27434 17.1044 3.33635 17.884 3.33635 18.64C3.33635 19.396 3.33635 20.1554 3.33635 20.9114C3.33635 21.0632 3.33635 21.2151 3.33635 21.367C3.33635 21.9137 3.80836 22.3795 4.36995 22.3795C4.64902 22.3795 4.92809 22.3795 5.20716 22.3795C5.96514 22.3795 6.72311 22.3795 7.48108 22.3795C8.60425 22.3795 9.72398 22.3795 10.8472 22.3795C12.215 22.3795 13.5862 22.3795 14.954 22.3795C16.4527 22.3795 17.9514 22.3795 19.4501 22.3795C20.9626 22.3795 22.4751 22.3795 23.9911 22.3795C25.4002 22.3795 26.8128 22.3795 28.2219 22.3795C29.414 22.3795 30.6061 22.3795 31.7982 22.3795C32.6526 22.3795 33.5071 22.3795 34.3615 22.3795C34.768 22.3795 35.1746 22.3828 35.5811 22.3795C35.5984 22.3795 35.6156 22.3795 35.6328 22.3795C36.191 22.3795 36.6664 21.9171 36.6664 21.367C36.6664 20.3039 36.6664 19.2374 36.6664 18.1743C36.6664 18.0224 36.6664 17.8705 36.6664 17.7187C36.6664 17.1888 36.191 16.6826 35.6328 16.7062C35.0747 16.7332 34.5992 17.1517 34.5992 17.7187Z"
                fill="#8B8E9E"
              />
              <path
                d="M33.3552 21.0795C33.3552 21.6471 33.3552 22.211 33.3552 22.7786C33.3552 24.1421 33.3552 23.1282 33.3552 24.4917C33.3552 26.1337 33.3552 26.5851 33.3552 28.227C33.3552 29.6405 33.3552 31.0504 33.3552 32.4639C33.3552 33.1349 33.3658 33.8096 33.3552 34.4806C33.3552 34.5377 33.3517 34.5913 33.3447 34.6484C33.3588 34.552 33.3693 34.4592 33.3834 34.3628C33.3693 34.4592 33.3447 34.5484 33.3095 34.6412C33.3447 34.5556 33.3799 34.4699 33.4151 34.3842C33.3905 34.4413 33.3588 34.4949 33.3271 34.552C33.2461 34.6983 33.5243 34.3378 33.3482 34.5163C33.1686 34.6983 33.5278 34.4128 33.3834 34.4949C33.3271 34.527 33.2778 34.5556 33.2179 34.5841C33.3024 34.5484 33.3869 34.5127 33.4715 34.477C33.3834 34.5127 33.2919 34.5377 33.1968 34.552C33.2919 34.5377 33.3834 34.527 33.4785 34.5127C33.2074 34.5449 32.9221 34.5234 32.6474 34.5234C32.003 34.5234 31.3621 34.5234 30.7177 34.5234C29.7599 34.5234 28.8021 34.5234 27.8442 34.5234C26.6716 34.5234 25.499 34.5234 24.3299 34.5234C23.0446 34.5234 21.7593 34.5234 20.4739 34.5234C19.1781 34.5234 17.8787 34.5234 16.5828 34.5234C15.3749 34.5234 14.1671 34.5234 12.9557 34.5234C11.9381 34.5234 10.9168 34.5234 9.89916 34.5234C9.17375 34.5234 8.44834 34.5234 7.71941 34.5234C7.37783 34.5234 7.03978 34.527 6.6982 34.5234C6.63834 34.5234 6.57847 34.5199 6.51509 34.5127C6.61016 34.527 6.70172 34.5377 6.7968 34.552C6.70172 34.5377 6.61369 34.5127 6.52213 34.477C6.60664 34.5127 6.69116 34.5484 6.77567 34.5841C6.71933 34.5591 6.66651 34.527 6.61016 34.4949C6.46579 34.4128 6.82145 34.6948 6.64538 34.5163C6.46579 34.3343 6.7475 34.6983 6.66651 34.552C6.63481 34.4949 6.60664 34.4449 6.57847 34.3842C6.61368 34.4699 6.6489 34.5556 6.68411 34.6412C6.6489 34.552 6.62425 34.4592 6.61016 34.3628C6.62425 34.4592 6.63481 34.552 6.6489 34.6484C6.62777 34.4628 6.63834 34.2664 6.63834 34.0808C6.63834 33.6775 6.63834 33.2706 6.63834 32.8672C6.63834 31.5144 6.63834 30.1616 6.63834 28.8053C6.63834 27.1633 6.63834 26.7119 6.63834 25.07C6.63834 23.6458 6.63834 24.6061 6.63834 23.1819C6.63834 22.4895 6.65946 21.7934 6.63834 21.101C6.63834 21.0903 6.63834 21.0831 6.63834 21.0724C6.28619 21.4293 5.93405 21.7863 5.58191 22.1432C5.83898 22.1432 6.09604 22.1432 6.3531 22.1432C7.05386 22.1432 7.75462 22.1432 8.45538 22.1432C9.48715 22.1432 10.5154 22.1432 11.5472 22.1432C12.8114 22.1432 14.072 22.1432 15.3362 22.1432C16.7201 22.1432 18.104 22.1432 19.4844 22.1432C20.8754 22.1432 22.2663 22.1432 23.6573 22.1432C24.9602 22.1432 26.2631 22.1432 27.5625 22.1432C28.6647 22.1432 29.7634 22.1432 30.8656 22.1432C31.6579 22.1432 32.4467 22.1432 33.239 22.1432C33.6123 22.1432 33.9891 22.1468 34.3624 22.1432C34.3765 22.1432 34.3941 22.1432 34.4081 22.1432C34.961 22.1432 35.4892 21.6506 35.4646 21.0724C35.4399 20.4906 34.9997 20.0016 34.4081 20.0016C34.1511 20.0016 33.894 20.0016 33.637 20.0016C32.9362 20.0016 32.2354 20.0016 31.5347 20.0016C30.5029 20.0016 29.4747 20.0016 28.4429 20.0016C27.1787 20.0016 25.918 20.0016 24.6539 20.0016C23.2699 20.0016 21.886 20.0016 20.5056 20.0016C19.1147 20.0016 17.7237 20.0016 16.3328 20.0016C15.0298 20.0016 13.7269 20.0016 12.4275 20.0016C11.3253 20.0016 10.2266 20.0016 9.12445 20.0016C8.33213 20.0016 7.54334 20.0016 6.75102 20.0016C6.37775 20.0016 6.00096 19.998 5.62769 20.0016C5.61361 20.0016 5.596 20.0016 5.58191 20.0016C5.01145 20.0016 4.52549 20.4906 4.52549 21.0724C4.52549 21.5614 4.52549 22.054 4.52549 22.543C4.52549 23.7459 4.52549 24.9452 4.52549 26.1481C4.52549 27.6508 4.52549 25.5821 4.52549 27.0848C4.52549 28.4983 4.52549 29.9118 4.52549 31.3253C4.52549 32.239 4.52549 33.1528 4.52549 34.0666C4.52549 34.2093 4.52197 34.3521 4.52549 34.4985C4.55014 35.7013 5.4974 36.6544 6.68411 36.6651C7.09612 36.6686 7.5046 36.6651 7.9166 36.6651C8.83569 36.6651 9.75126 36.6651 10.6703 36.6651C11.9451 36.6651 13.2198 36.6651 14.4946 36.6651C15.9665 36.6651 17.435 36.6651 18.9069 36.6651C20.4106 36.6651 21.9107 36.6651 23.4143 36.6651C24.8018 36.6651 26.1927 36.6651 27.5801 36.6651C28.6929 36.6651 29.8021 36.6651 30.9149 36.6651C31.5875 36.6651 32.2636 36.6651 32.9362 36.6651C33.063 36.6651 33.1897 36.6651 33.3165 36.6651C34.5032 36.6508 35.4505 35.7013 35.4716 34.4949C35.4822 33.9666 35.4716 33.4383 35.4716 32.9101C35.4716 31.6929 35.4716 30.4757 35.4716 29.2586C35.4716 27.7416 35.4716 27.4115 35.4716 25.8945C35.4716 24.4989 35.4716 25.4878 35.4716 24.0921C35.4716 23.2069 35.4716 22.3253 35.4716 21.4401C35.4716 21.3187 35.4716 21.1938 35.4716 21.0724C35.4716 20.512 34.9857 19.9766 34.4152 20.0016C33.8412 20.0373 33.3552 20.4799 33.3552 21.0795Z"
                fill="#8B8E9E"
              />
              <path
                d="M21.1835 35.7712C21.1835 35.118 21.1835 34.4678 21.1835 33.8146C21.1835 32.2487 21.1835 30.6858 21.1835 29.1199C21.1835 27.226 21.1835 25.335 21.1835 23.441C21.1835 21.8065 21.1835 20.1721 21.1835 18.5376C21.1835 17.7472 21.1993 16.9568 21.1835 16.1664C21.1835 16.1545 21.1835 16.1425 21.1835 16.1336C21.1835 15.6653 20.6391 15.2179 20 15.2388C19.357 15.2597 18.8166 15.6325 18.8166 16.1336C18.8166 16.7868 18.8166 17.437 18.8166 18.0902C18.8166 19.6561 18.8166 21.219 18.8166 22.7848C18.8166 24.6788 18.8166 26.5698 18.8166 28.4638C18.8166 30.0982 18.8166 31.7327 18.8166 33.3672C18.8166 34.1576 18.8008 34.948 18.8166 35.7384C18.8166 35.7503 18.8166 35.7622 18.8166 35.7712C18.8166 36.2395 19.361 36.6868 20 36.666C20.6431 36.6451 21.1835 36.2752 21.1835 35.7712Z"
                fill="#8B8E9E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.0001 12.8572C19.8703 12.8572 19.7886 12.8572 19.6745 12.8572H15.896C14.9721 12.8572 14.0451 12.6178 13.2686 12.1116C12.5165 11.6238 11.875 10.9273 11.5098 10.102C11.0923 9.16004 10.9695 8.16903 11.1568 7.15347C11.3195 6.25758 11.7921 5.40463 12.4275 4.75725C13.729 3.42568 15.8193 2.95012 17.5566 3.66499C18.4713 4.03931 19.2264 4.6376 19.7881 5.45372C19.8629 5.5624 19.9324 5.67471 19.9968 5.79007C20.6277 4.66525 21.7303 3.79892 22.983 3.48308C23.8944 3.25297 24.9071 3.28059 25.7879 3.61808C26.7177 3.97399 27.4726 4.55387 28.0618 5.35466C29.1727 6.8642 29.2095 9.04567 28.2091 10.6196C27.7304 11.3744 27.0338 12.0218 26.2144 12.393C25.7111 12.617 25.2263 12.7551 24.68 12.8226C24.3957 12.8591 24.1091 12.8579 23.8241 12.8567C23.7738 12.8565 23.7236 12.8563 23.6735 12.8563H20.3255C20.2119 12.8563 20.1291 12.8571 20.0001 12.8572ZM18.7475 11.0193V8.09539C18.7475 7.9738 18.7414 7.85375 18.7291 7.73523C18.6859 7.47607 18.6193 7.22398 18.5267 6.97897C18.4388 6.78707 18.3347 6.60046 18.2165 6.42325C18.1996 6.39871 18.182 6.37416 18.1643 6.34962C18.1584 6.34139 18.1525 6.33317 18.1466 6.32494C18.1372 6.31349 18.1277 6.30211 18.1183 6.29133C18.0446 6.20542 17.9679 6.11951 17.8881 6.03974C17.8021 5.9569 17.7131 5.87406 17.621 5.79735C17.621 5.79735 17.6177 5.79402 17.6155 5.79171L17.6136 5.78979C17.5956 5.77717 17.5776 5.76425 17.5597 5.75133C17.5351 5.73369 17.5105 5.71605 17.486 5.69917C17.3126 5.58274 17.1297 5.48304 16.9393 5.39585C16.7108 5.30948 16.4761 5.24485 16.2352 5.20306C15.9652 5.17566 15.6952 5.17524 15.4251 5.2018C15.1777 5.24506 14.9368 5.30978 14.7024 5.39831C14.5104 5.4862 14.3237 5.59024 14.1464 5.70838C14.1219 5.72525 14.0973 5.74289 14.0728 5.76053C14.0645 5.76645 14.0563 5.77237 14.048 5.77826C14.0366 5.78769 14.0252 5.79712 14.0144 5.80656C13.9285 5.88019 13.8425 5.9569 13.7627 6.03667C13.6799 6.12258 13.597 6.21155 13.5203 6.3036C13.5203 6.3036 13.5169 6.30688 13.5146 6.30914L13.5127 6.31103C13.5001 6.32902 13.4871 6.347 13.4742 6.36498C13.4566 6.38952 13.4389 6.41406 13.422 6.4386C13.3056 6.61189 13.2058 6.79473 13.1186 6.98503C13.0322 7.21347 12.9675 7.44805 12.9257 7.68879C12.8983 7.95872 12.8979 8.22866 12.9244 8.49859C12.9677 8.74588 13.0325 8.98669 13.121 9.22103C13.209 9.41292 13.313 9.59953 13.4312 9.77674C13.4481 9.80129 13.4658 9.82584 13.4834 9.85039C13.4893 9.85861 13.4953 9.86684 13.5011 9.87506C13.5106 9.88651 13.52 9.89788 13.5295 9.90867C13.6031 9.99457 13.6799 10.0805 13.7597 10.1603C13.8456 10.2431 13.9346 10.3259 14.0267 10.4026C14.0267 10.4026 14.03 10.406 14.0323 10.4083L14.0341 10.4102C14.0521 10.4228 14.0701 10.4357 14.0881 10.4487C14.1127 10.4663 14.1372 10.4839 14.1618 10.5008C14.3351 10.6172 14.5181 10.7169 14.7084 10.8041C14.9355 10.89 15.1687 10.9543 15.4079 10.9961C15.6838 11.0232 15.9627 11.0217 16.2408 11.0201C16.306 11.0197 16.3712 11.0193 16.4362 11.0193H18.7475ZM21.2461 11.0093H23.6888C23.738 11.0093 23.7873 11.0095 23.8366 11.0097C24.0784 11.0107 24.3213 11.0117 24.563 10.9884C24.8109 10.9452 25.0524 10.8804 25.2873 10.7916C25.4792 10.7037 25.6658 10.5997 25.8431 10.4816C25.8676 10.4647 25.8922 10.447 25.9167 10.4294C25.925 10.4235 25.9332 10.4176 25.9414 10.4117C25.9529 10.4023 25.9643 10.3928 25.975 10.3834C26.061 10.3097 26.1469 10.233 26.2267 10.1533C26.3095 10.0674 26.3924 9.97839 26.4691 9.88634C26.4691 9.88634 26.4724 9.88306 26.4747 9.8808L26.4767 9.87889C26.4893 9.86092 26.5022 9.84295 26.5151 9.82498C26.5328 9.80043 26.5504 9.77589 26.5673 9.75134C26.6838 9.57806 26.7835 9.39521 26.8707 9.20492C26.9571 8.97646 27.0217 8.74186 27.0635 8.50111C27.0909 8.23119 27.0913 7.96126 27.0648 7.69134C27.0215 7.44404 26.9568 7.20322 26.8682 6.96888C26.7803 6.77699 26.6763 6.59039 26.5581 6.41318C26.5412 6.38863 26.5236 6.36407 26.5059 6.33952C26.5 6.33131 26.4941 6.32309 26.4882 6.31488C26.4788 6.30343 26.4694 6.29204 26.4599 6.28125C26.3863 6.19534 26.3095 6.10943 26.2298 6.02966C26.1438 5.94682 26.0548 5.86398 25.9628 5.78728C25.9628 5.78728 25.9595 5.78394 25.9572 5.78163L25.9553 5.7797C25.9373 5.76708 25.9194 5.75416 25.9014 5.74125C25.8768 5.72361 25.8523 5.70597 25.8277 5.68909C25.6544 5.57266 25.4715 5.47296 25.2812 5.38576C25.0527 5.29939 24.8181 5.23477 24.5773 5.19298C24.3073 5.16558 24.0373 5.16516 23.7674 5.19172C23.52 5.23498 23.2792 5.29969 23.0448 5.38823C22.8529 5.47611 22.6662 5.58016 22.489 5.6983C22.4644 5.71517 22.4399 5.73281 22.4153 5.75046C22.4071 5.75637 22.3988 5.76229 22.3906 5.76817C22.3792 5.77761 22.3678 5.78704 22.357 5.79648C22.2711 5.87012 22.1852 5.94682 22.1054 6.02659C22.0225 6.1125 21.9397 6.20148 21.8629 6.29352C21.8629 6.29352 21.8596 6.29681 21.8573 6.29907L21.8554 6.30098C21.8427 6.31896 21.8298 6.33694 21.8169 6.35491C21.7993 6.37945 21.7816 6.40399 21.7647 6.42852C21.6483 6.60182 21.5486 6.78467 21.4614 6.97497C21.3748 7.20384 21.3101 7.43888 21.2683 7.68008C21.254 7.81735 21.2461 7.95342 21.2461 8.09147V11.0093ZM21.5192 6.83045L21.5022 6.87123C21.5078 6.85762 21.5135 6.84402 21.5192 6.83045ZM21.7985 6.37023C21.7985 6.36105 21.8172 6.33979 21.8348 6.32157C21.8155 6.34728 21.7985 6.37023 21.7985 6.37023ZM22.9063 5.44364C22.9191 5.43823 22.9319 5.4329 22.9447 5.42763L22.9063 5.44364ZM25.4257 5.44364L25.385 5.42665C25.3986 5.43224 25.4122 5.4379 25.4257 5.44364ZM25.8861 5.72284C25.8952 5.72284 25.9165 5.74151 25.9347 5.75914C25.909 5.73987 25.8861 5.72284 25.8861 5.72284ZM26.8128 6.83045C26.8182 6.84322 26.8235 6.85601 26.8288 6.86882L26.8128 6.83045ZM26.8128 9.34941L26.8298 9.3087C26.8242 9.32229 26.8185 9.33586 26.8128 9.34941ZM26.5336 9.80964C26.5336 9.81882 26.5149 9.84007 26.4973 9.8583C26.5165 9.83259 26.5336 9.80964 26.5336 9.80964ZM25.4257 10.7362C25.413 10.7416 25.4002 10.747 25.3873 10.7522L25.4257 10.7362ZM14.5639 10.7463L14.6046 10.7633C14.591 10.7577 14.5774 10.752 14.5639 10.7463ZM14.1034 10.4671C14.0943 10.4671 14.073 10.4484 14.0548 10.4308C14.0805 10.45 14.1034 10.4671 14.1034 10.4671ZM13.1765 9.35947C13.1711 9.34669 13.1657 9.33389 13.1605 9.32107L13.1765 9.35947ZM13.1765 6.84052L13.1595 6.88128C13.1651 6.86767 13.1707 6.85409 13.1765 6.84052ZM13.4558 6.3803C13.4558 6.37112 13.4745 6.34987 13.4921 6.33165C13.4728 6.35736 13.4558 6.3803 13.4558 6.3803ZM14.5639 5.45372C14.5767 5.44831 14.5895 5.44298 14.6023 5.43772L14.5639 5.45372ZM17.0839 5.45372L17.0431 5.43674C17.0567 5.44232 17.0703 5.44798 17.0839 5.45372ZM17.5443 5.73292C17.5535 5.73292 17.5747 5.75159 17.593 5.76921C17.5673 5.74995 17.5443 5.73292 17.5443 5.73292ZM18.4713 6.84052C18.4767 6.8533 18.482 6.86611 18.4873 6.87893L18.4713 6.84052Z"
                fill="#8B8E9E"
              />
            </svg>
          </div>,
          giftTarget,
        )}
    </>
  );
};

export const BasketWithProvider: FC = () => (
  <Provider store={store}>
    <Basket />
  </Provider>
);
