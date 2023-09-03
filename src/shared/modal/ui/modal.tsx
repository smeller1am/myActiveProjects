import store from '@/app/store';
import { ModalType } from '@/app/store/modalSlice';
import { RootState } from '@/app/store/types';
import Button from '@/shared/ui/button/button';
import { Basket } from '@/widgets/header/ui/basket/basket';
import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { Provider, useSelector } from 'react-redux';

interface Modal extends PropsWithChildren {
  title: string;
  subtitle: string;
  className?: string;
}

const getModalState = (state: RootState) =>
  state.modal.isOpen === ModalType.Authorization;
const Modal: FC<Modal> = ({ subtitle, title, children, className }) => {
  const isModalOpen = useSelector(getModalState);
  return (
    <div className={classNames('modal', { 'modal--visible': isModalOpen })}>
      {title && <h2 className="modalAddress__title">{title}</h2>}
      {subtitle && (
        <p
          className={`modal__subtitle ${
            className ? `modal__subtitle--${className}` : ''
          }`}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export const ModalWithProvider: FC<Modal> = ({ ...props }) => (
  <Provider store={store}>
    <Modal {...props} />
  </Provider>
);
