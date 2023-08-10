import { FC } from 'react';

export const PizzasPage: FC = () => {
  return (
    <section className="pizza">
      <div className="container">
        <div className="pizza__titleMain">
          <div className="pizza__titleMain-title">Пицца</div>
          <button className="pizza__titleMain-gift">
            <div className="icon-basket"></div>
          </button>
        </div>
        <div className="pizza__sortFilter">
          <div className="pizza__sortFilter-item">
            <a href="#" className="pizza__sortFilter-itemLink filtered">
              <div className="icon-filter"></div>
              Фильтр
            </a>
          </div>
          <div className="pizza__sortFilter-item">
            <a href="#" className="pizza__sortFilter-itemLink">
              <div className="icon-sort"></div>
              Сортировать по цене
            </a>
          </div>
          <div className="pizza__sortFilter-item">
            <a href="#" className="pizza__sortFilter-itemLink reset">
              <div className="icon-x"></div>
              Сбросить фильтры
            </a>
          </div>
        </div>
        <div className="pizza__filter">
          <div className="pizza__filter-box">
            <button className="pizza__filter-button pizza__filter-button--active">
              Авокадо
              <div className="icon-x"></div>
            </button>
            <button className="pizza__filter-button pizza__filter-button--active">
              Лосось
              <div className="icon-x"></div>
            </button>
            <button className="pizza__filter-button ">Моллюски</button>
            <button className="pizza__filter-button pizza__filter-button--unavailable">
              Мясо
            </button>
            <button className="pizza__filter-button ">Тунец</button>
            <button className="pizza__filter-button pizza__filter-button--unavailable">
              Вегетарианская
            </button>
            <button className="pizza__filter-button ">Ракообразные</button>
            <button className="pizza__filter-button ">Сыр</button>
          </div>
          <button className="pizza__filter-btnDone">Применить</button>
        </div>
        <div className="pizza__grid">
          <div className="pizza__gridTop">
            <div className="pizza__grid-item pizza__grid-item">
              <img
                className="card"
                data-pic="1"
                src="./img/pizza/1.png"
                alt=""
              />
              <div className="pizza__grid-info">
                <div className="pizza__grid-infoTitle">Дьябло</div>
                <div className="pizza__grid-infoText">
                  Томатный неаполитанский coус, буженина из свинины, красный
                  лук, сладкая кукуруза, болгарский перец, моцарелла, колбаски
                  BBQ
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
            <div className="pizza__grid-item pizza__grid-item">
              <img
                data-pic="2"
                className="card"
                src="./img/pizza/2.png"
                alt=""
              />
              <div className="pizza__grid-info">
                <div className="pizza__grid-infoTitle">Дьябло</div>
                <div className="pizza__grid-infoText">
                  Томатный неаполитанский coус, буженина из свинины, красный
                  лук, сладкая кукуруза, болгарский перец, моцарелла, колбаски
                  BBQ
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
            <div className="pizza__grid-item pizza__grid-item">
              <img
                data-pic="3"
                className="card"
                src="./img/pizza/3.png"
                alt=""
              />
              <div className="pizza__grid-info">
                <div className="pizza__grid-infoTitle">Дьябло</div>
                <div className="pizza__grid-infoText">
                  Томатный неаполитанский coус, буженина из свинины, красный
                  лук, сладкая кукуруза, болгарский перец, моцарелла, колбаски
                  BBQ
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
            <div className="pizza__grid-item pizza__grid-item">
              <img
                data-pic="4"
                className="card"
                src="./img/pizza/4.png"
                alt=""
              />
              <div className="pizza__grid-info">
                <div className="pizza__grid-infoTitle">Дьябло</div>
                <div className="pizza__grid-infoText">
                  Томатный неаполитанский coус, буженина из свинины, красный
                  лук, сладкая кукуруза, болгарский перец, моцарелла, колбаски
                  BBQ
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
          </div>
          <div className="pizza__gridMiddle">
            <div className="pizza__grid-item pizza__grid-item">
              <img
                data-pic="5"
                className="card"
                src="./img/pizza/5.png"
                alt=""
              />
              <div className="pizza__grid-info">
                <div className="pizza__grid-infoTitle">Дьябло</div>
                <div className="pizza__grid-infoText">
                  Томатный неаполитанский coус, буженина из свинины, красный
                  лук, сладкая кукуруза, болгарский перец, моцарелла, колбаски
                  BBQ
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
            <div className="pizza__grid-item pizza__grid-item">
              <img
                data-pic="6"
                className="card"
                src="./img/pizza/6.png"
                alt=""
              />
              <div className="pizza__grid-info">
                <div className="pizza__grid-infoTitle">Дьябло</div>
                <div className="pizza__grid-infoText">
                  Томатный неаполитанский coус, буженина из свинины, красный
                  лук, сладкая кукуруза, болгарский перец, моцарелла, колбаски
                  BBQ
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
            <div className="pizza__grid-item pizza__grid-item">
              <img
                data-pic="7"
                className="card"
                src="./img/pizza/7.png"
                alt=""
              />
              <div className="pizza__grid-info">
                <div className="pizza__grid-infoTitle">Дьябло</div>
                <div className="pizza__grid-infoText">
                  Томатный неаполитанский coус, буженина из свинины, красный
                  лук, сладкая кукуруза, болгарский перец, моцарелла, колбаски
                  BBQ
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
          </div>
          <div className="pizza__gridBottom">
            <div className="pizza__grid-item">
              <img
                data-pic="8"
                className="card"
                src="./img/pizza/8.png"
                alt=""
              />
              <div className="pizza__grid-info">
                <div className="pizza__grid-infoTitle">Дьябло</div>
                <div className="pizza__grid-infoText">
                  Томатный неаполитанский coус, буженина из свинины, красный
                  лук, сладкая кукуруза, болгарский перец, моцарелла, колбаски
                  BBQ
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
            <div className="pizza__grid-item">
              <img
                data-pic="9"
                className="card"
                src="./img/pizza/9.png"
                alt=""
              />
              <div className="pizza__grid-info">
                <div className="pizza__grid-infoTitle">Дьябло</div>
                <div className="pizza__grid-infoText">
                  Томатный неаполитанский coус, буженина из свинины, красный
                  лук, сладкая кукуруза, болгарский перец, моцарелла, колбаски
                  BBQ
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
            <div className="pizza__grid-item">
              <img
                data-pic="10"
                className="card"
                src="./img/pizza/10.png"
                alt=""
              />
              <div className="pizza__grid-info">
                <div className="pizza__grid-infoTitle">Дьябло</div>
                <div className="pizza__grid-infoText">
                  Томатный неаполитанский coус, буженина из свинины, красный
                  лук, сладкая кукуруза, болгарский перец, моцарелла, колбаски
                  BBQ
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
            <div className="pizza__grid-item">
              <img
                data-pic="11"
                className="card"
                src="./img/pizza/11.png"
                alt=""
              />
              <div className="pizza__grid-info">
                <div className="pizza__grid-infoTitle">Дьябло</div>
                <div className="pizza__grid-infoText">
                  Томатный неаполитанский coус, буженина из свинины, красный
                  лук, сладкая кукуруза, болгарский перец, моцарелла, колбаски
                  BBQ
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
            <div className="pizza__grid-item">
              <img
                data-pic="12"
                className="card"
                src="./img/pizza/12.png"
                alt=""
              />
              <div className="pizza__grid-info">
                <div className="pizza__grid-infoTitle">Дьябло</div>
                <div className="pizza__grid-infoText">
                  Томатный неаполитанский coус, буженина из свинины, красный
                  лук, сладкая кукуруза, болгарский перец, моцарелла, колбаски
                  BBQ
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
          </div>
        </div>
        <div id="modalBasket" className="modalBasket">
          <div className="modalBasket__container">
            <div className="modalBasket__order">
              <div className="modalBasket__order-item">
                <img src="./img/pizza/1.png" alt="" />
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
                <img src="./img/pizza/1.png" alt="" />
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
                <img src="./img/pizza/1.png" alt="" />
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
      </div>
    </section>
  );
};
