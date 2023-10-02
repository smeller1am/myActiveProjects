import { emptySplitApi } from './base';
export const vacanciesTypesApi = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    getDeliveryConditions: builder.query({
      query: () => ({
        url: '/deliveryConditions/GetDeliveryConditions',
      }),
      providesTags: ['DeliveryTerms'],
    }),
  }),
});

export const { useGetDeliveryConditionsQuery } = vacanciesTypesApi;
