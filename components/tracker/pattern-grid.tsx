"use client"

import { CheckIcon, XIcon } from "lucide-react"
import { cn } from "cn"

import { CHANNEL_ACCENT, hex } from "@/components/tracker/channels"
import { glossary } from "@/lib/content/glossary"
import { quizzes } from "@/lib/content/quizzes"
import { FACETS, type Topic } from "@/lib/content/topics"

// Tracker patterns show at least 0x20 rows; empty rows are padding, not content.
const MIN_ROWS = 32
const COLUMNS = "grid-cols-[2.5rem_repeat(4,minmax(0,1fr))]"
const LETTERS = ["A", "B", "C", "D"]

export const TEXT_SCALES = ["text-[11px]", "text-xs", "text-sm"] as const

type Header = { label: string; span?: 1 | 3 }

function GridFrame({
  headers,
  scale,
  children,
}: {
  headers: Header[]
  scale: number
  children: React.ReactNode
}) {
  // A spanning header takes the accent of the first channel it covers.
  const firstChannel = headers.map((_, i) =>
    headers.slice(0, i).reduce((sum, h) => sum + (h.span ?? 1), 0)
  )

  return (
    <div className="h-full scrollbar-thin overflow-auto">
      <div className={cn("min-w-[44rem]", TEXT_SCALES[scale])}>
        <div
          className={cn(
            "sticky top-0 z-10 grid border-b bg-background",
            COLUMNS
          )}
        >
          <div />
          {headers.map((header, i) => (
            <div
              key={header.label}
              className={cn(
                "mx-px border-t-2 py-2 text-center text-[11px] font-bold uppercase",
                CHANNEL_ACCENT[firstChannel[i]],
                header.span === 3 && "col-span-3"
              )}
            >
              {header.label}
            </div>
          ))}
        </div>
        {children}
      </div>
    </div>
  )
}

function Row({
  index,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { index: number }) {
  const beat = index % 4 === 0
  return (
    <div
      className={cn(
        "grid hover:bg-muted/60",
        COLUMNS,
        beat && "bg-muted/30",
        className
      )}
      {...props}
    >
      <div
        aria-hidden
        className={cn(
          "px-2 py-1 text-muted-foreground tabular-nums",
          beat && "font-bold text-foreground"
        )}
      >
        {hex(index)}
      </div>
      {children}
    </div>
  )
}

function Cell({
  span,
  className,
  children,
}: {
  span?: 3 | 4
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "border-l px-2 py-1",
        span === 3 && "col-span-3",
        span === 4 && "col-span-4",
        className
      )}
    >
      {children ?? <EmptyCell />}
    </div>
  )
}

function EmptyCell() {
  return (
    <span aria-hidden className="text-muted-foreground/40 select-none">
      --- -- -- ···
    </span>
  )
}

function FillerRows({ from }: { from: number }) {
  return Array.from({ length: Math.max(0, MIN_ROWS - from) }, (_, i) => (
    <Row key={from + i} index={from + i} aria-hidden>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </Row>
  ))
}

export function OverviewGrid({
  topic,
  scale,
}: {
  topic: Topic
  scale: number
}) {
  const rows = Math.max(...topic.facets.map((lines) => lines.length))

  return (
    <GridFrame headers={FACETS.map((label) => ({ label }))} scale={scale}>
      {Array.from({ length: rows }, (_, row) => (
        <Row key={row} index={row}>
          {topic.facets.map((lines, channel) => (
            <Cell key={channel}>{lines[row]}</Cell>
          ))}
        </Row>
      ))}
      <FillerRows from={rows} />
    </GridFrame>
  )
}

export function GlossaryGrid({
  topic,
  scale,
}: {
  topic: Topic
  scale: number
}) {
  return (
    <GridFrame
      headers={[{ label: "Thuật ngữ" }, { label: "Định nghĩa", span: 3 }]}
      scale={scale}
    >
      {topic.terms.map((key, row) => {
        const entry = glossary[key]
        return (
          <Row key={key} index={row}>
            <Cell className="font-bold">{entry.term}</Cell>
            <Cell span={3}>{entry.definition}</Cell>
          </Row>
        )
      })}
      <FillerRows from={topic.terms.length} />
    </GridFrame>
  )
}

export function QuizGrid({
  topic,
  scale,
  answers,
  onAnswer,
}: {
  topic: Topic
  scale: number
  answers: Record<number, number>
  onAnswer: (question: number, answer: number) => void
}) {
  const questions = quizzes[topic.quiz]
  // Each question uses a prompt row and an answer row, plus an explanation row once answered.
  const rowsUsed = questions.map((_, q) => (answers[q] === undefined ? 2 : 3))
  const firstRow = rowsUsed.map((_, q) =>
    rowsUsed.slice(0, q).reduce((sum, n) => sum + n, 0)
  )
  const totalRows = rowsUsed.reduce((sum, n) => sum + n, 0)

  return (
    <GridFrame headers={LETTERS.map((label) => ({ label }))} scale={scale}>
      {questions.map((question, q) => {
        const chosen = answers[q]
        const answered = chosen !== undefined
        const correct = chosen === question.correct
        const row = firstRow[q]

        return (
          <div key={q} role="group" aria-label={`Câu ${q + 1}`}>
            <Row index={row}>
              <Cell span={4} className="font-bold">
                <span className="text-muted-foreground">Câu {q + 1}. </span>
                {question.prompt}
              </Cell>
            </Row>
            <Row index={row + 1} className="hover:bg-transparent">
              {LETTERS.map((letter, a) => {
                const answer = question.answers[a]
                if (!answer) return <Cell key={letter} />
                const isChosen = chosen === a
                const isCorrect = question.correct === a
                return (
                  <button
                    key={letter}
                    type="button"
                    disabled={answered}
                    aria-pressed={isChosen}
                    onClick={() => onAnswer(q, a)}
                    className={cn(
                      "flex items-start gap-1.5 border-l px-2 py-1 text-left outline-none hover:bg-muted focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-default disabled:hover:bg-transparent",
                      answered &&
                        isCorrect &&
                        "bg-primary text-primary-foreground disabled:hover:bg-primary",
                      answered &&
                        isChosen &&
                        !isCorrect &&
                        "bg-destructive/15 text-destructive disabled:hover:bg-destructive/15",
                      answered &&
                        !isChosen &&
                        !isCorrect &&
                        "text-muted-foreground"
                    )}
                  >
                    <span className="font-bold">{letter}</span>
                    <span className="flex-1">{answer.label}</span>
                    {answered && isCorrect && (
                      <CheckIcon className="mt-0.5 size-3.5 shrink-0" />
                    )}
                    {answered && isChosen && !isCorrect && (
                      <XIcon className="mt-0.5 size-3.5 shrink-0" />
                    )}
                  </button>
                )
              })}
            </Row>
            {answered && (
              <Row index={row + 2}>
                <Cell span={4} className={correct ? "" : "text-destructive"}>
                  <span role="status">
                    <span className="font-bold uppercase">
                      {correct
                        ? "✓ Chính xác"
                        : `✗ Chưa đúng · đáp án ${LETTERS[question.correct]}`}
                    </span>
                    {" — "}
                    {question.answers[chosen].explanation}
                  </span>
                </Cell>
              </Row>
            )}
          </div>
        )
      })}
      <FillerRows from={totalRows} />
    </GridFrame>
  )
}
