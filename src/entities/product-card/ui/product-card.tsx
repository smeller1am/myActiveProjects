import { ModalType, openModal } from '@/app/store/modalSlice';
import { RootState } from '@/app/store/types';
import { useAddProductToBasketMutation } from '@/shared/clientApi/basketApi';
import { ProductModel } from '@/shared/contracts';
import { utils } from '@/shared/lib';
import Image from 'next/image';
import { FC, MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface ProductCardProps {
  product: ProductModel;
  onClick?: (product: ProductModel) => void;
}
const getAccessTokenState = (state: RootState) => state.accessToken;

export const ProductCard: FC<ProductCardProps> = ({ product, onClick }) => {
  const handleClick = () => {
    onClick?.(product);
  };
  const { accessToken } = useSelector(getAccessTokenState);

  const [addProductToBasket] = useAddProductToBasketMutation();
  const dispatch = useDispatch();

  const handleAddToBasketClick: MouseEventHandler = e => {
    e.stopPropagation();
    if (accessToken === '') {
      dispatch(openModal(ModalType.Authorization));
    } else {
      addProductToBasket(product);
      console.log(product);
    }
  };

  return (
    <div className="grid__item" onClick={handleClick}>
      <Image
        className="grid__item-img"
        src={product.photoPath ?? ''}
        alt=""
        width={328}
        height={177}
      />
      <div className="grid__info">
        <div className="grid__infoTitle">{product.name}</div>
        <div className="grid__infoText">{product.description}</div>
        <div className="grid__infoBottom">
          <div className="grid__bottomPrice">
            <div className="grid__bottomRub">
              {utils.renderPrice(product.price)}
            </div>
            <div className="grid__bottomGr">
              {utils.renderWeight(product.weight)}
            </div>
          </div>
          <div className="grid__bottomButton" onClick={handleAddToBasketClick}>
            <span className="grid__bottomButton-icon icon-basket"></span>
            <span>В корзину</span>
          </div>
        </div>
      </div>
    </div>
  );
};
