import { env } from "@solistack/env/web/db"

import { defineConfig } from "drizzle-kit"

export default defineConfig({
  out: ".drizzle",
  dialect: "postgresql",
  schema: ["./schemas"],
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
