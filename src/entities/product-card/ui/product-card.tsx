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
    <div className="grid__item">
      <img id="pic1" src="/img/pizza/1.png" alt="" />
      <div className="grid__info">
        <div className="grid__infoTitle">{Name}</div>
        <div className="grid__infoText">{Description}</div>
        <div className="grid__infoBottom">
          <div className="grid__bottomPrice">
            <div className="grid__bottomRub">
              {utils.renderPrice(Price)}
            </div>
            <div className="grid__bottomGr">
              {utils.renderWeight(Weight)}
            </div>
          </div>
          <button className="grid__bottomButton">
            <span className="icon-basket"></span>
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </div>
  );
};
