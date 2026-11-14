import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { Icon } from '../components/ui/Icon'

interface TutorNavItem {
  label: string
  icon: string
  path: string
}

const TUTOR_NAV_ITEMS: TutorNavItem[] = [
  { label: 'Inicio', icon: 'dashboard', path: '/tutor/inicio' },
  { label: 'Estudiantes', icon: 'groups', path: '/tutor/estudiantes' },
  { label: 'Dificultades', icon: 'bar_chart', path: '/tutor/dificultades' },
  { label: 'Perfil', icon: 'account_circle', path: '/tutor/perfil' },
]

/**
 * Layout para tutores.
 * - En >=1024px: barra lateral fija izquierda + contenido max-w-[1100px].
 * - En <1024px: BottomNav con los ítems del tutor.
 */
export function TutorLayout() {
  const navigate = useNavigate()

  return (
    <div className="min-h-dvh bg-background text-on-background flex flex-col lg:flex-row selection:bg-secondary-fixed">
      {/* ── Sidebar Desktop (>=1024px) ─────────────────────────── */}
      <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-full w-[260px] bg-surface-container border-r border-outline-variant/30 shadow-sm z-30 pt-safe">
        {/* Marca */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-outline-variant/20">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-sm shrink-0">
            <Icon name="auto_stories" size={22} filled className="text-on-primary" />
          </div>
          <div>
            <span className="text-headline-md font-bold text-primary leading-none block">Alfabet</span>
            <span className="text-label-md text-on-surface-variant font-medium">Panel del tutor</span>
          </div>
        </div>

        {/* Navegación */}
        <nav aria-label="Navegación del panel del tutor" className="flex-1 flex flex-col gap-1 px-3 py-4 overflow-y-auto">
          {TUTOR_NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              aria-label={`Ir a ${item.label}`}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-label-lg font-semibold transition-all
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary
                hover:bg-surface-container-high
                ${isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-on-surface-variant'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon name={item.icon} size={24} filled={isActive} className="shrink-0" />
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Pie del sidebar */}
        <div className="px-4 py-4 border-t border-outline-variant/20 pb-safe">
          <button
            type="button"
            onClick={() => navigate('/')}
            aria-label="Cerrar sesión"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-label-lg font-semibold text-on-surface-variant hover:bg-surface-container-high transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            <Icon name="logout" size={22} className="shrink-0" />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </aside>

      {/* ── Contenido principal ────────────────────────────────── */}
      <main className="flex-1 flex flex-col lg:pl-[260px] min-h-dvh pb-28 lg:pb-0">
        <div className="w-full max-w-[1100px] mx-auto px-margin py-space-md flex-1 flex flex-col">
          <Outlet />
        </div>
      </main>

      {/* ── BottomNav Móvil (<1024px) ──────────────────────────── */}
      <nav
        aria-label="Navegación principal del tutor"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 pb-safe bg-surface/95 backdrop-blur-xl border-t border-outline-variant/30 shadow-[0_-2px_12px_rgba(0,0,0,0.06)]"
      >
        <div className="flex justify-around items-center min-h-[76px] py-1.5 px-space-xs">
          {TUTOR_NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              aria-label={`Ir a ${item.label}`}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center flex-1 min-w-[64px] min-h-[56px] py-1 px-1 rounded-2xl
                transition-all duration-150 select-none
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
                active:scale-95
                ${isActive
                  ? 'text-primary font-bold'
                  : 'text-on-surface-variant hover:text-on-surface font-medium'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon name={item.icon} size={28} filled={isActive} className="transition-transform duration-150 shrink-0" />
                  <span className="text-[16px] leading-tight text-center whitespace-normal break-words mt-1 max-w-[80px]">
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
