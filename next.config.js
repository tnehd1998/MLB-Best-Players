/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd
    ? process.env.NEXT_APP_BASE_URL
    : "http://localhost:3000/api",
  reactStrictMode: true,
  images: {
    domains: ["d1dglpr230r57l.cloudfront.net"],
  },
};

module.exports = nextConfig;
