"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

type AssessmentType = "personality" | "aptitude" | "iq" | "general-knowledge"

type AssessmentStatus = {
  personality: boolean
  aptitude: boolean
  iq: boolean
  "general-knowledge": boolean
}

type AssessmentResults = {
  personality: Record<number, string>
  aptitude: Record<number, string>
  iq: Record<number, string>
  "general-knowledge": Record<number, string>
}

type AssessmentContextType = {
  currentAssessment: AssessmentType | null
  assessmentStatus: AssessmentStatus
  assessmentResults: AssessmentResults
  startAssessment: (type: AssessmentType) => void
  completeAssessment: (type: AssessmentType, results: Record<number, string>) => void
  getNextAssessment: () => AssessmentType | null
  resetAssessments: () => void
  allAssessmentsCompleted: boolean
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined)

const ASSESSMENT_ORDER: AssessmentType[] = ["personality", "aptitude", "iq", "general-knowledge"]

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [currentAssessment, setCurrentAssessment] = useState<AssessmentType | null>(null)
  const [assessmentStatus, setAssessmentStatus] = useState<AssessmentStatus>({
    personality: false,
    aptitude: false,
    iq: false,
    "general-knowledge": false,
  })
  const [assessmentResults, setAssessmentResults] = useState<AssessmentResults>({
    personality: {},
    aptitude: {},
    iq: {},
    "general-knowledge": {},
  })
  const router = useRouter()

  // Load assessment status from localStorage on initial load
  useEffect(() => {
    const storedStatus = localStorage.getItem("careerbuddy_assessment_status")
    const storedResults = localStorage.getItem("careerbuddy_assessment_results")

    if (storedStatus) {
      setAssessmentStatus(JSON.parse(storedStatus))
    }

    if (storedResults) {
      setAssessmentResults(JSON.parse(storedResults))
    }
  }, [])

  // Save assessment status to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("careerbuddy_assessment_status", JSON.stringify(assessmentStatus))
  }, [assessmentStatus])

  // Save assessment results to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("careerbuddy_assessment_results", JSON.stringify(assessmentResults))
  }, [assessmentResults])

  const startAssessment = (type: AssessmentType) => {
    setCurrentAssessment(type)
    router.push(`/quizzes/${type}`)
  }

  const completeAssessment = (type: AssessmentType, results: Record<number, string>) => {
    setAssessmentStatus((prev) => ({
      ...prev,
      [type]: true,
    }))

    setAssessmentResults((prev) => ({
      ...prev,
      [type]: results,
    }))

    setCurrentAssessment(null)
  }

  const getNextAssessment = (): AssessmentType | null => {
    for (const assessment of ASSESSMENT_ORDER) {
      if (!assessmentStatus[assessment]) {
        return assessment
      }
    }
    return null
  }

  const resetAssessments = () => {
    setAssessmentStatus({
      personality: false,
      aptitude: false,
      iq: false,
      "general-knowledge": false,
    })
    setAssessmentResults({
      personality: {},
      aptitude: {},
      iq: {},
      "general-knowledge": {},
    })
    setCurrentAssessment(null)
    localStorage.removeItem("careerbuddy_assessment_status")
    localStorage.removeItem("careerbuddy_assessment_results")
  }

  const allAssessmentsCompleted = Object.values(assessmentStatus).every(Boolean)

  return (
    <AssessmentContext.Provider
      value={{
        currentAssessment,
        assessmentStatus,
        assessmentResults,
        startAssessment,
        completeAssessment,
        getNextAssessment,
        resetAssessments,
        allAssessmentsCompleted,
      }}
    >
      {children}
    </AssessmentContext.Provider>
  )
}

export function useAssessment() {
  const context = useContext(AssessmentContext)
  if (context === undefined) {
    throw new Error("useAssessment must be used within an AssessmentProvider")
  }
  return context
}
