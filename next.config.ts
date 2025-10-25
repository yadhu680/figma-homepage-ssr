import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  ...(isProd
    ? {
        output: "export", // only for production
        basePath: "/figma-homepage-ssr",
        assetPrefix: "/figma-homepage-ssr/",
        images: { unoptimized: true, qualities: [75, 80], },
      }
    : {
        reactStrictMode: true,
        images: { unoptimized: true, qualities: [75, 80], },
      }),
};

export default nextConfig;
