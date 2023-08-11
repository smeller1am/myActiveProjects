import { FC } from 'react';
// server not implemented
// import { SubCategory } from './sub-category';
import { ProductList } from '@/widgets/product-list';
import { getCategories, getProducts } from '@/shared/api';

export interface CategoryPageProps {
  categoryId: string;
}

const getCategoryById = async (categoryId: string) => {
  const categories = await getCategories();

  return categories?.find(({ Id }) => Id.toString() === categoryId);
};

export const CategoryPage: FC<CategoryPageProps> = async ({ categoryId }) => {
  const products = await getProducts({
    categoryId,
  });

  const categoryName = (await getCategoryById(categoryId))?.Name;

  return (
    <div className="wrapper">
      <div className="container" id="category">
        <div className="titleMain">
          <div className="titleMain__title">{categoryName}</div>
          <button className="titleMain__gift">
            <div className="icon-basket"></div>
          </button>
        </div>
        <div className="sortFilter">
          <div className="sortFilter__item">
            <a href="#" className="sortFilter__itemLink filtered">
              <div className="icon-filter"></div>
              Фильтр
            </a>
          </div>
          <div className="sortFilter__item">
            <a href="#" className="sortFilter__itemLink">
              <div className="icon-sort"></div>
              Сортировать по цене
            </a>
          </div>
          <div className="sortFilter__item">
            <a href="#" className="sortFilter__itemLink reset">
              <div className="icon-x"></div>
              Сбросить фильтры
            </a>
          </div>
        </div>
        <div className="filter">
          <div className="filter__box">
            <button className="filter__button filter__button--active">
              Авокадо
              <div className="icon-x"></div>
            </button>
            <button className="filter__button filter__button--active">
              Лосось
              <div className="icon-x"></div>
            </button>
            <button className="filter__button">Моллюски</button>
            <button className="filter__button filter__button--unavailable">
              Мясо
            </button>
            <button className="filter__button">Тунец</button>
            <button className="filter__button filter__button--unavailable">
              Вегетарианская
            </button>
            <button className="filter__button">Ракообразные</button>
            <button className="filter__button">Сыр</button>
          </div>
          <button className="filter__btnDone">Применить</button>
        </div>
        <ProductList products={products} />
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
