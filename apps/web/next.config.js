import bundleAnalyzerPlugin from "@next/bundle-analyzer"

const withBundleAnalyzer = bundleAnalyzerPlugin({
  enabled: process.env.ANALYZE === "true",
})
import.meta.url
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@solistack/auth"],
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [{ hostname: "github.com" }],
  },
}

export default withBundleAnalyzer(nextConfig)
