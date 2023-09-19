import {
  CreateFavoritesResponseRestApiResponse,
  GetProductsResponseRestApiResponse,
} from '../contracts';
import { api } from '../serverApi/config';
import { authApi } from '@/shared/clientApi/index';
import { emptySplitApi } from './base';

// export const getFavorites = async (token: string)   => {
//   const res = await api.get<CreateFavoritesResponseRestApiResponse>(
//     '/favorites',
//     {
//       headers: {
//         Authorization: `Bearer ${token}`
//       },
//     });
//   console.log(res)
//     if (!res.data.isSuccess) return;
//
//   return res.data.payload.products;
// };
export const favoritesApi = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    getAllFavorites: builder.query<
      CreateFavoritesResponseRestApiResponse,
      object
    >({
      query: () => ({
        url: '/favorites',
      }),
      providesTags: ['UpdateFavorites'],
    }),
  }),
});

export const { useGetAllFavoritesQuery } = favoritesApi;
