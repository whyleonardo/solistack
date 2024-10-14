import bundleAnalyzerPlugin from "@next/bundle-analyzer"

const withBundleAnalyzer = bundleAnalyzerPlugin({
  enabled: process.env.ANALYZE === "true",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@solistack/auth",
    "@solistack/tailwind",
    "@solistack/ui",
  ],
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
