"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Brain, Compass, Lightbulb, BookOpen, AlertTriangle } from "lucide-react"
import { useAssessment } from "@/contexts/assessment-context"
import { useAuth } from "@/contexts/auth-context"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Career matching algorithm (simplified)
function calculateCareerMatches(assessmentResults: any) {
  // This is a simplified algorithm - in a real app, this would be more sophisticated
  const careers = [
    {
      title: "Software Developer",
      match: 0,
      description: "Design, develop, and maintain software applications and systems.",
      traits: ["Analytical thinking", "Problem-solving", "Attention to detail", "Logical reasoning"],
      skills: ["Programming", "Debugging", "System design", "Algorithm development"],
      outlook: {
        growth: "22% over the next decade",
        salary: "₹6,00,000 to ₹25,00,000 depending on experience",
        demand: "High demand across industries",
        countries: ["USA", "Canada", "Germany", "Australia", "India"],
      },
    },
    {
      title: "Data Scientist",
      match: 0,
      description: "Analyze and interpret complex data to help organizations make better decisions.",
      traits: ["Analytical thinking", "Pattern recognition", "Curiosity", "Methodical approach"],
      skills: ["Statistical analysis", "Machine learning", "Data visualization", "Programming"],
      outlook: {
        growth: "28% over the next decade",
        salary: "₹8,00,000 to ₹30,00,000 depending on experience",
        demand: "Very high demand in tech, finance, and healthcare",
        countries: ["USA", "UK", "Singapore", "Germany", "India"],
      },
    },
    {
      title: "UX Designer",
      match: 0,
      description: "Design user-friendly interfaces and experiences for digital products.",
      traits: ["Creativity", "Empathy", "Attention to detail", "Problem-solving"],
      skills: ["User research", "Wireframing", "Prototyping", "Visual design"],
      outlook: {
        growth: "15% over the next decade",
        salary: "₹5,00,000 to ₹20,00,000 depending on experience",
        demand: "Growing demand in tech and digital industries",
        countries: ["USA", "UK", "Canada", "Australia", "India"],
      },
    },
    {
      title: "Product Manager",
      match: 0,
      description: "Lead the development of products from conception to launch.",
      traits: ["Leadership", "Strategic thinking", "Communication", "Problem-solving"],
      skills: ["Market research", "Product strategy", "Team coordination", "Business analysis"],
      outlook: {
        growth: "10% over the next decade",
        salary: "₹10,00,000 to ₹35,00,000 depending on experience",
        demand: "High demand in tech and consumer products",
        countries: ["USA", "UK", "Germany", "Singapore", "India"],
      },
    },
    {
      title: "Digital Marketer",
      match: 0,
      description: "Promote products and services using digital channels.",
      traits: ["Creativity", "Analytical thinking", "Communication", "Adaptability"],
      skills: ["Social media marketing", "SEO", "Content creation", "Data analysis"],
      outlook: {
        growth: "10% over the next decade",
        salary: "₹4,00,000 to ₹18,00,000 depending on experience",
        demand: "High demand across all industries",
        countries: ["USA", "UK", "Australia", "Canada", "India"],
      },
    },
    {
      title: "Financial Analyst",
      match: 0,
      description: "Analyze financial data and provide insights for business decisions.",
      traits: ["Analytical thinking", "Attention to detail", "Numerical aptitude", "Methodical approach"],
      skills: ["Financial modeling", "Data analysis", "Risk assessment", "Reporting"],
      outlook: {
        growth: "6% over the next decade",
        salary: "₹5,00,000 to ₹20,00,000 depending on experience",
        demand: "Steady demand in finance and corporate sectors",
        countries: ["USA", "UK", "Singapore", "Hong Kong", "India"],
      },
    },
    {
      title: "Healthcare Professional",
      match: 0,
      description: "Provide medical care and services to patients.",
      traits: ["Empathy", "Attention to detail", "Communication", "Problem-solving"],
      skills: ["Patient care", "Medical knowledge", "Diagnostic skills", "Record keeping"],
      outlook: {
        growth: "15% over the next decade",
        salary: "₹4,00,000 to ₹40,00,000 depending on specialization",
        demand: "Very high demand globally",
        countries: ["USA", "UK", "Canada", "Australia", "Germany"],
      },
    },
  ]

  // Calculate personality match
  if (Object.keys(assessmentResults.personality).length > 0) {
    const personalityScores = Object.values(assessmentResults.personality).map(Number)
    const avgPersonalityScore = personalityScores.reduce((a, b) => a + b, 0) / personalityScores.length

    // Simplified matching logic - in a real app, this would be more sophisticated
    careers.forEach((career, index) => {
      // Software Developer
      if (index === 0) {
        careers[index].match += avgPersonalityScore > 3 ? 25 : 15
      }
      // Data Scientist
      else if (index === 1) {
        careers[index].match += avgPersonalityScore > 3.5 ? 20 : 10
      }
      // UX Designer
      else if (index === 2) {
        careers[index].match += avgPersonalityScore > 4 ? 30 : 15
      }
      // Product Manager
      else if (index === 3) {
        careers[index].match += avgPersonalityScore > 3.8 ? 25 : 12
      }
      // Digital Marketer
      else if (index === 4) {
        careers[index].match += avgPersonalityScore > 4.2 ? 28 : 14
      }
      // Financial Analyst
      else if (index === 5) {
        careers[index].match += avgPersonalityScore > 3.2 ? 22 : 11
      }
      // Healthcare Professional
      else if (index === 6) {
        careers[index].match += avgPersonalityScore > 4 ? 26 : 13
      }
    })
  }

  // Calculate aptitude match
  if (Object.keys(assessmentResults.aptitude).length > 0) {
    const correctAnswers = {
      1: "$31.25",
      2: "2.5 hours",
      3: "16",
      4: "38",
      5: "96 cm²",
      6: "420 km",
      7: "64",
      8: "$50",
      9: "5",
      10: "12 minutes",
      11: "81 cm²",
      12: "3.33 km/h",
      13: "25.5",
      14: "0.6",
      15: "75 degrees",
    }

    const aptitudeScore = Object.entries(assessmentResults.aptitude).reduce((score, [id, answer]) => {
      return score + (answer === correctAnswers[id as unknown as number] ? 1 : 0)
    }, 0)

    const aptitudePercentage = (aptitudeScore / Object.keys(correctAnswers).length) * 100

    // Simplified matching logic
    careers.forEach((career, index) => {
      // Software Developer
      if (index === 0) {
        careers[index].match += aptitudePercentage > 70 ? 30 : 15
      }
      // Data Scientist
      else if (index === 1) {
        careers[index].match += aptitudePercentage > 80 ? 35 : 18
      }
      // UX Designer
      else if (index === 2) {
        careers[index].match += aptitudePercentage > 60 ? 20 : 10
      }
      // Product Manager
      else if (index === 3) {
        careers[index].match += aptitudePercentage > 65 ? 25 : 12
      }
      // Digital Marketer
      else if (index === 4) {
        careers[index].match += aptitudePercentage > 60 ? 18 : 9
      }
      // Financial Analyst
      else if (index === 5) {
        careers[index].match += aptitudePercentage > 75 ? 32 : 16
      }
      // Healthcare Professional
      else if (index === 6) {
        careers[index].match += aptitudePercentage > 70 ? 24 : 12
      }
    })
  }

  // Calculate IQ match
  if (Object.keys(assessmentResults.iq).length > 0) {
    const correctAnswers = {
      1: "32",
      2: "97.5",
      3: "Potato",
      4: "Fin",
      5: "All Bloops are Lazzies",
      6: "36",
      7: "Ocean",
      8: "C",
      9: "5",
      10: "216",
      11: "26",
      12: "Oval",
      13: "20",
      14: "E",
      15: "LOGARITHM",
    }

    const iqScore = Object.entries(assessmentResults.iq).reduce((score, [id, answer]) => {
      return score + (answer === correctAnswers[id as unknown as number] ? 1 : 0)
    }, 0)

    const iqPercentage = (iqScore / Object.keys(correctAnswers).length) * 100

    // Simplified matching logic
    careers.forEach((career, index) => {
      // Software Developer
      if (index === 0) {
        careers[index].match += iqPercentage > 75 ? 25 : 12
      }
      // Data Scientist
      else if (index === 1) {
        careers[index].match += iqPercentage > 80 ? 30 : 15
      }
      // UX Designer
      else if (index === 2) {
        careers[index].match += iqPercentage > 70 ? 18 : 9
      }
      // Product Manager
      else if (index === 3) {
        careers[index].match += iqPercentage > 75 ? 22 : 11
      }
      // Digital Marketer
      else if (index === 4) {
        careers[index].match += iqPercentage > 65 ? 14 : 7
      }
      // Financial Analyst
      else if (index === 5) {
        careers[index].match += iqPercentage > 75 ? 26 : 13
      }
      // Healthcare Professional
      else if (index === 6) {
        careers[index].match += iqPercentage > 70 ? 20 : 10
      }
    })
  }

  // Calculate general knowledge match
  if (Object.keys(assessmentResults["general-knowledge"]).length > 0) {
    const correctAnswers = {
      1: "Mars",
      2: "Leonardo da Vinci",
      3: "Tokyo",
      4: "Oxygen",
      5: "William Shakespeare",
      6: "Pacific Ocean",
      7: "Japan",
      8: "Mount Everest",
      9: "Albert Einstein",
      10: "Green",
      11: "Rupee",
      12: "Dolphin",
      13: "Alexander Graham Bell",
      14: "Skin",
      15: "Mercury",
    }

    const gkScore = Object.entries(assessmentResults["general-knowledge"]).reduce((score, [id, answer]) => {
      return score + (answer === correctAnswers[id as unknown as number] ? 1 : 0)
    }, 0)

    const gkPercentage = (gkScore / Object.keys(correctAnswers).length) * 100

    // Simplified matching logic
    careers.forEach((career, index) => {
      // Software Developer
      if (index === 0) {
        careers[index].match += gkPercentage > 70 ? 10 : 5
      }
      // Data Scientist
      else if (index === 1) {
        careers[index].match += gkPercentage > 75 ? 10 : 5
      }
      // UX Designer
      else if (index === 2) {
        careers[index].match += gkPercentage > 80 ? 15 : 8
      }
      // Product Manager
      else if (index === 3) {
        careers[index].match += gkPercentage > 80 ? 18 : 9
      }
      // Digital Marketer
      else if (index === 4) {
        careers[index].match += gkPercentage > 85 ? 20 : 10
      }
      // Financial Analyst
      else if (index === 5) {
        careers[index].match += gkPercentage > 75 ? 15 : 8
      }
      // Healthcare Professional
      else if (index === 6) {
        careers[index].match += gkPercentage > 80 ? 20 : 10
      }
    })
  }

  // Sort careers by match percentage
  return careers
    .sort((a, b) => b.match - a.match)
    .map((career) => ({
      ...career,
      match: Math.min(Math.round(career.match), 100), // Cap at 100%
    }))
}

