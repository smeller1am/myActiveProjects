import { RootState } from '@/app/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any).token;
      return token ? headers.set('token', token) : headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ['UpdateBasketProducts'],
});
