"use server"

import { headers } from "next/headers"

import { auth } from "@solistack/auth"

export async function getSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  return session
}
