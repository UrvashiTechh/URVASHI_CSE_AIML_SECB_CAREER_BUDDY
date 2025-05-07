"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
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
import { useAssessment } from "@/contexts/assessment-context"
import { useAuth } from "@/contexts/auth-context"

// Aptitude test questions
const questions = [
  {
    id: 1,
    question: "If a shirt costs $25 after a 20% discount, what was the original price?",
    options: [
      { value: "$30", label: "$30" },
      { value: "$31.25", label: "$31.25" },
      { value: "$27.50", label: "$27.50" },
      { value: "$35", label: "$35" },
    ],
    correctAnswer: "$31.25",
  },
  {
    id: 2,
    question: "A train travels at a speed of 60 km/h. How long will it take to cover a distance of 150 km?",
    options: [
      { value: "2 hours", label: "2 hours" },
      { value: "2.5 hours", label: "2.5 hours" },
      { value: "3 hours", label: "3 hours" },
      { value: "1.5 hours", label: "1.5 hours" },
    ],
    correctAnswer: "2.5 hours",
  },
  {
    id: 3,
    question: "If 8 workers can build a wall in 10 days, how many workers are needed to build the same wall in 5 days?",
    options: [
      { value: "16", label: "16 workers" },
      { value: "12", label: "12 workers" },
      { value: "20", label: "20 workers" },
      { value: "4", label: "4 workers" },
    ],
    correctAnswer: "16",
  },
  {
    id: 4,
    question: "What is the next number in the sequence: 3, 6, 11, 18, 27, ...?",
    options: [
      { value: "36", label: "36" },
      { value: "38", label: "38" },
      { value: "40", label: "40" },
      { value: "42", label: "42" },
    ],
    correctAnswer: "38",
  },
  {
    id: 5,
    question: "If a rectangle has a length of 12 cm and a width of 8 cm, what is its area?",
    options: [
      { value: "20 cm²", label: "20 cm²" },
      { value: "96 cm²", label: "96 cm²" },
      { value: "40 cm²", label: "40 cm²" },
      { value: "64 cm²", label: "64 cm²" },
    ],
    correctAnswer: "96 cm²",
  },
  {
    id: 6,
    question: "If a car travels 240 km on 20 liters of fuel, how far can it travel on 35 liters?",
    options: [
      { value: "350 km", label: "350 km" },
      { value: "400 km", label: "400 km" },
      { value: "420 km", label: "420 km" },
      { value: "450 km", label: "450 km" },
    ],
    correctAnswer: "420 km",
  },
  {
    id: 7,
    question:
      "If the ratio of boys to girls in a class is 3:5 and there are 24 boys, how many students are there in total?",
    options: [
      { value: "40", label: "40 students" },
      { value: "64", label: "64 students" },
      { value: "56", label: "56 students" },
      { value: "72", label: "72 students" },
    ],
    correctAnswer: "64",
  },
  {
    id: 8,
    question: "A shopkeeper sells an item at a 20% profit. If the selling price is $60, what was the cost price?",
    options: [
      { value: "$48", label: "$48" },
      { value: "$50", label: "$50" },
      { value: "$52", label: "$52" },
      { value: "$45", label: "$45" },
    ],
    correctAnswer: "$50",
  },
  {
    id: 9,
    question: "If 3x + 7 = 22, what is the value of x?",
    options: [
      { value: "5", label: "5" },
      { value: "7", label: "7" },
      { value: "4", label: "4" },
      { value: "6", label: "6" },
    ],
    correctAnswer: "5",
  },
  {
    id: 10,
    question:
      "A pipe can fill a tank in 20 minutes. Another pipe can fill the same tank in 30 minutes. How long will it take to fill the tank if both pipes are used together?",
    options: [
      { value: "10 minutes", label: "10 minutes" },
      { value: "12 minutes", label: "12 minutes" },
      { value: "15 minutes", label: "15 minutes" },
      { value: "25 minutes", label: "25 minutes" },
    ],
    correctAnswer: "12 minutes",
  },
  {
    id: 11,
    question: "If a square has a perimeter of 36 cm, what is its area?",
    options: [
      { value: "81 cm²", label: "81 cm²" },
      { value: "64 cm²", label: "64 cm²" },
      { value: "72 cm²", label: "72 cm²" },
      { value: "36 cm²", label: "36 cm²" },
    ],
    correctAnswer: "81 cm²",
  },
  {
    id: 12,
    question:
      "If a boat travels 20 km upstream in 2 hours and 20 km downstream in 1 hour, what is the speed of the current?",
    options: [
      { value: "5 km/h", label: "5 km/h" },
      { value: "10 km/h", label: "10 km/h" },
      { value: "3.33 km/h", label: "3.33 km/h" },
      { value: "6.67 km/h", label: "6.67 km/h" },
    ],
    correctAnswer: "3.33 km/h",
  },
  {
    id: 13,
    question: "What is the average of the first 50 natural numbers?",
    options: [
      { value: "25", label: "25" },
      { value: "25.5", label: "25.5" },
      { value: "24.5", label: "24.5" },
      { value: "26", label: "26" },
    ],
    correctAnswer: "25.5",
  },
  {
    id: 14,
    question: "If the probability of an event occurring is 0.4, what is the probability of it not occurring?",
    options: [
      { value: "0.4", label: "0.4" },
      { value: "0.6", label: "0.6" },
      { value: "0.5", label: "0.5" },
      { value: "0.8", label: "0.8" },
    ],
    correctAnswer: "0.6",
  },
  {
    id: 15,
    question: "If a clock shows 3:30, what is the angle between the hour and minute hands?",
    options: [
      { value: "75 degrees", label: "75 degrees" },
      { value: "80 degrees", label: "80 degrees" },
      { value: "85 degrees", label: "85 degrees" },
      { value: "90 degrees", label: "90 degrees" },
    ],
    correctAnswer: "75 degrees",
  },
]

