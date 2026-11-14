import { useEffect, useState } from 'react'
import { useParams, useNavigate, useOutletContext } from 'react-router-dom'
import { AudioButton, Button, Card, Icon } from '../../components/ui'
import { useLessonSession } from '../../context/useLessonSession'
import type { Lesson } from '../../types'
import type { StackLayoutContext } from '../../layouts/StackLayout'

export function LessonDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const outletCtx = useOutletContext<StackLayoutContext | null>()
  const { repository, startLesson, state } = useLessonSession()

  const [lesson, setLesson] = useState<Lesson | null>(state.lesson)
  const [loading, setLoading] = useState(!state.lesson)

  useEffect(() => {
    let mounted = true
    async function load() {
      if (!id) return
      if (!state.lesson || state.lesson.id.toLowerCase() !== id.toLowerCase()) {
        setLoading(true)
        const found = await repository.getLesson(id)
        if (mounted && found) {
          setLesson(found)
          await startLesson(id)
          setLoading(false)
        }
      } else {
        setLesson(state.lesson)
        setLoading(false)
      }
    }
    load()
    return () => {
      mounted = false
    }
  }, [id, state.lesson, repository, startLesson])

  useEffect(() => {
    if (lesson) {
      outletCtx?.setTitle?.(`Lección: Letra ${lesson.letter}`)
      outletCtx?.setSubtitle?.(`Conociendo la letra ${lesson.letter}`)
      outletCtx?.setAudioText?.(lesson.audioText)
    }

    return () => {
      outletCtx?.setTitle?.('Alfabet')
      outletCtx?.setSubtitle?.('')
      outletCtx?.setAudioText?.('Alfabet')
    }
  }, [lesson, outletCtx])

  const handleStartExercise = () => {
    if (!lesson) return
    navigate(`/estudiante/ejercicio/${lesson.id}`)
  }

  if (loading || !lesson) {
    return <div className="p-8 text-center text-on-surface-variant">Cargando lección...</div>
  }

  return (
    <div className="flex flex-col w-full gap-space-md py-space-xs pb-8">
      {/* Progreso del Paso */}
      <section aria-label="Progreso de la lección" className="w-full">
        <div className="flex items-center justify-between mb-2">
          <span className="text-label-md text-primary font-bold tracking-wide">
            Paso 1 de 3
          </span>
          <span className="text-label-md text-on-surface-variant font-medium">
            Conociendo la letra
          </span>
        </div>
        <div className="flex items-center gap-2 w-full h-3">
          <div className="flex-1 h-full bg-primary rounded-full" />
          <div className="flex-1 h-full bg-surface-container-highest rounded-full" />
          <div className="flex-1 h-full bg-surface-container-highest rounded-full" />
        </div>
      </section>

      {/* Banner de Instrucción en Audio */}
      <section className="w-full bg-secondary-container text-on-secondary-container rounded-2xl p-4 shadow-md flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-12 h-12 rounded-xl bg-on-secondary-container text-secondary-fixed flex items-center justify-center shrink-0">
            <Icon name="volume_up" size={28} filled />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-label-md uppercase tracking-wider font-bold opacity-90">
              Escuchar instrucción
            </span>
            <p className="text-body-bold font-bold text-on-secondary-container truncate">
              Mira la letra y escucha cómo suena
            </p>
          </div>
        </div>
        <AudioButton
          text={`Mira la letra ${lesson.letter} y escucha cómo suena: ${lesson.soundPhoneme}, como en ${lesson.word}.`}
          size="lg"
          variant="amber"
          aria-label="Reproducir instrucción en voz alta"
        />
      </section>

      {/* Tarjeta Central: Letra y Referencia Cotidiana */}
      <Card state="default" className="flex flex-col items-center p-space-md gap-space-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full items-center">
          {/* Muestra de la Letra */}
          <div className="flex flex-col items-center justify-center bg-surface-container-low rounded-2xl p-6 min-h-[190px]">
            <span className="text-[96px] leading-none font-bold text-primary select-none">
              {lesson.letter}
            </span>
            <div className="mt-2 inline-flex items-center px-4 py-1.5 bg-surface-container rounded-full">
              <span className="text-body-bold font-bold text-primary tracking-widest font-mono">
                {lesson.soundPhoneme}
              </span>
            </div>
          </div>

          {/* Objeto de Referencia Real */}
          <div className="flex flex-col items-center bg-surface-container-low rounded-2xl overflow-hidden min-h-[190px]">
            <div className="w-full h-36 bg-surface-container flex items-center justify-center overflow-hidden">
              {lesson.imageUrl ? (
                <img
                  src={lesson.imageUrl}
                  alt={lesson.word}
                  className="w-full h-full object-cover select-none"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              ) : (
                <Icon name={lesson.icon ?? 'star'} size={72} className="text-primary" filled />
              )}
            </div>
            <div className="w-full py-3 px-2 bg-surface-container text-center flex items-center justify-center">
              <span className="text-body-bold font-bold text-on-surface">
                <span className="text-secondary font-extrabold">{lesson.letter}</span> de {lesson.word}
              </span>
            </div>
          </div>
        </div>

        {/* Burbuja de descripción de sonido */}
        {lesson.description && (
          <div className="w-full py-2.5 px-4 bg-surface-container rounded-xl flex items-center justify-center gap-3">
            <Icon name="graphic_eq" size={24} className="text-primary" />
            <span className="text-label-md text-on-surface-variant font-medium text-center">
              {lesson.description}
            </span>
          </div>
        )}
      </Card>

      {/* Botones de Acción */}
      <section className="flex flex-col gap-space-sm pt-2">
        <Button
          variant="amber"
          fullWidth
          icon="volume_up"
          onClick={() => {
            if ('speechSynthesis' in window) {
              window.speechSynthesis.cancel()
              const u = new SpeechSynthesisUtterance(lesson.audioText)
              u.lang = 'es-EC'
              window.speechSynthesis.speak(u)
            }
          }}
          aria-label={`Escuchar el sonido de la letra ${lesson.letter}`}
        >
          Escuchar el sonido ({lesson.soundPhoneme})
        </Button>

        <Button
          variant="primary"
          fullWidth
          trailingIcon="arrow_forward"
          onClick={handleStartExercise}
          aria-label="Comenzar ejercicio de práctica"
        >
          Practicar con un ejercicio
        </Button>
      </section>
    </div>
  )
}
