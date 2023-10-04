import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';
import { FooterMenu } from './footer-menu/footer-menu';

export const Footer: FC<PropsWithChildren> = ({ children }) => (
  <footer className="footer">
    <div className="footer__item">
      <div className="footer__item-grid">
        <a href="/" className="footerLogo">
          <Image src="/img/logo/logo.png" alt="" width={134} height={40} />
        </a>
        <div className="footer__itemMenu">
          <p>Ссылки</p>
          <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
      <a href={'https://spaceapp.ru/razrabotka'} className="footer__item-bottomEdge">
        Разработка сайта
        <Image src="/img/logo/spaceApp.png" alt="" width={53} height={42} />
      </a>
    </div>
  </footer>
);
