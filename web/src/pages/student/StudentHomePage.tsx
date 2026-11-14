import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AudioButton, Card, Icon, MicButton } from '../../components/ui'

export function StudentHomePage() {
  const navigate = useNavigate()
  const [tutorListening, setTutorListening] = useState(false)

  const greetingAudio =
    '¡Buen día, Carlos! Qué alegría verte de nuevo. Hoy es un gran día para seguir aprendiendo juntos.'
  const areasAudio =
    'Estas son tus cuatro áreas de estudio: Letras, Palabras, Números y dinero, y Vida diaria. Toca Letras para continuar tus lecciones.'

  return (
    <div className="flex flex-col w-full gap-space-md py-space-xs pb-6">
      {/* Saludo Personalizado y Audio Matutino */}
      <section className="flex flex-col bg-surface-container-low rounded-2xl p-space-md shadow-sm border border-outline-variant/20">
        <div className="flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm min-w-0">
            <div className="w-16 h-16 min-w-[64px] min-h-[64px] rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold text-headline-md shadow-inner">
              <Icon name="person" size={36} filled />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-label-md text-on-surface-variant">Bienvenido de vuelta</span>
              <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-primary font-bold tracking-tight truncate">
                ¡Buen día, Carlos!
              </h1>
            </div>
          </div>
          <AudioButton
            text={greetingAudio}
            size="lg"
            variant="amber"
            aria-label="Escuchar saludo del día"
          />
        </div>

        {/* Indicador de Racha */}
        <div className="mt-space-sm flex items-center justify-between bg-surface-container rounded-xl p-space-sm">
          <div className="flex items-center gap-space-xs">
            <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary flex items-center justify-center shadow-sm">
              <Icon name="local_fire_department" size={24} filled />
            </div>
            <div className="flex flex-col">
              <span className="text-label-lg font-bold text-on-surface">4 días seguidos</span>
              <span className="text-label-md text-on-surface-variant">¡Avanzas con constancia!</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="star" size={22} filled className="text-secondary-container" />
            <Icon name="star" size={22} filled className="text-secondary-container" />
            <Icon name="star" size={22} filled className="text-secondary-container" />
            <Icon name="star" size={22} filled className="text-secondary-container" />
            <Icon name="star" size={22} className="text-outline-variant" />
          </div>
        </div>
      </section>

      {/* Tarjeta Tutor IA Interactivo Destacada */}
      <section className="relative overflow-hidden bg-primary-container text-on-primary rounded-2xl p-space-md shadow-md border border-outline-variant/20">
        <div className="flex flex-col gap-space-sm relative z-10">
          <div className="flex items-center gap-space-sm">
            <div className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-full bg-primary-fixed-dim text-primary flex items-center justify-center shadow-md">
              <Icon name="support_agent" size={32} filled />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-label-md text-primary-fixed uppercase tracking-wider font-semibold">
                Tu Acompañante de Voz
              </span>
              <h2 className="text-headline-lg-mobile font-headline-lg-mobile text-on-primary font-bold truncate">
                Hablar con mi Tutor
              </h2>
            </div>
          </div>
          <p className="text-body-lg text-surface-container-high leading-relaxed">
            ¿Tienes una duda o quieres practicar una palabra? Toca el botón y dímelo en voz alta.
          </p>
          <div className="flex flex-col items-center gap-2 pt-2">
            <MicButton
              isListening={tutorListening}
              onClick={() => setTutorListening((prev) => !prev)}
              label={
                tutorListening
                  ? 'Te estoy escuchando... Di tu pregunta'
                  : 'Toca y pregunta lo que necesites'
              }
            />
            {tutorListening && (
              <span className="text-label-md text-secondary-fixed animate-pulse font-semibold">
                Micrófono activo • Escuchando tu voz
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Áreas de Estudio */}
      <div className="flex items-center justify-between mt-space-xs">
        <div className="flex items-center gap-space-xs">
          <Icon name="school" size={28} className="text-primary" />
          <h2 className="text-headline-md font-headline-md font-bold text-on-background">
            Áreas de estudio
          </h2>
        </div>
        <AudioButton
          text={areasAudio}
          size="md"
          variant="surface"
          aria-label="Escuchar explicación de las áreas de estudio"
        />
      </div>

      {/* Tarjetas de Áreas */}
      <div className="flex flex-col gap-space-md">
        {/* 1. Letras */}
        <Card
          state="default"
          interactive
          onClick={() => navigate('/estudiante/lecciones')}
          className="flex flex-col gap-space-sm p-space-md"
        >
          <div className="flex items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-sm min-w-0">
              <div className="w-16 h-16 min-w-[64px] min-h-[64px] rounded-2xl bg-primary text-on-primary flex items-center justify-center shadow-md font-bold text-headline-xl">
                A
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-label-md text-secondary font-semibold uppercase tracking-wider">
                  Módulo activo
                </span>
                <h3 className="text-headline-md font-headline-md font-bold text-primary">
                  1. Letras y Sonidos
                </h3>
                <span className="text-label-md text-on-surface-variant">
                  Vocales y consonantes cotidianas
                </span>
              </div>
            </div>
            <Icon name="chevron_right" size={28} className="text-primary shrink-0" />
          </div>

          {/* Barra de progreso */}
          <div className="flex flex-col gap-1 pt-1">
            <div className="flex items-center justify-between text-label-md">
              <span className="text-on-surface-variant font-medium">Progreso del módulo</span>
              <span className="text-primary font-bold">65%</span>
            </div>
            <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden flex gap-1 p-0.5">
              <div className="h-full bg-secondary rounded-full w-[65%]" />
              <div className="h-full bg-surface-variant rounded-full flex-1" />
            </div>
          </div>
        </Card>

        {/* 2. Palabras */}
        <Card state="default" className="opacity-75 flex flex-col gap-space-sm p-space-md">
          <div className="flex items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-sm min-w-0">
              <div className="w-16 h-16 min-w-[64px] min-h-[64px] rounded-2xl bg-surface-container-high text-primary flex items-center justify-center shadow-sm">
                <Icon name="menu_book" size={32} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-label-md text-on-surface-variant font-medium">
                  Próximo módulo
                </span>
                <h3 className="text-headline-md font-headline-md font-semibold text-on-surface">
                  2. Palabras Comunes
                </h3>
                <span className="text-label-md text-on-surface-variant">
                  Carteles, letreros y nombres
                </span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant text-xs font-semibold shrink-0">
              Pronto
            </span>
          </div>
        </Card>

        {/* 3. Números y Dinero */}
        <Card state="default" className="opacity-75 flex flex-col gap-space-sm p-space-md">
          <div className="flex items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-sm min-w-0">
              <div className="w-16 h-16 min-w-[64px] min-h-[64px] rounded-2xl bg-surface-container-high text-primary flex items-center justify-center shadow-sm">
                <Icon name="payments" size={32} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-label-md text-on-surface-variant font-medium">
                  Próximo módulo
                </span>
                <h3 className="text-headline-md font-headline-md font-semibold text-on-surface">
                  3. Números y Dinero
                </h3>
                <span className="text-label-md text-on-surface-variant">
                  Monedas, vueltos y fechas
                </span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant text-xs font-semibold shrink-0">
              Pronto
            </span>
          </div>
        </Card>
      </div>
    </div>
  )
}
