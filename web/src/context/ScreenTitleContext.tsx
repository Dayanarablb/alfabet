import { useState, useCallback, useMemo, type ReactNode } from 'react'
import {
  ScreenTitleContext,
  type ScreenTitleContextType,
  type ScreenTitleState,
} from './screenTitleContextDef'

export type { ScreenTitleContextType, ScreenTitleState }

export function ScreenTitleProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ScreenTitleState>({
    title: 'Alfabet',
    subtitle: undefined,
    audioText: undefined,
  })

  const setScreenTitle = useCallback((title: string, subtitle?: string, audioText?: string) => {
    setState({ title, subtitle, audioText })
  }, [])

  const value = useMemo<ScreenTitleContextType>(
    () => ({
      ...state,
      setScreenTitle,
    }),
    [state, setScreenTitle]
  )

  return <ScreenTitleContext.Provider value={value}>{children}</ScreenTitleContext.Provider>
}
