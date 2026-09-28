"use client"

import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  RotateCcwIcon,
} from "lucide-react"

import { hex } from "@/components/tracker/channels"
import { Button } from "@/components/ui/button"
import { TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Topic } from "@/lib/content/topics"

export const VIEWS = [
  { value: "overview", label: "Tổng quan" },
  { value: "glossary", label: "Thuật ngữ" },
  { value: "quiz", label: "Kiểm tra" },
] as const

export type View = (typeof VIEWS)[number]["value"]

function Counter({
  label,
  value,
  suffix,
}: {
  label: string
  value: string
  suffix?: string
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[9px] leading-none text-muted-foreground uppercase">
        {label}
      </span>
      <span className="flex items-baseline gap-1">
        <span className="min-w-7 border px-1 text-center leading-5 font-bold tabular-nums">
          {value}
        </span>
        {suffix && (
          <span className="text-[10px] text-muted-foreground">{suffix}</span>
        )}
      </span>
    </div>
  )
}

export function TransportBar({
  topic,
  index,
  total,
  score,
  questionCount,
  onPrev,
  onNext,
  onReset,
}: {
  topic: Topic
  index: number
  total: number
  score: number
  questionCount: number
  onPrev: () => void
  onNext: () => void
  onReset: () => void
}) {
  return (
    <div className="flex shrink-0 flex-wrap items-center gap-x-3 gap-y-2 border-b px-2 py-1.5">
      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="sm"
          className="uppercase"
          onClick={onPrev}
          disabled={index === 0}
        >
          <ChevronLeftIcon data-icon="inline-start" />
          Trước
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="uppercase"
          onClick={onNext}
          disabled={index === total - 1}
        >
          Tiếp
          <ChevronRightIcon data-icon="inline-end" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="uppercase"
          onClick={onReset}
        >
          <RotateCcwIcon data-icon="inline-start" />
          Làm lại
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="uppercase"
          nativeButton={false}
          render={<a href={topic.href} target="_blank" rel="noreferrer" />}
        >
          Đọc
          <ArrowUpRightIcon data-icon="inline-end" />
        </Button>
      </div>

      <div className="flex min-w-0 items-center gap-2">
        <output
          aria-label={
            topic.stat ? `${topic.stat.value} ${topic.stat.label}` : undefined
          }
          className="flex h-7 min-w-24 items-center justify-center border px-3 text-base font-bold tabular-nums"
        >
          {topic.stat?.value ?? "--.--"}
        </output>
        <span className="hidden max-w-48 truncate text-[10px] text-muted-foreground uppercase xl:inline">
          {topic.stat?.label}
        </span>
      </div>

      <div className="flex items-end gap-2">
        <Counter
          label="Chủ đề"
          value={hex(index)}
          suffix={`/${hex(total - 1)}`}
        />
        <Counter label="Thuật ngữ" value={hex(topic.terms.length)} />
        <Counter label="Câu hỏi" value={hex(questionCount)} />
        <Counter label="Đúng" value={hex(score)} />
      </div>

      <TabsList className="ml-auto h-7 gap-1 bg-transparent p-0">
        {VIEWS.map((view) => (
          <TabsTrigger
            key={view.value}
            value={view.value}
            className="h-7 min-w-24 flex-none border-border px-3 text-[11px] uppercase data-active:border-primary data-active:bg-primary data-active:text-primary-foreground dark:data-active:border-primary dark:data-active:bg-primary dark:data-active:text-primary-foreground"
          >
            {view.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  )
}
