"use client"

import type { ReactNode } from "react"

import { cn } from "@solistack/design-system/cn"
import { fonts } from "@solistack/design-system/fonts"
import "@solistack/design-system/globals"
import { DesignSystemProvider } from "@solistack/design-system/providers"

import { PostHogIdentifier } from "@/components/posthog-identifier"
import { QueryProvider } from "@/providers/query-provider"

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
