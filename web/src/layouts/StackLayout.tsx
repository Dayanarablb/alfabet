import { Outlet, useNavigate } from 'react-router-dom'
import { TopBar } from '../components/ui'
import { useScreenTitleContext } from '../context/useScreenTitleContext'

export interface StackLayoutContext {
  setTitle: (title: string) => void
  setSubtitle: (subtitle: string) => void
  setAudioText: (text: string) => void
}

/**
 * Layout con barra superior de navegación y botón volver (mobile_stack).
 * Contenedor de una columna en móvil y centrado de máximo 680px en escritorio.
 * Vincula el título dinámico desde ScreenTitleContext y provee compatibilidad con StackLayoutContext.
 */
export function StackLayout() {
  const navigate = useNavigate()
  const { title, subtitle, audioText, setScreenTitle } = useScreenTitleContext()

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  const setTitle = (newTitle: string) => {
    setScreenTitle(newTitle, subtitle, audioText)
  }

  const setSubtitle = (newSubtitle: string) => {
    setScreenTitle(title, newSubtitle, audioText)
  }

  const setAudioText = (newAudioText: string) => {
    setScreenTitle(title, subtitle, newAudioText)
  }

  return (
    <div className="min-h-dvh bg-background text-on-background flex flex-col selection:bg-secondary-fixed">
      <TopBar
        title={title}
        subtitle={subtitle}
        showBack={true}
        onBack={handleBack}
        audioText={audioText ?? title}
      />
      <main className="w-full max-w-[680px] mx-auto px-margin py-space-md flex-1 flex flex-col pb-safe">
        <Outlet context={{ setTitle, setSubtitle, setAudioText } satisfies StackLayoutContext} />
      </main>
    </div>
  )
}
