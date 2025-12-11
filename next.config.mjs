/** @type {import('next').NextConfig} */
const nextConfig = {
  // Service worker'ı devre dışı bırak
  experimental: {
    optimizePackageImports: [],
  },
};

export default nextConfig;
