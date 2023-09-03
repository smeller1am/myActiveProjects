'use client';
import InputMask from 'react-input-mask';
import { closeModal } from '@/app/store/modalSlice';
import {
  useGetPasswordMutation,
  useGetTokenMutation,
} from '@/shared/clientApi';
import { ModalWithProvider } from '@/shared/modal';
import Button from '@/shared/ui/button/button';
import { Basket } from '@/widgets/header/ui/basket/basket';
import { useFormik } from 'formik';
import Image from 'next/image';
import { FC, FormEvent, PropsWithChildren, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';

enum ModalAuthorizationStepType {
  AuthorizationStepOne,
  AuthorizationStepTwo,
  AuthorizationStepThree,
  AuthorizationStepFour,
}

let phone = '';

interface ModalAuthorization {
  onClose?: () => void;
  onNextStep: (value: ModalAuthorizationStepType) => void;
  onGetPhone?: (phone: string) => void;
  phone?: string;
  className?: string;
}
const ModalAuthorization: FC = () => {
  const [nextStep, setNextStep] = useState<ModalAuthorizationStepType>(
    ModalAuthorizationStepType.AuthorizationStepOne,
  );
  const [phone, setPhone] = useState<string>();
  const onNextStep = (value: ModalAuthorizationStepType) => {
    setNextStep(value);
  };
  const onGetPhone = (value: string) => {
    setPhone(value);
  };
  const title =
    nextStep === ModalAuthorizationStepType.AuthorizationStepOne
      ? 'Вы не авторизованы'
      : nextStep === ModalAuthorizationStepType.AuthorizationStepTwo ||
        nextStep === ModalAuthorizationStepType.AuthorizationStepThree
      ? 'Авторизация'
      : nextStep === ModalAuthorizationStepType.AuthorizationStepFour
      ? 'Добро пожаловать!'
      : '';
  const subtitle =
    nextStep === ModalAuthorizationStepType.AuthorizationStepOne
      ? 'Вам не будут начисляться бонусные баллы, не будет сохраняться история заказов и вы не сможете добавлять любимые блюда в избранное. Желаете войти или зарегистрироваться?'
      : nextStep === ModalAuthorizationStepType.AuthorizationStepTwo
      ? 'Введите номер мобильного телефона'
      : nextStep === ModalAuthorizationStepType.AuthorizationStepThree
      ? 'Введите код из SMS'
      : nextStep === ModalAuthorizationStepType.AuthorizationStepFour
      ? 'Вы у нас впервые, поэтому мы рекомендуем заполнить анкету в личном кабинете, где вы можете указать свои контактные данные и управлять адресами доставки. Это необходимо для оформления заказов.'
      : '';
  return (
    <ModalWithProvider title={title} subtitle={subtitle}>
      {nextStep === ModalAuthorizationStepType.AuthorizationStepOne && (
        <ModalStepOne onNextStep={onNextStep} />
      )}
      {nextStep === ModalAuthorizationStepType.AuthorizationStepTwo && (
        <ModalStepTwo
          onNextStep={onNextStep}
          onGetPhone={onGetPhone}
          className={}
        />
      )}
      {nextStep === ModalAuthorizationStepType.AuthorizationStepThree && (
        <ModalStepThree onNextStep={onNextStep} phone={phone} />
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

const ModalStepTwo: FC<ModalAuthorization> = ({ onNextStep, onGetPhone }) => {
  const [auth] = useGetPasswordMutation();
  const formik = useFormik({
    initialValues: {
      phone: '',
    },
    onSubmit: async values => {
      try {
        phone = values.phone;
        onGetPhone && onGetPhone(phone);
        await auth(values).unwrap();
        onNextStep(ModalAuthorizationStepType.AuthorizationStepThree);
      } catch (err) {}
    },
  });
  const ref = (val: any) => {
    val && val.setAttribute('autoFocus', true);
  };
  return (
    <form action="" onSubmit={formik.handleSubmit}>
      <InputMask
        mask={'+7 (999) 999-99-99'}
        type="text"
        name="phone"
        alwaysShowMask={true}
        onChange={formik.handleChange}
        inputRef={ref}
      ></InputMask>
      <Image src="/img/modal/1.png" alt="" width={170} height={80} />
      <button type="submit" className="dontForget__cards-infoBtn">
        Получить код
      </button>
    </form>
  );
};

const ModalStepThree: FC<ModalAuthorization> = ({ onNextStep, phone }) => {
  const [auth] = useGetTokenMutation();
  const formik = useFormik({
    initialValues: {
      code: '',
    },
    onSubmit: async values => {
      try {
        // await auth({ values }).unwrap();
        onNextStep(ModalAuthorizationStepType.AuthorizationStepThree);
      } catch (err) {}
    },
  });
  console.log('-> phone', phone);
  return (
    <form action="">
      <input type="text" placeholder="+7" name="code" />
      <Image src="/img/modal/1.png" alt="" width={170} height={80} />
      <Button text={'Войти'} />
      {/*onClick={() =>*/}
      {/*  onNextStep(ModalAuthorizationStepType.AuthorizationStepFour)*/}
      {/*}*/}
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
