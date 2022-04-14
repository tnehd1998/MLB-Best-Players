/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd
    ? "https://mlb-super-stars.vercel.app"
    : "http://localhost:3000",
  reactStrictMode: true,
  images: {
    domains: ["d1dglpr230r57l.cloudfront.net"],
  },
};

module.exports = nextConfig;
