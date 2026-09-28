// Channel accents reuse the theme's chart tokens so they follow the base color.
export const CHANNEL_ACCENT = [
  "border-t-chart-1",
  "border-t-chart-2",
  "border-t-chart-3",
  "border-t-chart-4",
] as const

export function hex(n: number) {
  return n.toString(16).toUpperCase().padStart(2, "0")
}

export function pad(n: number) {
  return n.toString().padStart(2, "0")
}
