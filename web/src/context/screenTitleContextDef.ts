import { createContext } from 'react'

export interface ScreenTitleState {
  title: string
  subtitle?: string
  audioText?: string
}

export interface ScreenTitleContextType extends ScreenTitleState {
  setScreenTitle: (title: string, subtitle?: string, audioText?: string) => void
}

export const ScreenTitleContext = createContext<ScreenTitleContextType | undefined>(undefined)
