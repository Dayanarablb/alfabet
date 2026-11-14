import { Routes, Route, Link } from 'react-router-dom'
import { BlankLayout, StackLayout, TabLayout } from './layouts'
import { ScreenPlaceholder } from './pages/ScreenPlaceholder'
import { NotFoundPage } from './pages/NotFoundPage'
import { DesignSystemPage } from './pages/DesignSystemPage'
import App from './App'
import { Button } from './components/ui'

/**
 * Página inicial de Bienvenida con accesos directos de navegación y prueba.
 */
function WelcomeScreen() {
  return (
    <div className="flex flex-col gap-space-lg py-space-md flex-1 justify-center">
      <div className="flex items-start justify-between gap-space-sm">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-mono text-xs font-semibold">
              Código: 1._bienvenida
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-mono text-xs font-semibold">
              mobile_blank
            </span>
          </div>
          <h1 className="text-headline-xl-mobile font-headline-xl-mobile text-primary font-bold">
            Bienvenida
          </h1>
          <p className="text-body-lg text-on-surface-variant">
            Plataforma inclusiva de alfabetización asistida por voz.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
        <Link to="/perfil" className="w-full">
          <Button variant="primary" fullWidth icon="person">
            Elegir mi perfil
          </Button>
        </Link>
        <Link to="/login" className="w-full">
          <Button variant="secondary" fullWidth icon="login">
            Iniciar sesión
          </Button>
        </Link>
        <Link to="/estudiante/inicio" className="w-full">
          <Button variant="amber" fullWidth icon="auto_stories">
            Panel de estudiante
          </Button>
        </Link>
        <Link to="/design-system" className="w-full">
          <Button variant="secondary" fullWidth icon="widgets">
            Catálogo de UI
          </Button>
        </Link>
      </div>

      <div className="flex justify-center pt-2">
        <Link
          to="/tokens"
          className="text-label-md text-primary hover:underline font-semibold"
        >
          Ver paleta de tokens y tipografías
        </Link>
      </div>
    </div>
  )
}

/**
 * Configuración central de rutas anidadas en sus layouts correspondientes según shell-type.
 */
