import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/contexts/auth-context"
import { AssessmentProvider } from "@/contexts/assessment-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CareerBuddy - Find Your Ideal Career Path",
  description: "Discover your ideal career path based on personality, aptitude, and IQ assessments.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <AssessmentProvider>{children}</AssessmentProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
