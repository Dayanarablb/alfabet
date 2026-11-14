import { Outlet } from 'react-router-dom'

/**
 * Layout sin barras superiores ni inferiores (mobile_blank).
 * Contenedor de una columna en móvil y centrado de máximo 680px en escritorio.
 */
export function BlankLayout() {
  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col pt-safe pb-safe selection:bg-secondary-fixed">
      <main className="w-full max-w-[680px] mx-auto px-margin py-space-md flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  )
}
