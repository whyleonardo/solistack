import type { NextAuthConfig } from "next-auth"

import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@solistack/db"
import { env } from "@solistack/env/web/server"

import { providers } from "./providers"

export const authConfig = {
  secret: env.AUTH_SECRET,
  adapter: DrizzleAdapter(db),
  providers: [...providers],
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
} satisfies NextAuthConfig
