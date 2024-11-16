import { env } from "@solistack/env/web/client"

import { PostHog } from "posthog-node"
import "server-only"

export const posthog = new PostHog(env.NEXT_PUBLIC_POSTHOG_KEY, {
  host: "https://us.i.posthog.com",

  // Don't batch events and flush immediately - we're running in a serverless environment
  flushAt: 1,
  flushInterval: 0,
})
