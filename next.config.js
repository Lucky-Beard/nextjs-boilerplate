/** @type {import('next').NextConfig} */
const path = require('path');

const prependData = [
  '@import "./assets/styles/variables.scss";',
  '@import "./assets/styles/mixins.scss";'
];

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/styles')],
    prependData: prependData.join('')
  }
};
module.exports = nextConfig;
