import { login } from '@/app/store/authSlice';
import { emptySplitApi } from '@/shared/clientApi/base';
import {
  LoginRequest,
  LoginResponse,
  LoginResponseRestApiResponse,
  SendOneTimePasswordReponseRestApiResponse,
  SendOneTimePasswordRequest,
} from '@/shared/contracts';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { QueryReturnValue } from '@reduxjs/toolkit/src/query/baseQueryTypes';

export const authApi = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    getPassword: builder.mutation<
      SendOneTimePasswordReponseRestApiResponse,
      SendOneTimePasswordRequest
    >({
      query: userData => ({
        url: `/authentication/SendOneTimePassword`,
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['Authorization'],
    }),
    getToken: builder.mutation<LoginResponseRestApiResponse, LoginRequest>({
      queryFn: async (body, { dispatch }, _, baseQuery) => {
        const loginRes = (await baseQuery({
          url: `/authentication/Login`,
          method: 'POST',
          body,
        })) as QueryReturnValue<
          LoginResponseRestApiResponse,
          FetchBaseQueryError
        >;

        if (loginRes.error) return loginRes;

        const accessToken = loginRes.data?.payload.accessToken;
        dispatch(login({ accessToken }));
        return loginRes;
      },
      invalidatesTags: ['Authorization'],
    }),
  }),
});

export const { useGetTokenMutation, useGetPasswordMutation } = authApi;
