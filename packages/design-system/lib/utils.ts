import { parseError } from "@solistack/observability/error"

import { clsx } from "clsx"
import type { ClassValue } from "clsx"
import { toast } from "sonner"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))

export const handleError = (error: unknown): void => {
  const message = parseError(error)

  toast.error(message)
}
