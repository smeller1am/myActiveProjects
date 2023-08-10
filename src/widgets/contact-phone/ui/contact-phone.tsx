import { FC } from 'react';
import { config } from './config';

export const ContactPhone: FC = () => {
  const { phone, title } = config;
  return (
    <div className="info">
      <div className="info__number">
        <div className="icon-phone"></div>
        <a href="#" className="info__number-link">
          {phone}
        </a>
      </div>
      <div className="info__time">{title}</div>
    </div>
  );
};
