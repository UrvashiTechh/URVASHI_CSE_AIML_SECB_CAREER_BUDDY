import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About CareerBuddy</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your personalized career guidance platform
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 mt-12">
              <div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="mt-4 text-muted-foreground">
                  CareerBuddy is dedicated to helping students and professionals discover their ideal career paths based
                  on their unique personality traits, aptitude skills, and cognitive abilities. We believe that everyone
                  has unique strengths and talents, and finding a career that aligns with these natural abilities leads
                  to greater job satisfaction and success.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">How It Works</h2>
                <p className="mt-4 text-muted-foreground">
                  Our platform uses a comprehensive assessment approach that evaluates multiple dimensions of your
                  abilities and preferences:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 text-muted-foreground">
                  <li>
                    Personality Assessment: Evaluates your work style, social tendencies, and natural inclinations
                  </li>
                  <li>Aptitude Test: Measures your logical reasoning, numerical ability, and problem-solving skills</li>
                  <li>IQ Assessment: Evaluates your cognitive abilities and pattern recognition</li>
                  <li>General Knowledge: Tests your awareness across various domains</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  After completing these assessments, our advanced algorithm analyzes your results to identify career
                  paths that best match your profile. We then provide personalized recommendations for courses and
                  resources to help you develop the skills needed for your chosen career.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Our Approach</h2>
                <p className="mt-4 text-muted-foreground">
                  Unlike traditional career guidance that focuses solely on academic performance, CareerBuddy takes a
                  holistic approach by considering your personality traits, natural aptitudes, and cognitive abilities.
                  This comprehensive evaluation provides a more accurate picture of your strengths and potential career
                  fits.
                </p>
                <p className="mt-4 text-muted-foreground">
                  We partner with leading educational platforms like Udemy and Coursera to offer you the best courses
                  for skill development. Our career insights are regularly updated to reflect current market trends and
                  future projections, ensuring you make informed decisions about your career path.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Join Us Today</h2>
                <p className="mt-4 text-muted-foreground">
                  Start your journey to discovering your ideal career path with CareerBuddy. Our comprehensive
                  assessments, personalized recommendations, and valuable resources are designed to help you make
                  confident career decisions and achieve your professional goals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
