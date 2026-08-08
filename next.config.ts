import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        assetPrefix: "/bogota-car-life/",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
