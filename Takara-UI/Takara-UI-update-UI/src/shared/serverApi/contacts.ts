import { api } from '@/shared/serverApi/config';
import { Failure, GetPromoResponse } from '@/shared/contracts';

export interface getContactsResponse {
  contacts: Contacts;
}
export interface Contacts {
  id: number;
  phoneNumber: string;
  qualityControlPhoneNumber: string;
  workingTime: string;
  branchs: Branch[];
}
export interface Branch {
  id: number;
  neighborhood: string;
  address: string;
  phoneNumber: string;
  contactsId: number;
}
export interface GetContactsResponseRestApiResponse {
  payload: getContactsResponse;
  failure: Failure;
  isSuccess: boolean;
}

export const getContacts = async () => {
  const res = await api.get<GetContactsResponseRestApiResponse>(
    '/contacts/GetContacts',
    {},
  );

  if (!res.data.isSuccess) return;

  return res.data.payload.contacts;
};
