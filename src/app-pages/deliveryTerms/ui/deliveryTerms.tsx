import React, { FC } from 'react';
import { useGetAllVacancyTypesQuery } from '@/shared/clientApi';
import { useGetDeliveryConditionsQuery } from '@/shared/clientApi/deliveryTermsApi';
import { Provider } from 'react-redux';
import store from '@/app/store';

const DeliveryTermsPage: FC = () => {
  const { data: deliveryConditions } = useGetDeliveryConditionsQuery({});
  return (
    <div className="container">
      <div className="wrapper"></div>
      <img className="fish" src="./img/delivery/noCutt.png" alt="" />
      <div className="titleMain">
        <h1 className="titleMain__title">Условия доставки</h1>
      </div>
      <div className="deliveryCards">
        <div className="deliveryCards__card">
          <div className="deliveryCards__card-title">Принимаем заказы</div>
          <div className="deliveryCards__card-text">
            {deliveryConditions?.payload.deliveryConditions.takingOrders}
          </div>
        </div>
        <div className="deliveryCards__card">
          <div className="deliveryCards__card-title">
            Минимальная сумма заказа
          </div>
          <div className="deliveryCards__card-text">
            {deliveryConditions?.payload.deliveryConditions.minimumSumOrder}
          </div>
        </div>
        <div className="deliveryCards__card">
          <div className="deliveryCards__card-title">Стоимость доставки</div>
          <div className="deliveryCards__card-text">
            {deliveryConditions?.payload.deliveryConditions.deliveryCost}
          </div>
        </div>
      </div>
      <div className="deliveryInfo">
        <div className="deliveryInfo__item">
          <img
            className={'deliveryInfo__item-img'}
            src="./img/iconSVG/1.png"
            alt=""
          />
          <div className="deliveryInfo__item-info">
            <div className="deliveryInfo__item-infoTitle">Время доставки</div>
            <div className="deliveryInfo__item-infoText">
              {deliveryConditions?.payload.deliveryConditions.deliveryTime}
            </div>
          </div>
        </div>
        <div className="deliveryInfo__item">
          <img
            className={'deliveryInfo__item-img'}
            src="./img/iconSVG/2.png"
            alt=""
          />
          <div className="deliveryInfo__item-info">
            <div className="deliveryInfo__item-infoTitle">
              Доставка курьером
            </div>
            <div className="deliveryInfo__item-infoText">
              {deliveryConditions?.payload.deliveryConditions.courierDelivery}
            </div>
          </div>
        </div>
        <div className="deliveryInfo__item">
          <img
            className={'deliveryInfo__item-img'}
            src="./img/iconSVG/3.png"
            alt=""
          />
          <div className="deliveryInfo__item-info">
            <div className="deliveryInfo__item-infoTitle">Самовывоз</div>
            <div className="deliveryInfo__item-infoText">
              {deliveryConditions?.payload.deliveryConditions.selfDelivery}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DeliveryTermsWithProvider: FC = () => (
  <Provider store={store}>
    <DeliveryTermsPage />
  </Provider>
);
