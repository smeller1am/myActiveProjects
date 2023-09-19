import { RootState } from '@/app/store/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers, { getState }) => {
      headers.set('Content-Type', 'application/json;charset=UTF-8');
      const accessToken: any = (getState() as RootState).accessToken
        .accessToken;
      headers.append('Authorization', `Bearer ${accessToken}`);
      // return accessToken ? headers.set('Authorization', accessToken) : headers;
    },
    // prepareHeaders: (headers, { getState }) => {

    //   const { accessToken  } = (getState() as RootState).accessToken;
    //   return accessToken ? headers.set('accessToken', accessToken) : headers;
    // },
  }),
  endpoints: () => ({}),
  tagTypes: ['UpdateBasketProducts', 'Authorization', 'UpdateFavorites'],
});
