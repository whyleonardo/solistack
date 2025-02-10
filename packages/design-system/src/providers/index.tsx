import { VercelToolbar } from "@vercel/toolbar/next"
import type { ThemeProviderProps } from "next-themes"

import { GoogleAnalytics } from "@solistack/analytics/google"
import { PostHogProvider } from "@solistack/analytics/posthog/client"
import { VercelAnalytics } from "@solistack/analytics/vercel"
import { env } from "@solistack/env/web/client"

import { Toaster } from "../components/ui/sonner"
import { TooltipProvider } from "../components/ui/tooltip"
import { ThemeProvider } from "./theme"

type DesignSystemProviderProperties = ThemeProviderProps

export const DesignSystemProvider = ({
  children,
  ...properties
}: DesignSystemProviderProperties) => (
  <ThemeProvider {...properties}>
    <PostHogProvider>
      <TooltipProvider>{children}</TooltipProvider>
      <Toaster />

      {process.env.NODE_ENV === "development" ? (
        <VercelToolbar />
      ) : (
        <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
      <VercelAnalytics />
    </PostHogProvider>
  </ThemeProvider>
)
