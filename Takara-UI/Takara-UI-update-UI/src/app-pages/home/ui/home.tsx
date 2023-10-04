'use client';

import { WrapperWithProvider } from '@/shared/modal';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

export const HomePage: FC = () => {
  return (
    <div style={{ position: 'relative' }}>
      <WrapperWithProvider />
      <Swiper
        className="swiperMain"
        direction="vertical"
        loop={true}
        pagination={true}
        modules={[Pagination]}
      >
        {Array(7)
          .fill(null)
          .map((_, idx) => (
            <SwiperSlide className="swiperMain__slide" key={idx}>
              <Image
                src="/img/mainSwiper.png"
                alt=""
                width="1500"
                height="875"
              />
              <div className="swiperMain__slide-block">
                <div className="swiperMain__slide-info">
                  Порция роллов или картошка фри
                  <p className="swiperMain__slide-info--orange">В ПОДАРОК</p>
                </div>
                <p className="swiperMain__slide-text">
                  за любой заказ от 1 500 ₽
                </p>
                <a className="swiperMain__slide-button">Подробнее</a>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
