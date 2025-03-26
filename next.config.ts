import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "13.233.2.40",
        port: "3133",
      },
    ],
  },
};

export default nextConfig;
