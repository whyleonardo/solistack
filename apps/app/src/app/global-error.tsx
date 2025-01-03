"use client"

import { useEffect } from "react"

import NextError from "next/error"

import * as Sentry from "@sentry/nextjs"

import { toastHandleError } from "@solistack/design-system/toast-handle-error"

/**
 * A global error component that logs the error to Sentry.
 * @param params the parameters being passed to the page.
 * @param params.error the error instance that was thrown.
 * @returns A Next.js RSC page.
 */
export default function GlobalError({ error }: { error: Error }) {
  useEffect(() => {
    Sentry.captureException(error)
    toastHandleError(error)
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
