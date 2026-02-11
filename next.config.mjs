/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/assets/public/**",
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
