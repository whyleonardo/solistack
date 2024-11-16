import { OpenAPIHono } from "@hono/zod-openapi"
import { auth } from "@solistack/auth"

const app = new OpenAPIHono().on(["GET", "POST", "OPTIONS"], "*", (c) => {
  return auth.handler(c.req.raw)
})

export default app
