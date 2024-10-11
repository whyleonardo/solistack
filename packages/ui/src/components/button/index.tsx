import * as React from "react"

import { ReloadIcon } from "@radix-ui/react-icons"
import { Slot, Slottable } from "@radix-ui/react-slot"

import { type VariantProps, tv } from "tailwind-variants"

import { cn } from "../../utils/cn"

const buttonVariants = tv({
  base: "focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
      outline:
        "border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-sm",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
      expandIcon:
        "text-primary-foreground bg-primary hover:bg-primary/90 group relative",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "after:bg-primary relative after:absolute after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-left after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0",
      ringer:
        "bg-primary text-primary-foreground hover:bg-primary/90 hover:ring-primary/90 hover:ring-offset-background transition-all duration-300 hover:ring-2 hover:ring-offset-2",
      shine:
        "text-primary-foreground animate-shine from-primary via-primary/75 to-primary bg-gradient-to-r bg-[length:400%_100%]",
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    },
    isLoading: {
      true: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

interface IconProps {
  Icon: React.ElementType
  iconPlacement: "left" | "right"
}

interface IconRefProps {
  Icon?: never
  iconPlacement?: undefined
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export type ButtonIconProps = IconProps | IconRefProps

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & ButtonIconProps
>(
  (
    {
      className,
      variant,
      size,
      Icon,
      isLoading,
      iconPlacement,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {Icon && iconPlacement === "left" && (
          <div className="group-hover:translate-x-100 w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:pr-2 group-hover:opacity-100">
            <Icon />
          </div>
        )}
        <Slottable>{props.children}</Slottable>
        {Icon && iconPlacement === "right" && (
          <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
            <Icon />
          </div>
        )}

        {isLoading && <ReloadIcon className="ml-2 size-4 animate-spin" />}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
