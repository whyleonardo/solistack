import { Geist, Geist_Mono } from "next/font/google"

import { cn } from "@solistack/design-system/lib/utils"

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  fallback: ["sans-serif"],
  display: "swap",
  adjustFontFallback: false,
})
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  fallback: ["monospace"],
  display: "swap",
  adjustFontFallback: false,
})

export const fonts = cn(sans.variable, mono.variable)
