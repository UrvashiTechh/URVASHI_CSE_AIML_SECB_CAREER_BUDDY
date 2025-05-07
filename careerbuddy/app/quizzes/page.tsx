"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Brain, Compass, Lightbulb, BookOpen, CheckCircle } from "lucide-react"
import { useAssessment } from "@/contexts/assessment-context"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function QuizzesPage() {
  const { assessmentStatus, startAssessment, allAssessmentsCompleted } = useAssessment()
  const { user } = useAuth()
  const router = useRouter()

  // Redirect to results page if all assessments are completed
  useEffect(() => {
    if (allAssessmentsCompleted) {
      router.push("/dashboard/results")
    }
  }, [allAssessmentsCompleted, router])

  // Calculate overall progress
  const completedCount = Object.values(assessmentStatus).filter(Boolean).length
  const totalAssessments = Object.keys(assessmentStatus).length
  const overallProgress = (completedCount / totalAssessments) * 100

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover Your Potential</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take our comprehensive assessments to uncover your ideal career path
                </p>
              </div>
              {user && (
                <div className="w-full max-w-md mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm font-medium">
                      {completedCount}/{totalAssessments} Completed
                    </span>
                  </div>
                  <Progress value={overallProgress} className="h-2" />
                </div>
              )}
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="rounded-full bg-primary/10 p-4 mx-auto relative">
                    <Brain className="h-8 w-8 text-primary" />
                    {assessmentStatus.personality && (
                      <CheckCircle className="h-6 w-6 text-green-500 absolute -top-1 -right-1 bg-background rounded-full" />
                    )}
                  </div>
                  <CardTitle className="mt-4">Personality Assessment</CardTitle>
                  <CardDescription>
                    Discover your unique personality traits and how they align with different careers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This 30-minute assessment evaluates your personality traits, work preferences, and social tendencies
                    to identify career paths that match your natural inclinations.
                  </p>
                  {assessmentStatus.personality && (
                    <Badge variant="outline" className="mt-4 bg-green-50 text-green-700 border-green-200">
                      Completed
                    </Badge>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    onClick={() => startAssessment("personality")}
                    variant={assessmentStatus.personality ? "outline" : "default"}
                  >
                    {assessmentStatus.personality ? "Retake Assessment" : "Start Assessment"}
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="rounded-full bg-primary/10 p-4 mx-auto relative">
                    <Compass className="h-8 w-8 text-primary" />
                    {assessmentStatus.aptitude && (
                      <CheckCircle className="h-6 w-6 text-green-500 absolute -top-1 -right-1 bg-background rounded-full" />
                    )}
                  </div>
                  <CardTitle className="mt-4">Aptitude Test</CardTitle>
                  <CardDescription>
                    Evaluate your natural abilities and strengths across different skill domains
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This 25-minute assessment measures your aptitude in logical reasoning, verbal ability, numerical
                    reasoning, and spatial awareness to identify your strongest skill areas.
                  </p>
                  {assessmentStatus.aptitude && (
                    <Badge variant="outline" className="mt-4 bg-green-50 text-green-700 border-green-200">
                      Completed
                    </Badge>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    onClick={() => startAssessment("aptitude")}
                    variant={assessmentStatus.aptitude ? "outline" : "default"}
                  >
                    {assessmentStatus.aptitude ? "Retake Assessment" : "Start Assessment"}
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="rounded-full bg-primary/10 p-4 mx-auto relative">
                    <Lightbulb className="h-8 w-8 text-primary" />
                    {assessmentStatus.iq && (
                      <CheckCircle className="h-6 w-6 text-green-500 absolute -top-1 -right-1 bg-background rounded-full" />
                    )}
                  </div>
                  <CardTitle className="mt-4">IQ Assessment</CardTitle>
                  <CardDescription>Measure your cognitive abilities and problem-solving skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This 20-minute assessment evaluates your cognitive abilities, including pattern recognition, logical
                    reasoning, and problem-solving to identify your intellectual strengths.
                  </p>
                  {assessmentStatus.iq && (
                    <Badge variant="outline" className="mt-4 bg-green-50 text-green-700 border-green-200">
                      Completed
                    </Badge>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    onClick={() => startAssessment("iq")}
                    variant={assessmentStatus.iq ? "outline" : "default"}
                  >
                    {assessmentStatus.iq ? "Retake Assessment" : "Start Assessment"}
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="rounded-full bg-primary/10 p-4 mx-auto relative">
                    <BookOpen className="h-8 w-8 text-primary" />
                    {assessmentStatus["general-knowledge"] && (
                      <CheckCircle className="h-6 w-6 text-green-500 absolute -top-1 -right-1 bg-background rounded-full" />
                    )}
                  </div>
                  <CardTitle className="mt-4">General Knowledge</CardTitle>
                  <CardDescription>Test your awareness of various subjects and topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This 15-minute assessment tests your knowledge across various domains including science, history,
                    geography, and current affairs to gauge your general awareness.
                  </p>
                  {assessmentStatus["general-knowledge"] && (
                    <Badge variant="outline" className="mt-4 bg-green-50 text-green-700 border-green-200">
                      Completed
                    </Badge>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    onClick={() => startAssessment("general-knowledge")}
                    variant={assessmentStatus["general-knowledge"] ? "outline" : "default"}
                  >
                    {assessmentStatus["general-knowledge"] ? "Retake Assessment" : "Start Assessment"}
                  </Button>
                </CardFooter>
              </Card>
            </div>
            {completedCount > 0 && !allAssessmentsCompleted && (
              <div className="flex justify-center mt-8">
                <Button size="lg" onClick={() => router.push("/dashboard/results")}>
                  View Current Results
                </Button>
              </div>
            )}
            {allAssessmentsCompleted && (
              <div className="text-center mt-8 space-y-4">
                <h3 className="text-xl font-bold">All Assessments Completed!</h3>
                <p className="text-muted-foreground">
                  Congratulations! You've completed all assessments. View your comprehensive results and career
                  recommendations.
                </p>
                <Button size="lg" onClick={() => router.push("/dashboard/results")}>
                  View Complete Analysis
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
