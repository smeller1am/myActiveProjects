import { FC } from 'react';
import { menuItems } from './config';
import Link from 'next/link';
import { getMenuItems } from '@/shared/api';
import { IMenuItem } from '@/shared/types';
import { staticMenuItems } from '@/entities/menu';

const transformRes = (data: IMenuItem[] | undefined = []) => {
  const menuItems = data;
  const cols: IMenuItem[][] = [];

  const colSize = Math.ceil(menuItems.length / 3);

  for (let i = 0; i < menuItems.length; i += colSize) {
    const col = menuItems.slice(i, i + colSize);
    cols.push(col);
  }

  return cols;
};

export const FooterMenu: FC = async () => {
  const footerMenuItems = await getMenuItems().then(transformRes);
  return (
    <div className="footer__item-gridTop">
      <div className="footer__itemMenu">
        <p>Меню</p>
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
      {footerMenuItems.map((col, idx) => (
        <ul className="footer__item-infoList" key={`ul_${idx}`}>
          {col.map(({ title, link }, idx) => (
            <li className="footer__item-listText" key={idx}>
              {/* todo: fix it on styles */}
              <Link
                href={link}
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      ))}
      <ul className="footer__item-infoList">
        {staticMenuItems.map(({ title, link }, idx) => (
          <li className="footer__item-listText" key={idx}>
            {/* todo: fix it on styles */}
            <Link
              href={link}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
