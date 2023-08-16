import { FC } from 'react';
import Link from 'next/link';
import { getMenuItems } from '@/shared/serverApi';
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
