import type { ReactNode } from "react"
import type React from "react"

import { cn } from "@solistack/design-system/cn"
import {
  Button,
  type ButtonProps,
} from "@solistack/design-system/primitives/button"

import { CheckIcon, Loader2 } from "lucide-react"
import type { VariantProps } from "tailwind-variants"

interface RootProps extends ButtonProps {
  children: ReactNode
  className?: string
  isSuccess?: boolean
}

interface StatefulSignInButtonIconProps {
  className?: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

const StatefulSignInButton = ({
  children,
  onClick,
  className,
  disabled,
  isSuccess,
  ...props
}: RootProps) => {
  return (
    <Button
      data-success={isSuccess}
      data-loading={disabled}
      onClick={onClick}
      className={cn("group overflow-hidden", className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  )
}

const StatefulSignInIcon = ({
  icon: Icon,
  className,
}: StatefulSignInButtonIconProps) => {
  return (
    <div className="relative me-1">
      <Icon
        aria-hidden={true}
        className={cn(
          "transition-transform group-data-[loading=true]:-translate-y-8",
          "group-data-[success=true]:-translate-y-8",

          className
        )}
      />

      <CheckIcon className="text-success absolute left-0 top-0 scale-0 transition-transform duration-300 group-data-[success=true]:scale-100" />

      <div
        className={cn(
          "absolute left-0 top-0 translate-y-8 transition-transform",
          "group-data-[loading=true]:translate-y-0 group-data-[success=true]:opacity-0"
        )}
      >
        <Loader2 className="animate-spin" />
      </div>
    </div>
  )
}

export { StatefulSignInButton, StatefulSignInIcon }
