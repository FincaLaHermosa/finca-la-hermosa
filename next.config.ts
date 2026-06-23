import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  serverExternalPackages: ["sharp"],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.fincalahermosa.com",
          },
        ],
        destination: "https://fincalahermosa.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
