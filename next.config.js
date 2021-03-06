/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  experimental: {
    newNextLinkBehavior: true,
  },
};

module.exports = nextConfig;
