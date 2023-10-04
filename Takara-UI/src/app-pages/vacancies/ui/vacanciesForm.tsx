'use client';

import { Input } from '@/widgets/Input';
import InputMask from 'react-input-mask';
import Select, { OnChangeValue } from 'react-select';
import cn from 'classnames';
import { useFormik } from 'formik';
import moment from 'moment/moment';
import { useGetAllVacancyTypesQuery } from '@/shared/clientApi';
import { useSendVacancyMutation } from '@/shared/clientApi/vacanciesFormApi';
import { useState } from 'react';
import store from '@/app/store';
import { type } from 'os';
export interface IVacancyTypes {
  label: string;
  value: string;
}
let selectValue: number;
const VacanciesForm = () => {
  const { data: vacancies } = useGetAllVacancyTypesQuery({});
  const [checkboxState, setCheckboxState] = useState(false);
  const [sendForm] = useSendVacancyMutation({});
  const newArray = vacancies?.payload.vacancyTypes.map(
    (el: { id?: number; name?: string }) => ({
      value: String(el.id),
      label: el.name,
    }),
  );

  const selectChange = (e: any) => {
    selectValue = Number(e.value);
  };
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      birthDate: '',
      vacancyTypeId: 0,
      phoneNumber: '',
      previousJob: '',
    },
    onSubmit: async values => {
      try {
        if (selectValue) {
          values.vacancyTypeId = selectValue;
        }
        values.birthDate = moment(values.birthDate).format('X');
        await sendForm(values).unwrap();
      } catch (err) {}
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="vacancyForm">
        <div className="vacancyForm__item">
          <p className="paragraph">Имя</p>
          <Input
            required={true}
            className="inputForm"
            type="text"
            name="firstName"
            placeholder="Введите имя"
            onchange={formik.handleChange}
          />
          <p className="paragraph">Фамилия</p>
          <Input
            required={true}
            className="inputForm"
            type="text"
            name="lastName"
            placeholder="Введите фамилию"
            onchange={formik.handleChange}
          />
          <p className="paragraph">Дата рождения</p>
          <Input
            required={true}
            className="inputForm"
            type="date"
            name="birthDate"
            placeholder="Введите дату рождения"
            onchange={formik.handleChange}
          />
        </div>
        <div className="vacancyForm__item">
          <p className="paragraph">Телефон</p>
          <InputMask
            required={true}
            name="phoneNumber"
            className="inputForm"
            type="text"
            placeholder="+7 (___) ___-__-__"
            onChange={formik.handleChange}
            mask={'+7 (999) 999-99-99'}
          ></InputMask>
          <p className="paragraph">Вакансия</p>
          <div className="select">
            <svg
              className="rotate"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M6.00453 8.03539L10.1441 3.91234C10.34 3.71718 10.6576 3.71723 10.8535 3.91245C11.0494 4.10776 11.0494 4.42443 10.8534 4.61967L6.35972 9.09537C6.17074 9.2836 5.86862 9.29023 5.67166 9.1153C5.66138 9.10658 5.65137 9.09739 5.64166 9.08772L1.14803 4.61202C0.952003 4.41678 0.951952 4.10011 1.14792 3.9048C1.34379 3.70959 1.66135 3.70954 1.85728 3.90469L6.00453 8.03539Z"
                fill="#8B8E9E"
              />
            </svg>
            {/*<a href="javascript:void(0);" className="slct">*/}
            {/*  Выберите*/}
            {/*</a>*/}
            <Select
              required={true}
              options={newArray}
              placeholder={'Выберите'}
              // closeMenuOnSelect={false}
              // closeMenuOnScroll={false}
              // defaultMenuIsOpen={true}
              onChange={selectChange}
            />
            <Input
              type="hidden"
              id="select"
              name="vacancyTypeId"
              onchange={formik.handleChange}
            />
          </div>
          <p className="topSelect paragraph">Предыдущее место работы</p>
          <Input
            required={true}
            className="inputForm"
            type="text"
            name="previousJob"
            placeholder="Укажите"
            onchange={formik.handleChange}
          />
        </div>
      </div>
      <div className="send">
        <button
          type="submit"
          className={cn('send__button', {
            'send__button--disable': !checkboxState,
          })}
        >
          Отправить заявку
        </button>
        <div className="send__agree">
          <div
            className={cn('send__agree-check', {
              'send__agree-check--click': checkboxState,
            })}
            onClick={() => setCheckboxState(!checkboxState)}
          >
            <img src="./img/iconSVG/galochkaLol.png" alt=""></img>
          </div>
          <div className="send__agree-text">
            Соглашаюсь с{' '}
            <a href="#" className="send__agree-text--orange">
              политикой обработки персональных данных
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default VacanciesForm;
