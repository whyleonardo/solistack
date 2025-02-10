import type { NextConfig } from "next"

import { env } from "@solistack/env/web/server"
import { config, withSentry } from "@solistack/next-config"

let nextConfig: NextConfig = {
  transpilePackages: ["@solistack/env"],
  ...config,
}

if (env.VERCEL) {
  nextConfig = withSentry(nextConfig)
}

export default nextConfig
