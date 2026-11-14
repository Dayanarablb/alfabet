import { useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { Card, Button, AudioButton, Icon } from '../components/ui'
import type { StackLayoutContext } from '../layouts/StackLayout'

/**
 * Página de error 404 / Página no encontrada (c10._error_y_p_gina_no_encontrada).
 * Tono amigable y no punitivo, con opciones claras para volver a la plataforma.
 */
export function NotFoundPage() {
  const outletCtx = useOutletContext<StackLayoutContext | null>()

  useEffect(() => {
    if (outletCtx?.setTitle) {
      outletCtx.setTitle('Página no encontrada')
      outletCtx.setSubtitle('Error 404')
      outletCtx.setAudioText('No pudimos encontrar la pantalla que buscas. Pero no te preocupes, puedes volver al inicio.')
    }
  }, [outletCtx])

  return (
    <div className="flex flex-col gap-space-lg py-space-md flex-1 justify-center items-center text-center">
      <div className="flex items-center gap-2">
        <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-mono text-xs font-semibold">
          Código: c10._error_y_p_gina_no_encontrada
        </span>
        <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-mono text-xs font-semibold">
          mobile_stack
        </span>
      </div>

      <div className="w-24 h-24 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shadow-md">
        <Icon name="search_off" size={48} />
      </div>

      <div className="flex flex-col gap-space-xs max-w-md">
        <h1 className="text-headline-lg font-headline-lg text-primary">
          Página no encontrada
        </h1>
        <p className="text-body-lg text-on-surface-variant">
          La dirección que intentas abrir no existe o ha cambiado de lugar.
        </p>
      </div>

      <div className="flex items-center gap-space-xs">
        <AudioButton
          text="No pudimos encontrar la pantalla que buscas. Toca el botón azul para volver al inicio."
          size="lg"
          variant="amber"
          aria-label="Escuchar mensaje de error"
        />
        <span className="text-label-md text-on-surface-variant">Toca para escuchar</span>
      </div>

      <Card state="default" className="w-full max-w-md flex flex-col gap-space-sm p-space-md">
        <Link to="/" className="w-full">
          <Button variant="primary" fullWidth icon="home">
            Volver al inicio
          </Button>
        </Link>
        <Link to="/estudiante/inicio" className="w-full">
          <Button variant="secondary" fullWidth icon="auto_stories">
            Ir a mis lecciones
          </Button>
        </Link>
      </Card>
    </div>
  )
}
