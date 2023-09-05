/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/awaitingCalc",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
