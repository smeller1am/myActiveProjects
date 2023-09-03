'use client';

import store from '@/app/store';
import { closeModal } from '@/app/store/modalSlice';
import { RootState } from '@/app/store/types';
import classNames from 'classnames';
import { FC } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

const getModalState = (state: RootState) => state.modal.isOpen !== null;

const Overflow = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(getModalState);
  const handleClick = () => {
    dispatch(closeModal());
  };
  return (
    <div
      className={classNames('overflow', { 'overflow--unactive': isModalOpen })}
      onClick={handleClick}
    />
  );
};
export const OverflowWithProvider: FC = () => (
  <Provider store={store}>
    <Overflow />
  </Provider>
);
