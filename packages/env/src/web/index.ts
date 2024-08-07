import { createEnv } from "@t3-oss/env-nextjs"
import { vercel } from "@t3-oss/env-nextjs/presets"

import { z } from "zod"

export const env = createEnv({
  extends: [vercel()],
  client: {},
  server: {
    DATABASE_URL: z.string().url().startsWith("postgres"),
    AUTH_SECRET: z.string().min(1),
  },
  experimental__runtimeEnv: {},
  emptyStringAsUndefined: true,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
})