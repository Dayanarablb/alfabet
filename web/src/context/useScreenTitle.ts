import { useContext, useEffect } from 'react'
import { ScreenTitleContext } from './screenTitleContextDef'

/**
 * Hook para que cada página defina su propio título, subtítulo y audio en la TopBar,
 * y lo restablezca al desmontarse para no arrastrar títulos de pantallas anteriores.
 */
export function useScreenTitle(title: string, subtitle?: string, audioText?: string) {
  const ctx = useContext(ScreenTitleContext)

  useEffect(() => {
    if (ctx) {
      ctx.setScreenTitle(title, subtitle, audioText)
    }
    document.title = `${title} | Alfabet`

    return () => {
      if (ctx) {
        ctx.setScreenTitle('Alfabet', '', 'Alfabet')
      }
      document.title = 'Alfabet'
    }
  }, [ctx, title, subtitle, audioText])
}
