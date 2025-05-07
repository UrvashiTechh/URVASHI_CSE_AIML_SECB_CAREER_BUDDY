export function TestimonialSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Success Stories</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from students who found their ideal career path with CareerBuddy
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl">👨‍💻</span>
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Rahul Sharma</h3>
              <p className="text-sm text-muted-foreground">Software Engineer</p>
              <p className="text-sm">
                "CareerBuddy helped me discover my passion for coding. The personality tests accurately matched me with
                tech careers, and the recommended courses gave me the skills I needed to land my dream job."
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl">👩‍🔬</span>
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Priya Patel</h3>
              <p className="text-sm text-muted-foreground">Biotech Researcher</p>
              <p className="text-sm">
                "I was confused about which science field to pursue. The aptitude tests on CareerBuddy highlighted my
                analytical skills and guided me toward biotechnology, which I now love!"
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl">👨‍🎨</span>
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Arjun Mehta</h3>
              <p className="text-sm text-muted-foreground">UX Designer</p>
              <p className="text-sm">
                "The personality assessment revealed my creative side, which I hadn't fully explored. CareerBuddy's
                course recommendations helped me transition from engineering to UX design, and I couldn't be happier."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
