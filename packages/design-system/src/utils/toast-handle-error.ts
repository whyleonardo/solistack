import { parseError } from "@solistack/observability/parse-error"

import { toast } from "sonner"

export const toastHandleError = (error: unknown): void => {
  const message = parseError(error)

  toast.error(message)
}
