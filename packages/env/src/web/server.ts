import { createEnv } from "@t3-oss/env-nextjs"

import { z } from "zod"

import { sharedEnv } from "../shared"
import { env as dbEnv } from "./db"

export const env = createEnv({
  extends: [sharedEnv, dbEnv],
  server: {
    BETTER_AUTH_SECRET: z.string().min(1),
    GITHUB_CLIENT_ID: z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1),
    FLAGS_SECRET: z.string().min(1),
    ALLOWED_ORIGINS: z.string().refine((val) => val.split(",").length > 0),
    STRIPE_SECRET_KEY: z.string().min(1),
    STRIPE_WEBHOOK_SECRET: z.string().min(1).startsWith("whsec_"),
    BETTERSTACK_URL: z.string().url(),
    BETTERSTACK_API_KEY: z.string().min(1),
    NEXT_RUNTIME: z.enum(["nodejs", "edge"]).optional(),
    SENTRY_ORG: z.string().min(1),
    SENTRY_PROJECT: z.string().min(1),
  },
  experimental__runtimeEnv: {},
})
