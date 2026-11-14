import { useEffect } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { NOT_FOUND_MOCK } from '../mocks'
import { Card, AudioButton, Icon } from '../components/ui'
import type { StackLayoutContext } from '../layouts/StackLayout'

/**
 * Pantalla 6: Error y Página No Encontrada (c10._error_y_p_gina_no_encontrada → ruta comodín *)
 * Enfoque tranquilizador, empático y no punitivo, con opciones claras para retomar el aprendizaje.
 */
export function NotFoundPage() {
  const navigate = useNavigate()
  const data = NOT_FOUND_MOCK
  const outletCtx = useOutletContext<StackLayoutContext | null>()

  useEffect(() => {
    if (outletCtx?.setTitle) {
      outletCtx.setTitle(data.pageTitle)
      outletCtx.setSubtitle('Página no encontrada')
      outletCtx.setAudioText(data.audioGuideText)
    }
  }, [outletCtx, data])

  return (
    <div className="flex flex-col w-full py-space-xs gap-space-md">
      {/* Barra de audio guía prominente */}
      <Card
        state="default"
        className="bg-surface-container-high flex items-center justify-between gap-space-sm p-space-md border border-outline-variant/30"
      >
        <div className="flex items-center gap-space-sm min-w-0">
          <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 shadow-sm">
            <Icon name="volume_up" size={26} filled />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-label-md text-secondary font-semibold text-xs">
                Voz de apoyo disponible
              </span>
            </div>
            <p className="text-body-bold font-semibold text-on-surface leading-tight truncate">
              {data.audioGuideTitle}
            </p>
          </div>
        </div>
        <AudioButton
          text={data.audioGuideText}
          size="md"
          variant="amber"
          aria-label="Escuchar explicación del estado actual"
        />
      </Card>

      {/* Tarjeta de ilustración y mensaje reconfortante */}
      <section className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm border border-outline-variant/30 flex flex-col items-center">
        {/* Emblema visual cálido */}
        <div className="w-full h-44 bg-gradient-to-b from-surface-container-high/60 to-surface-container-low flex flex-col items-center justify-center relative p-space-md">
          <div className="w-20 h-20 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center shadow-md relative mb-2">
            <Icon name="menu_book" size={44} filled />
            <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-tertiary-fixed text-tertiary flex items-center justify-center shadow-xs">
              <Icon name="check_circle" size={18} filled />
            </div>
          </div>
          <span className="text-label-md text-secondary bg-secondary-fixed/50 px-3 py-1 rounded-full font-semibold text-xs">
            {data.bannerBadge}
          </span>
        </div>

        {/* Mensaje principal */}
        <div className="p-space-md text-center flex flex-col items-center w-full gap-space-xs">
          <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-primary font-bold tracking-tight">
            {data.mainTitle}
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-md">
            {data.mainDescription}
          </p>

          <div className="mt-space-xs inline-flex items-center gap-2 bg-surface-container px-3.5 py-2 rounded-full">
            <Icon name="cloud_done" size={20} filled className="text-primary" />
            <span className="text-label-md text-on-surface font-semibold text-xs">
              {data.savedProgressBadge}
            </span>
          </div>
        </div>
      </section>

      {/* Opciones táctiles para continuar */}
      <section className="flex flex-col gap-space-sm" aria-label="Opciones para continuar">
        <h2 className="text-label-lg font-bold text-primary px-1">
          {data.optionsSectionTitle}
        </h2>

        {data.options.map((opt, idx) => (
          <button
            key={opt.title}
            type="button"
            onClick={() => navigate(opt.route)}
            className={`
              w-full min-h-[64px] rounded-2xl p-space-md flex items-center justify-between text-left
              transition-all duration-150 active:translate-y-0.5 shadow-sm
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary
              ${
                idx === 0
                  ? 'bg-primary text-on-primary hover:bg-primary-container'
                  : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-low border border-outline-variant/30'
              }
            `}
          >
            <div className="flex items-center gap-space-sm min-w-0">
              <div
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center shrink-0
                  ${
                    idx === 0
                      ? 'bg-surface-container-lowest/20 text-on-primary'
                      : 'bg-surface-container-high text-primary'
                  }
                `}
              >
                <Icon name={opt.icon} size={28} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-body-bold font-bold leading-tight truncate">
                  {opt.title}
                </span>
                <span
                  className={`
                    text-label-md text-xs truncate
                    ${idx === 0 ? 'text-primary-fixed-dim' : 'text-on-surface-variant'}
                  `}
                >
                  {opt.subtitle}
                </span>
              </div>
            </div>
            <Icon
              name="chevron_right"
              size={24}
              className={idx === 0 ? 'text-primary-fixed' : 'text-outline'}
            />
          </button>
        ))}
      </section>

      {/* Soporte comunitario */}
      <aside className="bg-surface-container rounded-2xl p-space-md shadow-sm flex items-center justify-between gap-space-sm border border-outline-variant/20">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-11 h-11 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 shadow-sm">
            <Icon name="support_agent" size={24} filled />
          </div>
          <div className="min-w-0">
            <h3 className="text-body-bold font-bold text-on-surface truncate">
              {data.supportTitle}
            </h3>
            <p className="text-label-md text-on-surface-variant text-xs truncate">
              {data.supportSubtitle}
            </p>
          </div>
        </div>
        <span className="px-4 py-2 rounded-xl bg-surface-container text-on-surface-variant text-label-md font-semibold shrink-0">
          {data.supportActionText}
        </span>
      </aside>
    </div>
  )
}
