"use client"

import { ArrowDownIcon, ArrowUpIcon, MinusIcon, PlusIcon } from "lucide-react"
import { cn } from "cn"

import { hex } from "@/components/tracker/channels"
import { TEXT_SCALES } from "@/components/tracker/pattern-grid"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { Topic } from "@/lib/content/topics"

function ToolButton({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string
  onClick: () => void
  disabled?: boolean
  children: React.ReactNode
}) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="outline"
            size="icon-xs"
            className="flex-1"
            aria-label={label}
            onClick={onClick}
            disabled={disabled}
          />
        }
      >
        {children}
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  )
}

export function TopicList({
  topics,
  current,
  scale,
  onSelect,
  onScale,
}: {
  topics: Topic[]
  current: number
  scale: number
  onSelect: (index: number) => void
  onScale: (scale: number) => void
}) {
  return (
    <nav
      aria-labelledby="topics-title"
      className="flex max-h-56 shrink-0 flex-col border-b lg:max-h-none lg:w-52 lg:border-r lg:border-b-0"
    >
      <h2
        id="topics-title"
        className="border-b px-2 py-2 text-[11px] font-bold uppercase"
      >
        Chủ đề
      </h2>
      <ol className="min-h-0 flex-1 scrollbar-thin overflow-y-auto py-0.5">
        {topics.map((topic, i) => (
          <li key={topic.id}>
            <button
              type="button"
              aria-current={i === current ? "true" : undefined}
              onClick={() => onSelect(i)}
              className={cn(
                "flex w-full gap-1 px-2 py-0.5 text-left uppercase outline-none hover:bg-muted focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-inset",
                i === current
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "text-muted-foreground"
              )}
            >
              <span aria-hidden className="w-2">
                {i === current ? ">" : ""}
              </span>
              <span className="tabular-nums">{hex(i)}</span>
              <span className="truncate">{topic.title}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="flex gap-1 border-t p-1.5">
        <ToolButton
          label="Tăng cỡ chữ"
          onClick={() => onScale(scale + 1)}
          disabled={scale === TEXT_SCALES.length - 1}
        >
          <PlusIcon />
        </ToolButton>
        <ToolButton
          label="Giảm cỡ chữ"
          onClick={() => onScale(scale - 1)}
          disabled={scale === 0}
        >
          <MinusIcon />
        </ToolButton>
        <ToolButton
          label="Chủ đề trước"
          onClick={() => onSelect(current - 1)}
          disabled={current === 0}
        >
          <ArrowUpIcon />
        </ToolButton>
        <ToolButton
          label="Chủ đề tiếp theo"
          onClick={() => onSelect(current + 1)}
          disabled={current === topics.length - 1}
        >
          <ArrowDownIcon />
        </ToolButton>
      </div>
    </nav>
  )
}
