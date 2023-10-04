import { emptySplitApi } from './base';
export const vacanciesFormsApi = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    sendVacancy: builder.mutation({
      query: create => ({
        url: `/vacancyForms/CreateVacancyForm`,
        method: 'POST',
        body: create,
      }),
      invalidatesTags: ['VacanciesForm'],
    }),
  }),
});

export const { useSendVacancyMutation } = vacanciesFormsApi;
