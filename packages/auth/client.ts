import { env } from "@solistack/env/web/client"

import { createAuthClient } from "better-auth/react"

export const { signIn, signUp, signOut, getSession } = createAuthClient({
  baseURL: env.NEXT_PUBLIC_APP_BASE_URL,
})
