import { useAddProductToBasketMutation } from '@/shared/clientApi/basketApi';
import { ProductModel } from '@/shared/contracts';
import { utils } from '@/shared/lib';
import Image from 'next/image';
import { FC, MouseEventHandler } from 'react';

export interface ProductCardProps {
  product: ProductModel;
  onClick?: (product: ProductModel) => void;
}

export const ProductCard: FC<ProductCardProps> = ({ product, onClick }) => {
  const handleClick = () => {
    onClick?.(product);
  };

  const [addProductToBasket] = useAddProductToBasketMutation();

  const handleAddToBasketClick: MouseEventHandler = e => {
    e.stopPropagation();
    addProductToBasket(product);
  };

  return (
    <div className="grid__item" onClick={handleClick}>
      <Image src={product.photoPath ?? ''} alt="" width={328} height={177} />
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
