/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/styles')],
    prependData: '@import "./assets/styles/variables.scss";'
  }
};
module.exports = nextConfig;
