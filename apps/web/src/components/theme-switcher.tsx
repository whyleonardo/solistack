"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@soli/ui/select"

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Select
      onValueChange={(value) => setTheme(value)}
      defaultValue={theme as string}
    >
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem value="system">System</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="light">Light</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
