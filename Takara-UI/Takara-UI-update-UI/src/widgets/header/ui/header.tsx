import { ProfileWithProvider } from '@/widgets/header/ui/profile/profile';
import Image from 'next/image';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { BasketWithProvider } from './basket/basket';
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
      <ProfileWithProvider />
      <BasketWithProvider />
    </header>
  );
};
