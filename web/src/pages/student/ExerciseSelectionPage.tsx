import { useEffect, useState } from 'react'
import { useParams, useNavigate, useOutletContext } from 'react-router-dom'
import { AudioButton, Button, Card, Icon, MicButton } from '../../components/ui'
import { useLessonSession } from '../../context/useLessonSession'
import type { StackLayoutContext } from '../../layouts/StackLayout'

export function ExerciseSelectionPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const outletCtx = useOutletContext<StackLayoutContext | null>()
  const {
    state,
    startLesson,
    recordAnswer,
    currentExercise,
  } = useLessonSession()

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null)
  const [micActive, setMicActive] = useState(false)
  const [loading, setLoading] = useState(!currentExercise)

  useEffect(() => {
    let mounted = true
    async function init() {
      if (!currentExercise && id) {
        setLoading(true)
        await startLesson(id)
        if (mounted) setLoading(false)
      } else {
        setLoading(false)
      }
    }
    init()
    return () => {
      mounted = false
    }
  }, [id, currentExercise, startLesson])

  const lessonLetter = state.lesson?.letter ?? 'M'
  const promptText = currentExercise?.prompt ?? `¿Cuál empieza con ${lessonLetter}?`
  const audioPrompt = currentExercise?.audioPrompt ?? promptText

  useEffect(() => {
    outletCtx?.setTitle?.(`Ejercicio de Selección`)
    outletCtx?.setSubtitle?.(`Paso ${state.currentExerciseIndex + 1} de ${state.exercises.length || 1}`)
    outletCtx?.setAudioText?.(audioPrompt)

    return () => {
      outletCtx?.setTitle?.('Alfabet')
      outletCtx?.setSubtitle?.('')
      outletCtx?.setAudioText?.('Alfabet')
    }
  }, [outletCtx, audioPrompt, state.currentExerciseIndex, state.exercises.length])

  const handleSelect = (optionId: string) => {
    setSelectedOptionId(optionId)
  }

  const handleConfirm = async () => {
    if (!selectedOptionId) return
    const isCorrect = await recordAnswer(selectedOptionId)
    if (isCorrect) {
      navigate('/estudiante/acierto')
    } else {
      navigate('/estudiante/intento')
    }
  }

  if (loading || !currentExercise) {
    return (
      <div className="p-8 text-center text-on-surface-variant">Cargando ejercicio...</div>
    )
  }

  const stepIndex = state.currentExerciseIndex + 1
  const totalSteps = state.exercises.length || 1

  return (
    <div className="flex flex-col w-full gap-space-md py-space-xs pb-8">
      {/* Progreso del Ejercicio */}
      <section aria-label="Progreso del ejercicio" className="w-full">
        <div className="flex items-center justify-between mb-2">
          <span className="text-label-md text-on-surface-variant font-medium">
            Paso {stepIndex} de {totalSteps} • Reconocimiento auditivo
          </span>
          <span className="text-label-md text-secondary font-bold">
            {Math.round((stepIndex / totalSteps) * 100)}%
          </span>
        </div>
        <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden flex gap-1 p-0.5">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`h-full rounded-full flex-1 transition-all duration-300 ${
                i < stepIndex ? 'bg-secondary' : 'bg-surface-container'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Banner de Audio Principal */}
      <section className="w-full bg-secondary-fixed rounded-2xl p-space-md shadow-sm flex items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-sm min-w-0">
          <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
            <Icon name="volume_up" size={28} filled />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-label-md text-on-secondary-fixed-variant font-bold uppercase tracking-wider text-xs">
                Instrucción en audio
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Voz guía
              </span>
            </div>
            <p className="text-body-bold font-bold text-on-secondary-fixed truncate">
              {promptText}
            </p>
          </div>
        </div>
        <AudioButton
          text={audioPrompt}
          size="lg"
          variant="amber"
          aria-label="Escuchar la pregunta del ejercicio"
        />
      </section>

      {/* Título Central y Fonema */}
      <div className="flex flex-col items-center justify-center text-center my-1">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed mb-2 shadow-xs">
          <Icon name="record_voice_over" size={20} className="text-primary" />
          <span className="text-label-lg font-bold">
            Sonido: {state.lesson?.soundPhoneme ?? '/mmm/'}
          </span>
        </div>
        <h2 className="text-headline-lg-mobile font-headline-lg-mobile text-on-surface font-bold tracking-tight">
          {promptText}
        </h2>
      </div>

      {/* Opciones de Selección */}
      <div
        role="radiogroup"
        aria-label="Opciones de palabras para seleccionar"
        className="flex flex-col gap-space-md w-full"
      >
        {currentExercise.options.map((opt) => {
          const isSelected = selectedOptionId === opt.id

          return (
            <Card
              key={opt.id}
              state={isSelected ? 'selected' : 'default'}
              interactive
              role="radio"
              aria-checked={isSelected}
              onClick={() => handleSelect(opt.id)}
              className="flex items-center justify-between gap-space-sm p-space-sm min-h-[96px]"
            >
              <div className="flex items-center gap-space-md min-w-0 flex-1">
                {/* Imagen o Ícono de la opción */}
                <div className="w-20 h-20 min-w-[80px] rounded-xl overflow-hidden bg-surface-container flex items-center justify-center shadow-xs shrink-0">
                  {opt.imageUrl ? (
                    <img
                      src={opt.imageUrl}
                      alt={opt.label}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  ) : (
                    <Icon name={opt.icon ?? 'star'} size={40} className="text-primary" filled />
                  )}
                </div>

                <div className="flex flex-col min-w-0">
                  <span className="text-headline-md font-bold text-on-surface tracking-wide truncate">
                    {opt.label}
                  </span>
                  <span className="text-label-md text-on-surface-variant">Toca para elegir</span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0" onClick={(e) => e.stopPropagation()}>
                <AudioButton
                  text={opt.audioText}
                  size="md"
                  variant="surface"
                  aria-label={`Escuchar pronunciación de ${opt.label}`}
                />
                {isSelected && (
                  <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
                    <Icon name="check" size={24} />
                  </div>
                )}
              </div>
            </Card>
          )
        })}
      </div>

      {/* Opción Alternativa por Voz (MicButton solo alternar) */}
      <div className="flex flex-col items-center gap-2 py-1">
        <MicButton
          isListening={micActive}
          onClick={() => setMicActive((prev) => !prev)}
          label={
            micActive
              ? 'Te estamos escuchando... Di tu respuesta'
              : 'También puedes responder con tu voz'
          }
        />
        {micActive && (
          <span className="text-label-md text-secondary animate-pulse font-semibold">
            Escuchando tu voz... Di la palabra elegida
          </span>
        )}
      </div>

      {/* Botón Comprobar */}
      <div className="pt-2">
        <Button
          variant={selectedOptionId ? 'primary' : 'secondary'}
          fullWidth
          disabled={!selectedOptionId}
          onClick={handleConfirm}
          trailingIcon="arrow_forward"
          aria-label="Comprobar mi respuesta"
        >
          Comprobar respuesta
        </Button>
      </div>
    </div>
  )
}
