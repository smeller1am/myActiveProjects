import { Header } from '@/widgets/header';
import type { Metadata } from 'next';
import { Footer } from '@/widgets/footer';
import { Aside } from '@/widgets/aside';
import './styles/style.scss';
import './styles/icomoon/style.css';
import { FC, PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Takara',
};

interface RootLayoutProps extends PropsWithChildren {}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main className="main">
          <Aside />
          <div className="image">
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
