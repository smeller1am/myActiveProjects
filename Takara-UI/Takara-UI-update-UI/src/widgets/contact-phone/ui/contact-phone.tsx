import { FC } from 'react';
import { config } from './config';

interface ContactPhoneProps {
  className?: string;
}

export const ContactPhone: FC<ContactPhoneProps> = ({ className }) => {
  const { phone, title } = config;
  return (
    <div className={className ? `info info--${className}` : 'info'}>
      <a href="#" className="info__number">
        <div className="info__number-icon icon-phone"></div>
        <div className="info__number-link">{phone}</div>
      </a>
      <div className="info__time">{title}</div>
    </div>
  );
};
