import { emptySplitApi } from './base';
export const addressFormsApi = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    addAddress: builder.mutation({
      query: create => ({
        url: `/addresses/CreateAddress`,
        method: 'POST',
        body: create,
      }),
      invalidatesTags: ['UserData'],
    }),
  }),
});

export const { useAddAddressMutation } = addressFormsApi;
