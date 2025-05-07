import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Discover Your Ideal Career Path
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                CareerBuddy helps you find the perfect career based on your personality, aptitude, and IQ. Take our
                assessments, get personalized recommendations, and start your journey today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/sign-up">
                <Button size="lg" className="w-full">
                  Get Started
                </Button>
              </Link>
              <Link href="/about-us">
                <Button size="lg" variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-[450px] rounded-full bg-gradient-to-b from-primary/20 to-primary/0 p-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="space-y-2 text-center">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Personality
                  </div>
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground ml-12">
                    Aptitude
                  </div>
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mr-12">
                    IQ
                  </div>
                  <div className="mt-4 h-40 w-40 rounded-full bg-background p-2 shadow-lg mx-auto">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-primary/10">
                      <span className="text-4xl">🚀</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 w-16 rounded-full bg-primary mx-auto"></div>
                    <div className="h-2 w-12 rounded-full bg-primary/70 mx-auto"></div>
                    <div className="h-2 w-8 rounded-full bg-primary/50 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
