/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'takara-api.spaceapp.ru',
        pathname: '/Content/**',
      },
    ],
  },
};

module.exports = nextConfig;
