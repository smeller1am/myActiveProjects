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
export const vacanciesTypesApi = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    getAllVacancyTypes: builder.query({
      query: () => ({
        url: '/vacancyTypes/GetVacancyTypes',
      }),
      providesTags: ['VacanciesType'],
    }),
  }),
});

export const { useGetAllVacancyTypesQuery } = vacanciesTypesApi;
