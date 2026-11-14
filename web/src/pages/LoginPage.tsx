import { useState, useEffect, type FormEvent } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { LOGIN_MOCK } from '../mocks'
import { Card, Button, AudioButton, TextField, Icon } from '../components/ui'
import { useAuth } from '../context/useAuth'
import type { StackLayoutContext } from '../layouts/StackLayout'

/**
 * Pantalla 3: Inicio de Sesión (c4._inicio_de_sesi_n → /login)
 * - Selector de rol simulado solo visible en DEV.
 * - Sin "Acceso con mi huella".
 * - Navega a /estudiante/inicio o /tutor/inicio según rol.
 */
export function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const data = LOGIN_MOCK
  const outletCtx = useOutletContext<StackLayoutContext | null>()

  const [simulatedRole, setSimulatedRole] = useState<'estudiante' | 'tutor'>('estudiante')
  const [voiceLoginActive, setVoiceLoginActive] = useState(false)
  const [cedula, setCedula] = useState('')
  const [pin, setPin] = useState('')
  const [showPin, setShowPin] = useState(false)
  const [micActiveCedula, setMicActiveCedula] = useState(false)

  useEffect(() => {
    outletCtx?.setTitle?.(data.pageTitle)
    outletCtx?.setSubtitle?.(data.pageSubtitle)
    outletCtx?.setAudioText?.(data.audioGuideText)
  }, [outletCtx, data])

  const handleSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault()
    login(simulatedRole)
    if (simulatedRole === 'tutor') {
      navigate('/tutor/inicio')
    } else {
      navigate('/estudiante/inicio')
    }
  }

  return (
    <div className="flex flex-col w-full py-space-xs gap-space-md">
      {/* Banner de bienvenida */}
      <div className="w-full rounded-2xl bg-surface-container shadow-sm p-space-md flex items-center justify-between gap-space-sm border border-outline-variant/20">
        <div className="flex items-center gap-space-sm min-w-0">
          <div className="w-14 h-14 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 shadow-md">
            <Icon name="waving_hand" size={30} filled />
          </div>
          <div className="min-w-0">
            <p className="text-body-bold font-bold text-on-surface truncate">
              {data.welcomeBannerTitle}
            </p>
            <p className="text-label-md text-on-surface-variant truncate">
              {data.welcomeBannerSubtitle}
            </p>
          </div>
        </div>
        <AudioButton
          text={`${data.welcomeBannerTitle}. ${data.welcomeBannerSubtitle}`}
          size="md"
          variant="amber"
          aria-label="Escuchar bienvenida"
        />
      </div>

      {/* Selector de rol simulado — solo en desarrollo */}
      {import.meta.env.DEV && (
        <div className="bg-surface-container-low p-space-sm rounded-2xl border border-outline-variant/30 flex flex-col gap-2">
          <span className="text-label-md font-semibold text-on-surface-variant">
            Simular inicio de sesión como:
          </span>
          <div className="grid grid-cols-2 gap-space-xs">
            <button
              type="button"
              onClick={() => setSimulatedRole('estudiante')}
              aria-pressed={simulatedRole === 'estudiante'}
              className={`
                py-2.5 px-3 rounded-xl text-label-md font-semibold flex items-center justify-center gap-2 transition-all
                ${
                  simulatedRole === 'estudiante'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                }
              `}
            >
              <Icon name="school" size={20} filled={simulatedRole === 'estudiante'} />
              <span>Estudiante</span>
            </button>
            <button
              type="button"
              onClick={() => setSimulatedRole('tutor')}
              aria-pressed={simulatedRole === 'tutor'}
              className={`
                py-2.5 px-3 rounded-xl text-label-md font-semibold flex items-center justify-center gap-2 transition-all
                ${
                  simulatedRole === 'tutor'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                }
              `}
            >
              <Icon name="co_present" size={20} filled={simulatedRole === 'tutor'} />
              <span>Tutor</span>
            </button>
          </div>
        </div>
      )}

      {/* Guía de Audio */}
      <Card state="default" className="bg-surface-container-high flex items-center justify-between gap-space-sm p-space-md">
        <div className="flex items-center gap-space-sm min-w-0">
          <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 shadow-sm">
            <Icon name="volume_up" size={26} filled />
          </div>
          <div className="min-w-0">
            <p className="text-body-bold font-bold text-on-surface">{data.audioGuideTitle}</p>
            <p className="text-label-md text-on-surface-variant truncate">{data.audioGuideSubtitle}</p>
          </div>
        </div>
        <AudioButton
          text={data.audioGuideText}
          size="md"
          variant="amber"
          aria-label="Escuchar instrucciones de ingreso"
        />
      </Card>

      {/* Entrada con Voz */}
      <div className="w-full bg-surface-container-lowest rounded-2xl p-space-md shadow-sm border border-outline-variant/20 flex flex-col items-center gap-space-sm text-center">
        <span className="text-label-md text-on-surface-variant font-medium">
          {data.voiceLoginTag}
        </span>
        <button
          type="button"
          onClick={() => setVoiceLoginActive((prev) => !prev)}
          aria-pressed={voiceLoginActive}
          aria-label={
            voiceLoginActive
              ? 'Detener escucha de voz'
              : 'Iniciar ingreso diciendo tu nombre o número'
          }
          className={`
            w-full min-h-[96px] rounded-2xl px-space-md py-space-sm
            flex items-center justify-center gap-space-md shadow-md
            transition-all duration-150 active:translate-y-0.5
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary
            ${
              voiceLoginActive
                ? 'bg-secondary-container text-on-secondary-container ring-4 ring-secondary-container/40 animate-pulse'
                : 'bg-secondary-container text-on-secondary-container hover:opacity-95'
            }
          `}
        >
          <div className="w-16 h-16 rounded-full bg-on-secondary-container text-secondary-container flex items-center justify-center shrink-0 shadow-sm">
            <Icon name={voiceLoginActive ? 'graphic_eq' : 'mic'} size={36} filled />
          </div>
          <div className="text-left min-w-0">
            <span className="block text-headline-lg-mobile font-headline-lg-mobile font-bold leading-tight">
              {voiceLoginActive ? 'Escuchando tu voz...' : data.voiceLoginTitle}
            </span>
            <span className="block text-label-md opacity-90 truncate">
              {voiceLoginActive ? 'Di tu número o nombre claro' : data.voiceLoginSubtitle}
            </span>
          </div>
        </button>

        <div className="flex items-center gap-2">
          <AudioButton text={data.voiceLoginAudioText} size="sm" variant="surface" />
          <span className="text-label-md text-on-surface-variant">Escuchar cómo entrar con tu voz</span>
        </div>
      </div>

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
          label={data.cedulaLabel}
          placeholder={data.cedulaPlaceholder}
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
          audioHelpText={data.cedulaAudioText}
          leadingIcon="badge"
          onMicClick={() => setMicActiveCedula((prev) => !prev)}
          isListening={micActiveCedula}
          type="tel"
          inputMode="numeric"
        />

        {/* Campo PIN */}
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center justify-between">
            <label
              htmlFor="pin-input"
              className="text-body-bold font-semibold text-on-surface flex items-center gap-space-xs"
            >
              <Icon name="key" size={22} className="text-primary" />
              <span>{data.pinLabel}</span>
            </label>
            <AudioButton text={data.pinAudioText} size="sm" variant="surface" />
          </div>

          <div className="relative w-full min-h-[64px] rounded-2xl bg-surface-container-lowest border-2 border-outline-variant/40 hover:border-outline focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30 flex items-center shadow-sm">
            <input
              id="pin-input"
              type={showPin ? 'text' : 'password'}
              placeholder={data.pinPlaceholder}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full h-full min-h-[64px] bg-transparent px-space-md pr-16 text-body-xl font-normal text-on-surface placeholder:text-outline/70 focus:outline-none rounded-2xl tracking-wider"
            />
            <button
              type="button"
              onClick={() => setShowPin((prev) => !prev)}
              aria-label={showPin ? 'Ocultar código PIN' : 'Mostrar código PIN'}
              className="absolute right-3 w-12 h-12 min-w-[48px] min-h-[48px] rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              <Icon name={showPin ? 'visibility_off' : 'visibility'} size={24} />
            </button>
          </div>
        </div>

        {/* Botón Principal */}
        <div className="pt-space-xs">
          <Button
            variant="primary"
            fullWidth
            type="submit"
            trailingIcon="arrow_forward"
            aria-label={`Ingresar a mis clases como ${simulatedRole}`}
          >
            {data.submitButtonText}
          </Button>
        </div>
      </form>

      {/* Tarjeta de Motivación */}
      <div className="w-full p-space-md bg-surface-container-low rounded-2xl shadow-sm flex items-center gap-space-sm border border-outline-variant/20">
        <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
          <Icon name="diversity_3" size={26} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-body-bold font-bold text-on-surface truncate">
            {data.encouragementTitle}
          </p>
          <p className="text-label-md text-on-surface-variant">
            {data.encouragementText}
          </p>
        </div>
      </div>
    </div>
  )
}
