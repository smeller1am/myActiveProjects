"use client";
import { FC } from "react";
import { HomePage } from "@/pages/home";

const Home: FC = () => {
    return (<>
        <div className="category">
            <div className="container">
                <div className="wrapper"></div>
                <img className="fish" src="./img/delivery/noCutt.png" alt=""/>
                    <div className="titleMain">
                        <h1 className="titleMain__title">Условия доставки</h1>
                    </div>
                    <div className="deliveryCards">
                        <div className="deliveryCards__card">
                            <div className="deliveryCards__card-title">Принимаем заказы</div>
                            <div className="deliveryCards__card-text">Ежедневно
                                с 10:00 до 23:00</div>
                        </div>
                        <div className="deliveryCards__card">
                            <div className="deliveryCards__card-title">Минимальная сумма заказа</div>
                            <div className="deliveryCards__card-text">800₽</div>
                        </div>
                        <div className="deliveryCards__card">
                            <div className="deliveryCards__card-title">Стоимость доставки</div>
                            <div className="deliveryCards__card-text">Бесплатно</div>
                        </div>
                    </div>
                    <div className="deliveryInfo">
                        <div className="deliveryInfo__item">
                            <img src="./img/iconSVG/1.png" alt=""/>
                                <div className="deliveryInfo__item-info">
                                    <div className="deliveryInfo__item-infoTitle">Время доставки</div>
                                    <div className="deliveryInfo__item-infoText">
                                        <p>По Саратову - от 45 минут.</p>
                                        <p>По Энгельсу и пригороду - до 180 минут.</p>
                                    </div>
                                </div>
                        </div>
                        <div className="deliveryInfo__item">
                            <img src="./img/iconSVG/2.png" alt=""/>
                                <div className="deliveryInfo__item-info">
                                    <div className="deliveryInfo__item-infoTitle">Доставка курьером</div>
                                    <div className="deliveryInfo__item-infoText">
                                        <p>Вы оплачиваете только стоимость заказа.</p>
                                        <p>При сумме заказа от 800₽ - доставка бесплатно.</p>
                                        <p>При меньшей сумме заказа стоимость доставки рассчитывается индивидуально.</p>
                                    </div>
                                </div>
                        </div>
                        <div className="deliveryInfo__item">
                            <img src="./img/iconSVG/3.png" alt=""/>
                                <div className="deliveryInfo__item-info">
                                    <div className="deliveryInfo__item-infoTitle">Самовывоз</div>
                                    <div className="deliveryInfo__item-infoText">При самовывозе из любого ресторана вы получаете скидку в 20% на весь заказ</div>
                                </div>
                        </div>
                    </div>
            </div>
        </div>
    </>);
}

export default Home;