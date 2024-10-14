import type { Metadata } from "next/types"

import { ScreenSizeIndicator } from "@/components/screen-size-indicator"
import { Toaster } from "@/components/ui/toaster"

import "@/styles/globals.css"

import { ThemeProvider } from "@/providers/theme-provider"

import "@solistack/assets/src/fonts/stylesheet.css"
import "@solistack/ui/globals.css"
import { cn } from "@solistack/ui/utils/cn"

export const metadata: Metadata = {
  title: {
    default: "Solistack",
    template: "%s - Solistack",
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={cn("bg-background min-h-screen antialiased")}>
        <ThemeProvider>
          <div vaul-drawer-wrapper="" className="bg-background">
            {children}
            <Toaster />
          </div>
        </ThemeProvider>
        <ScreenSizeIndicator />
      </body>
    </html>
  )
}

export default RootLayout
