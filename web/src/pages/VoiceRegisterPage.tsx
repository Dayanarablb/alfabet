import { useState, type FormEvent } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { useEffect } from 'react'
import { REGISTRO_MOCK } from '../mocks'
import { Card, Button, AudioButton, MicButton, TextField, Icon } from '../components/ui'
import { useAuth } from '../context/useAuth'
import type { StackLayoutContext } from '../layouts/StackLayout'

/**
 * Pantalla 4: Registro Asistido por Voz (3._registro_asistido_por_voz → /registro)
 * - Estudiante: muestra pregunta "¿Tienes menos de 18 años?" → Sí va a /consentimiento, No a /diagnostico/intro.
 * - Tutor: sin pregunta de edad ni diagnóstico; va directo a /tutor/inicio.
 * - Elimina "Ingresar con código SMS o huella".
 */
export function VoiceRegisterPage() {
  const navigate = useNavigate()
  const { role, setIsMinor } = useAuth()
  const data = REGISTRO_MOCK
  const outletCtx = useOutletContext<StackLayoutContext | null>()

  const [micListening, setMicListening] = useState(false)
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [nameMicActive, setNameMicActive] = useState(false)
  const [phoneMicActive, setPhoneMicActive] = useState(false)

  // Título dinámico en TopBar
  useEffect(() => {
    const pageTitle = role === 'tutor' ? 'Registro de tutor' : 'Tu registro'
    outletCtx?.setTitle?.(pageTitle)
    outletCtx?.setSubtitle?.('Cuéntanos tu nombre para comenzar')
    outletCtx?.setAudioText?.(data.instructionAudioText)
  }, [outletCtx, role, data.instructionAudioText])

  const handleMinorAnswer = (isMinor: boolean) => {
    setIsMinor(isMinor)
    if (isMinor) {
      navigate('/consentimiento')
    } else {
      navigate('/diagnostico/intro')
    }
  }

  const handleSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault()
    if (role === 'tutor') {
      navigate('/tutor/inicio')
    } else {
      // La pregunta de edad se muestra abajo; aquí no navegamos todavía
    }
  }

  return (
    <div className="flex flex-col w-full py-space-xs gap-space-md">
      {/* Tarjeta de bienvenida */}
      <div className="bg-surface-container rounded-2xl p-space-md shadow-sm flex flex-col gap-space-xs border border-outline-variant/20">
        <div className="flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs">
            <Icon name="waving_hand" size={28} className="text-primary" filled />
            <h1 className="text-headline-md font-headline-md font-bold text-on-surface">
              {data.welcomeTitle}
            </h1>
          </div>
          <AudioButton
            text={data.instructionAudioText}
            size="md"
            variant="amber"
            aria-label="Escuchar indicación de bienvenida"
          />
        </div>
        <p className="text-body-xl text-on-surface-variant">
          {data.instructionText}
        </p>
      </div>

      {/* Sección Micrófono */}
      <Card state="default" className="flex flex-col items-center text-center p-space-md gap-space-sm">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Icon name="record_voice_over" size={24} className="text-secondary" />
            <h2 className="text-headline-md font-headline-md font-bold text-primary">
              {data.voiceSectionTitle}
            </h2>
          </div>
          <AudioButton text={data.voiceSectionAudioText} size="sm" variant="surface" />
        </div>

        <p className="text-body-lg text-on-surface-variant max-w-sm">
          {data.voiceSectionSubtitle}
        </p>

        <div className="my-2">
          <MicButton
            isListening={micListening}
            onClick={() => setMicListening((prev) => !prev)}
            label={micListening ? data.micListeningLabel : data.micButtonLabel}
          />
        </div>

        {micListening && (
          <div className="px-space-md py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-md font-semibold animate-pulse flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping" />
            <span>{data.micListeningLabel}</span>
          </div>
        )}
      </Card>

      {/* Divisor */}
      <div className="flex items-center gap-space-sm my-1">
        <div className="h-0.5 flex-1 bg-surface-container-high rounded-full" />
        <span className="text-label-md text-on-surface-variant font-medium px-space-xs">
          {data.dividerText}
        </span>
        <div className="h-0.5 flex-1 bg-surface-container-high rounded-full" />
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
        <TextField
          label={data.nameLabel}
          placeholder={data.namePlaceholder}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          audioHelpText={data.nameAudioText}
          leadingIcon="person"
          onMicClick={() => setNameMicActive((prev) => !prev)}
          isListening={nameMicActive}
        />

        <TextField
          label={data.phoneLabel}
          placeholder={data.phonePlaceholder}
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          audioHelpText={data.phoneAudioText}
          leadingIcon="smartphone"
          onMicClick={() => setPhoneMicActive((prev) => !prev)}
          isListening={phoneMicActive}
          type="tel"
        />

        {/* Pregunta de edad — solo para estudiantes */}
        {role === 'estudiante' && (
          <div className="bg-surface-container-low rounded-2xl p-space-md border border-outline-variant/20 flex flex-col gap-space-sm">
            <div className="flex items-center justify-between gap-2">
              <p className="text-body-bold font-bold text-on-surface">
                ¿Tienes menos de 18 años?
              </p>
              <AudioButton
                text="¿Tienes menos de dieciocho años? Responde Sí o No."
                size="sm"
                variant="surface"
                aria-label="Escuchar pregunta sobre la edad"
              />
            </div>
            <div className="grid grid-cols-2 gap-space-sm">
              <Button
                variant="primary"
                fullWidth
                type="button"
                onClick={() => handleMinorAnswer(true)}
                aria-label="Sí, tengo menos de 18 años"
              >
                Sí
              </Button>
              <Button
                variant="secondary"
                fullWidth
                type="button"
                onClick={() => handleMinorAnswer(false)}
                aria-label="No, tengo 18 años o más"
              >
                No
              </Button>
            </div>
          </div>
        )}

        {/* Botón principal — solo visible para tutores */}
        {role === 'tutor' && (
          <Button
            variant="primary"
            fullWidth
            type="submit"
            trailingIcon="arrow_forward"
            aria-label="Entrar al panel del tutor"
          >
            {data.submitButtonText}
          </Button>
        )}
      </form>

      {/* Texto de ayuda sin teléfono */}
      <div className="flex justify-center pt-space-xs">
        <div className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-surface-container-high text-on-surface-variant text-label-md font-medium">
          <Icon name="support_agent" size={22} className="text-secondary shrink-0" />
          <span>{data.tutorHelpText}</span>
        </div>
      </div>
    </div>
  )
}
