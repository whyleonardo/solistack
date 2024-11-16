import { env } from "@solistack/env/web/db"

import { defineConfig } from "drizzle-kit"

export default defineConfig({
  out: ".next",
  dialect: "postgresql",
  schema: ["../../packages/db/src/schemas"],
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
