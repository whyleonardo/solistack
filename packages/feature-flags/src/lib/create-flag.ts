import { headers } from "next/headers"

import { posthog } from "@solistack/analytics/posthog/server"
import { auth } from "@solistack/auth"
import { unstable_flag as flag } from "@vercel/flags/next"

export const createFlag = (key: string) =>
  flag({
    key,
    defaultValue: false,
    async decide() {
      const data = await auth.api.getSession({ headers: await headers() })

      const userId = data?.user.id

      if (!userId) {
        return this.defaultValue as boolean
      }

      const isEnabled = await posthog.isFeatureEnabled(key, userId)

      return isEnabled ?? (this.defaultValue as boolean)
    },
  })
