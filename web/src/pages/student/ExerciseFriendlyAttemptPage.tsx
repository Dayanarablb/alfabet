import { useEffect } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { Button, Icon } from '../../components/ui'
import { useLessonSession } from '../../context/useLessonSession'
import type { StackLayoutContext } from '../../layouts/StackLayout'

export function ExerciseFriendlyAttemptPage() {
  const navigate = useNavigate()
  const outletCtx = useOutletContext<StackLayoutContext | null>()
  const { state, currentExercise, retryExercise } = useLessonSession()

  const hintText =
    currentExercise?.hintText ??
    `Recuerda que empieza con el sonido ${state.lesson?.soundPhoneme ?? '/mmm/'} como en ${state.lesson?.word ?? 'Manzana'}`
  const hintAudio =
    currentExercise?.hintAudioText ??
    `¡Casi! Estuviste muy cerca. Recuerda que empieza con el sonido ${state.lesson?.soundPhoneme ?? 'mmm'}. Tómate tu tiempo y vuelve a intentarlo.`

  useEffect(() => {
    outletCtx?.setTitle?.('Casi lo tienes')
    outletCtx?.setSubtitle?.('Aprendiendo paso a paso')
    outletCtx?.setAudioText?.(hintAudio)
  }, [outletCtx, hintAudio])

  const handleRetry = () => {
    retryExercise()
    if (state.lesson) {
      navigate(`/estudiante/ejercicio/${state.lesson.id}`)
    } else {
      navigate('/estudiante/inicio')
    }
  }

  return (
    <div className="flex flex-col w-full gap-space-md py-space-xs pb-8">
      {/* Insignia Alentadora */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-3.5 py-1.5 rounded-full shadow-sm">
          <Icon name="spa" size={18} className="text-secondary" filled />
          <span className="text-label-md font-bold">Casi lo tienes • Aprendiendo juntos</span>
        </div>
        <span className="text-label-md text-on-surface-variant font-medium">Sin prisa</span>
      </div>

      {/* Emblema Central Ámbar Cálido (Nunca punitivo ni rojo) */}
      <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-md flex flex-col items-center text-center relative overflow-hidden border border-outline-variant/20">
        <div className="relative w-24 h-24 rounded-full bg-secondary-fixed flex items-center justify-center shadow-sm mb-4">
          <div className="w-20 h-20 rounded-full bg-secondary-container flex items-center justify-center animate-pulse">
            <Icon name="lightbulb" size={44} className="text-surface-container-lowest" filled />
          </div>
          <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-tertiary-fixed text-tertiary flex items-center justify-center shadow">
            <Icon name="volunteer_activism" size={20} filled />
          </div>
        </div>

        <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-on-surface font-bold">
          ¡Casi! Estuviste muy cerca.
        </h1>
        <p className="mt-2 text-body-lg text-on-surface-variant max-w-sm">
          No te preocupes en absoluto, cada intento fortalece tu memoria. Tómate todo el tiempo que necesites.
        </p>

        {/* Pista del Tutor */}
        <div className="mt-5 w-full bg-surface-container-low rounded-xl p-4 text-left shadow-sm border border-outline-variant/20">
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
                <Icon name="record_voice_over" size={18} filled />
              </div>
              <span className="text-label-md font-bold text-primary">Pista del Tutor Santiago</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-secondary-fixed-dim text-on-secondary-fixed text-xs font-semibold">
              Consejo
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 bg-surface-container-lowest p-3 rounded-lg">
            {state.lesson?.imageUrl && (
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-surface-container">
                <img
                  src={state.lesson.imageUrl}
                  alt={state.lesson.word}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-body-lg text-on-surface">
                {hintText}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Botones de Acción */}
      <section className="flex flex-col gap-space-sm pt-2">
        <Button
          variant="amber"
          fullWidth
          icon="volume_up"
          onClick={() => {
            if ('speechSynthesis' in window) {
              window.speechSynthesis.cancel()
              const u = new SpeechSynthesisUtterance(hintAudio)
              u.lang = 'es-EC'
              window.speechSynthesis.speak(u)
            }
          }}
          aria-label="Escuchar pista en voz alta"
        >
          Escuchar la pista otra vez
        </Button>

        <Button
          variant="primary"
          fullWidth
          icon="replay"
          onClick={handleRetry}
          aria-label="Volver a intentar el ejercicio"
        >
          Intentarlo de nuevo
        </Button>
      </section>
    </div>
  )
}
