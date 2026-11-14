import { useId, type InputHTMLAttributes } from 'react'
import { Icon } from './Icon'
import { AudioButton } from './AudioButton'

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  helperText?: string
  error?: string
  audioHelpText?: string
  leadingIcon?: string
  onMicClick?: () => void
  isListening?: boolean
  micAriaLabel?: string
}

/**
 * Campo de texto táctil con altura mínima de 64px, caracteres grandes (20px)
 * y botón de micrófono integrado a la derecha para dictado por voz.
 */
export function TextField({
  label,
  helperText,
  error,
  audioHelpText,
  leadingIcon,
  onMicClick,
  isListening = false,
  micAriaLabel,
  id,
  className = '',
  disabled = false,
  placeholder,
  ...rest
}: TextFieldProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const speechText = audioHelpText ?? (label ? `${label}. ${placeholder ?? ''}` : placeholder ?? '')

  return (
    <div className={`flex flex-col gap-space-xs w-full ${className}`}>
      {/* Cabecera del campo: etiqueta y botón de audio opcional */}
      {label && (
        <div className="flex items-center justify-between gap-space-xs">
          <label
            htmlFor={inputId}
            className="text-body-bold font-semibold text-on-surface flex items-center gap-space-xs"
          >
            {leadingIcon && <Icon name={leadingIcon} size={22} className="text-primary" />}
            <span>{label}</span>
          </label>
          {speechText && (
            <AudioButton
              text={speechText}
              size="sm"
              variant="surface"
              aria-label={`Escuchar instrucción para el campo ${label}`}
            />
          )}
        </div>
      )}

      {/* Contenedor del input y botón de micrófono */}
      <div
        className={`
          relative w-full min-h-[64px] rounded-2xl bg-surface-container-lowest
          border-2 transition-all duration-150 flex items-center shadow-sm
          focus-within:ring-2 focus-within:ring-offset-1
          ${
            error
              ? 'border-secondary-container focus-within:border-secondary-container focus-within:ring-secondary-container/40'
              : 'border-outline-variant/40 hover:border-outline focus-within:border-primary focus-within:ring-primary/30'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed bg-surface-container' : ''}
        `}
      >
        <input
          id={inputId}
          disabled={disabled}
          placeholder={placeholder}
          className={`
            w-full h-full min-h-[64px] bg-transparent px-space-md
            text-body-xl font-normal text-on-surface placeholder:text-outline/70
            focus:outline-none rounded-2xl
            ${onMicClick ? 'pr-16' : ''}
          `}
          {...rest}
        />

        {/* Botón de micrófono a la derecha */}
        {onMicClick && (
          <div className="absolute right-2 flex items-center justify-center">
            <button
              type="button"
              disabled={disabled}
              onClick={onMicClick}
              aria-label={
                micAriaLabel ??
                (isListening
                  ? 'Detener dictado por voz'
                  : 'Dictar con tu voz en este campo')
              }
              aria-pressed={isListening}
              className={`
                w-12 h-12 min-w-[48px] min-h-[48px] rounded-full
                flex items-center justify-center transition-all duration-150
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                active:scale-90
                ${
                  isListening
                    ? 'bg-secondary-container text-on-secondary-container shadow-md animate-pulse ring-4 ring-secondary-container/30 focus-visible:outline-secondary'
                    : 'bg-surface-container text-primary hover:bg-surface-container-high focus-visible:outline-primary'
                }
              `}
            >
              <Icon
                name="mic"
                size={26}
                filled={isListening}
              />
            </button>
          </div>
        )}
      </div>

      {/* Mensaje de ayuda o error suave (ámbar, nunca punitivo) */}
      {error ? (
        <p className="text-label-md text-secondary-container font-semibold flex items-center gap-1.5 pt-0.5">
          <Icon name="info" size={18} />
          <span>{error}</span>
        </p>
      ) : helperText ? (
        <p className="text-label-md text-on-surface-variant font-medium pt-0.5">
          {helperText}
        </p>
      ) : null}
    </div>
  )
}
