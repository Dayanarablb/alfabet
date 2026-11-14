import type { HTMLAttributes, ReactNode, KeyboardEvent } from 'react'

export type CardState = 'default' | 'selected' | 'success' | 'tryAgain'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  state?: CardState
  interactive?: boolean
  selected?: boolean
  children: ReactNode
}

/**
 * Tarjeta táctil con soporte para los estados clave de aprendizaje:
 * default, selected, success y tryAgain (retroalimentación restaurativa ámbar, nunca punitiva).
 */
export function Card({
  state = 'default',
  interactive,
  selected,
  className = '',
  children,
  onClick,
  onKeyDown,
  role,
  tabIndex,
  ...rest
}: CardProps) {
  // Soporte directo para prop boolean 'selected'
  const currentState: CardState = selected ? 'selected' : state
  const isClickable = interactive ?? Boolean(onClick)

  const stateStyles: Record<CardState, string> = {
    default:
      'bg-surface-container-lowest text-on-surface border-2 border-outline-variant/30 shadow-sm',
    selected:
      'bg-surface-container-low text-on-surface border-[3px] border-primary shadow-md ring-2 ring-primary/20',
    success:
      'bg-tertiary-fixed/25 text-on-surface border-[3px] border-tertiary-container shadow-md',
    tryAgain:
      'bg-secondary-fixed/25 text-on-surface border-[3px] border-secondary-container shadow-md',
  }

  const interactiveStyles = isClickable
    ? 'cursor-pointer active:translate-y-0.5 hover:shadow-md transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
    : ''

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (onKeyDown) onKeyDown(e)
    if (isClickable && onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick(e as unknown as React.MouseEvent<HTMLDivElement>)
    }
  }

  return (
    <div
      role={role ?? (isClickable ? 'button' : undefined)}
      tabIndex={tabIndex ?? (isClickable ? 0 : undefined)}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={`
        relative rounded-2xl p-space-md min-h-[48px]
        transition-all duration-150
        ${stateStyles[currentState]}
        ${interactiveStyles}
        ${className}
      `}
      {...rest}
    >
      {children}
    </div>
  )
}
