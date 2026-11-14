import type { Lesson, Exercise, Attempt, Progress } from '../types'

export interface LessonRepository {
  listLessons(): Promise<Lesson[]>
  getLesson(id: string): Promise<Lesson | null>
  getExercises(lessonId: string): Promise<Exercise[]>
  saveAttempt(attempt: Attempt): Promise<void>
  getProgress(lessonId: string): Promise<Progress | null>
  listAllProgress(): Promise<Record<string, Progress>>
  saveProgress(progress: Progress): Promise<void>
}
