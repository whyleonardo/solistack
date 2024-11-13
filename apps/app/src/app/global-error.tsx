"use client"

import NextError from "next/error"
import { useEffect } from "react"

import * as Sentry from "@sentry/nextjs"
import { handleError } from "@solistack/design-system/lib/utils"

/**
 * A global error component that logs the error to Sentry.
 * @param params the parameters being passed to the page.
 * @param params.error the error instance that was thrown.
 * @returns A Next.js RSC page.
 */
export default function GlobalError({ error }: { error: Error }) {
  useEffect(() => {
    Sentry.captureException(error)
    handleError(error)
  }, [error])

  return (
    <html lang="en" dir="ltr">
      <body>
        HELLO
        <NextError statusCode={500} />
      </body>
    </html>
  )
}
