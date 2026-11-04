import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Playwright opens the dev server at 127.0.0.1, which Next treats as a
  // different development origin from its default localhost hostname.
  allowedDevOrigins: ["127.0.0.1"],
  output: "export",
};

export default nextConfig;
