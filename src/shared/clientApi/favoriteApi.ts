// import { login } from '@/app/store/authSlice';
// import { emptySplitApi } from '@/shared/clientApi/base';
// import {
//   LoginRequest,
//   LoginResponse,
//   LoginResponseRestApiResponse,
//   SendOneTimePasswordReponseRestApiResponse,
//   SendOneTimePasswordRequest,
// } from '@/shared/contracts';
// import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
// import { QueryReturnValue } from '@reduxjs/toolkit/src/query/baseQueryTypes';
//
// export const favoriteApi = emptySplitApi.injectEndpoints({
//   endpoints: builder => ({
//     getPassword: builder.mutation<
//       SendOneTimePasswordReponseRestApiResponse,
//       SendOneTimePasswordRequest
//     >({
//       query: userData => ({
//         url: `/authentication/SendOneTimePassword`,
//         method: 'POST',
//         body: userData,
//       }),
//       invalidatesTags: ['Authorization'],
//     }),
//     getFavorite: builder.mutation({
//       queryFn: async (body, { dispatch }, _, baseQuery) => {
//         const favoriteRes = await baseQuery({
//           url: `/favorite`,
//           method: 'GET',
//           body,
//         });
//
//         if (favoriteRes.error) return favoriteRes;
//
//         const accessToken = favoriteRes.data?;
//         dispatch(login({ accessToken }));
//         return favoriteRes;
//       },
//       invalidatesTags: ['Authorization'],
//     }),
//   }),
// });
//
// export const { getFavorite, useGetPasswordMutation } = favoriteApi;
