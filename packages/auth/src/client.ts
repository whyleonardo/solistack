import { createAuthClient } from "better-auth/react"

export const { signIn, signUp, signOut, getSession } = createAuthClient({
  baseURL: "http://localhost:3333",
})
