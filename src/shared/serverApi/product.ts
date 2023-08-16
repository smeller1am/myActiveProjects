import { GetProductsResponseRestApiResponse } from '../contracts';
import { api } from './config';

interface IGetProductsArg extends Record<string, string | number | undefined> {
  categoryId?: string | number;
  searchString?: string;
  startIndex?: string;
  objectsCount?: string;
}

export const getProducts = async (arg: IGetProductsArg) => {
  const res = await api.get<GetProductsResponseRestApiResponse>(
    '/products/GetProductsByFilter',
    {
      params: arg,
    },
  );

  if (!res.data.IsSuccess) return;

  return res.data.Payload.Products;
};
