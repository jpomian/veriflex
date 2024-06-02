// https://github.com/enricobottazzi/ZK-SBT-FrontEnd/blob/master/next.config.js <- template for the project

/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },

};
