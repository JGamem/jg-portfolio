// next.config.js
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
  },
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'three'],
    serverComponents: true,
  }
};

export default withBundleAnalyzer(nextConfig);