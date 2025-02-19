import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dreamtheater.net'
      },
    ],
  },
};

export default nextConfig;
