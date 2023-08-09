import { Header } from "@/widgets/header";
import type { Metadata } from "next";
import { Footer } from "@/widgets/footer";
import { Aside } from "@/widgets/aside";
import "./styles/style.scss";
import "./styles/icomoon/style.css";

export const metadata: Metadata = {
  title: "Takara",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
}
