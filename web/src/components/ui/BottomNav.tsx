import { useLocation, useNavigate } from 'react-router-dom'
import { Icon } from './Icon'

export type NavTab = 'aprender' | 'practicar' | 'progreso' | 'ayuda'

export interface NavItemConfig {
  id: NavTab
  label: string
  icon: string
  path: string
}

const NAV_ITEMS: NavItemConfig[] = [
  { id: 'aprender', label: 'Aprender', icon: 'auto_stories', path: '/estudiante/inicio' },
  { id: 'practicar', label: 'Practicar', icon: 'edit_note', path: '/estudiante/ejercicio' },
  { id: 'progreso', label: 'Mi Progreso', icon: 'stars', path: '/estudiante/progreso' },
  { id: 'ayuda', label: 'Ayuda', icon: 'help_outline', path: '/estudiante/tutor' },
]

export interface BottomNavProps {
  activeTab?: NavTab
  onTabChange?: (tab: NavTab) => void
  className?: string
}

/**
 * Determina qué pestaña está activa según la ruta actual en React Router.
 */
function resolveActiveTab(pathname: string, overrideTab?: NavTab): NavTab {
  if (overrideTab) return overrideTab

  if (pathname.includes('/progreso')) return 'progreso'
  if (pathname.includes('/tutor')) return 'ayuda'
  if (
    pathname.includes('/ejercicio') ||
    pathname.includes('/repite') ||
    pathname.includes('/acierto') ||
    pathname.includes('/intento') ||
    pathname.includes('/resumen')
  ) {
    return 'practicar'
  }
  if (
    pathname.includes('/inicio') ||
    pathname.includes('/lecciones') ||
    pathname.includes('/leccion') ||
    pathname.startsWith('/estudiante')
  ) {
    return 'aprender'
  }

  return 'aprender'
}

/**
 * Barra inferior fija de navegación principal (Aprender, Practicar, Mi Progreso, Ayuda).
 * Muestra etiquetas completas (≥16px) con quiebre centrado a dos líneas si es necesario
 * y marca automáticamente la pestaña activa según la ruta actual.
 */
export function BottomNav({
  activeTab: activeTabProp,
  onTabChange,
  className = '',
}: BottomNavProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const currentActiveTab = resolveActiveTab(location.pathname, activeTabProp)

  const handleTabClick = (item: NavItemConfig) => {
    onTabChange?.(item.id)
    if (location.pathname !== item.path) {
      navigate(item.path)
    }
  }

  return (
    <nav
      aria-label="Navegación principal de la plataforma"
      className={`
        fixed bottom-0 left-0 right-0 z-40 pb-safe
        bg-surface/95 backdrop-blur-xl
        border-t border-outline-variant/30 shadow-[0_-2px_12px_rgba(0,0,0,0.06)]
        ${className}
      `}
    >
      <div className="flex justify-around items-center min-h-[76px] py-1.5 px-space-xs max-w-4xl mx-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = currentActiveTab === item.id

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleTabClick(item)}
              aria-current={isActive ? 'page' : undefined}
              aria-label={`Ir a la sección ${item.label}`}
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
                className="transition-transform duration-150 shrink-0"
              />
              <span className="text-[16px] leading-tight text-center whitespace-normal break-words mt-1 max-w-[96px]">
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
