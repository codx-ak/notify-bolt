import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: "/notify-bolt/",
  basePath: "/notify-bolt",
  images: {
    unoptimized: true,
    formats: ["image/webp"],
    domains: ["codx-ak.github.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codx-ak.github.io",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|js|css|woff2?)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
