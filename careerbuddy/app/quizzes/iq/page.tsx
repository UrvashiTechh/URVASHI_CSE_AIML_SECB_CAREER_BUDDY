"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { QuizTimer } from "@/components/quiz-timer"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

// IQ test questions
const questions = [
  {
    id: 1,
    question: "What number should come next in this series: 2, 4, 8, 16, ...?",
    options: [
      { value: "24", label: "24" },
      { value: "32", label: "32" },
      { value: "20", label: "20" },
      { value: "30", label: "30" },
    ],
    correctAnswer: "32",
  },
  {
    id: 2,
    question: "If a clock reads 3:45, what is the angle between the hour and minute hands?",
    options: [
      { value: "90", label: "90 degrees" },
      { value: "97.5", label: "97.5 degrees" },
      { value: "82.5", label: "82.5 degrees" },
      { value: "75", label: "75 degrees" },
    ],
    correctAnswer: "97.5",
  },
  {
    id: 3,
    question: "Which of these words is the odd one out?",
    options: [
      { value: "Apple", label: "Apple" },
      { value: "Banana", label: "Banana" },
      { value: "Orange", label: "Orange" },
      { value: "Potato", label: "Potato" },
    ],
    correctAnswer: "Potato",
  },
  {
    id: 4,
    question: "Complete the analogy: Bird is to wing as fish is to...",
    options: [
      { value: "Water", label: "Water" },
      { value: "Fin", label: "Fin" },
      { value: "Swim", label: "Swim" },
      { value: "Scale", label: "Scale" },
    ],
    correctAnswer: "Fin",
  },
  {
    id: 5,
    question: "If all Bloops are Razzies and all Razzies are Lazzies, then...",
    options: [
      { value: "All Bloops are Lazzies", label: "All Bloops are Lazzies" },
      { value: "All Lazzies are Bloops", label: "All Lazzies are Bloops" },
      { value: "No Bloops are Lazzies", label: "No Bloops are Lazzies" },
      { value: "Cannot be determined", label: "Cannot be determined" },
    ],
    correctAnswer: "All Bloops are Lazzies",
  },
  {
    id: 6,
    question: "What comes next in this pattern? 1, 4, 9, 16, 25, ...",
    options: [
      { value: "30", label: "30" },
      { value: "36", label: "36" },
      { value: "49", label: "49" },
      { value: "64", label: "64" },
    ],
    correctAnswer: "36",
  },
  {
    id: 7,
    question: "If you rearrange the letters 'CIFAIPC', you would have the name of a(n):",
    options: [
      { value: "City", label: "City" },
      { value: "Animal", label: "Animal" },
      { value: "Ocean", label: "Ocean" },
      { value: "Country", label: "Country" },
    ],
    correctAnswer: "Ocean",
  },
  {
    id: 8,
    question: "Which figure completes the pattern?",
    imageUrl: "/placeholder.svg?height=200&width=400",
    options: [
      { value: "A", label: "Figure A" },
      { value: "B", label: "Figure B" },
      { value: "C", label: "Figure C" },
      { value: "D", label: "Figure D" },
    ],
    correctAnswer: "C",
  },
  {
    id: 9,
    question:
      "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
    options: [
      { value: "5", label: "5 minutes" },
      { value: "100", label: "100 minutes" },
      { value: "20", label: "20 minutes" },
      { value: "500", label: "500 minutes" },
    ],
    correctAnswer: "5",
  },
  {
    id: 10,
    question: "Which number should replace the question mark? 8, 27, 64, 125, ?",
    options: [
      { value: "216", label: "216" },
      { value: "256", label: "256" },
      { value: "343", label: "343" },
      { value: "512", label: "512" },
    ],
    correctAnswer: "216",
  },
  {
    id: 11,
    question: "A is to Z as 1 is to...",
    options: [
      { value: "26", label: "26" },
      { value: "25", label: "25" },
      { value: "24", label: "24" },
      { value: "27", label: "27" },
    ],
    correctAnswer: "26",
  },
  {
    id: 12,
    question: "Which word does NOT belong with the others?",
    options: [
      { value: "Rectangle", label: "Rectangle" },
      { value: "Triangle", label: "Triangle" },
      { value: "Oval", label: "Oval" },
      { value: "Circle", label: "Circle" },
    ],
    correctAnswer: "Oval",
  },
  {
    id: 13,
    question: "If you count from 1 to 100, how many 7's will you encounter?",
    options: [
      { value: "10", label: "10" },
      { value: "19", label: "19" },
      { value: "20", label: "20" },
      { value: "21", label: "21" },
    ],
    correctAnswer: "20",
  },
  {
    id: 14,
    question: "What is the next letter in this sequence? O, T, T, F, F, S, S, ?",
    options: [
      { value: "E", label: "E" },
      { value: "N", label: "N" },
      { value: "T", label: "T" },
      { value: "S", label: "S" },
    ],
    correctAnswer: "E",
  },
  {
    id: 15,
    question: "Which of the following can be made using the letters of the word 'ALGORITHM' exactly once?",
    options: [
      { value: "LOGARITHM", label: "LOGARITHM" },
      { value: "LOGRITHM", label: "LOGRITHM" },
      { value: "ARTHIMLOG", label: "ARTHIMLOG" },
      { value: "RITHMALOG", label: "RITHMALOG" },
    ],
    correctAnswer: "LOGARITHM",
  },
]

