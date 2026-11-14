import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { REGISTRO_MOCK } from '../mocks'
import { Card, Button, AudioButton, MicButton, TextField, Icon } from '../components/ui'

/**
 * Pantalla 4: Registro Asistido por Voz (3._registro_asistido_por_voz → /registro)
 * Permite registrarse hablando con el micrófono o escribiendo datos mínimos.
 */
export function VoiceRegisterPage() {
  const navigate = useNavigate()
  const data = REGISTRO_MOCK

  const [micListening, setMicListening] = useState(false)
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [nameMicActive, setNameMicActive] = useState(false)
  const [phoneMicActive, setPhoneMicActive] = useState(false)

  const handleSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault()
    // Al registrarse pasa a la introducción de diagnóstico o panel de inicio
    navigate('/diagnostico/intro')
  }

  return (
    <div className="flex flex-col w-full py-space-xs gap-space-md">
      {/* Tarjeta de bienvenida y audio guía */}
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

      {/* Sección Habla con nosotros: MicButton prominente */}
      <Card
        state="default"
        className="flex flex-col items-center text-center p-space-md gap-space-sm"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Icon name="record_voice_over" size={24} className="text-secondary" />
            <h2 className="text-headline-md font-headline-md font-bold text-primary">
              {data.voiceSectionTitle}
            </h2>
          </div>
          <AudioButton
            text={data.voiceSectionAudioText}
            size="sm"
            variant="surface"
          />
        </div>

        <p className="text-body-lg text-on-surface-variant max-w-sm">
          {data.voiceSectionSubtitle}
        </p>

        {/* Botón de Micrófono con alternancia de estado */}
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

      {/* Formulario de campos tradicionales */}
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

        {/* Ingreso con huella o SMS */}
        <button
          type="button"
          onClick={() => handleSubmit()}
          className="w-full min-h-[60px] rounded-2xl bg-surface-container text-on-surface font-body-bold font-semibold flex items-center justify-center gap-space-sm shadow-sm active:translate-y-0.5 transition-transform px-space-md hover:bg-surface-container-high focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        >
          <Icon name="fingerprint" size={26} className="text-primary" />
          <span>{data.fastAccessText}</span>
        </button>

        {/* Botón Principal: Entrar a mi clase */}
        <Button
          variant="primary"
          fullWidth
          type="submit"
          trailingIcon="arrow_forward"
          aria-label="Entrar a mi clase y comenzar el diagnóstico"
        >
          {data.submitButtonText}
        </Button>
      </form>

      {/* Enlace de Asistencia de Tutor */}
      <div className="flex justify-center pt-space-xs">
        <a
          href="tel:1800-ALFABET"
          className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-surface-container-high text-primary font-body-bold font-semibold shadow-sm active:scale-95 transition-transform hover:bg-surface-container"
        >
          <Icon name="support_agent" size={24} className="text-secondary" />
          <span>{data.tutorHelpText}</span>
        </a>
      </div>
    </div>
  )
}
