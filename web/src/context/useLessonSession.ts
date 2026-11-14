import { useContext } from 'react'
import { LessonSessionContext } from './lessonSessionContextDef'
import type { LessonSessionContextType } from './lessonSessionContextDef'

export function useLessonSession(): LessonSessionContextType {
  const context = useContext(LessonSessionContext)
  if (!context) {
    throw new Error('useLessonSession debe usarse dentro de LessonSessionProvider')
  }
  return context
}
