import { env } from "@soli/env/web/db"

import type { Config } from "drizzle-kit"

export default {
  schema: ["./src/schema/index.ts"],
  out: "./.drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
} satisfies Config
