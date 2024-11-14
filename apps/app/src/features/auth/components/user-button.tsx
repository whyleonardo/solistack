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
import { Skeleton } from "@solistack/design-system/components/ui/skeleton"
import { Typography } from "@solistack/design-system/components/ui/typography"

import { SignOutButton } from "./sign-out-button"

export const UserButton = () => {
  const {
    data,
    isLoading: isLoadingCurrentUser,
    isFetching: isFetchingCurrentUser,
  } = useCurrentUser()

  if (isLoadingCurrentUser || isFetchingCurrentUser) {
    return (
      <div className="bg-accent/10 rounded-xl border p-3">
        <div className="flex items-center gap-2">
          <Skeleton className="size-10 rounded-xl" />

          <div className="flex flex-col gap-1">
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-2.5 w-36" />
          </div>
        </div>
      </div>
    )
  }

  if (!data) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="bg-accent/10 cursor-pointer overflow-hidden rounded-xl border p-3 transition hover:opacity-80"
        asChild
      >
        <div className="flex items-center gap-2">
          <Avatar className="size-10 rounded-xl">
            <AvatarImage src={data.image as string} alt={data.name} />
            <AvatarFallback className="bg-primary-foreground rounded-xl uppercase">
              {data.name[0]}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <Typography variant="p" className="leading-4">
              {data.name}
            </Typography>
            <Typography className="text-xs font-medium" variant="muted">
              {data.email}
            </Typography>
          </div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="min-w-56 select-none rounded-lg"
        align="center"
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
