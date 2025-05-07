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

// General Knowledge questions
const questions = [
  {
    id: 1,
    question: "Which planet is known as the Red Planet?",
    options: [
      { value: "Venus", label: "Venus" },
      { value: "Mars", label: "Mars" },
      { value: "Jupiter", label: "Jupiter" },
      { value: "Saturn", label: "Saturn" },
    ],
    correctAnswer: "Mars",
  },
  {
    id: 2,
    question: "Who painted the Mona Lisa?",
    options: [
      { value: "Vincent van Gogh", label: "Vincent van Gogh" },
      { value: "Pablo Picasso", label: "Pablo Picasso" },
      { value: "Leonardo da Vinci", label: "Leonardo da Vinci" },
      { value: "Michelangelo", label: "Michelangelo" },
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    id: 3,
    question: "What is the capital of Japan?",
    options: [
      { value: "Beijing", label: "Beijing" },
      { value: "Seoul", label: "Seoul" },
      { value: "Tokyo", label: "Tokyo" },
      { value: "Bangkok", label: "Bangkok" },
    ],
    correctAnswer: "Tokyo",
  },
  {
    id: 4,
    question: "Which element has the chemical symbol 'O'?",
    options: [
      { value: "Gold", label: "Gold" },
      { value: "Oxygen", label: "Oxygen" },
      { value: "Osmium", label: "Osmium" },
      { value: "Oganesson", label: "Oganesson" },
    ],
    correctAnswer: "Oxygen",
  },
  {
    id: 5,
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      { value: "Charles Dickens", label: "Charles Dickens" },
      { value: "William Shakespeare", label: "William Shakespeare" },
      { value: "Jane Austen", label: "Jane Austen" },
      { value: "Mark Twain", label: "Mark Twain" },
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    id: 6,
    question: "What is the largest ocean on Earth?",
    options: [
      { value: "Atlantic Ocean", label: "Atlantic Ocean" },
      { value: "Indian Ocean", label: "Indian Ocean" },
      { value: "Arctic Ocean", label: "Arctic Ocean" },
      { value: "Pacific Ocean", label: "Pacific Ocean" },
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    id: 7,
    question: "Which country is known as the Land of the Rising Sun?",
    options: [
      { value: "China", label: "China" },
      { value: "South Korea", label: "South Korea" },
      { value: "Japan", label: "Japan" },
      { value: "Thailand", label: "Thailand" },
    ],
    correctAnswer: "Japan",
  },
  {
    id: 8,
    question: "What is the tallest mountain in the world?",
    options: [
      { value: "K2", label: "K2" },
      { value: "Mount Everest", label: "Mount Everest" },
      { value: "Kangchenjunga", label: "Kangchenjunga" },
      { value: "Makalu", label: "Makalu" },
    ],
    correctAnswer: "Mount Everest",
  },
  {
    id: 9,
    question: "Who is known as the father of modern physics?",
    options: [
      { value: "Isaac Newton", label: "Isaac Newton" },
      { value: "Albert Einstein", label: "Albert Einstein" },
      { value: "Galileo Galilei", label: "Galileo Galilei" },
      { value: "Niels Bohr", label: "Niels Bohr" },
    ],
    correctAnswer: "Albert Einstein",
  },
  {
    id: 10,
    question: "Which of these is not a primary color?",
    options: [
      { value: "Red", label: "Red" },
      { value: "Blue", label: "Blue" },
      { value: "Green", label: "Green" },
      { value: "Yellow", label: "Yellow" },
    ],
    correctAnswer: "Green",
  },
  {
    id: 11,
    question: "What is the currency of India?",
    options: [
      { value: "Rupee", label: "Rupee" },
      { value: "Yen", label: "Yen" },
      { value: "Dollar", label: "Dollar" },
      { value: "Euro", label: "Euro" },
    ],
    correctAnswer: "Rupee",
  },
  {
    id: 12,
    question: "Which of these animals is a mammal?",
    options: [
      { value: "Crocodile", label: "Crocodile" },
      { value: "Snake", label: "Snake" },
      { value: "Dolphin", label: "Dolphin" },
      { value: "Lizard", label: "Lizard" },
    ],
    correctAnswer: "Dolphin",
  },
  {
    id: 13,
    question: "Who invented the telephone?",
    options: [
      { value: "Thomas Edison", label: "Thomas Edison" },
      { value: "Alexander Graham Bell", label: "Alexander Graham Bell" },
      { value: "Nikola Tesla", label: "Nikola Tesla" },
      { value: "Guglielmo Marconi", label: "Guglielmo Marconi" },
    ],
    correctAnswer: "Alexander Graham Bell",
  },
  {
    id: 14,
    question: "What is the largest organ in the human body?",
    options: [
      { value: "Heart", label: "Heart" },
      { value: "Liver", label: "Liver" },
      { value: "Brain", label: "Brain" },
      { value: "Skin", label: "Skin" },
    ],
    correctAnswer: "Skin",
  },
  {
    id: 15,
    question: "Which planet is closest to the Sun?",
    options: [
      { value: "Venus", label: "Venus" },
      { value: "Earth", label: "Earth" },
      { value: "Mercury", label: "Mercury" },
      { value: "Mars", label: "Mars" },
    ],
    correctAnswer: "Mercury",
  },
]

export default function GeneralKnowledgeQuizPage() {
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
                    <CardTitle>General Knowledge Assessment</CardTitle>
                    <CardDescription>
                      Question {currentQuestion + 1} of {questions.length}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-4">
                    <Progress value={progress} className="w-[100px]" />
                    <QuizTimer duration={15} onTimeUp={handleTimeUp} />
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
                    ? "Your time for the general knowledge assessment has ended."
                    : "Thank you for completing the general knowledge assessment."}
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
