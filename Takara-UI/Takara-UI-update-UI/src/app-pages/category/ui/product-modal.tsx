'use client';

import { ModalType, openModal } from '@/app/store/modalSlice';
import { RootState } from '@/app/store/types';
import {
  useAddProductToBasketMutation,
  useCreateFavoritesMutation,
  useGetAllFavoritesQuery,
  useRemoveFavoritesMutation,
} from '@/shared/clientApi';
import { ProductModel } from '@/shared/contracts';
import { utils } from '@/shared/lib';
import cn from 'classnames';
import Image from 'next/image';
import React, { FC, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { log } from 'util';

export interface ProductModalProps {
  product: ProductModel | null;
  onClose: () => void;
  isOpen: boolean;
}

const getAccessTokenState = (state: RootState) => state.accessToken;

export const ProductModal: FC<ProductModalProps> = ({
  product,
  onClose,
  isOpen,
}) => {
  const [addProductToBasket] = useAddProductToBasketMutation();
  const { accessToken } = useSelector(getAccessTokenState);
  const dispatch = useDispatch();
  const [createFavorite] = useCreateFavoritesMutation();
  const [removeFavorite] = useRemoveFavoritesMutation();
  const [buttonActive, setButtonActive] = React.useState(false);
  const {
    data: favorites,
    isLoading,
    isFetching,
  } = useGetAllFavoritesQuery({});
  const handleAddToBasketClick = () => {
    if (!product) return;
    if (accessToken === null) {
      dispatch(openModal(ModalType.Authorization));
    } else {
      addProductToBasket(product);
    }
  };

  const isFavorite = useMemo(
    () =>
      Boolean(
        favorites?.payload?.products?.some((el: any) => {
          return el.id == product?.id;
        }),
      ),
    [favorites, product],
  );

  useEffect(() => {
    setButtonActive(isFavorite);
  }, [isOpen, isFavorite]);

  const handleAddToFavoritesClick = async () => {
    if (accessToken === '') {
      dispatch(openModal(ModalType.Authorization));
    } else {
      const favObj: { productId: number | undefined } = {
        productId: product?.id,
      };
      //todo fix types
      await createFavorite(favObj).unwrap();
      setButtonActive(!buttonActive);
    }
  };

  const handleRemoveFavoritesClick = () => {
    removeFavorite(product?.id);
    setButtonActive(!buttonActive);
  };

  return (
    <div
      id="modalFood"
      className={cn('modalFood', { 'modalFood--visible': isOpen })}
    >
      <div className="modalFood__grid">
        <Image src={product?.photoPath ?? ''} alt="" width={770} height={600} />
        <div className="modalFood__info">
          <button
            id="modalClose"
            className="modalFood__info-button"
            onClick={onClose}
          >
            <div className="icon-x" />
          </button>
          <div className="modalFood__info-block">
            <div className="modalFood__info-title">{product?.name}</div>
            <div className="modalFood__info-textGr">
              {utils.renderWeight(product?.weight)}
            </div>
            <div className="modalFood__info-text">{product?.description}</div>
            <div className="table">
              <div className="table__item">
                <div className="table__item-top">Вес</div>
                <div className="table__item-bottom">
                  {utils.renderWeight(product?.weight)}
                </div>
              </div>
              <div className="table__item">
                <div className="table__item-top">Порция</div>
                <div className="table__item-bottom">
                  {product?.portion} штук
                </div>
              </div>
              <div className="table__item">
                <div className="table__item-top">Ккал</div>
                <div className="table__item-bottom">{product?.kcal}</div>
              </div>
              <div className="table__item">
                <div className="table__item-top">Б/Ж/У</div>
                <div className="table__item-bottom">
                  {utils.renderPFC(
                    product?.proteins,
                    product?.fats,
                    product?.carbohydrates,
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="modalFood__info-box">
            <div className="modalFood__info-boxPrice">
              {utils.renderPrice(product?.price)}
            </div>
            <div className="modalFood__info-boxButton">
              <button
                onClick={() =>
                  buttonActive
                    ? handleRemoveFavoritesClick()
                    : handleAddToFavoritesClick()
                }
                className={cn('modalFood__info-btnLike', {
                  'modalFood__info-btnLike--active': buttonActive,
                })}
              >
                <div className="icon-like "></div>
              </button>
              <button
                className="modalFood__info-btnBasket"
                onClick={handleAddToBasketClick}
              >
                <div className="icon-basket"></div>
                <span>В корзину</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
