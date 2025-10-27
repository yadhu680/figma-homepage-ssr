import './globals.css';
import Script from "next/script";

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
      <head>
        <meta http-equiv="Cache-Control" content="max-age=31536000, immutable" />
        <meta http-equiv="Pragma" content="cache" />
        <link rel="preconnect" href="https://yadhu680.github.io" crossOrigin="anonymous" />
        <link rel="preload" href="/figma-homepage-ssr/fonts/Satoshi-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/figma-homepage-ssr/fonts/Satoshi-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/figma-homepage-ssr/fonts/IntegralCF-Regular.woff2" as="font" type="font/woff2"crossOrigin="anonymous"  />
        <link rel="preload" href="/figma-homepage-ssr/fonts/IntegralCF-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <Script id="preload-css" strategy="beforeInteractive">
          {`
            const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
            links.forEach(link => {
              const preload = document.createElement('link');
              preload.rel = 'preload';
              preload.as = 'style';
              preload.href = link.href;
              document.head.appendChild(preload);
            });
          `}
        </Script>
      </head>
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
