import { ProductModel } from '@/shared/contracts';
import { utils } from '@/shared/lib';
import { FC } from 'react';

export interface ProductCardProps {
  product: ProductModel;
}

export const ProductCard: FC<ProductCardProps> = ({
  product: { Name, Price, Description, Weight },
}) => {
  return (
    <div className="pizza__grid-item">
      <img id="pic1" src="/img/pizza/1.png" alt="" />
      <div className="pizza__grid-info">
        <div className="pizza__grid-infoTitle">{Name}</div>
        <div className="pizza__grid-infoText">{Description}</div>
        <div className="pizza__grid-infoBottom">
          <div className="pizza__grid-bottomPrice">
            <div className="pizza__grid-bottomRub">
              {utils.renderPrice(Price)}
            </div>
            <div className="pizza__grid-bottomGr">
              {utils.renderWeight(Weight)}
            </div>
          </div>
          <button className="pizza__grid-bottomButton">
            <span className="icon-basket"></span>
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </div>
  );
};
