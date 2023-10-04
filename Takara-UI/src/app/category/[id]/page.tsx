import { CategoryPage } from '@/app-pages/category';
import { NextPage } from 'next';
import { FC } from 'react';

interface CategoryProps {
  params: {
    id: string;
  };
}

const Category: FC<CategoryProps> = ({ params }) => (
  <CategoryPage categoryId={params.id} />
);

export default Category;
