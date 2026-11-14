import type { HTMLAttributes } from 'react'

export type ProgressVariant = 'primary' | 'amber' | 'emerald'

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  totalSteps: number
  currentStep: number
  variant?: ProgressVariant
  label?: string
  showLabel?: boolean
  showPercentage?: boolean
  ariaLabel?: string
}

/**
 * Barra de progreso segmentada en pastillas (pills).
 * Reemplaza porcentajes fríos por una secuencia visual y táctil clara de avance.
 */
export function ProgressBar({
  totalSteps,
  currentStep,
  variant = 'emerald',
  label,
  showLabel = true,
  showPercentage = true,
  ariaLabel,
  className = '',
  ...rest
}: ProgressBarProps) {
  const safeTotal = Math.max(1, totalSteps)
  const safeCurrent = Math.min(Math.max(0, currentStep), safeTotal)
  const percentage = Math.round((safeCurrent / safeTotal) * 100)

  const activeColorClasses: Record<ProgressVariant, string> = {
    primary: 'bg-primary',
    amber: 'bg-secondary-container',
    emerald: 'bg-tertiary-fixed-dim',
  }

  const defaultAriaLabel = ariaLabel ?? `Progreso de la lección: paso ${safeCurrent} de ${safeTotal}`

  return (
    <div
      role="progressbar"
      aria-valuenow={safeCurrent}
      aria-valuemin={0}
      aria-valuemax={safeTotal}
      aria-label={defaultAriaLabel}
      className={`flex flex-col gap-space-xs w-full ${className}`}
      {...rest}
    >
      {(showLabel || showPercentage) && (
        <div className="flex items-center justify-between text-label-md text-on-surface-variant font-medium">
          {showLabel && <span>{label ?? `Paso ${safeCurrent} de ${safeTotal}`}</span>}
          {showPercentage && (
            <span className="font-semibold text-on-surface">{percentage}%</span>
          )}
        </div>
      )}

      {/* Contenedor segmentado de pastillas */}
      <div className="flex items-center gap-1.5 w-full h-3.5" aria-hidden="true">
        {Array.from({ length: safeTotal }).map((_, index) => {
          const isCompleted = index < safeCurrent
          const isCurrent = index === safeCurrent - 1

          return (
            <div
              key={index}
              className={`
                h-full flex-1 rounded-full transition-all duration-300
                ${
                  isCompleted
                    ? `${activeColorClasses[variant]} shadow-xs`
                    : 'bg-surface-container-high'
                }
                ${isCurrent ? 'ring-2 ring-offset-1 ring-primary/40' : ''}
              `}
            />
          )
        })}
      </div>
    </div>
  )
}
