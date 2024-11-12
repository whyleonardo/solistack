import { env } from "@solistack/env/web/server"

import { hc } from "hono/client"

import type { AppType } from "./index.js"

export const client = hc<AppType>(env.API_BASE_URL as string)
