'use client';

import store from '@/app/store';
import { ModalType, openModal } from '@/app/store/modalSlice';
import { RootState } from '@/app/store/types';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
const getAccessTokenState = (state: RootState) => state.accessToken;

const Profile: FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { accessToken } = useSelector(getAccessTokenState);
  const onAuthorizationClick = () => {
    if (accessToken === '') {
      dispatch(openModal(ModalType.Authorization));
    } else {
      router.push('/profile');
    }
  };
  return (
    <div onClick={onAuthorizationClick} className="user">
      <div className="user__icon icon-user"></div>
    </div>
  );
};

export const ProfileWithProvider: FC = () => (
  <Provider store={store}>
    <Profile />
  </Provider>
);