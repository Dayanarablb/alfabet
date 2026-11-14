import { useEffect } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { AudioButton, Button, Card, Icon } from '../../components/ui'
import { useLessonSession } from '../../context/useLessonSession'
import type { StackLayoutContext } from '../../layouts/StackLayout'

export function LessonSummaryPage() {
  const navigate = useNavigate()
  const outletCtx = useOutletContext<StackLayoutContext | null>()
  const { state } = useLessonSession()

  const earnedStars = state.stars || 3
  const lessonName = state.lesson ? `Letra ${state.lesson.letter}` : 'Lección completada'
  const summaryAudio = `¡Felicitaciones, Carlos! Completaste tu lección de la ${lessonName} y ganaste ${earnedStars} estrellas. Tu esfuerzo diario sigue dando frutos.`

  useEffect(() => {
    outletCtx?.setTitle?.('Resumen de Lección')
    outletCtx?.setSubtitle?.('¡Lección completada!')
    outletCtx?.setAudioText?.(summaryAudio)
  }, [outletCtx, summaryAudio])

  const handleFinish = () => {
    navigate('/estudiante/inicio')
  }

  return (
    <div className="flex flex-col w-full gap-space-md py-space-xs pb-8">
      {/* Insignia Superior */}
      <div className="flex items-center justify-between bg-surface-container-low px-4 py-3 rounded-2xl shadow-sm border border-outline-variant/20">
        <div className="flex items-center gap-2">
          <Icon name="verified" size={22} className="text-primary" filled />
          <span className="text-label-md text-on-surface font-semibold">
            Lección completada • Módulo de Letras
          </span>
        </div>
        <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-label-md rounded-full font-bold">
          100% Éxito
        </span>
      </div>

      {/* Banner de Felicitación del Tutor */}
      <Card state="default" className="flex flex-col gap-4 p-space-md bg-surface-container-lowest shadow-md">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center shrink-0 shadow-inner">
            <Icon name="sentiment_satisfied" size={40} className="text-primary" filled />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <h2 className="text-body-bold font-bold text-primary">Tutor Santiago</h2>
              <Icon name="record_voice_over" size={18} className="text-secondary" />
            </div>
            <p className="text-body-lg text-on-surface mt-1 leading-relaxed">
              “¡Completaste la lección con éxito! Hoy diste un paso enorme hacia tu independencia en la lectura.”
            </p>
          </div>
        </div>

        {/* Reproductor de audio del tutor */}
        <div className="w-full bg-secondary-container text-on-secondary-container rounded-2xl p-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-on-secondary-container text-secondary-fixed flex items-center justify-center shrink-0">
              <Icon name="volume_up" size={24} filled />
            </div>
            <span className="text-label-lg font-bold truncate">
              Escuchar mensaje del tutor
            </span>
          </div>
          <AudioButton
            text={summaryAudio}
            size="md"
            variant="amber"
            aria-label="Escuchar mensaje de felicitación del tutor"
          />
        </div>
      </Card>

      {/* Estrellas y Logros */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Tarjeta de Estrellas Ganadas */}
        <Card state="default" className="flex flex-col items-center justify-center text-center p-5 gap-2 bg-surface-container-lowest shadow-md">
          <span className="text-label-md text-on-surface-variant font-medium">
            Logro de la sesión
          </span>
          <div className="flex items-center gap-2 my-1">
            {[1, 2, 3].map((s) => (
              <Icon
                key={s}
                name="star"
                size={s === 2 ? 52 : 44}
                filled={s <= earnedStars}
                className={s <= earnedStars ? 'text-secondary-container' : 'text-outline-variant'}
              />
            ))}
          </div>
          <p className="text-headline-md text-primary font-bold">
            {earnedStars} de 3 estrellas
          </p>
          <span className="px-3 py-1 bg-surface-container text-on-surface text-label-md rounded-full font-semibold">
            ¡Gran esfuerzo!
          </span>
        </Card>

        {/* Tarjeta de Racha */}
        <Card state="default" className="flex flex-col justify-between p-5 gap-3 bg-surface-container-lowest shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-label-md text-on-surface-variant font-medium">
              Racha de estudio
            </span>
            <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
              <Icon name="local_fire_department" size={24} filled />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-headline-xl text-secondary font-bold">4</span>
              <span className="text-headline-md text-on-surface font-semibold">días seguidos</span>
            </div>
            <p className="text-body-lg text-on-surface-variant mt-1">
              Constancia que transforma tu aprendizaje día a día.
            </p>
          </div>
          <div className="flex items-center gap-1.5 pt-1">
            <div className="flex-1 h-2 rounded-full bg-secondary-container" />
            <div className="flex-1 h-2 rounded-full bg-secondary-container" />
            <div className="flex-1 h-2 rounded-full bg-secondary-container" />
            <div className="flex-1 h-2 rounded-full bg-secondary-container" />
          </div>
        </Card>
      </div>

      {/* Botón Volver al Inicio */}
      <div className="pt-2">
        <Button
          variant="primary"
          fullWidth
          icon="home"
          onClick={handleFinish}
          aria-label="Volver a la pantalla de inicio"
        >
          Volver a mi inicio
        </Button>
      </div>
    </div>
  )
}
