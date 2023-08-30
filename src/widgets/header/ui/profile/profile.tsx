'use client';

import { store } from '@/app/store';
import { ModalType, openModal } from '@/app/store/modalSlice';
import { Basket } from '@/widgets/header/ui/basket/basket';
import { FC } from 'react';
import { Provider, useDispatch } from 'react-redux';

const Profile: FC = () => {
  const dispatch = useDispatch();
  const onAuthorizationClick = () => {
    dispatch(openModal(ModalType.Authorization));
  };
  return (
    <div onClick={onAuthorizationClick} className="user">
      <div className="icon-user"></div>
    </div>
  );
};

export const ProfileWithProvider: FC = () => (
  <Provider store={store}>
    <Profile />
  </Provider>
);
