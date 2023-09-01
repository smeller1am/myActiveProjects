"use client";
import { FC } from "react";
import { HomePage } from "@/pages/home";

const Home: FC = () => {
    return (<>
        <div className="container">
            <div className="wrapper"></div>
            <div className="containerPage">
                <div className="containerPage__item containerPage__item--order firstItem">
                    <div className="titleMain titleProfile">
                        <h1 className="titleMain__title">Оформление заказа</h1>
                    </div>
                    <div className="formContainer">
                        <form action="" className="orderingForm">
                            <div className="orderingForm__item">
                                <p className="paragraph">Получатель</p>
                                <input className="inputForm" type="text" placeholder="Введите имя"/>
                                    <p className="paragraph">Телефон</p>
                                    <input className="inputForm" name="phone" type="tel" placeholder="+7 (___) ___-__-__"/>
                                        <p className="paragraph">Количество приборов</p>
                                        <div className="orderingForm__quantity">
                                            <div className="orderingForm__quantity-number">0</div>
                                            <div className="orderingForm__quantity-number">1</div>
                                            <div className="orderingForm__quantity-number">2</div>
                                            <div className="orderingForm__quantity-number orderingForm__quantity-number--active">3</div>
                                            <div className="orderingForm__quantity-number">4</div>
                                            <div className="orderingForm__quantity-number">5</div>
                                            <div className="orderingForm__quantity-number">6</div>
                                            <div className="orderingForm__quantity-number">7</div>
                                            <div className="orderingForm__quantity-number">8</div>
                                        </div>
                                        <p className="paragraph">Способ доставки</p>
                                        <div className="orderingForm__delivery">
                                            <div className="orderingForm__delivery-radio">
                                                <div className="orderingForm__delivery-radioContainer">
                                                    <div className="orderingForm__delivery-radioBtn">
                                                        <input id="radio-1" type="radio" name="radio" value="1" checked/>
                                                            <label for="radio-1">Курьер</label>
                                                    </div>
                                                    <span>Стоимость доставки 0 ₽</span>
                                                </div>
                                                <div className="orderingForm__delivery-radioBtn">
                                                    <input id="radio-2" type="radio" name="radio" value="1" checked/>
                                                        <label for="radio-2">Самовывоз</label>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="paragraph">Выберите адрес</p>
                                        <div className="select">
                                            <svg className="rotate" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                                                <path d="M6.00453 8.03539L10.1441 3.91234C10.34 3.71718 10.6576 3.71723 10.8535 3.91245C11.0494 4.10776 11.0494 4.42443 10.8534 4.61967L6.35972 9.09537C6.17074 9.2836 5.86862 9.29023 5.67166 9.1153C5.66138 9.10658 5.65137 9.09739 5.64166 9.08772L1.14803 4.61202C0.952003 4.41678 0.951952 4.10011 1.14792 3.9048C1.34379 3.70959 1.66135 3.70954 1.85728 3.90469L6.00453 8.03539Z" fill="#8B8E9E"/>
                                            </svg>
                                            <a href="javascript:void(0);" className="slct">Выберите
                                            </a>
                                            <ul className="drop">
                                                <li><a data-znach="admin">ул. Старая Машинопрокатная, кв. 12А, кв. 92</a></li>
                                                <li><a data-znach="povar">ул. Новая Сельскозаводская, д. 62Б, кв. 183</a></li>
                                                <li><a data-znach="oficiant">ул. Старая Машинопрокатная, кв. 12А, кв. 92</a></li>
                                                <p className="borderTop paragraph">+  Добавить адрес</p>
                                            </ul>
                                            <input type="hidden" id="select"/>
                                        </div>
                            </div>
                            <div className="orderingForm__item">
                                <p className="paragraph">Время доставки</p>
                                <div className="orderingForm__delivery">
                                    <div className="orderingForm__delivery-radio">
                                        <div className="orderingForm__delivery-radioContainer">
                                            <div className="orderingForm__delivery-radioBtn">
                                                <input id="radio1" type="radio" name="radio2" value="1" checked/>
                                                    <label for="radio1">Как можно раньше</label>
                                            </div>
                                            <span>Примерное время  21:20</span>
                                        </div>
                                        <div className="orderingForm__delivery-radioBtn">
                                            <input id="radio2" type="radio" name="radio2" value="1" checked/>
                                                <label for="radio2">Ко времени
                                                    <span>Фактическое время доставки может отличаться на ± 10 минут</span>
                                                </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="select">
                                    <svg className="rotate" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                                        <path d="M6.00453 8.03539L10.1441 3.91234C10.34 3.71718 10.6576 3.71723 10.8535 3.91245C11.0494 4.10776 11.0494 4.42443 10.8534 4.61967L6.35972 9.09537C6.17074 9.2836 5.86862 9.29023 5.67166 9.1153C5.66138 9.10658 5.65137 9.09739 5.64166 9.08772L1.14803 4.61202C0.952003 4.41678 0.951952 4.10011 1.14792 3.9048C1.34379 3.70959 1.66135 3.70954 1.85728 3.90469L6.00453 8.03539Z" fill="#8B8E9E"/>
                                    </svg>
                                    <a href="javascript:void(0);" className="slct">Выберите
                                    </a>
                                    <ul className="drop">
                                        <li><a data-znach="admin">16 августа, среда  16:00</a></li>
                                        <li><a data-znach="povar">16 августа, среда  16:30</a></li>
                                        <li><a data-znach="oficiant">16 августа, среда  17:00</a></li>
                                        <li><a data-znach="vodytel">16 августа, среда  17:30</a></li>
                                    </ul>
                                    <input type="hidden" id="select"/>
                                </div>
                                <p className="topSelect paragraph">Оплата</p>
                                <div className="orderingForm__delivery">
                                    <div className="orderingForm__delivery-radio">
                                        <div className="orderingForm__delivery-radioBtn">
                                            <input id="radio-3" type="radio" name="radio3" value="1" checked/>
                                                <label for="radio-3">Онлайн оплата</label>
                                        </div>
                                        <div className="orderingForm__delivery-radioBtn">
                                            <input id="radio-4" type="radio" name="radio3" value="1" checked/>
                                                <label for="radio-4">Наличными</label>
                                        </div>
                                        <div className="orderingForm__delivery-radioBtn">
                                            <input id="radio-5" type="radio" name="radio3" value="1" checked/>
                                                <label for="radio-5">Картой курьеру</label>
                                        </div>
                                    </div>
                                </div>
                                <p className="orderingForm__points paragraph">Использовать баллы (до 740 ₽) <span>У вас 418 баллов</span></p>
                                <input className="inputForm" type="number" placeholder="Введите"/>
                                    <p className="paragraph">Получатель</p>
                                    <input className="inputForm inputForm--noMargin" type="text" placeholder="Введите"/>
                            </div>
                        </form>
                        <div className="orderingForm__item orderingForm__item--bottom">
                            <p className="paragraph">Комментарий к заказу</p>
                            <input className="inputForm" type="text" placeholder="Введите комментарий"/>
                        </div>
                    </div>
                    <div className="gift">
                        <h2>Выберите подарок</h2>
                        <div className="gift__cards">
                            <div className="gift__cards-item gift__cards-item--active">
                                <img src="./img/pizza/1.jpg" alt=""/>
                                    <div className="gift__cards-textBtn">
                                        <div className="gift__cards-text">Картошка Фри</div>
                                        <div className="gift__cards-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                                                <path d="M12.4697 0.464463C12.0791 0.0739388 11.446 0.0739388 11.0554 0.464463L6.1058 5.4141L2.57039 1.87868C2.17986 1.48815 1.5467 1.48815 1.15617 1.87868C0.76565 2.2692 0.76565 2.90237 1.15617 3.29289L5.38585 7.52256C5.39004 7.52692 5.39429 7.53124 5.39858 7.53553C5.59159 7.72853 5.84386 7.82615 6.09681 7.82839C6.35576 7.83073 6.61545 7.73311 6.81303 7.53553C6.81737 7.53119 6.82167 7.52681 6.82592 7.52241L12.4697 1.87868C12.8602 1.48815 12.8602 0.854988 12.4697 0.464463Z" fill="white"/>
                                            </svg>
                                        </div>
                                    </div>
                            </div>
                            <div className="gift__cards-item">
                                <img src="./img/pizza/1.jpg" alt=""/>
                                    <div className="gift__cards-textBtn">
                                        <div className="gift__cards-text">Ролл Масусимару</div>
                                        <div className="gift__cards-btn">Выбрать</div>
                                    </div>
                            </div>
                            <div className="gift__cards-item gift__cards-item--unactive">
                                <img src="./img/pizza/1.jpg" alt=""/>
                                    <div className="gift__cards-textBtn">
                                        <div className="gift__cards-text">Маргарита</div>
                                        <div className="gift__cards-btn">от 1500 ₽</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="dontForget">
                        <h2>Не забудьте</h2>
                        <div className="dontForget__cards">
                            <div className="dontForget__cards-item">
                                <img src="./img/pizza/1.jpg" alt=""/>
                                    <div className="dontForget__cards-info">
                                        <div className="dontForget__cards-infoTitle">Маргарита</div>
                                        <div className="dontForget__cards-infoSubtitle">480 P</div>
                                        <div className="dontForget__cards-infoBtn">
                                            <div className="icon-basket"></div>
                                            В корзину
                                        </div>
                                    </div>
                            </div>
                            <div className="dontForget__cards-item">
                                <img src="./img/pizza/1.jpg" alt=""/>
                                    <div className="dontForget__cards-info">
                                        <div className="dontForget__cards-infoTitle">Маргарита</div>
                                        <div className="dontForget__cards-infoSubtitle">480 P</div>
                                        <div className="dontForget__cards-infoBtn">
                                            <div className="icon-basket"></div>
                                            В корзину
                                        </div>
                                    </div>
                            </div>
                            <div className="dontForget__cards-item">
                                <img src="./img/pizza/1.jpg" alt=""/>
                                    <div className="dontForget__cards-info">
                                        <div className="dontForget__cards-infoTitle">Маргарита</div>
                                        <div className="dontForget__cards-infoSubtitle">480 P</div>
                                        <div className="dontForget__cards-infoBtn">
                                            <div className="icon-basket"></div>
                                            В корзину
                                        </div>
                                    </div>
                            </div>
                            <div className="dontForget__cards-item">
                                <img src="./img/pizza/1.jpg" alt=""/>
                                    <div className="dontForget__cards-info">
                                        <div className="dontForget__cards-infoTitle">Маргарита</div>
                                        <div className="dontForget__cards-infoSubtitle">480 P</div>
                                        <div className="dontForget__cards-infoBtn">
                                            <div className="icon-basket"></div>
                                            В корзину
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="containerPage__item secondItem">
                    <h2 className="containerPage__item-ourOrder">Ваш заказ</h2>
                    <div className="order order--margin">
                        <div className="order__item">
                            <img src="./img/pizza/1.png" alt=""/>
                                <div className="order__itemText">
                                    <div className="order__itemTitle">Дьябло</div>
                                    <div className="order__itemPrice">280 ₽</div>
                                </div>
                                <div className="order__plusMinus">
                                    <div className="order__block">
                                        <button className="order__plus">-</button>
                                        <div className="order__digital">1</div>
                                        <button className="order__minus">+</button>
                                    </div>
                                </div>
                        </div>
                        <div className="order__item">
                            <img src="./img/pizza/1.png" alt=""/>
                                <div className="order__itemText">
                                    <div className="order__itemTitle">Дьябло</div>
                                    <div className="order__itemPrice">280 ₽</div>
                                </div>
                                <div className="order__plusMinus">
                                    <div className="order__block">
                                        <button className="order__plus">-</button>
                                        <div className="order__digital">1</div>
                                        <button className="order__minus">+</button>
                                    </div>
                                </div>
                        </div>
                        <div className="order__item">
                            <img src="./img/pizza/1.png" alt=""/>
                                <div className="order__itemText">
                                    <div className="order__itemTitle">Дьябло</div>
                                    <div className="order__itemPrice">280 ₽</div>
                                </div>
                                <div className="order__plusMinus">
                                    <div className="order__block">
                                        <button className="order__plus">-</button>
                                        <div className="order__digital">1</div>
                                        <button className="order__minus">+</button>
                                    </div>
                                </div>
                        </div>
                        <div className="order__item">
                            <img src="./img/pizza/1.png" alt=""/>
                                <div className="order__itemText">
                                    <div className="order__itemTitle">Дьябло</div>
                                    <div className="order__itemPrice">280 ₽</div>
                                </div>
                                <div className="order__plusMinus">
                                    <div className="order__block">
                                        <button className="order__plus">-</button>
                                        <div className="order__digital">1</div>
                                        <button className="order__minus">+</button>
                                    </div>
                                </div>
                        </div>
                        <div className="order__item">
                            <img src="./img/pizza/1.png" alt=""/>
                                <div className="order__itemText">
                                    <div className="order__itemTitle">Дьябло</div>
                                    <div className="order__itemPrice">280 ₽</div>
                                </div>
                                <div className="order__plusMinus">
                                    <div className="order__block">
                                        <button className="order__plus">-</button>
                                        <div className="order__digital">1</div>
                                        <button className="order__minus">+</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="containerPage__item-priceOrder">
                        <p>Итого</p>
                        1 480 ₽
                    </div>
                    <div className="buttonOrder">
                        <div className="buttonOrder__checkout buttonOrder__checkout--width">
                            <div className="buttonOrder__price">
                                1480 Р
                            </div>
                            <p>Оформить заказ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Home;