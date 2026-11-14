export interface Lesson {
  id: string
  letter: string
  word: string
  imageUrl?: string
  icon?: string
  soundPhoneme: string
  description?: string
  audioText: string
}

export interface ExerciseOption {
  id: string
  label: string
  imageUrl?: string
  icon?: string
  audioText: string
}

export interface Exercise {
  id: string
  lessonId: string
  type: 'selection'
  prompt: string
  audioPrompt: string
  options: ExerciseOption[]
  correctOptionId: string
  hintText: string
  hintAudioText: string
}

export interface Attempt {
  exerciseId: string
  selectedOptionId: string
  correct: boolean
  timestamp: number
}

export interface Progress {
  lessonId: string
  completed: boolean
  stars: number
}
