'use client';
import { store } from '@/app/store';
import { closeModal } from '@/app/store/modalSlice';
import { ModalWithProvider } from '@/shared/modal';
import Button from '@/shared/ui/button/button';
import { Basket } from '@/widgets/header/ui/basket/basket';
import Image from 'next/image';
import { FC, PropsWithChildren, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';

enum ModalAuthorizationStepType {
  AuthorizationStepOne,
  AuthorizationStepTwo,
  AuthorizationStepThree,
  AuthorizationStepFour,
}

interface ModalAuthorization {
  onClose?: () => void;
  onNextStep: (value: ModalAuthorizationStepType) => void;
}
const ModalAuthorization: FC = () => {
  const [nextStep, setNextStep] = useState<ModalAuthorizationStepType>(
    ModalAuthorizationStepType.AuthorizationStepOne,
  );
  const onNextStep = (value: ModalAuthorizationStepType) => {
    setNextStep(value);
  };

  return (
    <ModalWithProvider
      title={'Вы не авторизованы'}
      subtitle={
        'Вам не будут начисляться бонусные баллы, не будет сохраняться история заказов и вы не сможете добавлять любимые блюда в избранное. Желаете войти или зарегистрироваться?'
      }
    >
      {nextStep === ModalAuthorizationStepType.AuthorizationStepOne && (
        <ModalStepOne onNextStep={onNextStep} />
      )}
      {nextStep === ModalAuthorizationStepType.AuthorizationStepTwo && (
        <ModalStepTwo onNextStep={onNextStep} />
      )}
      {nextStep === ModalAuthorizationStepType.AuthorizationStepThree && (
        <ModalStepThree onNextStep={onNextStep} />
      )}
      {nextStep === ModalAuthorizationStepType.AuthorizationStepFour && (
        <ModalStepFour onNextStep={onNextStep} />
      )}
    </ModalWithProvider>
  );
};

const ModalStepOne: FC<ModalAuthorization> = ({ onNextStep }) => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(closeModal());
  };
  return (
    <div className="modal__buttons modal__buttons--vertical">
      <Button
        text={'Авторизоваться'}
        onClick={() =>
          onNextStep(ModalAuthorizationStepType.AuthorizationStepTwo)
        }
      />
      <Button
        text={'Продолжить, как гость'}
        type={'secondary'}
        onClick={onClose}
      />
    </div>
  );
};

const ModalStepTwo: FC<ModalAuthorization> = ({ onNextStep }) => {
  return (
    <form action="">
      <input id="phoneModal" type="text" placeholder="+7" />
      <Image src="/img/modal/1.png" alt="" width={170} height={80} />
      <Button
        text={'Получить код'}
        onClick={() =>
          onNextStep(ModalAuthorizationStepType.AuthorizationStepThree)
        }
      />
    </form>
  );
};

const ModalStepThree: FC<ModalAuthorization> = ({ onNextStep }) => {
  return (
    <form action="">
      <input id="phoneModal" type="text" placeholder="+7" />
      <Image src="/img/modal/1.png" alt="" width={170} height={80} />
      <Button
        text={'Войти'}
        onClick={() =>
          onNextStep(ModalAuthorizationStepType.AuthorizationStepFour)
        }
      />
    </form>
  );
};

const ModalStepFour: FC<ModalAuthorization> = ({ onNextStep }) => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(closeModal());
  };
  const handleClick = () => {};
  return (
    <div className="modal__buttons modal__buttons--vertical">
      <Button
        text={'Заполнить'}
        onClick={() => {
          dispatch(closeModal());
          onNextStep(ModalAuthorizationStepType.AuthorizationStepOne);
        }}
      />
      <Button text={'Позже'} type={'secondary'} onClick={onClose} />
    </div>
  );
};

export default ModalAuthorization;
