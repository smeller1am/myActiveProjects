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
      <Image src={product.PhotoPath ?? ''} alt="" width={328} height={177} />
      <div className="grid__info">
        <div className="grid__infoTitle">{product.Name}</div>
        <div className="grid__infoText">{product.Description}</div>
        <div className="grid__infoBottom">
          <div className="grid__bottomPrice">
            <div className="grid__bottomRub">
              {utils.renderPrice(product.Price)}
            </div>
            <div className="grid__bottomGr">
              {utils.renderWeight(product.Weight)}
            </div>
          </div>
          <div
            className="grid__bottomButton"
            onClick={handleAddToBasketClick}
          >
            <span className="icon-basket"></span>
            <span>В корзину</span>
          </div>
        </div>
      </div>
    </div>
  );
};
