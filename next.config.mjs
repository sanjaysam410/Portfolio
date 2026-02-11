/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/assets/public/**",
      },
      {
        protocol: "https",
        hostname: "*.vercel.app",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/assets/public/:path*",
        destination: "/assets/public/:path*",
      },
    ];
  },
};

export default nextConfig;
