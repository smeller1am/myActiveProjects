import { FC } from 'react';
// server not implemented
// import { SubCategory } from './sub-category';
import { getCategories, getProducts } from '@/shared/api';
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
    <div className="rolls">
      <div className="container" id="category">
        <div className="rolls__titleMain">
          <div className="rolls__titleMain-title">{categoryName}</div>
          <button className="pizza__titleMain-gift">
            <div className="icon-basket"></div>
          </button>
        </div>
        <CategoryContent products={products} />
      </div>
    </div>
  );
};
