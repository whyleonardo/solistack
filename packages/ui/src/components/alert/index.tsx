import * as React from "react"

import { type VariantProps, tv } from "tailwind-variants"

import { cn } from "../../utils/cn"

const alertVariants = tv({
  base: "[&>svg]:text-foreground relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-7",
  variants: {
    variant: {
      default: "bg-background text-foreground",
      destructive:
        "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      success:
        "border-success/50 text-success dark:border-success [&>svg]:text-success",
      warning:
        "border-warning/50 text-warning dark:border-warning [&>svg]:text-warning",
      info: "border-info/50 text-info dark:border-info [&>svg]:text-info",
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

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription, alertVariants }
