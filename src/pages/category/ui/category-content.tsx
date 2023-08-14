'use client';

import { ProductModel } from '@/shared/contracts';
import { ProductList, ProductListProps } from '@/widgets/product-list';
import { FC, useState } from 'react';
import { ProductModal } from './product-modal';
import { Provider } from 'react-redux';
import { store } from '@/app/store';

export interface CategoryContentProps
  extends Pick<ProductListProps, 'products'> {}

export const CategoryContent: FC<CategoryContentProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductModel | null>(
    null,
  );

  const openProductModal = (product: ProductModel) =>
    setSelectedProduct(product);

  const closeProductModal = () => setSelectedProduct(null);

  return (
    <>
      <Provider store={store}>
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
        <ProductList products={products} onProductClick={openProductModal} />
        <ProductModal product={selectedProduct} onClose={closeProductModal} />
      </Provider>
    </>
  );
};
