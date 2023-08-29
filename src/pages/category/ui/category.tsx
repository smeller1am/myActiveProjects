import { FC } from 'react';
// server not implemented
// import { SubCategory } from './sub-category';
import { getCategories, getProducts } from '@/shared/serverApi';
import { CategoryContent } from './category-content';

export interface CategoryPageProps {
  categoryId: string;
}

const getCategoryById = async (categoryId: string) => {
  const categories = await getCategories();

  return categories?.find(({ Id }) => Id.toString() === categoryId);
};

export const CategoryPage: FC<CategoryPageProps> = async ({ categoryId }) => {
  const products = await getProducts({
    categoryId,
  });

  const categoryName = (await getCategoryById(categoryId))?.Name;

  return (
    <>
      <div className="titleMain">
        <div className="titleMain__title">{categoryName}</div>
      </div>
      <CategoryContent products={products} />
    </>
  );
};
