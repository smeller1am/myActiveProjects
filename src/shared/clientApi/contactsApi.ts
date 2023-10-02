import { emptySplitApi } from './base';
import { ContactsResponseRestApiResponse } from '@/shared/contracts';
export const contactsApi = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    getContacts: builder.query<ContactsResponseRestApiResponse, object>({
      query: () => ({
        url: '/contacts/GetContacts',
      }),
      providesTags: ['Contacts'],
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;
