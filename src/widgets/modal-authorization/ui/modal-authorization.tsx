'use client';
import { store } from '@/app/store';
import { ModalWithProvider } from '@/shared/modal';
import Button from '@/shared/ui/button/button';
import { Basket } from '@/widgets/header/ui/basket/basket';
import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

enum ModalAuthorizationStepType {
  AuthorizationStepOne,
  AuthorizationStepTwo,
  AuthorizationStepThree,
}

interface ModalAuthorization {
  onClose?: () => void;
  nextStep: () => void;
}
const ModalAuthorization: FC = () => {
  return (
    <ModalWithProvider
      title={'Вы не авторизованы'}
      subtitle={
        'Вам не будут начисляться бонусные баллы, не будет сохраняться история заказов и вы не сможете добавлять любимые блюда в избранное. Желаете войти или зарегистрироваться?'
      }
    >
      <ModalStepOne />
    </ModalWithProvider>
  );
};

const ModalStepOne: FC<ModalAuthorization> = ({ nextStep, onClose }) => {
  return (
    <div className="modal__buttons modal__buttons--vertical">
      <Button text={'Авторизоваться'} onClick={nextStep} />
      <Button
        text={'Продолжить, как гость'}
        type={'secondary'}
        onClick={onClose}
      />
    </div>
  );
};

const ModalStepTwo: FC = () => {
  const handleClick = () => {};

  return (
    <form action="">
      <input id="phoneModal" type="text" placeholder="+7" />
      <Image src="./img/modal/1.png" alt="" />
      <Button text={'Получить код'} onClick={handleClick} />
    </form>
  );
};

const ModalStepThree: FC = () => {
  const handleClick = () => {};

  return (
    <form action="">
      <input id="phoneModal" type="text" placeholder="+7" />
      <Image src="./img/modal/1.png" alt="" />
      <Button text={'Войти'} onClick={handleClick} />
    </form>
  );
};

const ModalStepFour: FC = () => {
  const handleClick = () => {};
  const onClose = () => {};

  return (
    <div className="modal__buttons modal__buttons--vertical">
      <Button text={'Заполнить'} onClick={handleClick} />
      <Button text={'Позже'} type={'secondary'} onClick={onClose} />
    </div>
  );
};

export default ModalAuthorization;
