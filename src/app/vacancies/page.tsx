
import { FC } from "react";
import { HomePage } from "@/pages/home";
import Discounts from "@/app/discounts/page";

const Home: FC = () => {
    return (<>
        <div className="container">
            <div className="wrapper"></div>
            <img className="fish" src="./img/delivery/noCutt.png" alt=""/>
                <div className="titleMain">
                    <h1 className="titleMain__title">Вакансии</h1>
                </div>
                <div className="vacancyPreview">Работа в компании <span>«Такара»</span> – это возможность стать частью команды профессионалов и проникнуться уникальной атмосферойнашего дружного коллектива.</div>
                <form className="vacancyForm">
                    <div className="vacancyForm__item">
                        <p className="paragraph">Имя</p>
                        <input className="inputForm" type="text" placeholder="Введите имя"/>
                        <p className="paragraph">Фамилия</p>
                        <input className="inputForm" type="text" placeholder="Введите фамилию"/>
                        <p className="paragraph">Дата рождения</p>
                        <input className="inputForm" type="date" placeholder="Введите дату рождения"/>
                    </div>
                    <div className="vacancyForm__item">
                        <p className="paragraph">Телефон</p>
                        <input name="phone" className="inputForm" type="tel" placeholder="+7 (___) ___-__-__"/>
                        <p className="paragraph">Вакансия</p>
                        <div className="select">
                                <svg className="rotate" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                                    <path d="M6.00453 8.03539L10.1441 3.91234C10.34 3.71718 10.6576 3.71723 10.8535 3.91245C11.0494 4.10776 11.0494 4.42443 10.8534 4.61967L6.35972 9.09537C6.17074 9.2836 5.86862 9.29023 5.67166 9.1153C5.66138 9.10658 5.65137 9.09739 5.64166 9.08772L1.14803 4.61202C0.952003 4.41678 0.951952 4.10011 1.14792 3.9048C1.34379 3.70959 1.66135 3.70954 1.85728 3.90469L6.00453 8.03539Z" fill="#8B8E9E"/>
                                </svg>
                                <a href="javascript:void(0);" className="slct">Выберите</a>
                                <ul className="drop">
                                    <li><a data-znach="admin">Администратор</a></li>
                                    <li><a data-znach="povar">Повар</a></li>
                                    <li><a data-znach="oficiant">Официант</a></li>
                                    <li><a data-znach="vodytel">Водитель</a></li>
                                </ul>
                                <input type="hidden" id="select"/>
                            </div>
                        <p className="topSelect paragraph">Предыдущее место работы</p>
                        <input className="inputForm" type="text" placeholder="Укажите"/>
                    </div>
                </form>
                <div className="send">
                    <button className="send__button">Отправить заявку</button>
                    <div className="send__agree">
                        <div className="send__agree-check"><img src="./img/iconSVG/galochkaLol.png" alt=""></img></div>
                        <div className="send__agree-text">Соглашаюсь с <a href="#" className="send__agree-text--orange">политикой обработки персональных данных</a></div>
                    </div>
                </div>
        </div>
    </>);
}

export default Home;
