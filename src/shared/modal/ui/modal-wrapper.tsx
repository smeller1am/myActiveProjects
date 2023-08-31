'use client';

import { RootState, store } from '@/app/store';
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
