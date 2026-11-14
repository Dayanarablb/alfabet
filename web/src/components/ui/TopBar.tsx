import type { ReactNode } from 'react'
import { Icon } from './Icon'
import { AudioButton } from './AudioButton'

export interface TopBarProps {
  title: string
  subtitle?: string
  showBack?: boolean
  onBack?: () => void
  backAriaLabel?: string
  audioText?: string
  rightElement?: ReactNode
  className?: string
}

/**
 * Barra superior institucional y de navegación con soporte para zona segura (pt-safe),
 * botón de retorno táctil (≥48px), título legible y botón de lectura por voz.
 */
export function TopBar({
  title,
  subtitle,
  showBack = false,
  onBack,
  backAriaLabel = 'Volver a la pantalla anterior',
  audioText,
  rightElement,
  className = '',
}: TopBarProps) {
  return (
    <header
      className={`
        sticky top-0 w-full z-40 pt-safe
        bg-surface/90 backdrop-blur-xl shadow-sm
        border-b border-outline-variant/20
        ${className}
      `}
    >
      <div className="h-20 px-margin flex items-center justify-between gap-space-sm max-w-4xl mx-auto">
        {/* Lado izquierdo: Botón volver o icono de inicio */}
        <div className="flex items-center gap-space-sm min-w-0 flex-1">
          {showBack && onBack && (
            <button
              type="button"
              onClick={onBack}
              aria-label={backAriaLabel}
              className="
                w-12 h-12 min-w-[48px] min-h-[48px] rounded-full
                bg-surface-container text-on-surface hover:bg-surface-container-high
                flex items-center justify-center shrink-0
                transition-all duration-150 active:translate-y-0.5
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
              "
            >
              <Icon name="arrow_back" size={26} />
            </button>
          )}

          <div className="flex flex-col min-w-0">
            <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-primary tracking-tight truncate">
              {title}
            </h1>
            {subtitle && (
              <span className="text-label-md font-medium text-on-surface-variant truncate">
                {subtitle}
              </span>
            )}
          </div>
        </div>

        {/* Lado derecho: botón de audio y/o acciones complementarias */}
        <div className="flex items-center gap-space-xs shrink-0">
          {audioText && (
            <AudioButton
              text={audioText}
              size="sm"
              variant="amber"
              aria-label={`Escuchar el título: ${title}`}
            />
          )}
          {rightElement}
        </div>
      </div>
    </header>
  )
}
