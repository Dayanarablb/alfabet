import type { ButtonHTMLAttributes } from 'react'
import { Icon } from './Icon'

export type MicState = 'idle' | 'listening'

export interface MicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  state?: MicState
  isListening?: boolean
  label?: string
  showLabel?: boolean
}

/**
 * Botón circular prominente de voz (micrófono) con diámetro de 72 a 80px.
 * Incluye halo pulsante en estado 'listening' para respuesta táctil y visual clara.
 */
export function MicButton({
  state,
  isListening,
  label,
  showLabel = true,
  className = '',
  disabled = false,
  type = 'button',
  ...rest
}: MicButtonProps) {
  const currentListening = isListening !== undefined ? isListening : state === 'listening'

  const defaultLabel = currentListening ? 'Escuchando tu voz...' : 'Toca para hablar'
  const displayLabel = label ?? defaultLabel

  return (
    <div className="inline-flex flex-col items-center gap-space-xs">
      <div className="relative flex items-center justify-center">
        {/* Halo pulsante animado en modo escucha */}
        {currentListening && (
          <span
            className="absolute inline-flex w-full h-full rounded-full bg-secondary-container/40 animate-ping opacity-75 pointer-events-none"
            aria-hidden="true"
          />
        )}

        <button
          type={type}
          disabled={disabled}
          aria-label={
            currentListening
              ? 'Micrófono escuchando tu voz. Toca para detener'
              : 'Activar micrófono para responder con tu voz'
          }
          aria-pressed={currentListening}
          className={`
            relative z-10 w-20 h-20 min-w-[72px] min-h-[72px] sm:w-[80px] sm:h-[80px]
            rounded-full flex flex-col items-center justify-center
            transition-all duration-200 select-none
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4
            active:translate-y-0.5
            ${
              currentListening
                ? 'bg-secondary-container text-on-secondary-container shadow-xl ring-8 ring-secondary-container/30 focus-visible:outline-secondary'
                : 'bg-primary text-on-primary shadow-lg hover:bg-primary-container focus-visible:outline-primary'
            }
            ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none shadow-none' : ''}
            ${className}
          `}
          {...rest}
        >
          <Icon
            name="mic"
            size={36}
            filled={currentListening}
            className={`transition-transform duration-200 ${currentListening ? 'scale-110' : ''}`}
          />
        </button>
      </div>

      {showLabel && (
        <span
          className={`
            text-label-md font-semibold transition-colors
            ${currentListening ? 'text-secondary-fixed-variant' : 'text-on-surface-variant'}
          `}
        >
          {displayLabel}
        </span>
      )}
    </div>
  )
}
