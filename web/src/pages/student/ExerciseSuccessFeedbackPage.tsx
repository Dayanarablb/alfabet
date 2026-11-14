import { useEffect } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { AudioButton, Button, Card, Icon } from '../../components/ui'
import { useLessonSession } from '../../context/useLessonSession'
import type { StackLayoutContext } from '../../layouts/StackLayout'

export function ExerciseSuccessFeedbackPage() {
  const navigate = useNavigate()
  const outletCtx = useOutletContext<StackLayoutContext | null>()
  const {
    state,
    currentExercise,
    isLastExercise,
    nextExercise,
  } = useLessonSession()

  const tutorAudioText =
    '¡Excelente trabajo, Carlos! Has reconocido la palabra con total claridad. Tu constancia de hoy sigue dando frutos firmes.'

  useEffect(() => {
    outletCtx?.setTitle?.('¡Excelente trabajo!')
    outletCtx?.setSubtitle?.('Respuesta correcta')
    outletCtx?.setAudioText?.(tutorAudioText)

    return () => {
      outletCtx?.setTitle?.('Alfabet')
      outletCtx?.setSubtitle?.('')
      outletCtx?.setAudioText?.('Alfabet')
    }
  }, [outletCtx, tutorAudioText])

  const handleContinue = () => {
    if (isLastExercise) {
      navigate('/estudiante/resumen')
    } else {
      nextExercise()
      if (state.lesson) {
        navigate(`/estudiante/ejercicio/${state.lesson.id}`)
      } else {
        navigate('/estudiante/inicio')
      }
    }
  }

  // Opción correcta elegida
  const correctOption = currentExercise?.options.find(
    (o) => o.id === currentExercise.correctOptionId
  )

  return (
    <div className="flex flex-col w-full gap-space-md py-space-xs pb-8">
      {/* Insignia de Racha Activa */}
      <div className="w-full flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed shadow-sm">
          <Icon name="local_fire_department" size={20} filled />
          <span className="text-label-md font-bold">Racha activa: 4 días</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant">
          <Icon name="flag" size={18} />
          <span className="text-label-md font-semibold">
            Ejercicio {state.currentExerciseIndex + 1} de {state.exercises.length || 1}
          </span>
        </div>
      </div>

      {/* Emblema Central de Victoria */}
      <div className="w-full flex flex-col items-center text-center my-2 relative">
        <div className="relative flex items-center justify-center mb-3">
          <div className="w-24 h-24 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center relative">
            <div className="w-16 h-16 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shadow-sm">
              <Icon name="check_circle" size={40} filled />
            </div>
            <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center shadow-md">
              <Icon name="star" size={20} filled />
            </div>
          </div>
        </div>

        <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-primary font-bold tracking-tight mb-2">
          ¡Excelente trabajo, Carlos!
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-sm">
          Has reconocido la palabra con total claridad. Cada acierto fortalece tu lectura.
        </p>
      </div>

      {/* Mensaje del Tutor */}
      <Card state="default" className="flex flex-col gap-3 p-space-md bg-surface-container-lowest shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-secondary">
            <Icon name="record_voice_over" size={22} filled />
            <span className="text-label-md font-bold">Mensaje del Tutor Santiago</span>
          </div>
          <AudioButton
            text={tutorAudioText}
            size="sm"
            variant="surface"
            aria-label="Escuchar mensaje de felicitación del tutor"
          />
        </div>

        <div className="p-3 rounded-xl bg-surface-container-low text-on-surface">
          <p className="text-body-lg italic">
            "¡Gran pronunciación! Vas dominando cada sonido con mucha seguridad y calma."
          </p>
        </div>
      </Card>

      {/* Palabra Validada */}
      {correctOption && (
        <Card state="success" className="flex flex-col gap-2 p-space-md">
          <div className="flex items-center justify-between">
            <span className="text-label-md text-on-surface-variant font-medium">
              Palabra acertada
            </span>
            <span className="text-label-md text-tertiary flex items-center gap-1 font-bold">
              <Icon name="verified" size={18} filled />
              Validada
            </span>
          </div>

          <div className="flex items-center gap-4 bg-surface-container-lowest p-3 rounded-xl">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container flex items-center justify-center shrink-0">
              {correctOption.imageUrl ? (
                <img
                  src={correctOption.imageUrl}
                  alt={correctOption.label}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              ) : (
                <Icon name={correctOption.icon ?? 'star'} size={32} className="text-primary" filled />
              )}
            </div>
            <div className="flex items-center justify-between flex-1 min-w-0">
              <span className="text-headline-md font-bold text-primary tracking-wide truncate">
                {correctOption.label}
              </span>
              <AudioButton
                text={correctOption.audioText}
                size="sm"
                variant="surface"
                aria-label={`Escuchar ${correctOption.label}`}
              />
            </div>
          </div>
        </Card>
      )}

      {/* Botón Continuar */}
      <div className="pt-2">
        <Button
          variant="primary"
          fullWidth
          onClick={handleContinue}
          trailingIcon="arrow_forward"
          aria-label={isLastExercise ? 'Ver resumen de la lección' : 'Ir al siguiente ejercicio'}
        >
          {isLastExercise ? 'Ver mi progreso de la lección' : 'Siguiente ejercicio'}
        </Button>
      </div>
    </div>
  )
}
