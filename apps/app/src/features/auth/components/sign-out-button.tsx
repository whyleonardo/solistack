"use client"

import { useSignOut } from "@/features/auth/queries/use-sign-out"

import { LogOutIcon } from "lucide-react"

export const SignOutButton = () => {
  const { mutate } = useSignOut()

  async function handleLogout() {
    mutate()
  }

  return (
    <button
      type="button"
      className="flex size-full h-10 items-center justify-center text-center"
      onClick={handleLogout}
    >
      <LogOutIcon className="mr-2 size-4" />
      Logout
    </button>
  )
}
