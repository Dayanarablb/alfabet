import type { CSSProperties } from 'react'

export interface IconProps {
  name: string
  filled?: boolean
  size?: number | string
  className?: string
  ariaLabel?: string
  ariaHidden?: boolean
  style?: CSSProperties
}

/**
 * Componente envoltorio accesible para Material Symbols Outlined.
 * Admite iconos lineales y con relleno (filled).
 */
export function Icon({
  name,
  filled = false,
  size = 24,
  className = '',
  ariaLabel,
  ariaHidden = !ariaLabel,
  style,
}: IconProps) {
  const fontSize = typeof size === 'number' ? `${size}px` : size

  return (
    <span
      className={`material-symbols-outlined inline-block select-none align-middle ${className}`}
      aria-hidden={ariaHidden ? 'true' : undefined}
      aria-label={ariaLabel}
      role={ariaLabel ? 'img' : undefined}
      style={{
        fontSize,
        fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
        ...style,
      }}
    >
      {name}
    </span>
  )
}
