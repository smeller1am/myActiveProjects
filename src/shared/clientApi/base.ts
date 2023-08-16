import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    headers: {
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    },
  }),
  endpoints: () => ({}),
  tagTypes: ['UpdateBasketProducts'],
});
