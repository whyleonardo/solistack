import { env } from "@solistack/env/web/server"

import StripeClient from "stripe"

export type { Stripe } from "stripe"

export const stripe = new StripeClient(env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-09-30.acacia",
  typescript: true,
})
