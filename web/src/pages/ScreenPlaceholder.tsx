import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Card, AudioButton, Icon } from '../components/ui'
import type { StackLayoutContext } from '../layouts/StackLayout'

export interface ScreenPlaceholderProps {
  title: string
  screenCode: string
  description?: string
  shellType: 'mobile_blank' | 'mobile_stack' | 'mobile_tab'
}

/**
 * Componente de página vacía para maquetar rutas del MVP.
 * Los códigos Stitch y el tipo de shell solo se muestran en desarrollo (import.meta.env.DEV).
 */
export function ScreenPlaceholder({
  title,
  screenCode,
  description,
  shellType,
}: ScreenPlaceholderProps) {
  const outletCtx = useOutletContext<StackLayoutContext | null>()

  useEffect(() => {
    if (outletCtx?.setTitle) {
      outletCtx.setTitle(title)
      // En producción no exponemos el código interno
      if (import.meta.env.DEV) {
        outletCtx.setSubtitle(`Pantalla ${screenCode}`)
        outletCtx.setAudioText(`${title}. Código de pantalla ${screenCode}`)
      } else {
        outletCtx.setSubtitle('')
        outletCtx.setAudioText(title)
      }
    }

    return () => {
      outletCtx?.setTitle?.('Alfabet')
      outletCtx?.setSubtitle?.('')
      outletCtx?.setAudioText?.('Alfabet')
    }
  }, [outletCtx, title, screenCode])

  return (
    <div className="flex flex-col gap-space-md py-space-sm flex-1 justify-center">
      <div className="flex items-start justify-between gap-space-sm">
        <div className="flex flex-col gap-1.5 min-w-0">
          {/* Badges de Stitch solo en desarrollo */}
          {import.meta.env.DEV && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-mono text-xs font-semibold">
                Código: {screenCode}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-mono text-xs font-semibold">
                {shellType}
              </span>
            </div>
          )}
          <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-primary tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-body-lg text-on-surface-variant">{description}</p>
          )}
        </div>
        <AudioButton
          text={title}
          size="md"
          variant="amber"
          aria-label={`Escuchar título de la pantalla ${title}`}
        />
      </div>

      <Card
        state="default"
        className="flex flex-col items-center justify-center p-space-xl text-center gap-space-sm min-h-[220px]"
      >
        <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary shadow-sm">
          <Icon name="terminal" size={32} />
        </div>
        <div>
          <h2 className="text-headline-md font-semibold text-on-surface">
            Pantalla preparada
          </h2>
          <p className="text-label-md text-on-surface-variant max-w-sm mt-1">
            Ruta vinculada correctamente al layout <strong>{shellType}</strong> según su especificación de diseño.
          </p>
        </div>
      </Card>
    </div>
  )
}
