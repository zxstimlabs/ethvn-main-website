"use client"

import * as React from "react"

import { Directory } from "@/components/tracker/directory"
import { MenuBar } from "@/components/tracker/menu-bar"
import {
  GlossaryGrid,
  OverviewGrid,
  QuizGrid,
} from "@/components/tracker/pattern-grid"
import { StartBar } from "@/components/tracker/start-bar"
import { TopicList } from "@/components/tracker/topic-list"
import { TransportBar, type View } from "@/components/tracker/transport-bar"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { quizzes } from "@/lib/content/quizzes"
import { topics } from "@/lib/content/topics"

type Answers = Record<string, Record<number, number>>

export function Tracker() {
  const [current, setCurrent] = React.useState(0)
  const [view, setView] = React.useState<View>("overview")
  const [scale, setScale] = React.useState(1)
  const [answers, setAnswers] = React.useState<Answers>({})

  const topic = topics[current]
  const questions = quizzes[topic.quiz]
  const topicAnswers = answers[topic.id] ?? {}
  const score = questions.filter(
    (question, q) => topicAnswers[q] === question.correct
  ).length

  const select = (index: number) =>
    setCurrent(Math.min(Math.max(index, 0), topics.length - 1))

  const answer = (question: number, choice: number) =>
    setAnswers((prev) => ({
      ...prev,
      [topic.id]: { ...prev[topic.id], [question]: choice },
    }))

  const reset = () =>
    setAnswers((prev) => {
      const next = { ...prev }
      delete next[topic.id]
      return next
    })

  return (
    <div className="flex min-h-svh flex-col bg-background text-[11px] text-foreground lg:h-svh lg:overflow-hidden">
      <MenuBar />

      <div className="flex shrink-0 items-center justify-between gap-4 border-b px-2 py-2.5">
        <h1 className="text-sm font-bold">ETH.VN — Internet thuộc về bạn</h1>
        <p className="hidden text-muted-foreground uppercase sm:block">
          Tiếng Việt · Nguồn: ethereum.org
        </p>
      </div>

      <Tabs
        value={view}
        onValueChange={(value) => setView(value as View)}
        className="min-h-0 flex-1 gap-0"
      >
        <TransportBar
          topic={topic}
          index={current}
          total={topics.length}
          score={score}
          questionCount={questions.length}
          onPrev={() => select(current - 1)}
          onNext={() => select(current + 1)}
          onReset={reset}
        />
        <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
          <TopicList
            topics={topics}
            current={current}
            scale={scale}
            onSelect={select}
            onScale={setScale}
          />
          <div className="min-h-0 min-w-0 flex-1">
            <TabsContent value="overview" className="h-full">
              <OverviewGrid topic={topic} scale={scale} />
            </TabsContent>
            <TabsContent value="glossary" className="h-full">
              <GlossaryGrid topic={topic} scale={scale} />
            </TabsContent>
            <TabsContent value="quiz" className="h-full">
              <QuizGrid
                topic={topic}
                scale={scale}
                answers={topicAnswers}
                onAnswer={answer}
              />
            </TabsContent>
          </div>
        </div>
      </Tabs>

      <Directory />
      <StartBar />
    </div>
  )
}
