/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: { timeout: 15000 }, // Increase timeout to 15 seconds (default is 3 seconds)
      },
    ],
  },
};

module.exports = nextConfig;