/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "127.0.0.1:80" : "http://localhost:3000",
  reactStrictMode: true,
  images: {
    domains: ["d1dglpr230r57l.cloudfront.net"],
  },
};

module.exports = nextConfig;
