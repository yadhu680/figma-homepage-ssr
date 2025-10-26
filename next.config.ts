import type { NextConfig } from "next";

const repoName = "figma-homepage-ssr";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
    qualities: [75, 80],
  },
  trailingSlash: true,
};

export default nextConfig;