export default function IQQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isCompleted, setIsCompleted] = useState(false)
  const [timeUp, setTimeUp] = useState(false)

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleTimeUp = () => {
    setTimeUp(true)
    setIsCompleted(true)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          {!isCompleted ? (
            <Card className="mx-auto max-w-3xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>IQ Assessment</CardTitle>
                    <CardDescription>
                      Question {currentQuestion + 1} of {questions.length}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-4">
                    <Progress value={progress} className="w-[100px]" />
                    <QuizTimer duration={20} onTimeUp={handleTimeUp} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <h3 className="text-xl font-medium">{questions[currentQuestion].question}</h3>
                  {questions[currentQuestion].imageUrl && (
                    <div className="flex justify-center">
                      <img
                        src={questions[currentQuestion].imageUrl || "/placeholder.svg"}
                        alt="Question visual"
                        className="max-h-[200px] object-contain"
                      />
                    </div>
                  )}
                  <RadioGroup
                    value={answers[questions[currentQuestion].id] || ""}
                    onValueChange={handleAnswer}
                    className="space-y-3"
                  >
                    {questions[currentQuestion].options.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted"
                      >
                        <RadioGroupItem value={option.value} id={`option-${option.value}`} />
                        <Label htmlFor={`option-${option.value}`} className="flex-1 cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
                  Previous
                </Button>
                <Button onClick={handleNext} disabled={!answers[questions[currentQuestion].id]}>
                  {currentQuestion === questions.length - 1 ? "Complete" : "Next"}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="mx-auto max-w-3xl text-center">
              <CardHeader>
                <CardTitle>{timeUp ? "Time's Up!" : "Assessment Completed!"}</CardTitle>
                <CardDescription>
                  {timeUp
                    ? "Your time for the IQ assessment has ended."
                    : "Thank you for completing the IQ assessment."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {timeUp && Object.keys(answers).length < questions.length ? (
                  <Alert variant="warning" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Incomplete Assessment</AlertTitle>
                    <AlertDescription>
                      You answered {Object.keys(answers).length} out of {questions.length} questions.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <p className="mb-4">
                    Your responses have been recorded. Continue to the next assessment or view your results.
                  </p>
                )}
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                <Link href="/quizzes">
                  <Button variant="outline">Back to Quizzes</Button>
                </Link>
                <Link href="/dashboard/results">
                  <Button>View Results</Button>
                </Link>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