export default function AptitudeQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isCompleted, setIsCompleted] = useState(false)
  const [timeUp, setTimeUp] = useState(false)
  const { completeAssessment, getNextAssessment } = useAssessment()
  const { user } = useAuth()
  const router = useRouter()

  const nextAssessment = getNextAssessment()

  useEffect(() => {
    // If user is not logged in, redirect to sign in
    if (!user) {
      router.push("/sign-in?redirect=/quizzes/aptitude")
    }
  }, [user, router])

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      handleComplete()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleTimeUp = () => {
    setTimeUp(true)
    handleComplete()
  }

  const handleComplete = () => {
    setIsCompleted(true)
    completeAssessment("aptitude", answers)
  }

  const handleContinue = () => {
    if (nextAssessment) {
      router.push(`/quizzes/${nextAssessment}`)
    } else {
      router.push("/dashboard/results")
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (!user) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 py-12">
          <div className="container px-4 md:px-6">
            <Card className="mx-auto max-w-md text-center">
              <CardHeader>
                <CardTitle>Sign In Required</CardTitle>
                <CardDescription>Please sign in to take the aptitude assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <p>You need to be signed in to track your assessment progress and view your results.</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/sign-in?redirect=/quizzes/aptitude">
                  <Button>Sign In</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

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
                    <CardTitle>Aptitude Assessment</CardTitle>
                    <CardDescription>
                      Question {currentQuestion + 1} of {questions.length}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-4">
                    <Progress value={progress} className="w-[100px]" />
                    <QuizTimer duration={25} onTimeUp={handleTimeUp} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <h3 className="text-xl font-medium">{questions[currentQuestion].question}</h3>
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
                    ? "Your time for the aptitude assessment has ended."
                    : "Thank you for completing the aptitude assessment."}
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

                {nextAssessment && (
                  <Alert className="mb-4 bg-primary/10 border-primary/20">
                    <AlertTitle>Next Assessment Available</AlertTitle>
                    <AlertDescription>
                      Continue your career discovery journey by taking the {nextAssessment.replace("-", " ")} assessment
                      next.
                    </AlertDescription>
                  </Alert>
                )}

                {!nextAssessment && (
                  <Alert className="mb-4 bg-green-50 border-green-200">
                    <AlertTitle>All Assessments Completed!</AlertTitle>
                    <AlertDescription>
                      You've completed all assessments. View your comprehensive results and career recommendations.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                <Link href="/quizzes">
                  <Button variant="outline">Back to Quizzes</Button>
                </Link>
                {nextAssessment ? (
                  <Button onClick={handleContinue}>Continue to Next Assessment</Button>
                ) : (
                  <Button onClick={handleContinue}>View Complete Analysis</Button>
                )}
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
