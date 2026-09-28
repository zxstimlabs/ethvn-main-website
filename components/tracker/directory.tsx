"use client"

import * as React from "react"
import { ArrowUpRightIcon } from "lucide-react"

import { pad } from "@/components/tracker/channels"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { directory, navSections } from "@/lib/content/nav"

const FILTERS = [
  { id: "all", label: "Tất cả" },
  ...navSections.map(({ id, label }) => ({ id, label })),
]

export function Directory() {
  const [filter, setFilter] = React.useState("all")
  const links =
    filter === "all"
      ? directory
      : directory.filter((link) => link.section === filter)

  return (
    <section
      aria-labelledby="directory-title"
      className="flex shrink-0 flex-col border-t"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 px-2 pt-1.5 pb-1">
        <h2 id="directory-title" className="text-[11px] font-bold uppercase">
          Tài nguyên
        </h2>
        <ToggleGroup
          aria-label="Lọc tài nguyên"
          value={[filter]}
          onValueChange={(value) => value[0] && setFilter(value[0])}
          variant="outline"
          spacing={0}
        >
          {FILTERS.map((item) => (
            <ToggleGroupItem
              key={item.id}
              value={item.id}
              className="h-5 min-w-0 px-1.5 text-[10px] uppercase aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground"
            >
              {item.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <ul className="h-40 scrollbar-thin overflow-y-auto lg:h-[8.75rem]">
        {links.map((link, i) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group/link flex h-5 items-center gap-2 px-2 outline-none hover:bg-muted focus-visible:bg-muted focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-inset"
            >
              <span className="text-muted-foreground tabular-nums">
                {pad(i + 1)}
              </span>
              <span className="shrink-0 font-medium">{link.label}</span>
              <span className="hidden truncate text-muted-foreground md:inline">
                -- {link.description}
              </span>
              <span className="ml-auto flex h-4 shrink-0 items-center gap-1 border px-2 text-[10px] uppercase group-hover/link:border-foreground">
                Mở
                <ArrowUpRightIcon className="size-3" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
