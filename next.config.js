/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  output: "standalone",
  swcMinify: true,
}

module.exports = () => {
  return withBundleAnalyzer({
    ...nextConfig
  });
};
