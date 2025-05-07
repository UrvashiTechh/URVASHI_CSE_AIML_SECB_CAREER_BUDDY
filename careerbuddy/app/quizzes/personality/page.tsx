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

// Expanded personality questions
const questions = [
  {
    id: 1,
    question: "I enjoy being the center of attention at social gatherings.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  {
    id: 2,
    question: "I prefer working on tasks that require careful attention to detail.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  {
    id: 3,
    question: "I enjoy solving complex problems and puzzles.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  {
    id: 4,
    question: "I prefer working in a team rather than independently.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  {
    id: 5,
    question: "I enjoy creative activities like art, music, or writing.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  {
    id: 6,
    question: "I find it easy to adapt to new situations and environments.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  {
    id: 7,
    question: "I prefer having a structured routine rather than spontaneity.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  {
    id: 8,
    question: "I find it easy to empathize with others' feelings and emotions.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  {
    id: 9,
    question: "I prefer making decisions based on logic rather than emotions.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  {
    id: 10,
    question: "I enjoy taking risks and trying new experiences.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  {
    id: 11,
    question: "I prefer having a few close friends rather than a large social circle.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  {
    id: 12,
    question: "I enjoy leading and directing others in group activities.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  {
    id: 13,
    question: "I prefer working with concrete facts rather than abstract theories.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  {
    id: 14,
    question: "I find it easy to stay organized and keep track of details.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  {
    id: 15,
    question: "I enjoy helping others with their personal problems.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  {
    id: 16,
    question: "I prefer working in a competitive environment rather than a collaborative one.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  {
    id: 17,
    question: "I enjoy thinking about abstract concepts and philosophical ideas.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  {
    id: 18,
    question: "I find it easy to stick to deadlines and complete tasks on time.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  {
    id: 19,
    question: "I prefer stability and consistency rather than change and variety.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  {
    id: 20,
    question: "I enjoy expressing my opinions and ideas to others.",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
]

export default function PersonalityQuizPage() {
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
      router.push("/sign-in?redirect=/quizzes/personality")
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
    completeAssessment("personality", answers)
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
                <CardDescription>Please sign in to take the personality assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <p>You need to be signed in to track your assessment progress and view your results.</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/sign-in?redirect=/quizzes/personality">
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
                    <CardTitle>Personality Assessment</CardTitle>
                    <CardDescription>
                      Question {currentQuestion + 1} of {questions.length}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-4">
                    <Progress value={progress} className="w-[100px]" />
                    <QuizTimer duration={30} onTimeUp={handleTimeUp} />
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
                    ? "Your time for the personality assessment has ended."
                    : "Thank you for completing the personality assessment."}
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
