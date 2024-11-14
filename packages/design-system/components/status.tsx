import type { ReactElement } from "react"

import { Badge } from "@solistack/design-system/components/ui/badge"
import { env } from "@solistack/env/web/server"
import { getStatus } from "@solistack/observability/status/get"
import { cn } from "@solistack/tailwind/cn"

import "server-only"

type Status = "normal" | "degraded" | "partial" | "unableFetch"

const variant = {
  normal: {
    variant: "success-subtle",
    label: "All systems normal",
    ping: "bg-success",
  },
  degraded: {
    variant: "destructive-subtle",
    label: "Degraded performance",
    ping: "bg-destructive",
  },
  partial: {
    variant: "warning-subtle",
    label: "Partial outage",
    ping: "bg-warning",
  },
  unableFetch: {
    variant: "outline",
    label: "Unable to fetch status",
    ping: "bg-muted-foreground",
  },
} as const

export const Status = async (): Promise<ReactElement> => {
  let status: Status = "normal"

  try {
    const data = await getStatus()
    const upStatusCount =
      data.filter((monitor) => monitor.attributes.status === "up").length /
      data.length

    if (upStatusCount === 0) {
      status = "degraded"
    } else if (upStatusCount < 1) {
      status = "partial"
    }
  } catch {
    status = "unableFetch"
  }

  return (
    <a
      className="flex items-center gap-1 text-sm font-medium"
      target="_blank"
      rel="noreferrer"
      href={env.BETTERSTACK_URL}
    >
      <Badge variant={variant[status].variant}>
        <span className="relative mr-2 flex size-2">
          <span
            className={cn(
              "absolute left-0 top-0 inline-flex size-full rounded-full opacity-75",
              variant[status].ping
            )}
          />
          <span
            className={cn(
              "relative inline-flex size-2 animate-ping rounded-full",
              variant[status].ping
            )}
          />
        </span>

        {variant[status].label}
      </Badge>
    </a>
  )
}
