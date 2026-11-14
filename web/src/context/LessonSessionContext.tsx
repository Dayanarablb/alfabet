import { useReducer, useCallback, useMemo, type ReactNode } from 'react'
import type { LessonRepository } from '../repositories'
import { defaultLessonRepository } from '../repositories'
import {
  LessonSessionContext,
  type LessonSessionState,
  type LessonSessionAction,
  type LessonSessionContextType,
} from './lessonSessionContextDef'

const initialState: LessonSessionState = {
  lesson: null,
  exercises: [],
  currentExerciseIndex: 0,
  attempts: [],
  correctCount: 0,
  lastSelectedOptionId: null,
  lastIsCorrect: null,
  stars: 0,
}

function lessonSessionReducer(
  state: LessonSessionState,
  action: LessonSessionAction
): LessonSessionState {
  switch (action.type) {
    case 'START_LESSON':
      return {
        ...initialState,
        lesson: action.payload.lesson,
        exercises: action.payload.exercises,
      }
    case 'RECORD_ATTEMPT': {
      const { exerciseId, selectedOptionId, isCorrect } = action.payload
      const newAttempt = {
        exerciseId,
        selectedOptionId,
        correct: isCorrect,
        timestamp: Date.now(),
      }
      const newAttempts = [...state.attempts, newAttempt]
      const newCorrectCount = isCorrect ? state.correctCount + 1 : state.correctCount
      const totalExercises = state.exercises.length || 1
      const calculatedStars = Math.max(
        1,
        Math.min(3, Math.round((newCorrectCount / totalExercises) * 3))
      )

      return {
        ...state,
        attempts: newAttempts,
        correctCount: newCorrectCount,
        lastSelectedOptionId: selectedOptionId,
        lastIsCorrect: isCorrect,
        stars: calculatedStars,
      }
    }
    case 'NEXT_EXERCISE':
      return {
        ...state,
        currentExerciseIndex: state.currentExerciseIndex + 1,
        lastSelectedOptionId: null,
        lastIsCorrect: null,
      }
    case 'RETRY_EXERCISE':
      return {
        ...state,
        lastSelectedOptionId: null,
        lastIsCorrect: null,
      }
    case 'RESET_SESSION':
      return initialState
    default:
      return state
  }
}

interface LessonSessionProviderProps {
  children: ReactNode
  repository?: LessonRepository
}

export function LessonSessionProvider({
  children,
  repository = defaultLessonRepository,
}: LessonSessionProviderProps) {
  const [state, dispatch] = useReducer(lessonSessionReducer, initialState)

  const startLesson = useCallback(
    async (lessonId: string): Promise<boolean> => {
      const lesson = await repository.getLesson(lessonId)
      if (!lesson) return false
      const exercises = await repository.getExercises(lessonId)
      dispatch({ type: 'START_LESSON', payload: { lesson, exercises } })
      return true
    },
    [repository]
  )

  const recordAnswer = useCallback(
    async (selectedOptionId: string): Promise<boolean> => {
      const current = state.exercises[state.currentExerciseIndex]
      if (!current) return false

      const isCorrect = current.correctOptionId === selectedOptionId
      await repository.saveAttempt({
        exerciseId: current.id,
        selectedOptionId,
        correct: isCorrect,
        timestamp: Date.now(),
      })

      dispatch({
        type: 'RECORD_ATTEMPT',
        payload: {
          exerciseId: current.id,
          selectedOptionId,
          isCorrect,
        },
      })

      // Si es el último ejercicio y fue correcto o ya se agotaron, guardar progreso
      const isLast = state.currentExerciseIndex >= state.exercises.length - 1
      if (isLast && state.lesson) {
        const total = state.exercises.length || 1
        const totalCorrect = isCorrect ? state.correctCount + 1 : state.correctCount
        const finalStars = Math.max(1, Math.min(3, Math.round((totalCorrect / total) * 3)))
        await repository.saveProgress({
          lessonId: state.lesson.id,
          completed: true,
          stars: finalStars,
        })
      }

      return isCorrect
    },
    [state.exercises, state.currentExerciseIndex, state.correctCount, state.lesson, repository]
  )

  const nextExercise = useCallback(() => {
    dispatch({ type: 'NEXT_EXERCISE' })
  }, [])

  const retryExercise = useCallback(() => {
    dispatch({ type: 'RETRY_EXERCISE' })
  }, [])

  const currentExercise = useMemo(
    () => state.exercises[state.currentExerciseIndex] ?? null,
    [state.exercises, state.currentExerciseIndex]
  )

  const isLastExercise = useMemo(
    () =>
      state.exercises.length > 0 &&
      state.currentExerciseIndex >= state.exercises.length - 1,
    [state.exercises.length, state.currentExerciseIndex]
  )

  const hasCompletedCurrentLesson = useMemo(
    () =>
      state.exercises.length > 0 &&
      state.currentExerciseIndex >= state.exercises.length,
    [state.exercises.length, state.currentExerciseIndex]
  )

  const value = useMemo<LessonSessionContextType>(
    () => ({
      state,
      repository,
      startLesson,
      recordAnswer,
      nextExercise,
      retryExercise,
      currentExercise,
      isLastExercise,
      hasCompletedCurrentLesson,
    }),
    [
      state,
      repository,
      startLesson,
      recordAnswer,
      nextExercise,
      retryExercise,
      currentExercise,
      isLastExercise,
      hasCompletedCurrentLesson,
    ]
  )

  return <LessonSessionContext.Provider value={value}>{children}</LessonSessionContext.Provider>
}
