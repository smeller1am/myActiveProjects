import { FC } from 'react';

export const DiscountsPage: FC = () => (
  <div className="wrapper">
    <div className="container">
      <div className="titleMain">
        <div className="titleMain__title">Акции и скидки</div>
      </div>
      <div className="gridCard">
        <div className="gridCard__top">
          <div className="gridCard__item">
            <img src="./img/discounts/1.png" alt="" />
            <div className="gridCard__itemBlock">
              <div className="textContainer">
                <div className="gridCard__text">Бесплатная доставка</div>
                <div className="gridCard__textBold">
                  бизнес-ланчей
                </div>
                <div className="gridCard__text">по Саратову</div>
                <div className="gridCard__price">
                  При заказе от 600 ₽{' '}
                </div>
              </div>
              <a href="#" className="gridCard__link">
                <a className="linkAfter">
                  <svg
                      className="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                  >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.92889 12.0077L17.1753 20.2872C17.5656 20.679 17.5655 21.3142 17.1751 21.7059C16.7845 22.0978 16.1511 22.0977 15.7607 21.7057L6.80927 12.7184C6.43731 12.345 6.41991 11.7506 6.75702 11.3565C6.77806 11.3307 6.80057 11.3057 6.82455 11.2816L15.7759 2.29435C16.1664 1.9023 16.7998 1.9022 17.1904 2.29412C17.5808 2.68587 17.5809 3.32098 17.1906 3.71286L8.92889 12.0077Z"
                        fill="white"
                    />
                  </svg>
                </a>В каталог
              </a>
            </div>
          </div>
          <div className="gridCard__item">
            <img src="./img/discounts/2.png" alt="" />
            <div className="gridCard__itemBlock">
              <div className="textContainer">
                <div className="gridCard__text">
                  Порция роллов или картошка фри
                </div>
                <div className="gridCard__textBold gridCard__textBold--orange">В ПОДАРОК</div>
                <div className="gridCard__price">
                  При заказе от 1000 ₽{' '}
                </div>
              </div>
              <a href="#" className="gridCard__link">
                <a className="linkAfter"><svg
                      className="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                  >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.92889 12.0077L17.1753 20.2872C17.5656 20.679 17.5655 21.3142 17.1751 21.7059C16.7845 22.0978 16.1511 22.0977 15.7607 21.7057L6.80927 12.7184C6.43731 12.345 6.41991 11.7506 6.75702 11.3565C6.77806 11.3307 6.80057 11.3057 6.82455 11.2816L15.7759 2.29435C16.1664 1.9023 16.7998 1.9022 17.1904 2.29412C17.5808 2.68587 17.5809 3.32098 17.1906 3.71286L8.92889 12.0077Z"
                        fill="white"
                    />
                  </svg></a>В каталог
              </a>
            </div>
          </div>
          <div className="gridCard__item">
            <img src="./img/discounts/3.png" alt="" />
            <div className="gridCard__itemBlock">
              <div className="textContainer">
                <div className="gridCard__text">Пицца</div>
                <div className="gridCard__textBold gridCard__textBold--orange">В ПОДАРОК</div>
                <div className="gridCard__price">
                  При заказе от 1500 ₽{' '}
                </div>
              </div>
              <a href="#" className="gridCard__link">
                <a className="linkAfter"><svg
                      className="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                  >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.92889 12.0077L17.1753 20.2872C17.5656 20.679 17.5655 21.3142 17.1751 21.7059C16.7845 22.0978 16.1511 22.0977 15.7607 21.7057L6.80927 12.7184C6.43731 12.345 6.41991 11.7506 6.75702 11.3565C6.77806 11.3307 6.80057 11.3057 6.82455 11.2816L15.7759 2.29435C16.1664 1.9023 16.7998 1.9022 17.1904 2.29412C17.5808 2.68587 17.5809 3.32098 17.1906 3.71286L8.92889 12.0077Z"
                        fill="white"
                    />
                  </svg></a>В каталог
              </a>
            </div>
          </div>
          <div className="gridCard__item">
            <img src="./img/discounts/4.png" alt="" />
            <div className="gridCard__itemBlock">
              <div className="textContainer">
                <div className="gridCard__textBold gridCard__textBold--orange">
                  {' '}
                  Скидка 10%
                </div>
                <div className="gridCard__text">на заказ</div>
                <div className="gridCard__price">
                  В будни с 10:00 до 14:00{' '}
                </div>
              </div>
              <a href="#" className="gridCard__link">
                <a className="linkAfter"><svg
                      className="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                  >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.92889 12.0077L17.1753 20.2872C17.5656 20.679 17.5655 21.3142 17.1751 21.7059C16.7845 22.0978 16.1511 22.0977 15.7607 21.7057L6.80927 12.7184C6.43731 12.345 6.41991 11.7506 6.75702 11.3565C6.77806 11.3307 6.80057 11.3057 6.82455 11.2816L15.7759 2.29435C16.1664 1.9023 16.7998 1.9022 17.1904 2.29412C17.5808 2.68587 17.5809 3.32098 17.1906 3.71286L8.92889 12.0077Z"
                        fill="white"
                    />
                  </svg></a>В каталог
              </a>
            </div>
          </div>
        </div>
        <div className="gridCard__bottom">
          <div className="gridCard__item">
            <img src="./img/discounts/5.png" alt="" />
            <div className="gridCard__itemBlock">
              <div className="textContainer">
                <div className="gridCard__text">
                  Порция роллов или картошка фри
                </div>
                <div className="gridCard__textBold gridCard__textBold--orange">В ПОДАРОК</div>
                <div className="gridCard__price">
                  При самовывозе заказа от 800 ₽{' '}
                </div>
              </div>
              <a href="#" className="gridCard__link">
                <a className="linkAfter"><svg
                      className="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                  >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.92889 12.0077L17.1753 20.2872C17.5656 20.679 17.5655 21.3142 17.1751 21.7059C16.7845 22.0978 16.1511 22.0977 15.7607 21.7057L6.80927 12.7184C6.43731 12.345 6.41991 11.7506 6.75702 11.3565C6.77806 11.3307 6.80057 11.3057 6.82455 11.2816L15.7759 2.29435C16.1664 1.9023 16.7998 1.9022 17.1904 2.29412C17.5808 2.68587 17.5809 3.32098 17.1906 3.71286L8.92889 12.0077Z"
                        fill="white"
                    />
                  </svg></a>В каталог
              </a>
            </div>
          </div>
          <div className="gridCard__item">
            <img src="./img/discounts/6.png" alt="" />
            <div className="gridCard__itemBlock">
              <div className="textContainer">
                <div className="gridCard__text">Сырные закуски</div>
                <div className="gridCard__textBold">В ПОДАРОК</div>
                <div className="gridCard__price">При заказе 2-х пицц</div>
              </div>
              <a href="#" className="gridCard__link">
                <a className="linkAfter"><svg
                      className="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                  >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.92889 12.0077L17.1753 20.2872C17.5656 20.679 17.5655 21.3142 17.1751 21.7059C16.7845 22.0978 16.1511 22.0977 15.7607 21.7057L6.80927 12.7184C6.43731 12.345 6.41991 11.7506 6.75702 11.3565C6.77806 11.3307 6.80057 11.3057 6.82455 11.2816L15.7759 2.29435C16.1664 1.9023 16.7998 1.9022 17.1904 2.29412C17.5808 2.68587 17.5809 3.32098 17.1906 3.71286L8.92889 12.0077Z"
                        fill="white"
                    />
                  </svg></a>В каталог
              </a>
            </div>
          </div>
          <div className="gridCard__item">
            <img src="./img/discounts/7.png" alt="" />
            <div className="gridCard__itemBlock">
              <div className="textContainer">
                <div className="gridCard__text">Пицца</div>
                <div className="gridCard__textBold">В ПОДАРОК</div>
                <div className="gridCard__price">При заказе 3-х пицц</div>
              </div>
              <a href="#" className="gridCard__link">
                <a className="linkAfter"><svg
                      className="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                  >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.92889 12.0077L17.1753 20.2872C17.5656 20.679 17.5655 21.3142 17.1751 21.7059C16.7845 22.0978 16.1511 22.0977 15.7607 21.7057L6.80927 12.7184C6.43731 12.345 6.41991 11.7506 6.75702 11.3565C6.77806 11.3307 6.80057 11.3057 6.82455 11.2816L15.7759 2.29435C16.1664 1.9023 16.7998 1.9022 17.1904 2.29412C17.5808 2.68587 17.5809 3.32098 17.1906 3.71286L8.92889 12.0077Z"
                        fill="white"
                    />
                  </svg></a>В каталог
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="modalBasket">
        <div className="modalBasket__order">
          <div className="modalBasket__order-item">
            <img src="./img/pizza/1.png" alt="" />
            <div className="modalBasket__order-itemText">
              <div className="modalBasket__order-itemTitle">Дьябло</div>
              <div className="modalBasket__order-itemPrice">480 P</div>
            </div>
            <div className="modalBasket__order-plusMinus">
              <button className="modalBasket__order-plus">-</button>
              <div className="modalBasket__order-digital">1</div>
              <button className="modalBasket__order-minus">+</button>
            </div>
          </div>
          <div className="modalBasket__order-item">
            <img src="./img/pizza/1.png" alt="" />
            <div className="modalBasket__order-itemText">
              <div className="modalBasket__order-itemTitle">Дьябло</div>
              <div className="modalBasket__order-itemPrice">480 P</div>
            </div>
            <div className="modalBasket__order-plusMinus">
              <button className="modalBasket__order-plus">-</button>
              <div className="modalBasket__order-digital">1</div>
              <button className="modalBasket__order-minus">+</button>
            </div>
          </div>
          <div className="modalBasket__order-item">
            <img src="./img/pizza/1.png" alt="" />
            <div className="modalBasket__order-itemText">
              <div className="modalBasket__order-itemTitle">Дьябло</div>
              <div className="modalBasket__order-itemPrice">480 P</div>
            </div>
            <div className="modalBasket__order-plusMinus">
              <button className="modalBasket__order-plus">-</button>
              <div className="modalBasket__order-digital">1</div>
              <button className="modalBasket__order-minus">+</button>
            </div>
          </div>
        </div>
        <button className="modalBasket__checkout">Оформить заказ</button>
        <button className="modalBasket__clearBasket">Очистить корзину</button>
      </div>
    </div>
  </div>
);
