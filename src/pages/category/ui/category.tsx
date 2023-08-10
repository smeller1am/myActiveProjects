import { SubCategory } from '@/widgets/sub-category';
import { FC } from 'react';

export const CategoryPage: FC = () => {
  return (
    <div className="rolls">
      <div className="container">
        <div className="rolls__titleMain">
          <div className="rolls__titleMain-title">Роллы</div>
          <button className="pizza__titleMain-gift">
            <div className="icon-basket"></div>
          </button>
        </div>
        <div className="rolls__sortFilter">
          <div className="rolls__sortFilter-item">
            <a href="#" className="rolls__sortFilter-itemLink filtered">
              <div className="icon-filter"></div>
              Фильтр
            </a>
          </div>
          <div className="rolls__sortFilter-item">
            <a href="#" className="rolls__sortFilter-itemLink">
              <div className="icon-sort"></div>
              Сортировать по цене
            </a>
          </div>
          <div className="rolls__sortFilter-item">
            <a href="#" className="rolls__sortFilter-itemLink reset">
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
            <button className="pizza__filter-button">Моллюски</button>
            <button className="pizza__filter-button pizza__filter-button--unavailable">
              Мясо
            </button>
            <button className="pizza__filter-button">Тунец</button>
            <button className="pizza__filter-button pizza__filter-button--unavailable">
              Вегетарианская
            </button>
            <button className="pizza__filter-button">Ракообразные</button>
            <button className="pizza__filter-button">Сыр</button>
          </div>
          <button className="pizza__filter-btnDone">Применить</button>
        </div>
        <SubCategory title="Хосомаки" />
        <SubCategory title="Урамаки" />
        <div id="modalBasket" className="modalBasket">
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
        <div id="modalFood" className="modalFood">
          <div className="modalFood__grid">
            <img src="/img/pizza/5.jpg" alt="" />
            <div className="modalFood__info">
              <button id="modalClose" className="modalFood__info-button">
                <div className="icon-x"></div>
              </button>
              <div className="modalFood__info-block">
                <div className="modalFood__info-title">Дьябло</div>
                <div className="modalFood__info-textGr">680 г</div>
                <div className="modalFood__info-text">
                  Томатный неаполитанский coус, буженина из свинины, красный
                  лук, сладкая кукуруза, болгарский перец, моцарелла, колбаски
                  BBQ, томаты
                </div>
                <div className="table">
                  <div className="table__item">
                    <div className="table__item-top">Вес</div>
                    <div className="table__item-bottom">680 г</div>
                  </div>
                  <div className="table__item">
                    <div className="table__item-top">Порция</div>
                    <div className="table__item-bottom">6 штук</div>
                  </div>
                  <div className="table__item">
                    <div className="table__item-top">Ккал</div>
                    <div className="table__item-bottom">1198</div>
                  </div>
                  <div className="table__item">
                    <div className="table__item-top">Б/Ж/У</div>
                    <div className="table__item-bottom">
                      36,2 г / 95.5 г / 48.3 г
                    </div>
                  </div>
                </div>
              </div>
              <div className="modalFood__info-box">
                <div className="modalFood__info-boxPrice">480 ₽</div>
                <div className="modalFood__info-boxButton">
                  <button className="modalFood__info-btnLike">
                    <div className="icon-like"></div>
                  </button>
                  <button className="modalFood__info-btnBasket">
                    <div className="icon-basket"></div>В корзину
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
