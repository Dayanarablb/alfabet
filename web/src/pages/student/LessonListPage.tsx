import { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { AudioButton, Card, Icon } from '../../components/ui'
import { useLessonSession } from '../../context/useLessonSession'
import type { Lesson, Progress } from '../../types'
import type { StackLayoutContext } from '../../layouts/StackLayout'

export function LessonListPage() {
  const navigate = useNavigate()
  const outletCtx = useOutletContext<StackLayoutContext | null>()
  const { repository, startLesson } = useLessonSession()

  const [lessons, setLessons] = useState<Lesson[]>([])
  const [progressMap, setProgressMap] = useState<Record<string, Progress>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    outletCtx?.setTitle?.('Lecciones de Letras')
    outletCtx?.setSubtitle?.('Elige una letra para practicar')
    outletCtx?.setAudioText?.('Lista de lecciones de letras. Toca la letra que quieras aprender hoy.')

    return () => {
      outletCtx?.setTitle?.('Alfabet')
      outletCtx?.setSubtitle?.('')
      outletCtx?.setAudioText?.('Alfabet')
    }
  }, [outletCtx])

  useEffect(() => {
    let mounted = true
    async function loadData() {
      setLoading(true)
      const [allLessons, allProgress] = await Promise.all([
        repository.listLessons(),
        repository.listAllProgress(),
      ])
      if (mounted) {
        setLessons(allLessons)
        setProgressMap(allProgress)
        setLoading(false)
      }
    }
    loadData()
    return () => {
      mounted = false
    }
  }, [repository])

  const handleSelectLesson = async (lessonId: string) => {
    await startLesson(lessonId)
    navigate(`/estudiante/leccion/${lessonId}`)
  }

  const completedCount = Object.values(progressMap).filter((p) => p.completed).length
  const totalCount = lessons.length || 6
  const percentage = Math.round((completedCount / totalCount) * 100)

  return (
    <div className="flex flex-col w-full gap-space-md py-space-xs pb-8">
      {/* Resumen del Módulo */}
      <section className="bg-surface-container-low rounded-2xl p-space-md shadow-sm border border-outline-variant/20 flex flex-col gap-space-sm">
        <div className="flex items-start justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm min-w-0">
            <div className="w-16 h-16 min-w-[64px] min-h-[64px] rounded-2xl bg-primary text-on-primary flex items-center justify-center shadow-md">
              <Icon name="spellcheck" size={36} filled />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-label-md text-secondary font-bold uppercase tracking-wider">
                Módulo 1
              </span>
              <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-primary font-bold truncate">
                Letras y Sonidos
              </h1>
            </div>
          </div>
          <AudioButton
            text="Aprende los sonidos de las letras con palabras de tu vida cotidiana. Elige una lección de la lista para comenzar."
            size="md"
            variant="amber"
            aria-label="Escuchar descripción del módulo"
          />
        </div>

        <p className="text-body-lg text-on-surface-variant">
          Aprende los sonidos de las letras con palabras de tu vida cotidiana.
        </p>

        {/* Barra de Progreso */}
        <div className="mt-space-xs pt-space-xs flex flex-col gap-space-xs border-t border-outline-variant/20">
          <div className="flex items-center justify-between">
            <span className="text-body-bold font-bold text-primary">Progreso del área</span>
            <span className="text-headline-md font-bold text-primary">{percentage}%</span>
          </div>
          <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden flex gap-1 p-0.5">
            <div
              className="h-full bg-secondary rounded-full transition-all duration-500"
              style={{ width: `${Math.max(10, percentage)}%` }}
            />
            <div className="h-full bg-surface-variant rounded-full flex-1" />
          </div>
          <div className="flex items-center justify-between text-on-surface-variant text-label-md">
            <span>{completedCount} lecciones completadas</span>
            <span>{totalCount} lecciones en total</span>
          </div>
        </div>
      </section>

      {/* Lista de Lecciones */}
      <div className="flex items-center justify-between">
        <h2 className="text-headline-md font-bold text-on-surface">Tu camino de aprendizaje</h2>
        <span className="text-label-md text-on-surface-variant font-medium">Paso a paso</span>
      </div>

      {loading ? (
        <div className="p-8 text-center text-on-surface-variant">Cargando lecciones...</div>
      ) : (
        <div className="flex flex-col gap-space-md">
          {lessons.map((lesson, idx) => {
            const prog = progressMap[lesson.id.toLowerCase()]
            const isCompleted = prog?.completed ?? false
            const stars = prog?.stars ?? 0

            return (
              <Card
                key={lesson.id}
                state={isCompleted ? 'success' : 'default'}
                interactive
                onClick={() => handleSelectLesson(lesson.id)}
                className="flex items-center justify-between gap-space-sm p-space-md"
              >
                <div className="flex items-center gap-space-md min-w-0 flex-1">
                  {/* Letra distintiva */}
                  <div
                    className={`
                      w-16 h-16 min-w-[64px] min-h-[64px] rounded-2xl flex items-center justify-center font-bold text-headline-xl shadow-sm shrink-0
                      ${
                        isCompleted
                          ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                          : 'bg-primary text-on-primary'
                      }
                    `}
                  >
                    {lesson.letter}
                  </div>

                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-label-md font-bold text-secondary uppercase tracking-wider">
                        Lección {idx + 1}
                      </span>
                      {isCompleted && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold">
                          <Icon name="check_circle" size={14} filled />
                          Completada
                        </span>
                      )}
                    </div>
                    <h3 className="text-headline-md font-bold text-on-surface truncate">
                      Letra {lesson.letter} • {lesson.word}
                    </h3>
                    <p className="text-label-md text-on-surface-variant truncate">
                      Sonido {lesson.soundPhoneme}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {isCompleted && stars > 0 && (
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3].map((s) => (
                        <Icon
                          key={s}
                          name="star"
                          size={18}
                          filled={s <= stars}
                          className={s <= stars ? 'text-secondary-container' : 'text-outline-variant'}
                        />
                      ))}
                    </div>
                  )}
                  <Icon name="arrow_forward" size={24} className="text-primary" />
                </div>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
