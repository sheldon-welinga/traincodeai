/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  publicRuntimeConfig: {
    WEB_URL: process.env.WEB_URL,
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
  },
};

module.exports = nextConfig;
