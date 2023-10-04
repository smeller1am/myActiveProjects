'use client';

import store from '@/app/store';
import { closeModal, ModalType, openModal } from '@/app/store/modalSlice';
import { RootState } from '@/app/store/types';
import { ProductModel } from '@/shared/contracts';
import { ProductList, ProductListProps } from '@/widgets/product-list';
import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ProductModal } from './product-modal';
import { useGetAllFavoritesQuery } from '@/shared/clientApi';

export interface CategoryContentProps
  extends Pick<ProductListProps, 'products'> {}
const getModalState = (state: RootState) =>
  state.modal.isOpen === ModalType.Product;

export const CategoryContent: FC<CategoryContentProps> = ({ products }) => {
  const isModalOpen = useSelector(getModalState);
  const {
    data: favorites,
    isLoading,
    isFetching,
  } = useGetAllFavoritesQuery({});
  const [selectedProduct, setSelectedProduct] = useState<ProductModel | null>(
    null,
  );
  const dispatch = useDispatch();
  const openProductModal = (product: ProductModel) => {
    setSelectedProduct(product);

    dispatch(openModal(ModalType.Product));
  };
  const closeProductModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <div className="sortFilter">
        <div className="sortFilter__item">
          <a href="#" className="sortFilter__itemLink filtered">
            <div className="sortFilter__itemLink-icon icon-filter"></div>
            Фильтр
          </a>
        </div>
        <div className="sortFilter__item">
          <a href="#" className="sortFilter__itemLink">
            <div className="sortFilter__itemLink-icon icon-sort"></div>
            Сортировать по цене
          </a>
        </div>
        <div className="sortFilter__item">
          <a href="#" className="sortFilter__itemLink reset">
            <div className="sortFilter__itemLink-icon icon-x"></div>
            Сбросить фильтры
          </a>
        </div>
      </div>
      <div className="filter">
        <div className="filter__box">
          <button className="filter__button filter__button--active">
            Авокадо
            <div className="filter__button-icon icon-x"></div>
          </button>
          <button className="filter__button filter__button--active">
            Лосось
            <div className="filter__button-icon icon-x"></div>
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
      {createPortal(
        <ProductModal
          isOpen={isModalOpen}
          product={selectedProduct}
          onClose={closeProductModal}
        />,
        document.body,
      )}
    </>
  );
};

export const CategoryWithProvider: FC<CategoryContentProps> = props => (
  <Provider store={store}>
    <CategoryContent {...props} />
  </Provider>
);
