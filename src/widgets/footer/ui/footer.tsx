import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';
import { FooterMenu } from './footer-menu/footer-menu';

export const Footer: FC<PropsWithChildren> = ({ children }) => (
  <footer className="footer">
    <div className="footer__item">
      <div className="footer__item-grid">
        <Image src="/img/logo/logo.png" alt="" width={134} height={40} />
        <FooterMenu />
      </div>
      <div className="footer__item-grid">
        <div className="footer__item-bottomEdgeTxt">2023 © Takara</div>
        <div className="footer__item-bottomText">
          <a href="#">Конфиденциальность</a>
          <a href="#">Условия пользования</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
    <div className="footer__item">
      {children}
      <div className="footer__item-bottomEdge">
        Разработка сайта
        <Image src="/img/logo/spaceApp.png" alt="" width={53} height={42} />
      </div>
    </div>
  </footer>
);
