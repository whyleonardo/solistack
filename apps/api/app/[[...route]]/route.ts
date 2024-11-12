import { apiReference } from "@scalar/hono-api-reference"
import { honoApp } from "@solistack/api"

import { handle } from "hono/vercel"

honoApp.doc("/openapi.json", {
  openapi: "3.1.0",
  info: {
    version: "0.0.1",
    title: "Solistack API Reference",
  },
})

honoApp.get(
  "/docs",
  apiReference({
    spec: {
      url: "/api/openapi.json",
    },
    pageTitle: "Solistack API Reference",
  })
)

export const GET = handle(honoApp)
export const POST = handle(honoApp)
export const OPTIONS = handle(honoApp)
