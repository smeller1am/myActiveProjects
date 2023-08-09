import { FC } from 'react';
import { menuItems } from './config';
import Link from 'next/link';

export const Aside: FC = () => {
  return (
    <div className="menu">
      <div className="menu__item foodMenu">
        <a href="#" className="menu__item-linkMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.92889 10.0077L11.1753 18.2872C11.5656 18.679 11.5655 19.3142 11.1751 19.7059C10.7845 20.0978 10.1511 20.0977 9.76066 19.7057L0.809266 10.7184C0.437305 10.345 0.419913 9.75061 0.75702 9.3565C0.778057 9.33069 0.800569 9.30569 0.824554 9.28161L9.77595 0.29435C10.1664 -0.0977022 10.7998 -0.0978038 11.1904 0.294122C11.5808 0.685868 11.5809 1.32098 11.1906 1.71286L2.92889 10.0077Z"
              fill="white"
            />
          </svg>
          <p>Меню</p>
        </a>
      </div>
      {menuItems.map(({ title, icon, link }, idx) => (
        <div className="menu__item" key={idx}>
          {icon}
          <Link href={link} className="menu__item-link">
            {title}
          </Link>
        </div>
      ))}
    </div>
  );
};
