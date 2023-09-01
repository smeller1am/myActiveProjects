import { emptySplitApi } from '@/shared/clientApi/base';
import {
  LoginRequest,
  LoginResponse,
  SendOneTimePasswordReponseRestApiResponse,
  SendOneTimePasswordRequest,
} from '@/shared/contracts';

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
    }),
    getToken: builder.mutation<LoginResponse, LoginRequest>({
      query: userData => ({
        url: `/authentication/Login`,
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useGetTokenMutation, useGetPasswordMutation } = authApi;
