import { ProductList } from '@/widgets/product-list';
import { FC, ReactNode } from 'react';

export interface SubCategoryProps {
  title: ReactNode;
}

export const SubCategory: FC<SubCategoryProps> = ({ title }) => (
  <>
    <div className="subtitle">{title}</div>
    <ProductList products={[]} />
  </>
);
