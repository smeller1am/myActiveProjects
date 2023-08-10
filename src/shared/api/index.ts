import { GetCategoryResponseRestApiResponse } from '../contracts';
import { IMenuItem } from '../types';

const authToken = `Bearer ${process.env.AUTH_TOKEN}`;

export const getMenuItems = async () => {
  const res = await fetch(process.env.API_DOMEN + '/categories', {
    headers: {
      Authorization: authToken,
    },
  });

  if (!res.ok) return;

  const categoriesRes: GetCategoryResponseRestApiResponse = await res.json();

  if (!categoriesRes.IsSuccess) return;

  return categoriesRes.Payload.Categories.map<IMenuItem>(({ Id, Name }) => ({
    key: Id,
    title: Name,
    link: `/category/${Id}`,
  }));
};
