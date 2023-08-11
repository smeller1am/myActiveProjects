import { Header } from '@/widgets/header';
import type { Metadata } from 'next';
import { Footer } from '@/widgets/footer';
import { Aside } from '@/widgets/aside';
import { FC, PropsWithChildren } from 'react';
import { ContactPhone } from '@/widgets/contact-phone';
import './styles/style.scss';
import './styles/icomoon/style.css';
import { SocialsBlock } from '@/widgets/socials-block';

export const metadata: Metadata = {
  title: 'Takara',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru">
      <body>
        <Header>
          <ContactPhone />
          <SocialsBlock />
        </Header>
        <main className="main">
          <Aside />
          <div className="category">
            {children}
            <Footer>
              <ContactPhone />
              <SocialsBlock />
            </Footer>
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
