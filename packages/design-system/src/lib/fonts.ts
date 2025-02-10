import { Geist, Geist_Mono } from "next/font/google"

import { cn } from "./cn"

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  adjustFontFallback: false,
})
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  adjustFontFallback: false,
})

export const fonts = cn(sans.variable, mono.variable)
