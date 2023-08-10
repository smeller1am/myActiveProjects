import Image from 'next/image';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { Nav } from './nav';

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="header">
      <div className="header__burger">
        <div className="header__burger-line"></div>
      </div>
      <Link href="/" className="logo">
        <Image src="/img/logo/1.svg" alt="" width="207" height="60" />
      </Link>
      <Nav />
      {children}
      <div className="user">
        <a href="#" className="icon-user"></a>
      </div>
      <div className="basket">
        <a href="#" className="icon-basket"></a>
        <div className="basket__digital">
          <p>3</p>
        </div>
      </div>
    </header>
  );
};
