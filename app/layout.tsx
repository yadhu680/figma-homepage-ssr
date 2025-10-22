import './globals.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Providers from "../components/Providers";

export const metadata = {
  title: "Homepage",
  description: "SSR homepage built with Next.js 15 + React 19 + MUI v7"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Providers sets up MUI theme and caches on client */}
        <Providers>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
