"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const THEMES = [
  { value: "system", label: "Hệ thống" },
  { value: "light", label: "Sáng" },
  { value: "dark", label: "Tối" },
]

const subscribe = () => () => {}

export function ThemeSelect() {
  const { theme, setTheme } = useTheme()
  // next-themes only knows the stored theme on the client; render the default until hydrated.
  const mounted = React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )

  return (
    <Select
      items={THEMES}
      value={mounted ? (theme ?? "system") : "system"}
      onValueChange={(value) => value && setTheme(value)}
    >
      <SelectTrigger
        size="sm"
        className="h-6 w-28 uppercase"
        aria-label="Giao diện"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {THEMES.map((item) => (
          <SelectItem key={item.value} value={item.value} className="uppercase">
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
