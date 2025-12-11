/** @type {import('next').NextConfig} */
const nextConfig = {
  // Service worker'ı devre dışı bırak
  experimental: {
    optimizePackageImports: [],
  },
  async redirects() {
    return [
      {
        source: "/hizmetler",
        destination: "/hizmetlerimiz",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
