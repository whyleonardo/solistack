import { createFlag } from "./lib/create-flag"

// biome-ignore lint/nursery/noSecrets: This is just an example. But when needed, don't hardcode the key, use env vars instead.
export const showAnalyticsFeature = createFlag("showAnalyticsFeature")
