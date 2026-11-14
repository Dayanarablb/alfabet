import type { ButtonHTMLAttributes } from 'react'
import { Icon } from './Icon'

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  selected?: boolean
  leadingIcon?: string
}

/**
 * Ficha táctil de palabra o sílaba con altura mínima de 54px y tipografía destacada de 20px.
 * Brinda confirmación visual y mecánica para ejercicios de unión y selección de fonemas.
 */
export function Chip({
  label,
  selected = false,
  leadingIcon,
  className = '',
  disabled = false,
  type = 'button',
  ...rest
}: ChipProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      aria-pressed={selected}
      className={`
        min-h-[54px] min-w-[54px] px-6 py-3 rounded-2xl
        text-body-xl font-semibold tracking-wide
        inline-flex items-center justify-center gap-space-xs
        transition-all duration-150 select-none
        border-2
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
        active:translate-y-0.5 active:scale-95
        ${
          selected
            ? 'bg-primary text-on-primary border-primary shadow-md ring-2 ring-primary/20'
            : 'bg-surface-container-lowest text-on-surface border-outline-variant/40 hover:bg-surface-container-low hover:border-outline shadow-sm'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none shadow-none' : ''}
        ${className}
      `}
      {...rest}
    >
      {leadingIcon && (
        <Icon
          name={leadingIcon}
          size={24}
          filled={selected}
          className="shrink-0"
        />
      )}
      <span className="truncate">{label}</span>
    </button>
  )
}
