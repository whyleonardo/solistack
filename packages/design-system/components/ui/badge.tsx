import * as React from "react"

import { cn } from "@solistack/tailwind/cn"

import { type VariantProps, tv } from "tailwind-variants"

const badgeVariants = tv({
  base: "focus:ring-ring inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  variants: {
    variant: {
      default:
        "bg-primary text-primary-foreground hover:bg-primary/80 border-transparent shadow",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent",
      outline: "text-foreground",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/80 border-transparent",
      success:
        "bg-success text-success-foreground hover:bg-success/80 border-transparent",
      info: "bg-info text-info-foreground hover:bg-info/80 border-transparent",
      warning:
        "bg-warning text-warning-foreground hover:bg-warning/80 border-transparent",
      "destructive-subtle":
        "bg-destructive-subtle text-destructive-subtle-foreground hover:bg-destructive-subtle/80 border-transparent",
      "warning-subtle":
        "bg-warning-subtle text-warning-subtle-foreground hover:bg-warning-subtle/80 border-transparent",
      "info-subtle":
        "bg-info-subtle text-info-subtle-foreground hover:bg-info-subtle/80 border-transparent",
      "success-subtle":
        "bg-success-subtle text-success-subtle-foreground hover:bg-success-subtle/80 border-transparent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
