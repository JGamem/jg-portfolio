/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'], // Add any image domains you'll use
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    localeDetection: true,
  },
}

module.exports = nextConfig