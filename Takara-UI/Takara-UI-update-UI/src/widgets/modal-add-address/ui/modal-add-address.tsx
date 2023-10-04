import React, { FC } from 'react';
import { useAddAddressMutation } from '@/shared/clientApi/userApi';
import { useFormik } from 'formik';
import { ModalWithProvider } from '@/shared/modal';
import { Input } from '@/widgets/Input';

export interface IAddressModal {
  isOpen: boolean;
  type: string;
  closeModal: any;
}
export const ModalAddAddres: FC<IAddressModal> = ({
  closeModal,
  isOpen,
  type,
}) => {
  const [addAddress] = useAddAddressMutation();
  const formik = useFormik({
    initialValues: {
      city: '',
      street: '',
      house: '',
      apartament: '',
      entrance: '',
      floor: '',
    },
    onSubmit: async values => {
      try {
        const addressInputValue: HTMLInputElement | null =
          document.querySelector('input[name="address"]');
        const inputValues = addressInputValue?.value.split(' ');
        if (inputValues) {
          values.city = inputValues[0];
          values.street = inputValues[1];
          values.house = inputValues[2];
        }
        values.apartament = values.apartament.toString();
        await addAddress(values).unwrap();
        closeModal();
      } catch (err) {}
    },
  });
  return (
    <ModalWithProvider title="Добавить адрес" type={type} isOpen={isOpen}>
      <form onSubmit={formik.handleSubmit}>
        <div className="modal__form modal__form--address">
          <div className="modal__form-item modal__form-item--left">
            <p className="paragraph start">Адрес 1</p>
            <Input
              required={true}
              name="address"
              className="modalInput"
              type="text"
              placeholder="Укажите"
            />
          </div>
          <div className="modal__form-item modal__form-item--flex">
            <div className="modal__formFlex-item">
              <p className="paragraph">Квартира</p>
              <Input
                required={true}
                name="apartament"
                className="modalInput"
                type="number"
                placeholder="Укажите"
                onchange={formik.handleChange}
              />
            </div>
            <div className="modal__formFlex-item">
              <p className="paragraph">Подъезд</p>
              <Input
                required={true}
                name="entrance"
                className="modalInput"
                type="number"
                placeholder="Укажите"
                onchange={formik.handleChange}
              />
            </div>
            <div className="modal__formFlex-item">
              <p className="paragraph">Этаж</p>
              <Input
                required={true}
                name="floor"
                className="modalInput"
                type="number"
                placeholder="Укажите"
                onchange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="dontForget__cards-infoBtn">
          Сохранить
        </button>
      </form>
    </ModalWithProvider>
  );
};
