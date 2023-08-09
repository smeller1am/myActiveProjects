import { FC } from 'react';

export const DiscountsPage: FC = () => (
  <div className="discounts">
    <div className="container">
      <div className="discounts__titleMain">
        <div className="discounts__titleMain-title">Акции и скидки</div>
      </div>
      <div className="discounts__grid">
        <div className="discounts__gridTop">
          <div className="discounts__grid-item">
            <img src="./img/discounts/1.png" alt="" />
            <div className="discounts__grid-itemBlock">
              <div className="discounts__textContainer">
                <div className="discounts__grid-text">Бесплатная доставка</div>
                <div className="discounts__grid-textBoldWhite">
                  бизнес-ланчей
                </div>
                <div className="discounts__grid-text">по Саратову</div>
                <div className="discounts__grid-price">
                  При заказе от 600 ₽{' '}
                </div>
              </div>
              <a href="#" className="discounts__grid-link">
                <button className="linkAfter">{'>'}</button>В каталог
              </a>
            </div>
          </div>
          <div className="discounts__grid-item">
            <img src="./img/discounts/2.png" alt="" />
            <div className="discounts__grid-itemBlock">
              <div className="discounts__textContainer">
                <div className="discounts__grid-text">
                  Порция роллов или картошка фри
                </div>
                <div className="discounts__grid-textBoldOrange">В ПОДАРОК</div>
                <div className="discounts__grid-price">
                  При заказе от 1000 ₽{' '}
                </div>
              </div>
              <a href="#" className="discounts__grid-link">
                <button className="linkAfter">{'>'}</button>В каталог
              </a>
            </div>
          </div>
          <div className="discounts__grid-item">
            <img src="./img/discounts/3.png" alt="" />
            <div className="discounts__grid-itemBlock">
              <div className="discounts__textContainer">
                <div className="discounts__grid-text">Пицца</div>
                <div className="discounts__grid-textBoldOrange">В ПОДАРОК</div>
                <div className="discounts__grid-price">
                  При заказе от 1500 ₽{' '}
                </div>
              </div>
              <a href="#" className="discounts__grid-link">
                <button className="linkAfter">{'>'}</button>В каталог
              </a>
            </div>
          </div>
          <div className="discounts__grid-item">
            <img src="./img/discounts/4.png" alt="" />
            <div className="discounts__grid-itemBlock">
              <div className="discounts__textContainer">
                <div className="discounts__grid-textBoldOrange">
                  {' '}
                  Скидка 10%
                </div>
                <div className="discounts__grid-text">на заказ</div>
                <div className="discounts__grid-price">
                  В будни с 10:00 до 14:00{' '}
                </div>
              </div>
              <a href="#" className="discounts__grid-link">
                <button className="linkAfter">{'>'}</button>В каталог
              </a>
            </div>
          </div>
        </div>
        <div className="discounts__gridBottom">
          <div className="discounts__grid-item">
            <img src="./img/discounts/5.png" alt="" />
            <div className="discounts__grid-itemBlock">
              <div className="discounts__textContainer">
                <div className="discounts__grid-text">
                  Порция роллов или картошка фри
                </div>
                <div className="discounts__grid-textBoldOrange">В ПОДАРОК</div>
                <div className="discounts__grid-price">
                  При самовывозе заказа от 800 ₽{' '}
                </div>
              </div>
              <a href="#" className="discounts__grid-link">
                <button className="linkAfter">{'>'}</button>В каталог
              </a>
            </div>
          </div>
          <div className="discounts__grid-item">
            <img src="./img/discounts/6.png" alt="" />
            <div className="discounts__grid-itemBlock">
              <div className="discounts__textContainer">
                <div className="discounts__grid-text">Сырные закуски</div>
                <div className="discounts__grid-textBoldWhite">В ПОДАРОК</div>
                <div className="discounts__grid-price">При заказе 2-х пицц</div>
              </div>
              <a href="#" className="discounts__grid-link">
                <button className="linkAfter">{'>'}</button>В каталог
              </a>
            </div>
          </div>
          <div className="discounts__grid-item">
            <img src="./img/discounts/7.png" alt="" />
            <div className="discounts__grid-itemBlock">
              <div className="discounts__textContainer">
                <div className="discounts__grid-text">Пицца</div>
                <div className="discounts__grid-textBoldWhite">В ПОДАРОК</div>
                <div className="discounts__grid-price">При заказе 3-х пицц</div>
              </div>
              <a href="#" className="discounts__grid-link">
                <button className="linkAfter">{'>'}</button>В каталог
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
