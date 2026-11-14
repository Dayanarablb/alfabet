import { Link, useNavigate } from 'react-router-dom'
import { BIENVENIDA_MOCK } from '../mocks'
import { Button, AudioButton, Icon } from '../components/ui'

/**
 * Pantalla 1: Bienvenida (1._bienvenida → /)
 * Primera pantalla de acogida ciudadana y motivación.
 * Un solo botón de audio por mensaje, sin teléfono fijo.
 */
export function WelcomePage() {
  const navigate = useNavigate()
  const data = BIENVENIDA_MOCK

  return (
    <div className="flex flex-col w-full py-space-sm gap-space-md">
      {/* Cabecera de identidad institucional */}
      <header className="flex items-center justify-between gap-space-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-md relative overflow-hidden shrink-0">
            <Icon name="auto_stories" size={28} filled className="text-surface-container-lowest" />
            <div className="absolute bottom-0 inset-x-0 h-1.5 flex" aria-hidden="true">
              <div className="h-full w-1/2 bg-secondary-container" />
              <div className="h-full w-1/4 bg-primary-fixed-dim" />
              <div className="h-full w-1/4 bg-error" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-headline-lg-mobile font-headline-lg-mobile text-primary font-bold tracking-tight">
                {data.appName}
              </span>
            </div>
            <p className="text-label-md text-on-surface-variant font-medium">
              {data.appTagline}
            </p>
          </div>
        </div>
      </header>

      {/* Tarjeta de Mensaje Principal */}
      <section className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm flex flex-col gap-space-md border border-outline-variant/20">
        <div className="flex items-start justify-between gap-3">
          <h1 className="text-headline-xl-mobile font-headline-xl-mobile text-primary font-bold leading-tight">
            {data.heroTitle}
          </h1>
          {/* UN solo botón de audio para el mensaje principal */}
          <AudioButton
            text={data.audioWelcomeText}
            size="lg"
            variant="amber"
            aria-label="Escuchar la bienvenida en voz alta"
          />
        </div>

        {/* Barra de invitación al audio */}
        <div className="w-full bg-surface-container rounded-2xl p-4 flex items-center gap-space-sm">
          <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 shadow-sm">
            <Icon name="volume_up" size={28} filled />
          </div>
          <div className="text-left min-w-0">
            <p className="text-label-lg font-semibold text-on-surface truncate">
              {data.audioSpeakerButtonText}
            </p>
            <p className="text-label-md text-on-surface-variant truncate">
              {data.audioSpeakerSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Retrato Inspirador */}
      <section className="relative w-full h-64 rounded-3xl overflow-hidden shadow-md bg-surface-container-high">
        <img
          alt="Persona adulta estudiando con dignidad y orgullo"
          className="w-full h-full object-cover"
          src="/img/tutor.png"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent flex items-end p-5">
          <div className="flex items-center gap-2.5 text-surface-container-lowest">
            <Icon name="verified" size={24} filled className="text-secondary-fixed" />
            <span className="text-body-bold font-semibold tracking-wide">
              {data.badgeTrust}
            </span>
          </div>
        </div>
      </section>

      {/* Acciones Principales */}
      <section className="flex flex-col gap-space-sm pt-space-xs">
        <Button
          variant="amber"
          fullWidth
          icon="arrow_forward"
          trailingIcon="mic"
          onClick={() => navigate('/perfil')}
          aria-label="Comenzar el aprendizaje y elegir tu perfil"
        >
          {data.startButtonText}
        </Button>

        <Button
          variant="secondary"
          fullWidth
          icon="key"
          onClick={() => navigate('/login')}
          aria-label="Ingresar si ya tengo una cuenta registrada"
        >
          {data.haveAccountButtonText}
        </Button>
      </section>

      {/* Texto de ayuda sin teléfono */}
      <aside className="p-4 rounded-2xl bg-surface-container flex items-center gap-space-sm text-on-surface">
        <Icon name="support_agent" size={26} className="text-primary shrink-0" />
        <span className="text-label-md font-medium text-on-surface-variant">
          {data.helpText}
        </span>
      </aside>

      {/* Acceso al catálogo de componentes */}
      <footer className="text-center pt-space-xs">
        <Link
          to="/design-system"
          className="text-label-md text-primary font-semibold hover:underline"
        >
          Ver catálogo completo de componentes UI
        </Link>
      </footer>
    </div>
  )
}