// Calculate personality traits based on answers
function calculatePersonalityTraits(personalityAnswers: Record<number, string>) {
  if (Object.keys(personalityAnswers).length === 0) return null

  const traits = {
    extraversion: 0,
    conscientiousness: 0,
    openness: 0,
    agreeableness: 0,
    neuroticism: 0,
  }

  // Questions 1, 4, 11, 12, 20 measure extraversion
  const extraversionQuestions = [1, 4, 11, 12, 20]
  extraversionQuestions.forEach((q) => {
    if (personalityAnswers[q]) {
      traits.extraversion += Number.parseInt(personalityAnswers[q])
    }
  })
  traits.extraversion = Math.round((traits.extraversion / (extraversionQuestions.length * 5)) * 100)

  // Questions 2, 7, 14, 18, 19 measure conscientiousness
  const conscientiousnessQuestions = [2, 7, 14, 18, 19]
  conscientiousnessQuestions.forEach((q) => {
    if (personalityAnswers[q]) {
      traits.conscientiousness += Number.parseInt(personalityAnswers[q])
    }
  })
  traits.conscientiousness = Math.round((traits.conscientiousness / (conscientiousnessQuestions.length * 5)) * 100)

  // Questions 3, 5, 10, 13, 17 measure openness
  const opennessQuestions = [3, 5, 10, 13, 17]
  opennessQuestions.forEach((q) => {
    if (personalityAnswers[q]) {
      traits.openness += Number.parseInt(personalityAnswers[q])
    }
  })
  traits.openness = Math.round((traits.openness / (opennessQuestions.length * 5)) * 100)

  // Questions 8, 9, 15, 16 measure agreeableness
  const agreeablenessQuestions = [8, 9, 15, 16]
  agreeablenessQuestions.forEach((q) => {
    if (personalityAnswers[q]) {
      // Question 9 and 16 are reverse scored
      if (q === 9 || q === 16) {
        traits.agreeableness += 6 - Number.parseInt(personalityAnswers[q])
      } else {
        traits.agreeableness += Number.parseInt(personalityAnswers[q])
      }
    }
  })
  traits.agreeableness = Math.round((traits.agreeableness / (agreeablenessQuestions.length * 5)) * 100)

  // Questions 6 measures neuroticism (simplified)
  if (personalityAnswers[6]) {
    traits.neuroticism = Math.round((Number.parseInt(personalityAnswers[6]) / 5) * 100)
  }

  return traits
}

