import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  cacheComponents:true,
  basePath: "/ecommerces1",
  assetPrefix: "/ecommerces1/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;