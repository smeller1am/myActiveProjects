import {
  CreateFavoritesRequest,
  CreateFavoritesResponse,
  CreateFavoritesResponseRestApiResponse,
} from '../contracts';

import { emptySplitApi } from './base';

export const favoritesApi = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    getAllFavorites: builder.query<
      CreateFavoritesResponseRestApiResponse,
      CreateFavoritesResponse
    >({
      query: () => ({
        url: '/favorites',
      }),
      providesTags: ['UpdateFavorites'],
    }),
    createFavorites: builder.mutation<
      CreateFavoritesResponseRestApiResponse,
      CreateFavoritesRequest
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
