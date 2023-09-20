'use client';

import store from '@/app/store';
import { RootState } from '@/app/store/types';
import classNames from 'classnames';
import { FC } from 'react';
import { Provider, useSelector } from 'react-redux';

const getModalState = (state: RootState) => state.modal.isOpen !== null;

const Wrapper = () => {
  const isModalOpen = useSelector(getModalState);
  return (
    <div
      className={classNames('wrapper', { 'wrapper--unactive': isModalOpen })}
    />
  );
};
export const WrapperWithProvider: FC = () => (
  <Provider store={store}>
    <Wrapper />
  </Provider>
);
