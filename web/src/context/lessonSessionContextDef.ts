import { createContext } from 'react'
import type { Lesson, Exercise, Attempt } from '../types'
import type { LessonRepository } from '../repositories'

export interface LessonSessionState {
  lesson: Lesson | null
  exercises: Exercise[]
  currentExerciseIndex: number
  attempts: Attempt[]
  correctCount: number
  lastSelectedOptionId: string | null
  lastIsCorrect: boolean | null
  stars: number
}

export type LessonSessionAction =
  | { type: 'START_LESSON'; payload: { lesson: Lesson; exercises: Exercise[] } }
  | {
      type: 'RECORD_ATTEMPT'
      payload: { exerciseId: string; selectedOptionId: string; isCorrect: boolean }
    }
  | { type: 'NEXT_EXERCISE' }
  | { type: 'RETRY_EXERCISE' }
  | { type: 'RESET_SESSION' }

export interface LessonSessionContextType {
  state: LessonSessionState
  repository: LessonRepository
  startLesson: (lessonId: string) => Promise<boolean>
  recordAnswer: (selectedOptionId: string) => Promise<boolean>
  nextExercise: () => void
  retryExercise: () => void
  currentExercise: Exercise | null
  isLastExercise: boolean
  hasCompletedCurrentLesson: boolean
}

export const LessonSessionContext = createContext<LessonSessionContextType | undefined>(undefined)
