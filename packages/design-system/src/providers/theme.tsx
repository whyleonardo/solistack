"use client"

import { ThemeProvider as Provider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export const ThemeProvider = (properties: ThemeProviderProps) => (
  <Provider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    {...properties}
  />
)
