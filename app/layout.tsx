import './globals.css';

import Footer from "../components/Footer";
import Providers from "../components/Providers";
import HeaderShell from "../components/header/HeaderShell";

export const metadata = {
  title: "Homepage",
  description: "SSR homepage built with Next.js 15 + React 19 + MUI v7"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <meta http-equiv="Cache-Control" content="max-age=31536000, public" />
      <meta http-equiv="Pragma" content="cache" />
      <link rel="preload" href="/figma-homepage-ssr/fonts/IntegralCF-Regular.otf" as="font" type="font/otf" />
      <link rel="preload" href="/figma-homepage-ssr/fonts/Satoshi-Regular.woff2" as="font" type="font/woff2" />
      <body>
        {/* Providers sets up MUI theme and caches on client */}
        <Providers>
          <HeaderShell />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