// Calculate aptitude scores
function calculateAptitudeScores(aptitudeAnswers: Record<number, string>) {
  if (Object.keys(aptitudeAnswers).length === 0) return null

  const correctAnswers = {
    1: "$31.25",
    2: "2.5 hours",
    3: "16",
    4: "38",
    5: "96 cm²",
    6: "420 km",
    7: "64",
    8: "$50",
    9: "5",
    10: "12 minutes",
    11: "81 cm²",
    12: "3.33 km/h",
    13: "25.5",
    14: "0.6",
    15: "75 degrees",
  }

  const categories = {
    numerical: [1, 5, 6, 8, 11],
    logical: [3, 4, 9, 13],
    spatial: [15],
    verbal: [2, 7, 10, 12, 14],
  }

  const scores = {
    numerical: 0,
    logical: 0,
    spatial: 0,
    verbal: 0,
    overall: 0,
  }

  // Calculate scores for each category
  Object.entries(categories).forEach(([category, questions]) => {
    let correct = 0
    questions.forEach((q) => {
      if (aptitudeAnswers[q] === correctAnswers[q as unknown as number]) {
        correct++
      }
    })
    scores[category as keyof typeof scores] = Math.round((correct / questions.length) * 100)
  })

  // Calculate overall score
  const totalCorrect = Object.entries(aptitudeAnswers).reduce((count, [id, answer]) => {
    return count + (answer === correctAnswers[id as unknown as number] ? 1 : 0)
  }, 0)
  scores.overall = Math.round((totalCorrect / Object.keys(correctAnswers).length) * 100)

  return scores
}

