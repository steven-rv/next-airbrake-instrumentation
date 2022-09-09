/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  output: "standalone",
  swcMinify: true,
  env: {
    AIRBRAKE_PROJECT_ID: process.env.AIRBRAKE_PROJECT_ID,
    AIRBRAKE_KEY: process.env.AIRBRAKE_KEY,
  },
}

module.exports = () => {
  return withBundleAnalyzer({
    ...nextConfig
  });
};
