import { RootState, store } from '@/app/store';
import { ModalType } from '@/app/store/modalSlice';
import Button from '@/shared/ui/button/button';
import { Basket } from '@/widgets/header/ui/basket/basket';
import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { Provider, useSelector } from 'react-redux';

interface Modal extends PropsWithChildren {
  title: string;
  subtitle: string;
}

const getModalState = (state: RootState) =>
  state.modal.isOpen === ModalType.Authorization;
const Modal: FC<Modal> = ({ subtitle, title, children }) => {
  const isModalOpen = useSelector(getModalState);
  return (
    <div className={classNames('modal', { 'modal--visible': isModalOpen })}>
      {title && <h2 className="modal__title">{title}</h2>}
      {subtitle && <p className="modal__subtitle">{subtitle}</p>}
      {children}
    </div>
  );
};

export const ModalWithProvider: FC<Modal> = ({ ...props }) => (
  <Provider store={store}>
    <Modal {...props} />
  </Provider>
);
