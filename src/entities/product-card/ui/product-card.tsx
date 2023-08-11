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
    <div className="pizza__grid-item" onClick={handleClick}>
      <Image src={product.PhotoPath ?? ''} alt="" width={328} height={177} />
      <div className="pizza__grid-info">
        <div className="pizza__grid-infoTitle">{product.Name}</div>
        <div className="pizza__grid-infoText">{product.Description}</div>
        <div className="pizza__grid-infoBottom">
          <div className="pizza__grid-bottomPrice">
            <div className="pizza__grid-bottomRub">
              {utils.renderPrice(product.Price)}
            </div>
            <div className="pizza__grid-bottomGr">
              {utils.renderWeight(product.Weight)}
            </div>
          </div>
          <button
            className="pizza__grid-bottomButton"
            onClick={handleAddToBasketClick}
          >
            <span className="icon-basket"></span>
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </div>
  );
};
