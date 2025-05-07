import { Brain, BookOpen, BarChart, Compass } from "lucide-react"

export function FeatureSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How CareerBuddy Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our comprehensive platform guides you through every step of your career discovery journey
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-4">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Personality Tests</h3>
            <p className="text-sm text-muted-foreground text-center">
              Discover your unique traits and how they align with different career paths
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-4">
              <Compass className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Aptitude & IQ</h3>
            <p className="text-sm text-muted-foreground text-center">
              Assess your cognitive abilities and natural talents to find your strengths
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-4">
              <BarChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Detailed Analysis</h3>
            <p className="text-sm text-muted-foreground text-center">
              Get comprehensive reports and career recommendations based on your results
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-4">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Curated Courses</h3>
            <p className="text-sm text-muted-foreground text-center">
              Access free and paid courses from top platforms to develop your skills
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
