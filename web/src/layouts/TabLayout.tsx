import { Outlet } from 'react-router-dom'
import { BottomNav } from '../components/ui'

/**
 * Layout con barra inferior de navegación en pestañas (mobile_tab).
 * Contenedor de una columna en móvil y centrado de máximo 680px en escritorio.
 */
export function TabLayout() {
  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col selection:bg-secondary-fixed">
      <main className="w-full max-w-[680px] mx-auto px-margin py-space-md flex-1 flex flex-col pb-28">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}
