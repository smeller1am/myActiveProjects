'use client';

import React, { FC, useRef } from 'react';
import Select from 'react-select';
import { useGetAllVacancyTypesQuery } from '@/shared/clientApi';
import { Provider } from 'react-redux';
import store from '@/app/store';
import { FavoriteContent } from '@/app-pages/profile/ui/profileContent/FavoriteContent';
import AsyncSelect from 'react-select/async';
import { useFormik } from 'formik';
import moment from 'moment';
import {
  useSendVacancyMutation,
  vacanciesFormsApi,
} from '@/shared/clientApi/vacanciesFormApi';
import cn from 'classnames';
import InputMask from 'react-input-mask';
import { Input } from '@/widgets/Input';
import VacanciesForm from '@/app-pages/vacancies/ui/vacanciesForm';

export const VacanciesPage: FC = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="wrapper"></div>
        <img className="fish" src="./img/delivery/noCutt.png" alt="" />
        <div className="titleMain">
          <h1 className="titleMain__title">Вакансии</h1>
        </div>
        <div className="vacancyPreview">
          Работа в компании <span>«Такара»</span> – это возможность стать частью
          команды профессионалов и проникнуться уникальной атмосферойнашего
          дружного коллектива.
        </div>
        <VacanciesForm />
      </div>
    </Provider>
  );
};
