import { Geist, Geist_Mono } from "next/font/google"

import { cn } from "@solistack/design-system/lib/utils"

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  fallback: ["Inter", "sans-serif"],
})
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  fallback: ["Inter", "monospace"],
})

export const fonts = cn(sans.variable, mono.variable)
