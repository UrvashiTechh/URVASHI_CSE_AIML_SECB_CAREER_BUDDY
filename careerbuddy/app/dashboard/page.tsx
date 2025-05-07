import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookOpen, CheckCircle, Clock, Compass } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back, Rahul! Track your progress and explore career insights.
              </p>
            </div>
            <div className="flex gap-2">
              <Link href="/quizzes">
                <Button variant="outline">Take Assessments</Button>
              </Link>
              <Link href="/dashboard/results">
                <Button>View Results</Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Assessments Completed</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2/3</div>
                <p className="text-xs text-muted-foreground">Personality, Aptitude completed</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Recommended Careers</CardTitle>
                <Compass className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">Based on your assessment results</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Web Development, Data Science</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.5</div>
                <p className="text-xs text-muted-foreground">Total hours spent on courses</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="courses">Recommended Courses</TabsTrigger>
                <TabsTrigger value="insights">Career Insights</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Assessment Progress</CardTitle>
                      <CardDescription>Your progress across all assessments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">Personality Assessment</div>
                            <div className="text-sm text-muted-foreground">100%</div>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-full w-full rounded-full bg-primary" style={{ width: "100%" }} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">Aptitude Test</div>
                            <div className="text-sm text-muted-foreground">100%</div>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-full rounded-full bg-primary" style={{ width: "100%" }} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">IQ Assessment</div>
                            <div className="text-sm text-muted-foreground">0%</div>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-full rounded-full bg-primary" style={{ width: "0%" }} />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Top Career Matches</CardTitle>
                      <CardDescription>Based on your assessment results</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">Software Developer</div>
                            <div className="text-sm text-muted-foreground">92% Match</div>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-full rounded-full bg-primary" style={{ width: "92%" }} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">Data Scientist</div>
                            <div className="text-sm text-muted-foreground">85% Match</div>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-full rounded-full bg-primary" style={{ width: "85%" }} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">UX Designer</div>
                            <div className="text-sm text-muted-foreground">78% Match</div>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-full rounded-full bg-primary" style={{ width: "78%" }} />
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link href="/dashboard/results">
                          <Button variant="outline" className="w-full">
                            View Full Results
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="courses" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Web Development Bootcamp</CardTitle>
                      <CardDescription>Udemy • Free</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Learn HTML, CSS, JavaScript, React, Node.js and more to become a full-stack web developer.
                      </p>
                      <div className="mt-4">
                        <Link href="https://www.udemy.com" target="_blank">
                          <Button className="w-full">Enroll Now</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Data Science Specialization</CardTitle>
                      <CardDescription>Coursera • Paid</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Master data analysis, visualization, machine learning, and statistical analysis.
                      </p>
                      <div className="mt-4">
                        <Link href="https://www.coursera.org" target="_blank">
                          <Button className="w-full">Enroll Now</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>UX Design Professional</CardTitle>
                      <CardDescription>Coursera • Free</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Learn the UX design process, including research, wireframing, prototyping, and testing.
                      </p>
                      <div className="mt-4">
                        <Link href="https://www.coursera.org" target="_blank">
                          <Button className="w-full">Enroll Now</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="insights" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Software Developer Career Insights</CardTitle>
                    <CardDescription>Market trends and future outlook</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium">Current Market Scope</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          The software development field is experiencing robust growth with a 22% increase in job
                          openings over the past year. The average salary ranges from ₹6,00,000 to ₹25,00,000 depending
                          on experience and specialization.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Future Growth (5-10 Years)</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          The demand for software developers is projected to grow by 25% over the next decade, much
                          faster than the average for all occupations. Emerging areas like AI, machine learning, and
                          blockchain are creating new specializations.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Top Countries for Expansion</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          USA, Canada, Germany, Australia, and Singapore offer the highest salaries and most
                          opportunities for software developers. Remote work has also opened global opportunities
                          regardless of location.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Scope in India</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          India's IT sector is expected to reach $350 billion by 2026. Major tech hubs include
                          Bangalore, Hyderabad, Pune, and Delhi NCR. Startups and established companies are both
                          actively hiring, with competitive salaries for skilled developers.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
