import { cn } from "cn"

import { CHANNEL_ACCENT, pad } from "@/components/tracker/channels"
import { org } from "@/lib/content/nav"

// The four entry points from ethereum.org's "Điều gì đưa bạn đến đây?" prompt.
const PATHS = [
  { label: "Chọn một ví", href: org("/wallets/find-wallet/") },
  { label: "Nhận ETH", href: org("/get-eth/") },
  { label: "Thử các ứng dụng", href: org("/apps/") },
  { label: "Bắt đầu xây dựng", href: org("/developers/") },
]

export function StartBar() {
  return (
    <nav
      aria-label="Bắt đầu trên Ethereum"
      className="grid shrink-0 grid-cols-2 gap-1.5 border-t p-1.5 lg:grid-cols-4"
    >
      {PATHS.map((path, i) => (
        <a
          key={path.href}
          href={path.href}
          target="_blank"
          rel="noreferrer"
          className={cn(
            "flex h-8 items-center justify-center gap-2 border border-t-2 uppercase outline-none hover:bg-muted focus-visible:ring-1 focus-visible:ring-ring",
            CHANNEL_ACCENT[i]
          )}
        >
          <span className="text-muted-foreground tabular-nums">
            {pad(i + 1)}
          </span>
          {path.label}
        </a>
      ))}
    </nav>
  )
}
