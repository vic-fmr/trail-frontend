import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://trail-backend-production-9ab0.up.railway.app/:path*',
      },
    ];
  },
};

export default nextConfig;
