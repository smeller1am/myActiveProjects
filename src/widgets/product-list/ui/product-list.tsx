import { ProductCard, ProductCardProps } from '@/entities/product-card';
import { ProductModel } from '@/shared/contracts';
import { FC } from 'react';

export interface ProductListProps {
  products: ProductModel[] | undefined;
  onProductClick?: ProductCardProps['onClick'];
}

const transformProducts = (
  products: ProductModel[],
): [ProductModel[], ProductModel[], ProductModel[]] => {
  const top = products.slice(0, 3);
  const middle = products.slice(4, 7);
  const bottom = products.slice(8);

  return [top, middle, bottom];
};

const renderProducts = (
  products: ProductModel[],
  onProductClick: ProductCardProps['onClick'],
) =>
  products.map(product => (
    <ProductCard product={product} key={product.Id} onClick={onProductClick} />
  ));

export const ProductList: FC<ProductListProps> = ({
  products,
  onProductClick,
}) => {
  if (!products) return 'Error while fetching';

  const [topProducts, middleProducts, bottomProducts] =
    transformProducts(products);

  const renderProductsHelper = (products: ProductModel[]) =>
    renderProducts(products, onProductClick);

  return (
    <div className="rolls__grid">
      <div className="pizza__gridTop">{renderProductsHelper(topProducts)}</div>
      <div className="pizza__gridMiddle">
        {renderProductsHelper(middleProducts)}
      </div>
      <div className="pizza__gridBottom">
        {renderProductsHelper(bottomProducts)}
      </div>
    </div>
  );
};
