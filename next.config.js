const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      include: [path.resolve(__dirname, 'src/icons')],
      use: [
        {
          loader: 'svg-sprite-loader',
          options: { symbolId: 'icon-[name]' },
        },
        {
          loader: 'svgo-loader',
          options: {
            plugins: [
            ],
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
