import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export const HomePage: FC = () => {
  return (
    <Swiper className="swiperMain" direction="vertical" loop={true}>
      {Array(7)
        .fill(null)
        .map((_, idx) => (
          <SwiperSlide className="swiperMain__slide" key={idx}>
            <Image src="/img/mainSwiper.png" alt="" width="1500" height="875" />
            <div className="swiperMain__slide-block">
              <div className="swiperMain__slide-info">
                <p className="swiperMain__slide-title">
                  Порция роллов или картошка фри
                </p>
                <p className="swiperMain__slide-titleBig">В ПОДАРОК</p>
              </div>
              <p className="swiperMain__slide-text">
                за любой заказ от 1 500 ₽
              </p>
              <a className="swiperMain__slide-button">Подробнее</a>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
