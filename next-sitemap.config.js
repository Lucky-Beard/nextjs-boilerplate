/** @type {import('next-sitemap').IConfig} */
const excluded = ['/component-list']; // list of urls to exlude from robots and sitemap

const config = {
    siteUrl: process.env.SITE_URL || 'https://example.com',
    generateRobotsTxt: true, // (optional)
    exclude:excluded, // excluding component list as it's intended for local dev only.
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: excluded
        }
       ]
      } 
    // ...other options
  };
  
  module.exports = config;