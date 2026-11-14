import { Icon } from './Icon'

export type NavTab = 'aprender' | 'practicar' | 'progreso' | 'ayuda'

export interface NavItemConfig {
  id: NavTab
  label: string
  icon: string
}

const NAV_ITEMS: NavItemConfig[] = [
  { id: 'aprender', label: 'Aprender', icon: 'auto_stories' },
  { id: 'practicar', label: 'Practicar', icon: 'edit_note' },
  { id: 'progreso', label: 'Mi progreso', icon: 'stars' },
  { id: 'ayuda', label: 'Ayuda', icon: 'help_outline' },
]

export interface BottomNavProps {
  activeTab?: NavTab
  onTabChange?: (tab: NavTab) => void
  className?: string
}

/**
 * Barra inferior fija de navegación principal (Aprender, Practicar, Mi Progreso, Ayuda).
 * Diseñada con pictogramas destacados, texto ≥16px y áreas táctiles generosas (≥48px).
 */
export function BottomNav({
  activeTab = 'aprender',
  onTabChange,
  className = '',
}: BottomNavProps) {
  return (
    <nav
      aria-label="Navegación principal de la plataforma"
      className={`
        sticky bottom-0 w-full z-40 pb-safe
        bg-surface/95 backdrop-blur-xl
        border-t border-outline-variant/30 shadow-[0_-2px_12px_rgba(0,0,0,0.05)]
        ${className}
      `}
    >
      <div className="flex justify-around items-center h-20 px-space-xs max-w-4xl mx-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.id

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onTabChange?.(item.id)}
              aria-current={isActive ? 'page' : undefined}
              aria-label={`Sección ${item.label}`}
              className={`
                flex flex-col items-center justify-center flex-1
                min-w-[64px] min-h-[56px] py-1 px-1 rounded-2xl
                transition-all duration-150 select-none
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
                active:scale-95
                ${
                  isActive
                    ? 'text-primary font-bold'
                    : 'text-on-surface-variant hover:text-on-surface font-medium'
                }
              `}
            >
              <Icon
                name={item.icon}
                size={28}
                filled={isActive}
                className="transition-transform duration-150"
              />
              <span className="text-label-md mt-0.5 tracking-tight truncate max-w-[84px]">
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
