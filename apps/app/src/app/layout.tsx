"use client"

import type { ReactNode } from "react"

import { PostHogIdentifier } from "@/components/posthog-identifier"

import { QueryProvider } from "@/providers/query-provider"

import { fonts } from "@solistack/design-system/lib/fonts"
import { DesignSystemProvider } from "@solistack/design-system/providers"
import "@solistack/design-system/styles/globals.css"
import { cn } from "@solistack/tailwind/cn"

interface RootLayoutProps {
  readonly children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html className={cn(fonts)} lang="en" suppressHydrationWarning>
      <body>
        <QueryProvider>
          <DesignSystemProvider>
            <div vaul-drawer-wrapper="">{children}</div>
            <PostHogIdentifier />
          </DesignSystemProvider>
        </QueryProvider>
      </body>
    </html>
  )
}

export default RootLayout
