import { GetCategoryResponseRestApiResponse } from '../contracts';
import { IMenuItem } from '../types';
import { api } from './config';
import Image from 'next/image';

export const getCategories = async () => {
  const res = await api.get<GetCategoryResponseRestApiResponse>('/categories');

  if (!res.data.IsSuccess) return;

  return res.data.Payload.Categories;
};

export const getMenuItems = async () => {
  const categories = await getCategories();

  return categories?.map<IMenuItem>(({ Id, Name }) => ({
    key: Id,
    title: Name,
    link: `/category/${Id}`,
    icon: <Image src="/img/menu/1.png" width={120} height={120} alt="" />,
  }));
};
