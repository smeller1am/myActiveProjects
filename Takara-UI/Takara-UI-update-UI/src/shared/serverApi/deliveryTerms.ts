import { api } from '@/shared/serverApi/config';

export interface GetDeliveryConditionsResponseRestApiResponse {
  payload: Payload;
  isSuccess: boolean;
}

export interface Payload {
  deliveryConditions: DeliveryConditions;
}

export interface DeliveryConditions {
  id: number;
  takingOrders: string;
  minimumSumOrder: string;
  deliveryCost: string;
  deliveryTime: string;
  courierDelivery: string;
  selfDelivery: string;
}
export const getDeliveryTerms = async () => {
  const res = await api.get<GetDeliveryConditionsResponseRestApiResponse>(
    '/deliveryConditions/GetDeliveryConditions',
    {},
  );

  if (!res.data.isSuccess) return;

  return res.data.payload.deliveryConditions;
};
