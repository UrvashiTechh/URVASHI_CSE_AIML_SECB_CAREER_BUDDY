import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2023 CareerBuddy. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/terms" className="text-sm font-medium text-muted-foreground hover:underline">
            Terms
          </Link>
          <Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:underline">
            Privacy
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
