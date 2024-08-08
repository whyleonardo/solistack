import type { NextAuthConfig } from "next-auth"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@soli/db"

import { providers } from "./providers"

export const authConfig = {
  adapter: PrismaAdapter(db),
  providers: [...providers],
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
} satisfies NextAuthConfig
