import { FC } from 'react';
import { getPromo } from '@/shared/serverApi';
import Link from 'next/link';
import { menuRecord } from '@/entities/menu';
export const DiscountsPage: FC = async () => {
  const promos = await getPromo();
  return (
    <div className="container">
      <div className="titleMain">
        <div className="titleMain__title">Акции и скидки</div>
      </div>
      <div className="gridCard">
        <div className="gridCard__top">
          {promos?.map(promo => {
            return (
              <div key={promo.id} className="gridCard__item">
                <img
                  className={'gridCard__item-img'}
                  src={promo.photoPath}
                  alt={promo.title}
                />
                <div className={'gridCard__itemBlock'}>
                  <div className={'textContainer'}>
                    <div className={'gridCard__text'}>{promo.title}</div>
                    <div className={'gridCard__price'}>{promo.description}</div>
                  </div>
                  <Link
                    //todo fix href
                    href={menuRecord.pizzas.link}
                    className={'gridCard__link'}
                  >
                    <div className={'linkAfter'}>
                      <svg
                        className="svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.92889 12.0077L17.1753 20.2872C17.5656 20.679 17.5655 21.3142 17.1751 21.7059C16.7845 22.0978 16.1511 22.0977 15.7607 21.7057L6.80927 12.7184C6.43731 12.345 6.41991 11.7506 6.75702 11.3565C6.77806 11.3307 6.80057 11.3057 6.82455 11.2816L15.7759 2.29435C16.1664 1.9023 16.7998 1.9022 17.1904 2.29412C17.5808 2.68587 17.5809 3.32098 17.1906 3.71286L8.92889 12.0077Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    В каталог
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {/*<div className="gridCard__bottom">*/}
        {/*  <div className="gridCard__item">*/}
        {/*    <img className={'gridCard__item-img'} src="./img/discounts/5.png" alt="" />*/}
        {/*    <div className="gridCard__itemBlock">*/}
        {/*      <div className="textContainer">*/}
        {/*        <div className="gridCard__text">*/}
        {/*          Порция роллов или картошка фри*/}
        {/*        </div>*/}
        {/*        <div className="gridCard__textBold gridCard__textBold--orange">В ПОДАРОК</div>*/}
        {/*        <div className="gridCard__price">*/}
        {/*          При самовывозе заказа от 800 ₽{' '}*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <a href="#" className="gridCard__link">*/}
        {/*        <div className="linkAfter"><svg*/}
        {/*            className="svg"*/}
        {/*            xmlns="http://www.w3.org/2000/svg"*/}
        {/*            width="12"*/}
        {/*            height="12"*/}
        {/*            viewBox="0 0 24 24"*/}
        {/*            fill="none"*/}
        {/*        >*/}
        {/*          <path*/}
        {/*              fillRule="evenodd"*/}
        {/*              clipRule="evenodd"*/}
        {/*              d="M8.92889 12.0077L17.1753 20.2872C17.5656 20.679 17.5655 21.3142 17.1751 21.7059C16.7845 22.0978 16.1511 22.0977 15.7607 21.7057L6.80927 12.7184C6.43731 12.345 6.41991 11.7506 6.75702 11.3565C6.77806 11.3307 6.80057 11.3057 6.82455 11.2816L15.7759 2.29435C16.1664 1.9023 16.7998 1.9022 17.1904 2.29412C17.5808 2.68587 17.5809 3.32098 17.1906 3.71286L8.92889 12.0077Z"*/}
        {/*              fill="white"*/}
        {/*          />*/}
        {/*        </svg></div>В каталог*/}
        {/*      </a>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="gridCard__item">*/}
        {/*    <img className={'gridCard__item-img'} src="./img/discounts/6.png" alt="" />*/}
        {/*    <div className="gridCard__itemBlock">*/}
        {/*      <div className="textContainer">*/}
        {/*        <div className="gridCard__text">Сырные закуски</div>*/}
        {/*        <div className="gridCard__textBold">В ПОДАРОК</div>*/}
        {/*        <div className="gridCard__price">При заказе 2-х пицц</div>*/}
        {/*      </div>*/}
        {/*      <a href="#" className="gridCard__link">*/}
        {/*        <div className="linkAfter"><svg*/}
        {/*            className="svg"*/}
        {/*            xmlns="http://www.w3.org/2000/svg"*/}
        {/*            width="12"*/}
        {/*            height="12"*/}
        {/*            viewBox="0 0 24 24"*/}
        {/*            fill="none"*/}
        {/*        >*/}
        {/*          <path*/}
        {/*              fillRule="evenodd"*/}
        {/*              clipRule="evenodd"*/}
        {/*              d="M8.92889 12.0077L17.1753 20.2872C17.5656 20.679 17.5655 21.3142 17.1751 21.7059C16.7845 22.0978 16.1511 22.0977 15.7607 21.7057L6.80927 12.7184C6.43731 12.345 6.41991 11.7506 6.75702 11.3565C6.77806 11.3307 6.80057 11.3057 6.82455 11.2816L15.7759 2.29435C16.1664 1.9023 16.7998 1.9022 17.1904 2.29412C17.5808 2.68587 17.5809 3.32098 17.1906 3.71286L8.92889 12.0077Z"*/}
        {/*              fill="white"*/}
        {/*          />*/}
        {/*        </svg></div>В каталог*/}
        {/*      </a>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="gridCard__item">*/}
        {/*    <img className={'gridCard__item-img'} src="./img/discounts/7.png" alt="" />*/}
        {/*    <div className="gridCard__itemBlock">*/}
        {/*      <div className="textContainer">*/}
        {/*        <div className="gridCard__text">Пицца</div>*/}
        {/*        <div className="gridCard__textBold">В ПОДАРОК</div>*/}
        {/*        <div className="gridCard__price">При заказе 3-х пицц</div>*/}
        {/*      </div>*/}
        {/*      <a href="#" className="gridCard__link">*/}
        {/*        <div className="linkAfter"><svg*/}
        {/*            className="svg"*/}
        {/*            xmlns="http://www.w3.org/2000/svg"*/}
        {/*            width="12"*/}
        {/*            height="12"*/}
        {/*            viewBox="0 0 24 24"*/}
        {/*            fill="none"*/}
        {/*        >*/}
        {/*          <path*/}
        {/*              fillRule="evenodd"*/}
        {/*              clipRule="evenodd"*/}
        {/*              d="M8.92889 12.0077L17.1753 20.2872C17.5656 20.679 17.5655 21.3142 17.1751 21.7059C16.7845 22.0978 16.1511 22.0977 15.7607 21.7057L6.80927 12.7184C6.43731 12.345 6.41991 11.7506 6.75702 11.3565C6.77806 11.3307 6.80057 11.3057 6.82455 11.2816L15.7759 2.29435C16.1664 1.9023 16.7998 1.9022 17.1904 2.29412C17.5808 2.68587 17.5809 3.32098 17.1906 3.71286L8.92889 12.0077Z"*/}
        {/*              fill="white"*/}
        {/*          />*/}
        {/*        </svg></div>В каталог*/}
        {/*      </a>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};
