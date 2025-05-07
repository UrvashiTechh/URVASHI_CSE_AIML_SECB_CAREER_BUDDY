"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

interface QuizTimerProps {
  duration: number // in minutes
  onTimeUp: () => void
}

export function QuizTimer({ duration, onTimeUp }: QuizTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration * 60) // convert to seconds
  const [isWarning, setIsWarning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          onTimeUp()
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [onTimeUp])

  useEffect(() => {
    // Set warning when less than 20% of time remains
    if (timeLeft <= duration * 60 * 0.2) {
      setIsWarning(true)
    }
  }, [timeLeft, duration])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div
      className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
        isWarning ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400" : "bg-muted"
      }`}
    >
      <Clock className="h-4 w-4" />
      <span>
        {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
      </span>
    </div>
  )
}
