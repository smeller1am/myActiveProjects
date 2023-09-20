import { FC, useEffect } from 'react';
// @ts-ignore
import Animate from 'animate.css-react';
import 'animate.css/animate.css';

export const ProfileContent: FC = () => {
  return (
    <Animate appear="fadeIn" durationAppear={100}>
      <div
        data-info="target1"
        className="profile__target profile__target--active profile__target--opacity"
      >
        <h2 className="miniTitle miniTitle--profile">Личные данные</h2>
        <div className="personalInfo">
          <form action="" className="personalInfo__form">
            <div className="personalInfo__formItem">
              <p className="paragraph">Имя</p>
              <input
                className="inputForm"
                type="text"
                placeholder="Введите имя"
              />
              <p className="paragraph">Фамилия</p>
              <input
                className="inputForm"
                type="text"
                placeholder="Введите фамилию"
              />
              <p className="paragraph">Дата рождения</p>
              <input
                className="inputForm"
                type="date"
                placeholder="Введите дату рождения"
              />
              <p className="paragraph">Телефон</p>
              <input
                name="phone"
                className="inputForm"
                type="tel"
                placeholder="+7 (___) ___-__-__"
              />
            </div>
            <div className="personalInfo__formItem">
              <p className="paragraph">E-mail</p>
              <input
                className="inputForm"
                type="tel"
                placeholder="Введите E-mail"
              />
              <div className="personalInfo__formItem-container">
                <p className="paragraph">Адрес 1</p>
                <p className="paragraph delete">Удалить</p>
              </div>
              <input className="inputForm" type="text" placeholder="Укажите" />
              <div className="personalInfo__formItem-containerHome">
                <div className="personalInfo__formItem-containerItem">
                  <p className="paragraph">Квартира</p>
                  <input
                    className="inputForm"
                    type="text"
                    placeholder="Укажите"
                  />
                </div>
                <div className="personalInfo__formItem-containerItem">
                  <p className="paragraph">Подъезд</p>
                  <input
                    className="inputForm"
                    type="text"
                    placeholder="Укажите"
                  />
                </div>
                <div className="personalInfo__formItem-containerItem">
                  <p className="paragraph">Этаж</p>
                  <input
                    className="inputForm"
                    type="text"
                    placeholder="Укажите"
                  />
                </div>
              </div>
              <p className="paragraph newAdress">+ Добавить адрес</p>
            </div>
          </form>
          <button className="personalInfo__button">Сохранить</button>
        </div>
      </div>
    </Animate>
  );
};
