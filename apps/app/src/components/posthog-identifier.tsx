"use client"

import { useEffect, useRef } from "react"

import { usePathname, useSearchParams } from "next/navigation"

import { posthog } from "@solistack/analytics/posthog/client"

import { useCurrentUser } from "@/features/auth/queries/use-current-user"

export const PostHogIdentifier = () => {
  const { data: user } = useCurrentUser()
  const identified = useRef(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track pageviews
    if (pathname && posthog) {
      let url = window.origin + pathname
      if (searchParams.toString()) {
        url = `${url}?${searchParams.toString()}`
      }
      posthog.capture("$pageview", {
        $current_url: url,
      })
    }
  }, [pathname, searchParams])

  useEffect(() => {
    if (!user || identified.current) {
      return
    }

    posthog.identify(user.id, {})

    identified.current = true
  }, [user])

  return null
}