// Calculate IQ score
function calculateIQScore(iqAnswers: Record<number, string>) {
  if (Object.keys(iqAnswers).length === 0) return null

  const correctAnswers = {
    1: "32",
    2: "97.5",
    3: "Potato",
    4: "Fin",
    5: "All Bloops are Lazzies",
    6: "36",
    7: "Ocean",
    8: "C",
    9: "5",
    10: "216",
    11: "26",
    12: "Oval",
    13: "20",
    14: "E",
    15: "LOGARITHM",
  }

  const totalCorrect = Object.entries(iqAnswers).reduce((count, [id, answer]) => {
    return count + (answer === correctAnswers[id as unknown as number] ? 1 : 0)
  }, 0)

  // Simple IQ calculation (for demonstration purposes)
  const baseIQ = 85
  const iqPerQuestion = 5
  const estimatedIQ = baseIQ + totalCorrect * iqPerQuestion

  return {
    score: totalCorrect,
    total: Object.keys(correctAnswers).length,
    percentage: Math.round((totalCorrect / Object.keys(correctAnswers).length) * 100),
    estimatedIQ: Math.min(estimatedIQ, 145), // Cap at 145
  }
}

// Calculate general knowledge score
function calculateGKScore(gkAnswers: Record<number, string>) {
  if (Object.keys(gkAnswers).length === 0) return null

  const correctAnswers = {
    1: "Mars",
    2: "Leonardo da Vinci",
    3: "Tokyo",
    4: "Oxygen",
    5: "William Shakespeare",
    6: "Pacific Ocean",
    7: "Japan",
    8: "Mount Everest",
    9: "Albert Einstein",
    10: "Green",
    11: "Rupee",
    12: "Dolphin",
    13: "Alexander Graham Bell",
    14: "Skin",
    15: "Mercury",
  }

  const categories = {
    science: [1, 4, 9, 12, 14, 15],
    arts: [2, 5],
    geography: [3, 6, 7, 8],
    general: [10, 11, 13],
  }

  const scores = {
    science: 0,
    arts: 0,
    geography: 0,
    general: 0,
    overall: 0,
  }

  // Calculate scores for each category
  Object.entries(categories).forEach(([category, questions]) => {
    let correct = 0
    questions.forEach((q) => {
      if (gkAnswers[q] === correctAnswers[q as unknown as number]) {
        correct++
      }
    })
    scores[category as keyof typeof scores] = Math.round((correct / questions.length) * 100)
  })

  // Calculate overall score
  const totalCorrect = Object.entries(gkAnswers).reduce((count, [id, answer]) => {
    return count + (answer === correctAnswers[id as unknown as number] ? 1 : 0)
  }, 0)
  scores.overall = Math.round((totalCorrect / Object.keys(correctAnswers).length) * 100)

  return scores
}

