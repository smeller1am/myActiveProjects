import { FC } from 'react';

export const ContactsPage : FC = () => (
    <div className="container">
        <div className="wrapper"></div>
        <div className="titleMain">
            <h1 className="titleMain__title">Контакты</h1>
        </div>
        <div className="contactMain">
            <div className="contactMain__info">
                <div className="contactMain__info-number">
                    <div className="contactMain__info-icon icon-phone"></div>
                    <div className="contactMain__info-numberBlock">
                        <p className="paragraph">Единый номер</p>
                        <a href="/" className="contactMain__info-numberLink">+7 (8425) <span>460-460</span></a>
                        <div className="paragraph">Ежедневно с 10:00 до 23:00</div>
                    </div>
                </div>
            </div>
            <h2 className="miniTitle">Наши адреса</h2>
            <div className="contactInfo">
                <div className="contactInfo__item">
                    <div className="contactInfo__item-block">
                        <p className="paragraph">Кировский район и Солнечный район:</p>
                        <div className="contactInfo__item-container">
                            <div className="contactInfo__item-adress">ул. Тархова, 43</div>
                            <a href="#" className="contactInfo__item-phone">+7 (8425) <span>939-539</span></a>
                        </div>
                    </div>
                    <div className="contactInfo__item-block">
                        <p className="paragraph">Фрунзенский и октябрьский район:</p>
                        <div className="contactInfo__item-container">
                            <div className="contactInfo__item-adress">ул. Мичурина, 96а</div>
                            <a href="#" className="contactInfo__item-phone">+7 (8425) <span>939-539</span></a>
                        </div>
                    </div>
                    <div className="contactInfo__item-block">
                        <p className="paragraph">Ленинский район:</p>
                        <div className="contactInfo__item-container">
                            <div className="contactInfo__item-adress">ул. 50 лет октября, 67</div>
                            <a href="#" className="contactInfo__item-phone">+7 (8425) <span>939-539</span></a>
                        </div>
                    </div>
                    <div className="contactInfo__item-block">
                        <p className="paragraph">Контроль качества: </p>
                        <a href="#" className="contactInfo__item-phone">+7 (8425) <span>939-539</span></a>
                    </div>
                </div>
                <div className="contactInfo__item">
                    <div className="contactInfo__item-block">
                        <p className="paragraph">Ленинский район:</p>
                        <div className="contactInfo__item-container">
                            <div className="contactInfo__item-adress">ул. Московское шоссе, 7</div>
                            <a href="#" className="contactInfo__item-phone">+7 (8425) <span>939-539</span></a>
                        </div>
                    </div>
                    <div className="contactInfo__item-block">
                        <p className="paragraph">Заводской район:</p>
                        <div className="contactInfo__item-container">
                            <div className="contactInfo__item-adress">пр. Энтузиастов, 24</div>
                            <a href="#" className="contactInfo__item-phone">+7 (8425) <span>939-539</span></a>
                        </div>
                    </div>
                    <div className="contactInfo__item-block">
                        <p className="paragraph">Юбилейный район:</p>
                        <div className="contactInfo__item-container">
                            <div className="contactInfo__item-adress">ул. Усть-Курдюмская, 4</div>
                            <a href="#" className="contactInfo__item-phone">+7 (8425) <span>939-539</span></a>
                        </div>
                    </div>
                    <div className="contactInfo__item-block">
                        <p className="paragraph">Мы в соцсетях:</p>
                        <div className="contactInfo__item-social">
                            <a href="#" className="contactInfo__item-icon icon-tg"></a>
                            <a href="#" className="contactInfo__item-icon icon-ok"></a>
                            <a href="#" className="contactInfo__item-icon icon-vk"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mapContainer">
            <div id="map" className="map"></div>
        </div>
    </div>
);

export default ContactsPage;