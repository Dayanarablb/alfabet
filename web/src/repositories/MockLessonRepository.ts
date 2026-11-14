import type { LessonRepository } from './LessonRepository'
import type { Lesson, Exercise, Attempt, Progress } from '../types'
import {
  MOCK_LESSONS,
  MOCK_EXERCISES,
  INITIAL_MOCK_PROGRESS,
} from '../mocks/lessonsMockData'

const PROGRESS_STORAGE_KEY = 'alfabet_lesson_progress'
const ATTEMPTS_STORAGE_KEY = 'alfabet_lesson_attempts'

export class MockLessonRepository implements LessonRepository {
  private lessons: Lesson[] = MOCK_LESSONS
  private exercises: Record<string, Exercise[]> = MOCK_EXERCISES

  private getStoredProgress(): Record<string, Progress> {
    try {
      const stored = sessionStorage.getItem(PROGRESS_STORAGE_KEY)
      if (stored) {
        return JSON.parse(stored) as Record<string, Progress>
      }
    } catch {
      // Ignorar error de parsing
    }
    return { ...INITIAL_MOCK_PROGRESS }
  }

  private saveStoredProgress(data: Record<string, Progress>): void {
    try {
      sessionStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(data))
    } catch {
      // Ignorar
    }
  }

  async listLessons(): Promise<Lesson[]> {
    return Promise.resolve([...this.lessons])
  }

  async getLesson(id: string): Promise<Lesson | null> {
    const found = this.lessons.find((l) => l.id.toLowerCase() === id.toLowerCase())
    return Promise.resolve(found ?? null)
  }

  async getExercises(lessonId: string): Promise<Exercise[]> {
    const list = this.exercises[lessonId.toLowerCase()] ?? []
    return Promise.resolve([...list])
  }

  async saveAttempt(attempt: Attempt): Promise<void> {
    try {
      const existingRaw = sessionStorage.getItem(ATTEMPTS_STORAGE_KEY)
      const existing: Attempt[] = existingRaw ? JSON.parse(existingRaw) : []
      existing.push(attempt)
      sessionStorage.setItem(ATTEMPTS_STORAGE_KEY, JSON.stringify(existing))
    } catch {
      // Ignorar
    }
    return Promise.resolve()
  }

  async getProgress(lessonId: string): Promise<Progress | null> {
    const all = this.getStoredProgress()
    return Promise.resolve(all[lessonId.toLowerCase()] ?? null)
  }

  async listAllProgress(): Promise<Record<string, Progress>> {
    return Promise.resolve(this.getStoredProgress())
  }

  async saveProgress(progress: Progress): Promise<void> {
    const all = this.getStoredProgress()
    all[progress.lessonId.toLowerCase()] = progress
    this.saveStoredProgress(all)
    return Promise.resolve()
  }
}

export const defaultLessonRepository: LessonRepository = new MockLessonRepository()
