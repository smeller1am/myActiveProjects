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
        <ProductList products={products} onProductClick={openProductModal} />
        <ProductModal product={selectedProduct} onClose={closeProductModal} />
      </Provider>
    </>
  );
};
