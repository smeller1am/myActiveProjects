import { useAddProductToBasketMutation } from '@/shared/clientApi';
import { ProductModel } from '@/shared/contracts';
import { utils } from '@/shared/lib';
import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

export interface ProductModalProps {
  product: ProductModel | null;
  onClose: () => void;
}

export const ProductModal: FC<ProductModalProps> = ({ product, onClose }) => {
  const [addProductToBasket] = useAddProductToBasketMutation();

  const handleAddToBasketClick = () => {
    if (!product) return;
    addProductToBasket(product);
  };

  return (
    <div
      id="modalFood"
      className={cn('modalFood', { 'modalFood--visible': product })}
    >
      <div className="modalFood__grid">
        <Image src={product?.PhotoPath ?? ''} alt="" width={770} height={600} />
        <div className="modalFood__info">
          <button
            id="modalClose"
            className="modalFood__info-button"
            onClick={onClose}
          >
            <div className="icon-x" />
          </button>
          <div className="modalFood__info-block">
            <div className="modalFood__info-title">{product?.Name}</div>
            <div className="modalFood__info-textGr">
              {utils.renderWeight(product?.Weight)}
            </div>
            <div className="modalFood__info-text">{product?.Description}</div>
            <div className="table">
              <div className="table__item">
                <div className="table__item-top">Вес</div>
                <div className="table__item-bottom">
                  {utils.renderWeight(product?.Weight)}
                </div>
              </div>
              <div className="table__item">
                <div className="table__item-top">Порция</div>
                <div className="table__item-bottom">6 штук</div>
              </div>
              <div className="table__item">
                <div className="table__item-top">Ккал</div>
                <div className="table__item-bottom">{product?.Kcal}</div>
              </div>
              <div className="table__item">
                <div className="table__item-top">Б/Ж/У</div>
                <div className="table__item-bottom">
                  {utils.renderPFC(
                    product?.Proteins,
                    product?.Fats,
                    product?.Carbohydrates,
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="modalFood__info-box">
            <div className="modalFood__info-boxPrice">
              {utils.renderPrice(product?.Price)}
            </div>
            <div className="modalFood__info-boxButton">
              <button className="modalFood__info-btnLike">
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