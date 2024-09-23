import type { Provider } from "next-auth/providers"
import GitHub from "next-auth/providers/github"

import { env } from "@soli/env/web/server"

export const providers = [
  GitHub({
    clientId: env.AUTH_GITHUB_ID,
    clientSecret: env.AUTH_GITHUB_SECRET,
  }),
] as Provider[]