export default function ResultsPage() {
  const { assessmentStatus, assessmentResults, getNextAssessment } = useAssessment()
  const { user } = useAuth()
  const router = useRouter()
  const nextAssessment = getNextAssessment()

  useEffect(() => {
    // If user is not logged in, redirect to sign in
    if (!user) {
      router.push("/sign-in?redirect=/dashboard/results")
    }
  }, [user, router])

  // Calculate results
  const careerMatches = calculateCareerMatches(assessmentResults)
  const personalityTraits = calculatePersonalityTraits(assessmentResults.personality)
  const aptitudeScores = calculateAptitudeScores(assessmentResults.aptitude)
  const iqScore = calculateIQScore(assessmentResults.iq)
  const gkScore = calculateGKScore(assessmentResults["general-knowledge"])

  // Calculate completion status
  const completedCount = Object.values(assessmentStatus).filter(Boolean).length
  const totalAssessments = Object.keys(assessmentStatus).length
  const allCompleted = completedCount === totalAssessments

  if (!user) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 py-12">
          <div className="container px-4 md:px-6">
            <Card className="mx-auto max-w-md text-center">
              <CardHeader>
                <CardTitle>Sign In Required</CardTitle>
                <CardDescription>Please sign in to view your assessment results</CardDescription>
              </CardHeader>
              <CardContent>
                <p>You need to be signed in to view your assessment results and career recommendations.</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/sign-in?redirect=/dashboard/results">
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
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Assessment Results</h1>
              <p className="text-muted-foreground">
                View your comprehensive assessment results and career recommendations
              </p>
            </div>
            <div className="flex gap-2">
              <Link href="/quizzes">
                <Button variant="outline">Retake Assessments</Button>
              </Link>
              <Link href="/dashboard">
                <Button>Back to Dashboard</Button>
              </Link>
            </div>
          </div>

          {!allCompleted && (
            <Alert className="mb-6">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Incomplete Assessments</AlertTitle>
              <AlertDescription>
                You have completed {completedCount} out of {totalAssessments} assessments. For the most accurate career
                recommendations, please complete all assessments.
                {nextAssessment && (
                  <Button
                    variant="link"
                    className="p-0 h-auto font-normal"
                    onClick={() => router.push(`/quizzes/${nextAssessment}`)}
                  >
                    Continue with {nextAssessment.replace("-", " ")} assessment
                  </Button>
                )}
              </AlertDescription>
            </Alert>
          )}

          <Tabs defaultValue="summary">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="summary">Summary</TabsTrigger>
              <TabsTrigger value="personality" disabled={!assessmentStatus.personality}>
                Personality
              </TabsTrigger>
              <TabsTrigger value="aptitude" disabled={!assessmentStatus.aptitude}>
                Aptitude
              </TabsTrigger>
              <TabsTrigger value="iq" disabled={!assessmentStatus.iq}>
                IQ
              </TabsTrigger>
              <TabsTrigger value="careers">Career Matches</TabsTrigger>
            </TabsList>
            <TabsContent value="summary" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Assessment Overview</CardTitle>
                    <CardDescription>Your progress and completion status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          <Brain className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">Personality Assessment</div>
                            <div
                              className={`text-sm ${assessmentStatus.personality ? "text-green-600" : "text-amber-600"} font-medium`}
                            >
                              {assessmentStatus.personality ? "Completed" : "Not Started"}
                            </div>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted mt-2">
                            <div
                              className="h-full rounded-full bg-primary"
                              style={{ width: assessmentStatus.personality ? "100%" : "0%" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          <Compass className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">Aptitude Test</div>
                            <div
                              className={`text-sm ${assessmentStatus.aptitude ? "text-green-600" : "text-amber-600"} font-medium`}
                            >
                              {assessmentStatus.aptitude ? "Completed" : "Not Started"}
                            </div>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted mt-2">
                            <div
                              className="h-full rounded-full bg-primary"
                              style={{ width: assessmentStatus.aptitude ? "100%" : "0%" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          <Lightbulb className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">IQ Assessment</div>
                            <div
                              className={`text-sm ${assessmentStatus.iq ? "text-green-600" : "text-amber-600"} font-medium`}
                            >
                              {assessmentStatus.iq ? "Completed" : "Not Started"}
                            </div>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted mt-2">
                            <div
                              className="h-full rounded-full bg-primary"
                              style={{ width: assessmentStatus.iq ? "100%" : "0%" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          <BookOpen className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">General Knowledge</div>
                            <div
                              className={`text-sm ${assessmentStatus["general-knowledge"] ? "text-green-600" : "text-amber-600"} font-medium`}
                            >
                              {assessmentStatus["general-knowledge"] ? "Completed" : "Not Started"}
                            </div>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted mt-2">
                            <div
                              className="h-full rounded-full bg-primary"
                              style={{ width: assessmentStatus["general-knowledge"] ? "100%" : "0%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Career Compatibility</CardTitle>
                    <CardDescription>Your top career matches based on assessments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {careerMatches.slice(0, 5).map((career, index) => (
                        <div className="space-y-2" key={index}>
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">{career.title}</div>
                            <div className="text-sm text-muted-foreground">{career.match}% Match</div>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-full rounded-full bg-primary" style={{ width: `${career.match}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="personality" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personality Assessment Results</CardTitle>
                  <CardDescription>Your personality traits and characteristics</CardDescription>
                </CardHeader>
                <CardContent>
                  {personalityTraits ? (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium">
                          Personality Type:{" "}
                          {personalityTraits.extraversion > 70
                            ? "Extraverted "
                            : personalityTraits.extraversion < 30
                              ? "Introverted "
                              : "Balanced "}
                          {personalityTraits.conscientiousness > 70
                            ? "Organized "
                            : personalityTraits.conscientiousness < 30
                              ? "Flexible "
                              : "Adaptable "}
                          {personalityTraits.openness > 70
                            ? "Creative Thinker"
                            : personalityTraits.openness < 30
                              ? "Practical Thinker"
                              : "Balanced Thinker"}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          Your personality assessment reveals that you are{" "}
                          {personalityTraits.extraversion > 70
                            ? "highly social and outgoing"
                            : personalityTraits.extraversion < 30
                              ? "reserved and thoughtful"
                              : "balanced between social interaction and solitary activities"}
                          . You approach tasks in a{" "}
                          {personalityTraits.conscientiousness > 70
                            ? "highly organized and methodical way"
                            : personalityTraits.conscientiousness < 30
                              ? "flexible and spontaneous manner"
                              : "balanced way, adapting your approach as needed"}
                          . You tend to be{" "}
                          {personalityTraits.openness > 70
                            ? "very creative and open to new experiences"
                            : personalityTraits.openness < 30
                              ? "practical and focused on concrete facts"
                              : "balanced between creative thinking and practical considerations"}
                          .
                        </p>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h4 className="text-md font-medium">Key Traits</h4>
                          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                              <span>
                                {personalityTraits.extraversion > 50
                                  ? "Outgoing and sociable"
                                  : "Reserved and thoughtful"}
                              </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                              <span>
                                {personalityTraits.conscientiousness > 50
                                  ? "Organized and detail-oriented"
                                  : "Flexible and adaptable"}
                              </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                              <span>
                                {personalityTraits.openness > 50
                                  ? "Creative and innovative"
                                  : "Practical and conventional"}
                              </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                              <span>
                                {personalityTraits.agreeableness > 50
                                  ? "Cooperative and empathetic"
                                  : "Independent and analytical"}
                              </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                              <span>
                                {personalityTraits.neuroticism > 50 ? "Sensitive to stress" : "Emotionally stable"}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-md font-medium">Work Preferences</h4>
                          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                              <span>
                                {personalityTraits.extraversion > 50
                                  ? "Collaborative environments"
                                  : "Independent work settings"}
                              </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                              <span>
                                {personalityTraits.conscientiousness > 50
                                  ? "Structured environments with clear objectives"
                                  : "Flexible environments with room for creativity"}
                              </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                              <span>
                                {personalityTraits.openness > 50
                                  ? "Innovative and creative challenges"
                                  : "Practical and concrete tasks"}
                              </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                              <span>
                                {personalityTraits.agreeableness > 50
                                  ? "Supportive team environments"
                                  : "Results-oriented environments"}
                              </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                              <span>Continuous learning opportunities</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-md font-medium">Trait Breakdown</h4>
                        <div className="mt-4 space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="text-sm">Introversion</div>
                              <div className="text-sm">Extroversion</div>
                            </div>
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div
                                className="h-full rounded-full bg-primary"
                                style={{ width: `${personalityTraits.extraversion}%` }}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="text-sm">Flexible</div>
                              <div className="text-sm">Organized</div>
                            </div>
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div
                                className="h-full rounded-full bg-primary"
                                style={{ width: `${personalityTraits.conscientiousness}%` }}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="text-sm">Practical</div>
                              <div className="text-sm">Creative</div>
                            </div>
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div
                                className="h-full rounded-full bg-primary"
                                style={{ width: `${personalityTraits.openness}%` }}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="text-sm">Independent</div>
                              <div className="text-sm">Cooperative</div>
                            </div>
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div
                                className="h-full rounded-full bg-primary"
                                style={{ width: `${personalityTraits.agreeableness}%` }}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="text-sm">Calm</div>
                              <div className="text-sm">Sensitive</div>
                            </div>
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div
                                className="h-full rounded-full bg-primary"
                                style={{ width: `${personalityTraits.neuroticism}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p>You haven't completed the personality assessment yet.</p>
                      <Button className="mt-4" onClick={() => router.push("/quizzes/personality")}>
                        Take Personality Assessment
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="aptitude" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Aptitude Test Results</CardTitle>
                  <CardDescription>Your cognitive abilities and skills</CardDescription>
                </CardHeader>
                <CardContent>
                  {aptitudeScores ? (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium">Overall Score: {aptitudeScores.overall}/100</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          Your aptitude test results indicate{" "}
                          {aptitudeScores.overall > 80
                            ? "exceptional"
                            : aptitudeScores.overall > 60
                              ? "strong"
                              : aptitudeScores.overall > 40
                                ? "average"
                                : "developing"}{" "}
                          analytical and quantitative reasoning skills, with particularly{" "}
                          {aptitudeScores.numerical > 80
                            ? "high"
                            : aptitudeScores.numerical > 60
                              ? "good"
                              : aptitudeScores.numerical > 40
                                ? "average"
                                : "developing"}{" "}
                          scores in numerical ability and{" "}
                          {aptitudeScores.logical > 80
                            ? "excellent"
                            : aptitudeScores.logical > 60
                              ? "strong"
                              : aptitudeScores.logical > 40
                                ? "moderate"
                                : "basic"}{" "}
                          logical reasoning skills.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-md font-medium">Skill Breakdown</h4>
                        <div className="mt-4 space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium">Numerical Ability</div>
                              <div className="text-sm text-muted-foreground">{aptitudeScores.numerical}/100</div>
                            </div>
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div
                                className="h-full rounded-full bg-primary"
                                style={{ width: `${aptitudeScores.numerical}%` }}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium">Logical Reasoning</div>
                              <div className="text-sm text-muted-foreground">{aptitudeScores.logical}/100</div>
                            </div>
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div
                                className="h-full rounded-full bg-primary"
                                style={{ width: `${aptitudeScores.logical}%` }}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium">Verbal Reasoning</div>
                              <div className="text-sm text-muted-foreground">{aptitudeScores.verbal}/100</div>
                            </div>
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div
                                className="h-full rounded-full bg-primary"
                                style={{ width: `${aptitudeScores.verbal}%` }}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium">Spatial Awareness</div>
                              <div className="text-sm text-muted-foreground">{aptitudeScores.spatial}/100</div>
                            </div>
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div
                                className="h-full rounded-full bg-primary"
                                style={{ width: `${aptitudeScores.spatial}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-md font-medium">Strengths & Areas for Development</h4>
                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                          <div>
                            <h5 className="text-sm font-medium">Key Strengths</h5>
                            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                              {aptitudeScores.numerical > 70 && (
                                <li className="flex items-center gap-2">
                                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                  <span>Strong numerical computation</span>
                                </li>
                              )}
                              {aptitudeScores.logical > 70 && (
                                <li className="flex items-center gap-2">
                                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                  <span>Excellent logical reasoning</span>
                                </li>
                              )}
                              {aptitudeScores.verbal > 70 && (
                                <li className="flex items-center gap-2">
                                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                  <span>Strong verbal reasoning</span>
                                </li>
                              )}
                              {aptitudeScores.spatial > 70 && (
                                <li className="flex items-center gap-2">
                                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                  <span>Good spatial awareness</span>
                                </li>
                              )}
                              {Object.values(aptitudeScores).filter((score) => score > 70).length === 0 && (
                                <li className="flex items-center gap-2">
                                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                  <span>Balanced across multiple areas</span>
                                </li>
                              )}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Areas for Development</h5>
                            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                              {aptitudeScores.numerical < 60 && (
                                <li className="flex items-center gap-2">
                                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                                  <span>Numerical reasoning skills</span>
                                </li>
                              )}
                              {aptitudeScores.logical < 60 && (
                                <li className="flex items-center gap-2">
                                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                                  <span>Logical problem-solving</span>
                                </li>
                              )}
                              {aptitudeScores.verbal < 60 && (
                                <li className="flex items-center gap-2">
                                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                                  <span>Verbal reasoning skills</span>
                                </li>
                              )}
                              {aptitudeScores.spatial < 60 && (
                                <li className="flex items-center gap-2">
                                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                                  <span>Spatial awareness</span>
                                </li>
                              )}
                              {Object.values(aptitudeScores).filter((score) => score < 60).length === 0 && (
                                <li className="flex items-center gap-2">
                                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                                  <span>Continue developing all areas</span>
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p>You haven't completed the aptitude assessment yet.</p>
                      <Button className="mt-4" onClick={() => router.push("/quizzes/aptitude")}>
                        Take Aptitude Assessment
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="iq" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>IQ Assessment Results</CardTitle>
                  <CardDescription>Your cognitive abilities and problem-solving skills</CardDescription>
                </CardHeader>
                <CardContent>
                  {iqScore ? (
                    <div className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-3">
                        <div className="flex flex-col items-center justify-center p-6 border rounded-lg">
                          <h3 className="text-3xl font-bold text-primary">{iqScore.estimatedIQ}</h3>
                          <p className="text-sm text-muted-foreground mt-2">Estimated IQ Score</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-6 border rounded-lg">
                          <h3 className="text-3xl font-bold text-primary">
                            {iqScore.score}/{iqScore.total}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-2">Correct Answers</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-6 border rounded-lg">
                          <h3 className="text-3xl font-bold text-primary">{iqScore.percentage}%</h3>
                          <p className="text-sm text-muted-foreground mt-2">Accuracy</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Cognitive Profile</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          Your IQ assessment results indicate{" "}
                          {iqScore.estimatedIQ > 130
                            ? "exceptional"
                            : iqScore.estimatedIQ > 115
                              ? "above average"
                              : iqScore.estimatedIQ > 100
                                ? "average"
                                : iqScore.estimatedIQ > 85
                                  ? "below average"
                                  : "developing"}{" "}
                          cognitive abilities. Your performance suggests strengths in{" "}
                          {iqScore.percentage > 80
                            ? "pattern recognition, logical reasoning, and problem-solving"
                            : iqScore.percentage > 60
                              ? "basic pattern recognition and logical reasoning"
                              : "developing cognitive skills that can be improved with practice"}
                          .
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">What This Means</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          IQ scores are just one measure of cognitive ability and should be considered alongside other
                          assessments. Your score suggests you would likely excel in careers that require{" "}
                          {iqScore.estimatedIQ > 120
                            ? "complex problem-solving, analytical thinking, and abstract reasoning"
                            : iqScore.estimatedIQ > 100
                              ? "logical thinking and moderate problem-solving"
                              : "practical skills and hands-on approaches"}
                          .
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Recommended Development</h3>
                        <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>Regular practice with logic puzzles and brain teasers</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>Learning new skills that challenge your thinking</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>Reading books on diverse topics to expand knowledge</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>Engaging in strategic games like chess or sudoku</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p>You haven't completed the IQ assessment yet.</p>
                      <Button className="mt-4" onClick={() => router.push("/quizzes/iq")}>
                        Take IQ Assessment
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="careers" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {careerMatches.slice(0, 6).map((career, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>{career.title}</CardTitle>
                        <div className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {career.match}% Match
                        </div>
                      </div>
                      <CardDescription>{career.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium">Why This Matches You</h4>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Your {assessmentStatus.personality ? "personality traits" : ""}
                            {assessmentStatus.personality && (assessmentStatus.aptitude || assessmentStatus.iq)
                              ? ", "
                              : ""}
                            {assessmentStatus.aptitude ? "aptitude skills" : ""}
                            {(assessmentStatus.personality || assessmentStatus.aptitude) && assessmentStatus.iq
                              ? ", and "
                              : ""}
                            {assessmentStatus.iq ? "cognitive abilities" : ""} align well with the requirements for this
                            career.
                            {!assessmentStatus.personality && !assessmentStatus.aptitude && !assessmentStatus.iq
                              ? "Complete the assessments for a more accurate match explanation."
                              : ""}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Key Traits Required</h4>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {career.traits.map((trait, i) => (
                              <div key={i} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
                                {trait}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Key Skills Required</h4>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {career.skills.map((skill, i) => (
                              <div key={i} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Career Outlook</h4>
                          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                            <li>Growth: {career.outlook.growth}</li>
                            <li>Salary Range: {career.outlook.salary}</li>
                            <li>Demand: {career.outlook.demand}</li>
                            <li>Top Countries: {career.outlook.countries.join(", ")}</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Link href={`/courses?career=${career.title.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Button>Explore Courses</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              {!allCompleted && (
                <div className="mt-8 text-center">
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>For More Accurate Results</AlertTitle>
                    <AlertDescription>
                      Complete all assessments to get the most accurate career recommendations.
                    </AlertDescription>
                  </Alert>
                  {nextAssessment && (
                    <Button className="mt-4" onClick={() => router.push(`/quizzes/${nextAssessment}`)}>
                      Continue with {nextAssessment.replace("-", " ")} assessment
                    </Button>
                  )}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
