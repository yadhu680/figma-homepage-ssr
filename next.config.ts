import type { NextConfig } from "next";

const nextConfig: NextConfig = {  
  output: 'export',    
  basePath: '/figma-homepage-ssr',     
  trailingSlash: true,    
  images: { unoptimized: true, qualities: [75, 80] },
};

module.exports = nextConfig;