import { createEnv } from "@t3-oss/env-nextjs"

import { z } from "zod"

import { sharedEnv } from "./src/shared"

export const env = createEnv({
  extends: [sharedEnv],
  server: {
    DATABASE_URL: z.string().url(),
    BETTER_AUTH_SECRET: z.string(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
  },
  client: {
    NEXT_PUBLIC_APP_BASE_URL: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_APP_BASE_URL: process.env.NEXT_PUBLIC_APP_BASE_URL,
  },
})
