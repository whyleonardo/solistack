"use client"

import type { ReactNode } from "react"

import { env } from "@solistack/env/web/client"

import posthogRaw, { type PostHog } from "posthog-js"
import { PostHogProvider as PostHogProviderRaw } from "posthog-js/react"

export const posthog = posthogRaw.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: "/ingest",
  ui_host: env.NEXT_PUBLIC_POSTHOG_HOST,
  person_profiles: "identified_only",
  capture_pageview: false, // Disable automatic pageview capture, as we capture manually
  capture_pageleave: true, // Overrides the `capture_pageview` setting
}) as PostHog

export const PostHogProvider = ({ children }: { children: ReactNode }) => (
  <PostHogProviderRaw client={posthog}>{children}</PostHogProviderRaw>
)
