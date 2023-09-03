import { RootState } from '@/app/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers, { getState }) => {
      headers.append(
        'Authorization',
        `Bearer ${(getState() as RootState).accessToken}`,
      );
      // const accessToken = (getState() as RootState).accessToken;
      // return accessToken ? headers.set('accessToken', accessToken) : headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ['UpdateBasketProducts', 'Authorization'],
});
