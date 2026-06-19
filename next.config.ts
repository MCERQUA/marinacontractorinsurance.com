import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.jam-bot.com"],
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
