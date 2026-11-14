import { Outlet } from 'react-router-dom'
import { BottomNav } from '../components/ui'

const STUDENT_NAV_ITEMS = [
  { id: 'aprender' as const, label: 'Aprender', icon: 'auto_stories', path: '/estudiante/inicio' },
  { id: 'practicar' as const, label: 'Practicar', icon: 'edit_note', path: '/estudiante/ejercicio' },
  { id: 'progreso' as const, label: 'Mi Progreso', icon: 'stars', path: '/estudiante/progreso' },
  { id: 'ayuda' as const, label: 'Ayuda', icon: 'help_outline', path: '/estudiante/tutor' },
]

/**
 * Layout con barra inferior de navegación en pestañas (mobile_tab).
 * Columna centrada de máximo 680px. En >=768px la BottomNav también se centra.
 */
export function TabLayout() {
  return (
    <div className="min-h-dvh bg-background text-on-background flex flex-col selection:bg-secondary-fixed">
      <main className="w-full max-w-[680px] mx-auto px-margin py-space-md flex-1 flex flex-col pb-28">
        <Outlet />
      </main>
      {/* En >=768px la nav se limita a 680px y queda centrada */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center">
        <BottomNav items={STUDENT_NAV_ITEMS} className="w-full max-w-[680px]" />
      </div>
    </div>
  )
}
