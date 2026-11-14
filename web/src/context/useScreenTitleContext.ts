import { useContext } from 'react'
import { ScreenTitleContext } from './screenTitleContextDef'
import type { ScreenTitleContextType } from './screenTitleContextDef'

export function useScreenTitleContext(): ScreenTitleContextType {
  const ctx = useContext(ScreenTitleContext)
  if (!ctx) {
    throw new Error('useScreenTitleContext debe usarse dentro de ScreenTitleProvider')
  }
  return ctx
}
