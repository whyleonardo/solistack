import { createEnv } from "@t3-oss/env-nextjs"

import { z } from "zod"

import { sharedEnv } from "../shared"
import { env as dbEnv } from "./db"

export const env = createEnv({
  extends: [sharedEnv, dbEnv],
  server: {
    BETTER_AUTH_SECRET: z.string(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
    FLAGS_SECRET: z.string().min(1),
    ALLOWED_ORIGINS: z.string().refine((val) => val.split(",").length > 0),
    APP_BASE_URL: z.string().url(),
    API_BASE_URL: z.string().url(),
  },
  experimental__runtimeEnv: {},
})
