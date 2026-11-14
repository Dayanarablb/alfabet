import { useState, useEffect, type ButtonHTMLAttributes } from 'react'
import { Icon } from './Icon'

export interface AudioButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'amber' | 'primary' | 'surface'
}

/**
 * Botón circular de audio omnipresente (Altavoz) para lectura por voz.
 * Diámetro mínimo de 52px con síntesis de voz en español ecuatoriano/latinoamericano.
 */
export function AudioButton({
  text,
  size = 'md',
  variant = 'amber',
  className = '',
  disabled = false,
  onClick,
  ...rest
}: AudioButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false)

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  const sizeClasses: Record<'sm' | 'md' | 'lg', string> = {
    sm: 'w-[52px] h-[52px] min-w-[52px] min-h-[52px]',
    md: 'w-14 h-14 min-w-[56px] min-h-[56px]',
    lg: 'w-16 h-16 min-w-[64px] min-h-[64px]',
  }

  const iconSizes: Record<'sm' | 'md' | 'lg', number> = {
    sm: 26,
    md: 30,
    lg: 34,
  }

  const variantClasses: Record<'amber' | 'primary' | 'surface', string> = {
    amber:
      'bg-secondary-container text-on-secondary-container shadow-md hover:opacity-95 active:translate-y-0.5 focus-visible:outline-secondary',
    primary:
      'bg-primary text-on-primary shadow-md hover:bg-primary-container active:translate-y-0.5 focus-visible:outline-primary',
    surface:
      'bg-surface-container text-primary hover:bg-surface-container-high active:translate-y-0.5 shadow-sm focus-visible:outline-primary',
  }

  const handleSpeak = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e)
    if (e.defaultPrevented) return

    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
      return
    }

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)

    // Preferencia por español (Ecuador) o español general
    utterance.lang = 'es-EC'
    utterance.rate = 0.92 // Ritmo calmado y digno
    utterance.pitch = 1.0

    // Buscar voz en español disponible
    const voices = window.speechSynthesis.getVoices()
    const spanishVoice =
      voices.find((v) => v.lang.startsWith('es-EC')) ||
      voices.find((v) => v.lang.startsWith('es'))
    if (spanishVoice) {
      utterance.voice = spanishVoice
    }

    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    window.speechSynthesis.speak(utterance)
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleSpeak}
      aria-label={`Escuchar en voz alta: ${text}`}
      className={`
        rounded-full rounded-DEFAULT inline-flex items-center justify-center shrink-0
        transition-all duration-150 select-none
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${isSpeaking ? 'ring-4 ring-secondary-container/40 animate-pulse' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
        ${className}
      `}
      {...rest}
    >
      <Icon
        name={isSpeaking ? 'graphic_eq' : 'volume_up'}
        size={iconSizes[size]}
        filled={isSpeaking}
        className="transition-transform active:scale-90"
      />
    </button>
  )
}
