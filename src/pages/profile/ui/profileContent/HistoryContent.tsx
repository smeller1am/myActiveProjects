'use client'
import {FC, useEffect} from "react";
import Animate from 'animate.css-react'
import 'animate.css/animate.css'


export const HistoryContent : FC = () => {

    return (
        <Animate appear="fadeIn" durationAppear={100}>
            <div className="profile__target profile__target--active profile__target--opacity">
                <h2 className="miniTitle miniTitle--profile">История заказов</h2>
                <div className="history">
                    <div className="history__container">
                        <div className="history__grid">
                            <div className="history__grid-item">
                                <div className="history__item">
                                    <div className="history__item-numberOrder">
                                        <div className="history__item-number">№ 12312344415-15</div>
                                        <div className="history__item-stage">В обработке</div>
                                    </div>
                                    <div className="history__item-dateOrder">
                                        <div className="history__item-date">Заказ от 12.05.2023</div>
                                        <div className="history__item-money">4 680 ₽</div>
                                    </div>
                                    <div className="history__item-imageOrder">
                                        <div className="history__item-gallery">
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                        </div>
                                        <div className="history__item-stage"></div>
                                    </div>
                                    <div className="history__hiddenBlock">
                                        <div className="history__hiddenBlock-title">Состав</div>
                                        <div className="order order--history">
                                            <div className="order__item">
                                                <img data-miniPic="1" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item">
                                                <img data-miniPic="2" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item order__item--dsntExists">
                                                <img data-miniPic="3" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                    <div className="order__itemSubtitle">Больше нет в меню
                                                    </div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="paragraph">Адрес доставки</p>
                                        <div className="history__hiddenBlock-text">ул. Старая Машинопрокатная,
                                            кв. 12А, кв. 92
                                        </div>
                                        <div className="history__hiddenBlock-info">
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Дата</p>
                                                <div className="history__hiddenBlock-text">12.05.2023</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Доставка</p>
                                                <div className="history__hiddenBlock-text">90 ₽</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Баллы</p>
                                                <div className="history__hiddenBlock-text">- 318</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Итого</p>
                                                <div
                                                    className="history__hiddenBlock-text history__hiddenBlock-text--big">2
                                                    160 ₽
                                                </div>
                                            </div>
                                        </div>
                                        <div className="likeInfo__itemInfo-buttonBasket">Повторить заказ</div>
                                    </div>
                                </div>
                                <div className="history__item">
                                    <div className="history__item-numberOrder">
                                        <div className="history__item-number">№ 12312344415-15</div>
                                        <div
                                            className="history__item-stage history__item-stage--green">Доставлен
                                        </div>
                                    </div>
                                    <div className="history__item-dateOrder">
                                        <div className="history__item-date">Заказ от 12.05.2023</div>
                                        <div className="history__item-money">2 740 ₽</div>
                                    </div>
                                    <div className="history__item-imageOrder">
                                        <div className="history__item-gallery">
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                        </div>
                                        <div className="history__item-stage history__item-stage--red">- 318
                                            баллов
                                        </div>
                                    </div>
                                    <div className="history__hiddenBlock">
                                        <div className="history__hiddenBlock-title">Состав</div>
                                        <div className="order order--history">
                                            <div className="order__item">
                                                <img data-miniPic="4" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item">
                                                <img data-miniPic="5" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item order__item--dsntExists">
                                                <img data-miniPic="6" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                    <div className="order__itemSubtitle">Больше нет в меню
                                                    </div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="paragraph">Адрес доставки</p>
                                        <div className="history__hiddenBlock-text">ул. Старая Машинопрокатная,
                                            кв. 12А, кв. 92
                                        </div>
                                        <div className="history__hiddenBlock-info">
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Дата</p>
                                                <div className="history__hiddenBlock-text">12.05.2023</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Доставка</p>
                                                <div className="history__hiddenBlock-text">90 ₽</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Баллы</p>
                                                <div className="history__hiddenBlock-text">- 318</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Итого</p>
                                                <div
                                                    className="history__hiddenBlock-text history__hiddenBlock-text--big">2
                                                    160 ₽
                                                </div>
                                            </div>
                                        </div>
                                        <div className="likeInfo__itemInfo-buttonBasket">Повторить заказ</div>
                                    </div>
                                </div>
                                <div className="history__item">
                                    <div className="history__item-numberOrder">
                                        <div className="history__item-number">№ 12312344415-15</div>
                                        <div className="history__item-stage">В обработке</div>
                                    </div>
                                    <div className="history__item-dateOrder">
                                        <div className="history__item-date">Заказ от 12.05.2023</div>
                                        <div className="history__item-money">4 680 ₽</div>
                                    </div>
                                    <div className="history__item-imageOrder">
                                        <div className="history__item-gallery">
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                        </div>
                                        <div className="history__item-stage"></div>
                                    </div>
                                    <div className="history__hiddenBlock">
                                        <div className="history__hiddenBlock-title">Состав</div>
                                        <div className="order order--history">
                                            <div className="order__item">
                                                <img data-miniPic="1" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item">
                                                <img data-miniPic="2" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item order__item--dsntExists">
                                                <img data-miniPic="3" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                    <div className="order__itemSubtitle">Больше нет в меню
                                                    </div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="paragraph">Адрес доставки</p>
                                        <div className="history__hiddenBlock-text">ул. Старая Машинопрокатная,
                                            кв. 12А, кв. 92
                                        </div>
                                        <div className="history__hiddenBlock-info">
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Дата</p>
                                                <div className="history__hiddenBlock-text">12.05.2023</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Доставка</p>
                                                <div className="history__hiddenBlock-text">90 ₽</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Баллы</p>
                                                <div className="history__hiddenBlock-text">- 318</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Итого</p>
                                                <div
                                                    className="history__hiddenBlock-text history__hiddenBlock-text--big">2
                                                    160 ₽
                                                </div>
                                            </div>
                                        </div>
                                        <div className="likeInfo__itemInfo-buttonBasket">Повторить заказ</div>
                                    </div>
                                </div>
                                <div className="history__item">
                                    <div className="history__item-numberOrder">
                                        <div className="history__item-number">№ 12312344415-15</div>
                                        <div
                                            className="history__item-stage history__item-stage--green">Доставлен
                                        </div>
                                    </div>
                                    <div className="history__item-dateOrder">
                                        <div className="history__item-date">Заказ от 12.05.2023</div>
                                        <div className="history__item-money">2 740 ₽</div>
                                    </div>
                                    <div className="history__item-imageOrder">
                                        <div className="history__item-gallery">
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                        </div>
                                        <div className="history__item-stage history__item-stage--red">- 318
                                            баллов
                                        </div>
                                    </div>
                                    <div className="history__hiddenBlock">
                                        <div className="history__hiddenBlock-title">Состав</div>
                                        <div className="order order--history">
                                            <div className="order__item">
                                                <img data-miniPic="4" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item">
                                                <img data-miniPic="5" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item order__item--dsntExists">
                                                <img data-miniPic="6" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                    <div className="order__itemSubtitle">Больше нет в меню
                                                    </div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="paragraph">Адрес доставки</p>
                                        <div className="history__hiddenBlock-text">ул. Старая Машинопрокатная,
                                            кв. 12А, кв. 92
                                        </div>
                                        <div className="history__hiddenBlock-info">
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Дата</p>
                                                <div className="history__hiddenBlock-text">12.05.2023</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Доставка</p>
                                                <div className="history__hiddenBlock-text">90 ₽</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Баллы</p>
                                                <div className="history__hiddenBlock-text">- 318</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Итого</p>
                                                <div
                                                    className="history__hiddenBlock-text history__hiddenBlock-text--big">2
                                                    160 ₽
                                                </div>
                                            </div>
                                        </div>
                                        <div className="likeInfo__itemInfo-buttonBasket">Повторить заказ</div>
                                    </div>
                                </div>
                                <div className="history__item">
                                    <div className="history__item-numberOrder">
                                        <div className="history__item-number">№ 12312344415-15</div>
                                        <div className="history__item-stage">В обработке</div>
                                    </div>
                                    <div className="history__item-dateOrder">
                                        <div className="history__item-date">Заказ от 12.05.2023</div>
                                        <div className="history__item-money">4 680 ₽</div>
                                    </div>
                                    <div className="history__item-imageOrder">
                                        <div className="history__item-gallery">
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                        </div>
                                        <div className="history__item-stage"></div>
                                    </div>
                                    <div className="history__hiddenBlock">
                                        <div className="history__hiddenBlock-title">Состав</div>
                                        <div className="order order--history">
                                            <div className="order__item">
                                                <img data-miniPic="1" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item">
                                                <img data-miniPic="2" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item order__item--dsntExists">
                                                <img data-miniPic="3" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                    <div className="order__itemSubtitle">Больше нет в меню
                                                    </div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="paragraph">Адрес доставки</p>
                                        <div className="history__hiddenBlock-text">ул. Старая Машинопрокатная,
                                            кв. 12А, кв. 92
                                        </div>
                                        <div className="history__hiddenBlock-info">
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Дата</p>
                                                <div className="history__hiddenBlock-text">12.05.2023</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Доставка</p>
                                                <div className="history__hiddenBlock-text">90 ₽</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Баллы</p>
                                                <div className="history__hiddenBlock-text">- 318</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Итого</p>
                                                <div
                                                    className="history__hiddenBlock-text history__hiddenBlock-text--big">2
                                                    160 ₽
                                                </div>
                                            </div>
                                        </div>
                                        <div className="likeInfo__itemInfo-buttonBasket">Повторить заказ</div>
                                    </div>
                                </div>
                                <div className="history__item">
                                    <div className="history__item-numberOrder">
                                        <div className="history__item-number">№ 12312344415-15</div>
                                        <div
                                            className="history__item-stage history__item-stage--green">Доставлен
                                        </div>
                                    </div>
                                    <div className="history__item-dateOrder">
                                        <div className="history__item-date">Заказ от 12.05.2023</div>
                                        <div className="history__item-money">2 740 ₽</div>
                                    </div>
                                    <div className="history__item-imageOrder">
                                        <div className="history__item-gallery">
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                        </div>
                                        <div className="history__item-stage history__item-stage--red">- 318
                                            баллов
                                        </div>
                                    </div>
                                    <div className="history__hiddenBlock">
                                        <div className="history__hiddenBlock-title">Состав</div>
                                        <div className="order order--history">
                                            <div className="order__item">
                                                <img data-miniPic="4" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item">
                                                <img data-miniPic="5" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item order__item--dsntExists">
                                                <img data-miniPic="6" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                    <div className="order__itemSubtitle">Больше нет в меню
                                                    </div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="paragraph">Адрес доставки</p>
                                        <div className="history__hiddenBlock-text">ул. Старая Машинопрокатная,
                                            кв. 12А, кв. 92
                                        </div>
                                        <div className="history__hiddenBlock-info">
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Дата</p>
                                                <div className="history__hiddenBlock-text">12.05.2023</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Доставка</p>
                                                <div className="history__hiddenBlock-text">90 ₽</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Баллы</p>
                                                <div className="history__hiddenBlock-text">- 318</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Итого</p>
                                                <div
                                                    className="history__hiddenBlock-text history__hiddenBlock-text--big">2
                                                    160 ₽
                                                </div>
                                            </div>
                                        </div>
                                        <div className="likeInfo__itemInfo-buttonBasket">Повторить заказ</div>
                                    </div>
                                </div>
                            </div>
                            <div className="history__grid-item">
                                <div className="history__item">
                                    <div className="history__item-numberOrder">
                                        <div className="history__item-number">№ 12312344415-15</div>
                                        <div
                                            className="history__item-stage history__item-stage--green">Доставлен
                                        </div>
                                    </div>
                                    <div className="history__item-dateOrder">
                                        <div className="history__item-date">Заказ от 12.05.2023</div>
                                        <div className="history__item-money">4 680 ₽</div>
                                    </div>
                                    <div className="history__item-imageOrder">
                                        <div className="history__item-gallery">
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                        </div>
                                        <div className="history__item-stage history__item-stage--green">+ 274
                                            балла
                                        </div>
                                    </div>
                                    <div className="history__hiddenBlock">
                                        <div className="history__hiddenBlock-title">Состав</div>
                                        <div className="order order--history">
                                            <div className="order__item">
                                                <img data-miniPic="7" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item">
                                                <img data-miniPic="8" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item order__item--dsntExists">
                                                <img data-miniPic="9" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                    <div className="order__itemSubtitle">Больше нет в меню
                                                    </div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="paragraph">Адрес доставки</p>
                                        <div className="history__hiddenBlock-text">ул. Старая Машинопрокатная,
                                            кв. 12А, кв. 92
                                        </div>
                                        <div className="history__hiddenBlock-info">
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Дата</p>
                                                <div className="history__hiddenBlock-text">12.05.2023</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Доставка</p>
                                                <div className="history__hiddenBlock-text">90 ₽</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Баллы</p>
                                                <div className="history__hiddenBlock-text">- 318</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Итого</p>
                                                <div
                                                    className="history__hiddenBlock-text history__hiddenBlock-text--big">2
                                                    160 ₽
                                                </div>
                                            </div>
                                        </div>
                                        <div className="likeInfo__itemInfo-buttonBasket">Повторить заказ</div>
                                    </div>
                                </div>
                                <div className="history__item">
                                    <div className="history__item-numberOrder">
                                        <div className="history__item-number">№ 12312344415-15</div>
                                        <div className="history__item-stage">В обработке</div>
                                    </div>
                                    <div className="history__item-dateOrder">
                                        <div className="history__item-date">Заказ от 12.05.2023</div>
                                        <div className="history__item-money">4 680 ₽</div>
                                    </div>
                                    <div className="history__item-imageOrder">
                                        <div className="history__item-gallery">
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                        </div>
                                        <div className="history__item-stage"></div>
                                    </div>
                                    <div className="history__hiddenBlock">
                                        <div className="history__hiddenBlock-title">Состав</div>
                                        <div className="order order--history">
                                            <div className="order__item">
                                                <img data-miniPic="10" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item">
                                                <img data-miniPic="11" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item order__item--dsntExists">
                                                <img data-miniPic="12" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                    <div className="order__itemSubtitle">Больше нет в меню
                                                    </div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="paragraph">Адрес доставки</p>
                                        <div className="history__hiddenBlock-text">ул. Старая Машинопрокатная,
                                            кв. 12А, кв. 92
                                        </div>
                                        <div className="history__hiddenBlock-info">
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Дата</p>
                                                <div className="history__hiddenBlock-text">12.05.2023</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Доставка</p>
                                                <div className="history__hiddenBlock-text">90 ₽</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Баллы</p>
                                                <div className="history__hiddenBlock-text">- 318</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Итого</p>
                                                <div
                                                    className="history__hiddenBlock-text history__hiddenBlock-text--big">2
                                                    160 ₽
                                                </div>
                                            </div>
                                        </div>
                                        <div className="likeInfo__itemInfo-buttonBasket">Повторить заказ</div>
                                    </div>
                                </div>
                                <div className="history__item">
                                    <div className="history__item-numberOrder">
                                        <div className="history__item-number">№ 12312344415-15</div>
                                        <div
                                            className="history__item-stage history__item-stage--green">Доставлен
                                        </div>
                                    </div>
                                    <div className="history__item-dateOrder">
                                        <div className="history__item-date">Заказ от 12.05.2023</div>
                                        <div className="history__item-money">4 680 ₽</div>
                                    </div>
                                    <div className="history__item-imageOrder">
                                        <div className="history__item-gallery">
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                        </div>
                                        <div className="history__item-stage history__item-stage--green">+ 274
                                            балла
                                        </div>
                                    </div>
                                    <div className="history__hiddenBlock">
                                        <div className="history__hiddenBlock-title">Состав</div>
                                        <div className="order order--history">
                                            <div className="order__item">
                                                <img data-miniPic="7" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item">
                                                <img data-miniPic="8" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item order__item--dsntExists">
                                                <img data-miniPic="9" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                    <div className="order__itemSubtitle">Больше нет в меню
                                                    </div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="paragraph">Адрес доставки</p>
                                        <div className="history__hiddenBlock-text">ул. Старая Машинопрокатная,
                                            кв. 12А, кв. 92
                                        </div>
                                        <div className="history__hiddenBlock-info">
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Дата</p>
                                                <div className="history__hiddenBlock-text">12.05.2023</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Доставка</p>
                                                <div className="history__hiddenBlock-text">90 ₽</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Баллы</p>
                                                <div className="history__hiddenBlock-text">- 318</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Итого</p>
                                                <div
                                                    className="history__hiddenBlock-text history__hiddenBlock-text--big">2
                                                    160 ₽
                                                </div>
                                            </div>
                                        </div>
                                        <div className="likeInfo__itemInfo-buttonBasket">Повторить заказ</div>
                                    </div>
                                </div>
                                <div className="history__item">
                                    <div className="history__item-numberOrder">
                                        <div className="history__item-number">№ 12312344415-15</div>
                                        <div className="history__item-stage">В обработке</div>
                                    </div>
                                    <div className="history__item-dateOrder">
                                        <div className="history__item-date">Заказ от 12.05.2023</div>
                                        <div className="history__item-money">4 680 ₽</div>
                                    </div>
                                    <div className="history__item-imageOrder">
                                        <div className="history__item-gallery">
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                        </div>
                                        <div className="history__item-stage"></div>
                                    </div>
                                    <div className="history__hiddenBlock">
                                        <div className="history__hiddenBlock-title">Состав</div>
                                        <div className="order order--history">
                                            <div className="order__item">
                                                <img data-miniPic="10" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item">
                                                <img data-miniPic="11" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item order__item--dsntExists">
                                                <img data-miniPic="12" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                    <div className="order__itemSubtitle">Больше нет в меню
                                                    </div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="paragraph">Адрес доставки</p>
                                        <div className="history__hiddenBlock-text">ул. Старая Машинопрокатная,
                                            кв. 12А, кв. 92
                                        </div>
                                        <div className="history__hiddenBlock-info">
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Дата</p>
                                                <div className="history__hiddenBlock-text">12.05.2023</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Доставка</p>
                                                <div className="history__hiddenBlock-text">90 ₽</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Баллы</p>
                                                <div className="history__hiddenBlock-text">- 318</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Итого</p>
                                                <div
                                                    className="history__hiddenBlock-text history__hiddenBlock-text--big">2
                                                    160 ₽
                                                </div>
                                            </div>
                                        </div>
                                        <div className="likeInfo__itemInfo-buttonBasket">Повторить заказ</div>
                                    </div>
                                </div>
                                <div className="history__item">
                                    <div className="history__item-numberOrder">
                                        <div className="history__item-number">№ 12312344415-15</div>
                                        <div
                                            className="history__item-stage history__item-stage--green">Доставлен
                                        </div>
                                    </div>
                                    <div className="history__item-dateOrder">
                                        <div className="history__item-date">Заказ от 12.05.2023</div>
                                        <div className="history__item-money">4 680 ₽</div>
                                    </div>
                                    <div className="history__item-imageOrder">
                                        <div className="history__item-gallery">
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                        </div>
                                        <div className="history__item-stage history__item-stage--green">+ 274
                                            балла
                                        </div>
                                    </div>
                                    <div className="history__hiddenBlock">
                                        <div className="history__hiddenBlock-title">Состав</div>
                                        <div className="order order--history">
                                            <div className="order__item">
                                                <img data-miniPic="7" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item">
                                                <img data-miniPic="8" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item order__item--dsntExists">
                                                <img data-miniPic="9" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                    <div className="order__itemSubtitle">Больше нет в меню
                                                    </div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="paragraph">Адрес доставки</p>
                                        <div className="history__hiddenBlock-text">ул. Старая Машинопрокатная,
                                            кв. 12А, кв. 92
                                        </div>
                                        <div className="history__hiddenBlock-info">
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Дата</p>
                                                <div className="history__hiddenBlock-text">12.05.2023</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Доставка</p>
                                                <div className="history__hiddenBlock-text">90 ₽</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Баллы</p>
                                                <div className="history__hiddenBlock-text">- 318</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Итого</p>
                                                <div
                                                    className="history__hiddenBlock-text history__hiddenBlock-text--big">2
                                                    160 ₽
                                                </div>
                                            </div>
                                        </div>
                                        <div className="likeInfo__itemInfo-buttonBasket">Повторить заказ</div>
                                    </div>
                                </div>
                                <div className="history__item">
                                    <div className="history__item-numberOrder">
                                        <div className="history__item-number">№ 12312344415-15</div>
                                        <div className="history__item-stage">В обработке</div>
                                    </div>
                                    <div className="history__item-dateOrder">
                                        <div className="history__item-date">Заказ от 12.05.2023</div>
                                        <div className="history__item-money">4 680 ₽</div>
                                    </div>
                                    <div className="history__item-imageOrder">
                                        <div className="history__item-gallery">
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                        </div>
                                        <div className="history__item-stage"></div>
                                    </div>
                                    <div className="history__hiddenBlock">
                                        <div className="history__hiddenBlock-title">Состав</div>
                                        <div className="order order--history">
                                            <div className="order__item">
                                                <img data-miniPic="10" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item">
                                                <img data-miniPic="11" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item order__item--dsntExists">
                                                <img data-miniPic="12" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                    <div className="order__itemSubtitle">Больше нет в меню
                                                    </div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="paragraph">Адрес доставки</p>
                                        <div className="history__hiddenBlock-text">ул. Старая Машинопрокатная,
                                            кв. 12А, кв. 92
                                        </div>
                                        <div className="history__hiddenBlock-info">
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Дата</p>
                                                <div className="history__hiddenBlock-text">12.05.2023</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Доставка</p>
                                                <div className="history__hiddenBlock-text">90 ₽</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Баллы</p>
                                                <div className="history__hiddenBlock-text">- 318</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Итого</p>
                                                <div
                                                    className="history__hiddenBlock-text history__hiddenBlock-text--big">2
                                                    160 ₽
                                                </div>
                                            </div>
                                        </div>
                                        <div className="likeInfo__itemInfo-buttonBasket">Повторить заказ</div>
                                    </div>
                                </div>
                                <div className="history__item">
                                    <div className="history__item-numberOrder">
                                        <div className="history__item-number">№ 12312344415-15</div>
                                        <div
                                            className="history__item-stage history__item-stage--green">Доставлен
                                        </div>
                                    </div>
                                    <div className="history__item-dateOrder">
                                        <div className="history__item-date">Заказ от 12.05.2023</div>
                                        <div className="history__item-money">4 680 ₽</div>
                                    </div>
                                    <div className="history__item-imageOrder">
                                        <div className="history__item-gallery">
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                        </div>
                                        <div className="history__item-stage history__item-stage--green">+ 274
                                            балла
                                        </div>
                                    </div>
                                    <div className="history__hiddenBlock">
                                        <div className="history__hiddenBlock-title">Состав</div>
                                        <div className="order order--history">
                                            <div className="order__item">
                                                <img data-miniPic="7" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item">
                                                <img data-miniPic="8" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item order__item--dsntExists">
                                                <img data-miniPic="9" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                    <div className="order__itemSubtitle">Больше нет в меню
                                                    </div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="paragraph">Адрес доставки</p>
                                        <div className="history__hiddenBlock-text">ул. Старая Машинопрокатная,
                                            кв. 12А, кв. 92
                                        </div>
                                        <div className="history__hiddenBlock-info">
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Дата</p>
                                                <div className="history__hiddenBlock-text">12.05.2023</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Доставка</p>
                                                <div className="history__hiddenBlock-text">90 ₽</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Баллы</p>
                                                <div className="history__hiddenBlock-text">- 318</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Итого</p>
                                                <div
                                                    className="history__hiddenBlock-text history__hiddenBlock-text--big">2
                                                    160 ₽
                                                </div>
                                            </div>
                                        </div>
                                        <div className="likeInfo__itemInfo-buttonBasket">Повторить заказ</div>
                                    </div>
                                </div>
                                <div className="history__item">
                                    <div className="history__item-numberOrder">
                                        <div className="history__item-number">№ 12312344415-15</div>
                                        <div className="history__item-stage">В обработке</div>
                                    </div>
                                    <div className="history__item-dateOrder">
                                        <div className="history__item-date">Заказ от 12.05.2023</div>
                                        <div className="history__item-money">4 680 ₽</div>
                                    </div>
                                    <div className="history__item-imageOrder">
                                        <div className="history__item-gallery">
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                            <img className="history__item-img" src="./img/pizza/1.jpg" alt=""/>
                                        </div>
                                        <div className="history__item-stage"></div>
                                    </div>
                                    <div className="history__hiddenBlock">
                                        <div className="history__hiddenBlock-title">Состав</div>
                                        <div className="order order--history">
                                            <div className="order__item">
                                                <img data-miniPic="10" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item">
                                                <img data-miniPic="11" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__item order__item--dsntExists">
                                                <img data-miniPic="12" className="miniCard"
                                                     src="./img/pizza/1.png" alt=""/>
                                                <div className="order__itemText">
                                                    <div className="order__itemTitle">Дьябло</div>
                                                    <div className="order__itemSubtitle">Больше нет в меню
                                                    </div>
                                                </div>
                                                <div className="order__plusMinus">
                                                    <div className="order__block">
                                                        <div className="order__digital">1 х 480 ₽</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="paragraph">Адрес доставки</p>
                                        <div className="history__hiddenBlock-text">ул. Старая Машинопрокатная,
                                            кв. 12А, кв. 92
                                        </div>
                                        <div className="history__hiddenBlock-info">
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Дата</p>
                                                <div className="history__hiddenBlock-text">12.05.2023</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Доставка</p>
                                                <div className="history__hiddenBlock-text">90 ₽</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Баллы</p>
                                                <div className="history__hiddenBlock-text">- 318</div>
                                            </div>
                                            <div className="history__hiddenBlock-infoItem">
                                                <p className="paragraph">Итого</p>
                                                <div
                                                    className="history__hiddenBlock-text history__hiddenBlock-text--big">2
                                                    160 ₽
                                                </div>
                                            </div>
                                        </div>
                                        <div className="likeInfo__itemInfo-buttonBasket">Повторить заказ</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Animate>
    )
}
