import { GetCategoryResponseRestApiResponse } from '../contracts';
import { IMenuItem } from '../types';
import { api } from './config';
import Image from 'next/image';

export const getCategories = async () => {
  const res = await api.get<GetCategoryResponseRestApiResponse>(
    '/categories/GetCategories',
  );

  if (!res.data.isSuccess) return;

  return res.data.payload?.categories;
};

export const getMenuItems = async () => {
  const categories = await getCategories();

  return categories?.map<IMenuItem>(({ id, name }) => ({
    key: id,
    title: name,
    link: `/category/${id}`,
    icon: <Image src="/img/menu/1.png" width={120} height={120} alt="" />,
  }));
};