export function AppRouter() {
  return (
    <Routes>
      {/* 1. Rutas con BlankLayout (shell-type: mobile_blank) */}
      <Route element={<BlankLayout />}>
        <Route path="/" element={<WelcomeScreen />} />
        <Route
          path="/perfil"
          element={
            <ScreenPlaceholder
              title="Selección de perfil"
              screenCode="2._selecci_n_de_perfil"
              shellType="mobile_blank"
            />
          }
        />
        <Route
          path="/diagnostico/letras"
          element={
            <ScreenPlaceholder
              title="Diagnóstico de letras"
              screenCode="e5._diagn_stico_letras"
              shellType="mobile_blank"
            />
          }
        />
        <Route path="/tokens" element={<App />} />
        <Route path="/design-system" element={<DesignSystemPage />} />
      </Route>

      {/* 2. Rutas con StackLayout (shell-type: mobile_stack) */}
      <Route element={<StackLayout />}>
        <Route
          path="/login"
          element={
            <ScreenPlaceholder
              title="Inicio de sesión"
              screenCode="c4._inicio_de_sesi_n"
              shellType="mobile_stack"
            />
          }
        />
        <Route
          path="/registro"
          element={
            <ScreenPlaceholder
              title="Registro asistido por voz"
              screenCode="3._registro_asistido_por_voz"
              shellType="mobile_stack"
            />
          }
        />
        <Route
          path="/consentimiento"
          element={
            <ScreenPlaceholder
              title="Consentimiento informado para menores"
              screenCode="c8._consentimiento_informado_para_menores"
              shellType="mobile_stack"
            />
          }
        />
        <Route
          path="/diagnostico/intro"
          element={
            <ScreenPlaceholder
              title="Introducción al diagnóstico"
              screenCode="e4._introducci_n_al_diagn_stico"
              shellType="mobile_stack"
            />
          }
        />
        <Route
          path="/diagnostico/numeros"
          element={
            <ScreenPlaceholder
              title="Diagnóstico de números"
              screenCode="e6._diagn_stico_n_meros"
              shellType="mobile_stack"
            />
          }
        />
        <Route
          path="/diagnostico/palabras"
          element={
            <ScreenPlaceholder
              title="Diagnóstico de palabras"
              screenCode="e7._diagn_stico_palabras"
              shellType="mobile_stack"
            />
          }
        />
        <Route
          path="/diagnostico/oral"
          element={
            <ScreenPlaceholder
              title="Diagnóstico de comprensión oral"
              screenCode="e8._diagn_stico_comprensi_n_oral"
              shellType="mobile_stack"
            />
          }
        />
        <Route
          path="/diagnostico/resultado"
          element={
            <ScreenPlaceholder
              title="Resultado del diagnóstico"
              screenCode="e9._resultado_del_diagn_stico"
              shellType="mobile_stack"
            />
          }
        />
        <Route
          path="/estudiante/lecciones"
          element={
            <ScreenPlaceholder
              title="Lista de lecciones de letras"
              screenCode="e12._lista_de_lecciones_letras"
              shellType="mobile_stack"
            />
          }
        />
        <Route
          path="/estudiante/leccion"
          element={
            <ScreenPlaceholder
              title="Lección de letra"
              screenCode="e13._lecci_n_de_letra"
              shellType="mobile_stack"
            />
          }
        />
        <Route
          path="/estudiante/repite"
          element={
            <ScreenPlaceholder
              title="Escucha y repite con micrófono"
              screenCode="e17._escucha_y_repite_con_micr_fono"
              shellType="mobile_stack"
            />
          }
        />
        <Route
          path="/estudiante/ejercicio"
          element={
            <ScreenPlaceholder
              title="Ejercicio de selección"
              screenCode="e18._ejercicio_de_selecci_n"
              shellType="mobile_stack"
            />
          }
        />
        <Route
          path="/estudiante/acierto"
          element={
            <ScreenPlaceholder
              title="Retroalimentación de acierto"
              screenCode="e24._retroalimentaci_n_de_acierto"
              shellType="mobile_stack"
            />
          }
        />
        <Route
          path="/estudiante/intento"
          element={
            <ScreenPlaceholder
              title="Retroalimentación amigable"
              screenCode="e25._retroalimentaci_n_amigable"
              shellType="mobile_stack"
            />
          }
        />
        <Route
          path="/estudiante/resumen"
          element={
            <ScreenPlaceholder
              title="Resumen de lección"
              screenCode="e26._resumen_de_lecci_n"
              shellType="mobile_stack"
            />
          }
        />
        <Route
          path="/tutor/estudiantes/:id"
          element={
            <ScreenPlaceholder
              title="Detalle de estudiante"
              screenCode="t3._detalle_de_estudiante"
              shellType="mobile_stack"
            />
          }
        />
        <Route
          path="/tutor/dificultades"
          element={
            <ScreenPlaceholder
              title="Análisis de dificultades"
              screenCode="t5._an_lisis_de_dificultades"
              shellType="mobile_stack"
            />
          }
        />
        <Route
          path="/sin-conexion"
          element={
            <ScreenPlaceholder
              title="Modo sin conexión"
              screenCode="c9._modo_sin_conexi_n"
              shellType="mobile_stack"
            />
          }
        />
        {/* Ruta comodín * -> Página no encontrada */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* 3. Rutas con TabLayout (shell-type: mobile_tab) */}
      <Route element={<TabLayout />}>
        <Route
          path="/estudiante/inicio"
          element={
            <ScreenPlaceholder
              title="Inicio del estudiante"
              screenCode="e10._inicio_del_estudiante"
              shellType="mobile_tab"
            />
          }
        />
        <Route
          path="/estudiante/tutor"
          element={
            <ScreenPlaceholder
              title="Tutoría asistida por voz"
              screenCode="e27._tutor_ia_conversaci_n_por_voz"
              shellType="mobile_tab"
            />
          }
        />
        <Route
          path="/estudiante/progreso"
          element={
            <ScreenPlaceholder
              title="Mi progreso y habilidades"
              screenCode="e38._mi_progreso_y_habilidades"
              shellType="mobile_tab"
            />
          }
        />
        <Route
          path="/tutor/inicio"
          element={
            <ScreenPlaceholder
              title="Inicio del tutor"
              screenCode="t1._inicio_del_tutor"
              shellType="mobile_tab"
            />
          }
        />
        <Route
          path="/tutor/estudiantes"
          element={
            <ScreenPlaceholder
              title="Lista de estudiantes"
              screenCode="t2._lista_de_estudiantes"
              shellType="mobile_tab"
            />
          }
        />
      </Route>
    </Routes>
  )
}
