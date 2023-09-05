import { ModalType, openModal } from '@/app/store/modalSlice';
import { RootState } from '@/app/store/types';
import { useAddProductToBasketMutation } from '@/shared/clientApi';
import { ProductModel } from '@/shared/contracts';
import { utils } from '@/shared/lib';
import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

  const handleAddToBasketClick = () => {
    if (!product) return;
    if (accessToken === '') {
      dispatch(openModal(ModalType.Authorization));
    } else {
      addProductToBasket(product);
    }
  };
  const handleAddToFavoritesClick = () => {
    if (accessToken === '') {
      dispatch(openModal(ModalType.Authorization));
    } else {
    }
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
                <div className="table__item-bottom">6 штук</div>
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
                onClick={handleAddToFavoritesClick}
                className="modalFood__info-btnLike"
              >
                <div className="icon-like"></div>
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
