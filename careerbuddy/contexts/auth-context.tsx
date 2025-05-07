"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<boolean>
  signUp: (name: string, email: string, password: string) => Promise<boolean>
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("careerbuddy_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Mock authentication - in a real app, this would be an API call
      // For demo purposes, we'll accept any email with a password length > 5
      if (password.length > 5) {
        const mockUser = {
          id: "user_" + Math.random().toString(36).substr(2, 9),
          name: email.split("@")[0],
          email,
        }
        setUser(mockUser)
        localStorage.setItem("careerbuddy_user", JSON.stringify(mockUser))
        setIsLoading(false)
        return true
      }
      setIsLoading(false)
      return false
    } catch (error) {
      setIsLoading(false)
      return false
    }
  }

  const signUp = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      // Mock registration - in a real app, this would be an API call
      if (password.length > 5) {
        const mockUser = {
          id: "user_" + Math.random().toString(36).substr(2, 9),
          name,
          email,
        }
        setUser(mockUser)
        localStorage.setItem("careerbuddy_user", JSON.stringify(mockUser))
        setIsLoading(false)
        return true
      }
      setIsLoading(false)
      return false
    } catch (error) {
      setIsLoading(false)
      return false
    }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("careerbuddy_user")
    router.push("/")
  }

  return <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
