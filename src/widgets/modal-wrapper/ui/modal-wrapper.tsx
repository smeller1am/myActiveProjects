'use client';

import { RootState, store } from '@/app/store';
import { closeModal } from '@/app/store/modalSlice';
import classNames from 'classnames';
import { FC } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

const getModalState = (state: RootState) => state.modal.isOpen !== null;

const Wrapper = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(getModalState);
  const handleClick = () => {
    dispatch(closeModal());
  };
  return (
    <div
      className={classNames('wrapper', { 'wrapper--unactive': isModalOpen })}
      onClick={handleClick}
    />
  );
};
export const WrapperWithProvider: FC = () => (
  <Provider store={store}>
    <Wrapper />
  </Provider>
);
