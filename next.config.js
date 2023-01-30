/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/landjaeger-mit-brot', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
