"use client"

import { useCurrentUser } from "@/features/auth/controllers/use-current-user"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@solistack/design-system/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@solistack/design-system/components/ui/dropdown-menu"

import { SignOutButton } from "./sign-out-button"

export const UserButton = () => {
  const { data } = useCurrentUser()

  if (!data) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="cursor-pointer overflow-hidden border p-px transition hover:opacity-80"
        asChild
      >
        <Avatar className="size-12">
          <AvatarImage
            src={data.image as string}
            alt={data.name}
            className="rounded-full"
          />
          <AvatarFallback className="bg-primary-foreground uppercase">
            {data.name[0]}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="min-w-56 select-none rounded-lg"
        align="end"
        sideOffset={4}
        side="bottom"
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex flex-col items-center gap-2 px-1 py-1.5 text-center">
            <Avatar className="size-12 rounded-full">
              <AvatarImage src={data.image as string} alt={data.name} />
              <AvatarFallback className="bg-primary-foreground border text-xl uppercase">
                {data.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-sm leading-tight">
              <span className="truncate font-semibold">{data.name}</span>
              <span className="text-muted-foreground truncate text-xs">
                {data.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-warning-subtle-foreground p-0">
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
