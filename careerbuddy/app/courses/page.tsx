import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookOpen, Filter, Search } from "lucide-react"

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Recommended Courses</h1>
              <p className="text-muted-foreground">
                Curated courses based on your career interests and assessment results
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <div className="relative w-full md:w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search courses..." className="w-full pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Courses</TabsTrigger>
              <TabsTrigger value="software">Software Dev</TabsTrigger>
              <TabsTrigger value="data">Data Science</TabsTrigger>
              <TabsTrigger value="design">UX Design</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-primary/10 p-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">Udemy • Free</div>
                    </div>
                    <CardTitle className="mt-4">The Complete Web Development Bootcamp</CardTitle>
                    <CardDescription>Become a full-stack web developer with just one course</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Duration:</span>
                        <span className="ml-2 text-muted-foreground">60 hours</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Level:</span>
                        <span className="ml-2 text-muted-foreground">Beginner to Advanced</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Rating:</span>
                        <span className="ml-2 text-muted-foreground">4.7/5 (150,000+ students)</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        Learn HTML, CSS, JavaScript, React, Node.js, MongoDB, and more to become a full-stack web
                        developer.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://www.udemy.com" target="_blank" className="w-full">
                      <Button className="w-full">Enroll Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-primary/10 p-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">Coursera • Paid</div>
                    </div>
                    <CardTitle className="mt-4">Data Science Specialization</CardTitle>
                    <CardDescription>Master data analysis, visualization, and machine learning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Duration:</span>
                        <span className="ml-2 text-muted-foreground">8 months</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Level:</span>
                        <span className="ml-2 text-muted-foreground">Intermediate</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Rating:</span>
                        <span className="ml-2 text-muted-foreground">4.6/5 (80,000+ students)</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        Learn data science fundamentals, statistical analysis, machine learning, and data visualization
                        with Python.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://www.coursera.org" target="_blank" className="w-full">
                      <Button className="w-full">Enroll Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-primary/10 p-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">Coursera • Free</div>
                    </div>
                    <CardTitle className="mt-4">Google UX Design Professional Certificate</CardTitle>
                    <CardDescription>Launch your career in UX design with Google</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Duration:</span>
                        <span className="ml-2 text-muted-foreground">6 months</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Level:</span>
                        <span className="ml-2 text-muted-foreground">Beginner</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Rating:</span>
                        <span className="ml-2 text-muted-foreground">4.8/5 (100,000+ students)</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        Learn the UX design process, including research, wireframing, prototyping, and testing from
                        Google experts.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://www.coursera.org" target="_blank" className="w-full">
                      <Button className="w-full">Enroll Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-primary/10 p-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">Udemy • Free</div>
                    </div>
                    <CardTitle className="mt-4">Python for Data Science and Machine Learning</CardTitle>
                    <CardDescription>Learn Python for data analysis and machine learning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Duration:</span>
                        <span className="ml-2 text-muted-foreground">40 hours</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Level:</span>
                        <span className="ml-2 text-muted-foreground">Intermediate</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Rating:</span>
                        <span className="ml-2 text-muted-foreground">4.6/5 (120,000+ students)</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        Learn Python, NumPy, Pandas, Matplotlib, Seaborn, Scikit-Learn, and TensorFlow for data science
                        and machine learning.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://www.udemy.com" target="_blank" className="w-full">
                      <Button className="w-full">Enroll Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-primary/10 p-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">Udemy • Paid</div>
                    </div>
                    <CardTitle className="mt-4">React - The Complete Guide</CardTitle>
                    <CardDescription>Master React.js and modern frontend development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Duration:</span>
                        <span className="ml-2 text-muted-foreground">48 hours</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Level:</span>
                        <span className="ml-2 text-muted-foreground">Beginner to Advanced</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Rating:</span>
                        <span className="ml-2 text-muted-foreground">4.7/5 (180,000+ students)</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        Learn React.js from the ground up, including hooks, Redux, React Router, Next.js, and more.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://www.udemy.com" target="_blank" className="w-full">
                      <Button className="w-full">Enroll Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-primary/10 p-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">Coursera • Free</div>
                    </div>
                    <CardTitle className="mt-4">UI/UX Design Specialization</CardTitle>
                    <CardDescription>Design user-centered digital experiences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Duration:</span>
                        <span className="ml-2 text-muted-foreground">5 months</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Level:</span>
                        <span className="ml-2 text-muted-foreground">Beginner to Intermediate</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Rating:</span>
                        <span className="ml-2 text-muted-foreground">4.5/5 (70,000+ students)</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        Learn visual design, user research, wireframing, prototyping, and usability testing for digital
                        products.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://www.coursera.org" target="_blank" className="w-full">
                      <Button className="w-full">Enroll Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="software" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-primary/10 p-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">Udemy • Free</div>
                    </div>
                    <CardTitle className="mt-4">The Complete Web Development Bootcamp</CardTitle>
                    <CardDescription>Become a full-stack web developer with just one course</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Duration:</span>
                        <span className="ml-2 text-muted-foreground">60 hours</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Level:</span>
                        <span className="ml-2 text-muted-foreground">Beginner to Advanced</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Rating:</span>
                        <span className="ml-2 text-muted-foreground">4.7/5 (150,000+ students)</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        Learn HTML, CSS, JavaScript, React, Node.js, MongoDB, and more to become a full-stack web
                        developer.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://www.udemy.com" target="_blank" className="w-full">
                      <Button className="w-full">Enroll Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-primary/10 p-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">Udemy • Paid</div>
                    </div>
                    <CardTitle className="mt-4">React - The Complete Guide</CardTitle>
                    <CardDescription>Master React.js and modern frontend development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Duration:</span>
                        <span className="ml-2 text-muted-foreground">48 hours</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Level:</span>
                        <span className="ml-2 text-muted-foreground">Beginner to Advanced</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Rating:</span>
                        <span className="ml-2 text-muted-foreground">4.7/5 (180,000+ students)</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        Learn React.js from the ground up, including hooks, Redux, React Router, Next.js, and more.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://www.udemy.com" target="_blank" className="w-full">
                      <Button className="w-full">Enroll Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="data" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-primary/10 p-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">Coursera • Paid</div>
                    </div>
                    <CardTitle className="mt-4">Data Science Specialization</CardTitle>
                    <CardDescription>Master data analysis, visualization, and machine learning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Duration:</span>
                        <span className="ml-2 text-muted-foreground">8 months</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Level:</span>
                        <span className="ml-2 text-muted-foreground">Intermediate</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Rating:</span>
                        <span className="ml-2 text-muted-foreground">4.6/5 (80,000+ students)</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        Learn data science fundamentals, statistical analysis, machine learning, and data visualization
                        with Python.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://www.coursera.org" target="_blank" className="w-full">
                      <Button className="w-full">Enroll Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-primary/10 p-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">Udemy • Free</div>
                    </div>
                    <CardTitle className="mt-4">Python for Data Science and Machine Learning</CardTitle>
                    <CardDescription>Learn Python for data analysis and machine learning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Duration:</span>
                        <span className="ml-2 text-muted-foreground">40 hours</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Level:</span>
                        <span className="ml-2 text-muted-foreground">Intermediate</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Rating:</span>
                        <span className="ml-2 text-muted-foreground">4.6/5 (120,000+ students)</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        Learn Python, NumPy, Pandas, Matplotlib, Seaborn, Scikit-Learn, and TensorFlow for data science
                        and machine learning.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://www.udemy.com" target="_blank" className="w-full">
                      <Button className="w-full">Enroll Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="design" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-primary/10 p-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">Coursera • Free</div>
                    </div>
                    <CardTitle className="mt-4">Google UX Design Professional Certificate</CardTitle>
                    <CardDescription>Launch your career in UX design with Google</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Duration:</span>
                        <span className="ml-2 text-muted-foreground">6 months</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Level:</span>
                        <span className="ml-2 text-muted-foreground">Beginner</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Rating:</span>
                        <span className="ml-2 text-muted-foreground">4.8/5 (100,000+ students)</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        Learn the UX design process, including research, wireframing, prototyping, and testing from
                        Google experts.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://www.coursera.org" target="_blank" className="w-full">
                      <Button className="w-full">Enroll Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-primary/10 p-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">Coursera • Free</div>
                    </div>
                    <CardTitle className="mt-4">UI/UX Design Specialization</CardTitle>
                    <CardDescription>Design user-centered digital experiences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Duration:</span>
                        <span className="ml-2 text-muted-foreground">5 months</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Level:</span>
                        <span className="ml-2 text-muted-foreground">Beginner to Intermediate</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Rating:</span>
                        <span className="ml-2 text-muted-foreground">4.5/5 (70,000+ students)</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        Learn visual design, user research, wireframing, prototyping, and usability testing for digital
                        products.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://www.coursera.org" target="_blank" className="w-full">
                      <Button className="w-full">Enroll Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
