import { posthog } from "@solistack/analytics/posthog/server"
import { db } from "@solistack/db"
import { env as envClient } from "@solistack/env/web/client"
import { env } from "@solistack/env/web/server"

import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"

export const auth = betterAuth({
  baseURL: envClient.NEXT_PUBLIC_API_BASE_URL,
  trustedOrigins: [...env.ALLOWED_ORIGINS.split(",")],
  secret: env.BETTER_AUTH_SECRET,
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: false,
  },
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    },
  },
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          posthog.identify({
            distinctId: user.id,
            properties: {
              email: user.email,
              name: user.name,
              createdAt: user.createdAt,
              avatar: user.image,
            },
          })

          posthog.capture({
            event: "User Created",
            distinctId: user.id,
          })
        },
      },
      update: {
        after: async (user) => {
          posthog.identify({
            distinctId: user.id,
            properties: {
              email: user.email,
              name: user.name,
              createdAt: user.createdAt,
              avatar: user.image,
            },
          })

          posthog.capture({
            event: "User Updated",
            distinctId: user.id,
          })
        },
      },
    },
  },
})
