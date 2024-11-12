import { env } from "@solistack/env/web/server"

import "server-only"
import Stripe from "stripe"

export type { Stripe } from "stripe"

export const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-10-28.acacia",
})
