import axios from 'axios';
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {RootState} from "@/app/store/types";

export const api = axios.create({
  // headers: {
  //   Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
  // },
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});


// export const emptySplitApi = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: process.env.NEXT_PUBLIC_API_URL,
//     prepareHeaders: (headers, { getState }) => {
//       headers.append(
//           'Authorization',
//           `Bearer ${(getState() as RootState).accessToken}`,
//       );
//       // const { accessToken } = (getState() as RootState).accessToken;
//       // return accessToken ? headers.set('accessToken', accessToken) : headers;
//     },
//   }),
//   endpoints: () => ({}),
//   tagTypes: ['UpdateBasketProducts', 'Authorization', "UpdateFavorites"],
// });
