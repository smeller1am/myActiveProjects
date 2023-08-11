import { ProductCard } from '@/entities/product-card';
import { ProductModel } from '@/shared/contracts';
import { FC } from 'react';

export interface ProductListProps {
  products: ProductModel[] | undefined;
}

const transformProducts = (
  products: ProductModel[],
): [ProductModel[], ProductModel[], ProductModel[]] => {
  const top = products.slice(0, 3);
  const middle = products.slice(4, 7);
  const bottom = products.slice(8);

  return [top, middle, bottom];
};

const renderProducts = (products: ProductModel[]) =>
  products.map(product => <ProductCard product={product} key={product.Id} />);

export const ProductList: FC<ProductListProps> = ({ products }) => {
  if (!products) return 'Error while fetching';

  const [topProducts, middleProducts, bottomProducts] =
    transformProducts(products);

  return (
    <div className="grid">
      <div className="gridTop">{renderProducts(topProducts)}</div>
      <div className="gridMiddle">{renderProducts(middleProducts)}</div>
      <div className="gridBottom">{renderProducts(bottomProducts)}</div>
    </div>
  );
};
