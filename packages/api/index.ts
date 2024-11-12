import { OpenAPIHono } from "@hono/zod-openapi"
import { env } from "@solistack/env/web/server"

import { cors } from "hono/cors"

import authRouter from "./routers/auth"

export const honoApp = new OpenAPIHono().basePath("/api")

honoApp.use(
  "*",
  cors({
    origin: [...env.ALLOWED_ORIGINS.split(",")],
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
)

const routes = honoApp.route("/auth", authRouter)

export type AppType = typeof routes
