import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Icon } from './Icon'

export type ButtonVariant = 'primary' | 'amber' | 'secondary'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  icon?: string
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  fullWidth?: boolean
  children: ReactNode
}

/**
 * Botón accesible con altura mínima de 64px y forma pill (completamente redondeado).
 * Diseñado según los principios de tactilidad y alto contraste de Alfabet.
 */
export function Button({
  variant = 'primary',
  icon,
  leadingIcon,
  trailingIcon,
  fullWidth = false,
  className = '',
  disabled = false,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-primary text-on-primary hover:bg-primary-container active:translate-y-0.5 shadow-md focus-visible:outline-primary',
    amber:
      'bg-secondary-container text-on-secondary-container hover:opacity-95 active:translate-y-0.5 shadow-md focus-visible:outline-secondary',
    secondary:
      'bg-surface-container-lowest text-on-surface border-2 border-outline-variant hover:bg-surface-container-low active:translate-y-0.5 shadow-xs focus-visible:outline-primary',
  }

  const disabledStyles = 'opacity-50 cursor-not-allowed active:translate-y-0 shadow-none pointer-events-none'

  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        min-h-[64px] min-w-[48px] px-space-lg py-space-sm rounded-full
        text-body-bold font-semibold tracking-wide
        inline-flex items-center justify-center gap-space-sm
        transition-all duration-150 select-none
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? disabledStyles : ''}
        ${className}
      `}
      {...rest}
    >
      {icon && <Icon name={icon} size={28} className="shrink-0" />}
      {!icon && leadingIcon && <span className="shrink-0">{leadingIcon}</span>}
      <span className="truncate">{children}</span>
      {trailingIcon && (
        <span className="shrink-0">
          {typeof trailingIcon === 'string' ? (
            <Icon name={trailingIcon} size={26} />
          ) : (
            trailingIcon
          )}
        </span>
      )}
    </button>
  )
}
