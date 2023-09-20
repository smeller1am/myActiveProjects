import {
  CreateFavoritesRequest,
  CreateFavoritesResponseRestApiResponse,
  GetProductsResponseRestApiResponse,
  SendOneTimePasswordReponseRestApiResponse,
  SendOneTimePasswordRequest,
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
    createFavorites: builder.mutation<
      CreateFavoritesRequest,
      CreateFavoritesResponseRestApiResponse
    >({
      query: create => ({
        url: `/favorites/CreateFavorites`,
        method: 'POST',
        body: create,
      }),
      invalidatesTags: ['UpdateFavorites'],
    }),
    removeFavorites: builder.mutation({
      //todo fix types
      query: id => ({
        url: `/favorites/RemoveFromFavorites?productId=${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['UpdateFavorites'],
    }),
  }),
});

export const {
  useGetAllFavoritesQuery,
  useCreateFavoritesMutation,
  useRemoveFavoritesMutation,
} = favoritesApi;
