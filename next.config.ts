import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const REPO_NAME = "/figma-homepage-ssr"; // Define your repository name

const nextConfig: NextConfig = {
  ...(isProd
    ? {
        output: "export",        
        basePath: REPO_NAME,      
        images: { unoptimized: true, qualities: [75, 80] },
      }
    : {
        reactStrictMode: true,
        images: { unoptimized: true, qualities: [75, 80] },
      }),
};

export default nextConfig;