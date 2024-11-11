import type { ThemeProviderProps } from "next-themes"

import { Toaster } from "@solistack/design-system/components/ui/sonner"
import { TooltipProvider } from "@solistack/design-system/components/ui/tooltip"

import { ThemeProvider } from "./theme"

type DesignSystemProviderProperties = ThemeProviderProps

export const DesignSystemProvider = ({
  children,
  ...properties
}: DesignSystemProviderProperties) => (
  <ThemeProvider {...properties}>
    <TooltipProvider>{children}</TooltipProvider>
    <Toaster />
  </ThemeProvider>
)
