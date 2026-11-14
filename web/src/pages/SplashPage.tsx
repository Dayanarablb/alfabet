import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SPLASH_MOCK } from '../mocks'
import { AudioButton, Icon } from '../components/ui'

/**
 * Pantalla 7: Pantalla de Carga / Splash (c1._pantalla_de_carga → /splash)
 * Transición inmersiva de 1,5 segundos con opción de pasar a / (Bienvenida).
 */
export function SplashPage() {
  const navigate = useNavigate()
  const data = SPLASH_MOCK
  const [progress, setProgress] = useState(25)

  useEffect(() => {
    // Incremento suave del progreso
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          return 100
        }
        return prev + 25
      })
    }, 300)

    // Redirección automática tras 1,5 segundos a /
    const autoNavTimer = setTimeout(() => {
      navigate('/', { replace: true })
    }, 1500)

    return () => {
      clearInterval(progressTimer)
      clearTimeout(autoNavTimer)
    }
  }, [navigate])

  return (
    <div className="w-full flex flex-col justify-center items-center py-space-sm flex-1">
      {/* Tarjeta contenedora inmersiva en azul marino profundo */}
      <div
        className="relative w-full rounded-3xl bg-primary-container text-on-primary overflow-hidden shadow-2xl p-space-md flex flex-col justify-between"
        style={{ minHeight: '84vh' }}
      >
        {/* Halos ambientales suaves */}
        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-tertiary-fixed/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Barra superior de estado cívico */}
        <div className="relative z-10 w-full flex items-center justify-between pt-space-xs">
          <div className="inline-flex items-center gap-space-xs bg-surface-container-lowest/15 backdrop-blur-md px-3.5 py-1.5 rounded-full text-on-primary">
            <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed animate-pulse" />
            <span className="text-label-md font-medium text-xs tracking-wide">
              {data.badgeCountry}
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-surface-container-lowest/10 backdrop-blur-sm px-3 py-1 rounded-full text-on-primary-container">
            <Icon name="verified" size={16} filled className="text-tertiary-fixed-dim" />
            <span className="text-label-md text-xs">{data.badgeSystem}</span>
          </div>
        </div>

        {/* Zona central: Emblema y mensaje */}
        <div className="relative z-10 flex flex-col items-center text-center my-auto px-space-xs">
          {/* Emblema con halo pulsante */}
          <div className="relative mb-space-md flex items-center justify-center">
            <div
              className="absolute w-32 h-32 rounded-full bg-secondary-container/25 animate-ping opacity-75"
              aria-hidden="true"
            />
            <div className="relative w-24 h-24 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-lg">
              <Icon name="auto_stories" size={48} filled className="text-primary" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-secondary-container text-on-secondary-container w-9 h-9 rounded-full flex items-center justify-center shadow-md">
              <Icon name="volume_up" size={18} filled />
            </div>
          </div>

          {/* Título de identidad */}
          <h1 className="text-headline-xl-mobile font-headline-xl-mobile font-bold tracking-tight text-on-primary mb-1">
            {data.brandTitle}
            <span className="text-secondary-fixed">{data.brandHighlight}</span>
          </h1>
          <p className="text-body-bold text-on-primary-container max-w-xs mb-space-md">
            {data.brandTagline}
          </p>

          {/* Cita motivacional */}
          <div className="bg-surface-container-lowest/10 backdrop-blur-md rounded-2xl p-space-md max-w-sm mx-auto shadow-sm border border-surface-container-lowest/10">
            <div className="flex items-start gap-3 text-left">
              <div className="w-8 h-8 rounded-full bg-secondary-container/30 flex items-center justify-center shrink-0 mt-0.5">
                <Icon name="lightbulb" size={18} className="text-secondary-fixed" />
              </div>
              <div className="flex flex-col">
                <span className="text-body-bold font-bold text-secondary-fixed text-sm leading-tight mb-1">
                  {data.quoteTitle}
                </span>
                <p className="text-body-lg text-on-primary text-sm leading-snug opacity-95">
                  {data.quoteText}
                </p>
              </div>
            </div>
          </div>

          {/* Riel de progreso de carga */}
          <div className="w-full max-w-xs mt-space-lg flex flex-col items-center">
            <div className="w-full h-3 bg-surface-container-lowest/20 rounded-full overflow-hidden p-0.5 relative">
              <div
                className="h-full bg-gradient-to-r from-secondary-container via-secondary-fixed to-tertiary-fixed-dim rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="w-full flex items-center justify-between mt-2 text-on-primary-container">
              <div className="flex items-center gap-1.5">
                <Icon name="sync" size={16} className="text-tertiary-fixed-dim animate-spin" />
                <span className="text-label-md text-xs">{data.loadingLabel}</span>
              </div>
              <AudioButton
                text={data.audioText}
                size="sm"
                variant="surface"
                aria-label="Escuchar mensaje de bienvenida"
              />
            </div>
          </div>
        </div>

        {/* Pie con garantía offline y botón para omitir */}
        <div className="relative z-10 w-full pt-space-sm border-t border-surface-container-lowest/10 flex flex-col items-center gap-2">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2 text-on-primary-container">
              <Icon name="wifi_off" size={18} className="text-secondary-fixed" />
              <p className="text-label-md text-xs font-medium text-on-primary-container">
                {data.offlineText}
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/', { replace: true })}
              className="text-label-md text-xs font-semibold text-secondary-fixed hover:underline"
            >
              Comenzar ahora
            </button>
          </div>
          <span className="text-label-md text-[11px] text-on-primary-container/70 tracking-wider uppercase text-center">
            {data.regionsText}
          </span>
        </div>
      </div>
    </div>
  )
}
