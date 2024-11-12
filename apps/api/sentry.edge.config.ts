import { init } from "@sentry/nextjs"
import { env } from "@solistack/env/web/client"

init({
  dsn: env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1,
  debug: false,
})
