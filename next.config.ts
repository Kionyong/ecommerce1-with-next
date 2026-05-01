import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  //output: "export",
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.reres.cloudinary.com",
      }
    ],
  }
};

export default nextConfig;