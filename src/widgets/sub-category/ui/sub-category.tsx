import { ProductCard } from '@/entities/product-card';
import { FC, ReactNode } from 'react';

export interface SubCategoryProps {
  title: ReactNode;
}

export const SubCategory: FC<SubCategoryProps> = ({ title }) => (
  <>
    <div className="rolls__subtitle">{title}</div>
    <div className="rolls__grid">
      <div className="pizza__gridTop">
        {Array(4)
          .fill(null)
          .map((_, idx) => (
            <ProductCard key={idx} />
          ))}
      </div>
      <div className="pizza__gridMiddle">
        {Array(3)
          .fill(null)
          .map((_, idx) => (
            <ProductCard key={idx} />
          ))}
      </div>
    </div>
  </>
);
