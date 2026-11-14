import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { BlankLayout, StackLayout, TabLayout, TutorLayout } from './layouts'
import { WelcomePage } from './pages/WelcomePage'
import { ProfileSelectionPage } from './pages/ProfileSelectionPage'
import { LoginPage } from './pages/LoginPage'
import { VoiceRegisterPage } from './pages/VoiceRegisterPage'
import { ConsentPage } from './pages/ConsentPage'
import { SplashPage } from './pages/SplashPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { DesignSystemPage } from './pages/DesignSystemPage'
import { ScreenPlaceholder } from './pages/ScreenPlaceholder'
import {
  StudentHomePage,
  LessonListPage,
  LessonDetailPage,
  ExerciseSelectionPage,
  ExerciseSuccessFeedbackPage,
  ExerciseFriendlyAttemptPage,
  LessonSummaryPage,
} from './pages/student'
import { AuthProvider } from './context/AuthContext'
import { LessonSessionProvider } from './context/LessonSessionContext'
import { RoleGuard } from './components/RoleGuard'
import App from './App'

/**
 * Wrapper de guardia para rutas de estudiante.
 */
function EstudianteGuard() {
  return (
    <RoleGuard allowedRole="estudiante">
      <Outlet />
    </RoleGuard>
  )
}

/**
 * Wrapper de guardia para rutas de tutor.
 */
function TutorGuard() {
  return (
    <RoleGuard allowedRole="tutor">
      <Outlet />
    </RoleGuard>
  )
}

/**
 * Enrutador principal de la plataforma Alfabet.
 * Asigna cada pantalla a su correspondiente layout y aplica guards de rol.
 */
export function AppRouter() {
  return (
    <AuthProvider>
      <LessonSessionProvider>
        <Routes>
          {/* ── Rutas públicas con BlankLayout ─────────────────── */}
          <Route element={<BlankLayout />}>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/perfil" element={<ProfileSelectionPage />} />
            <Route path="/splash" element={<SplashPage />} />
            <Route path="/tokens" element={<App />} />
            <Route path="/design-system" element={<DesignSystemPage />} />
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
          </Route>

          {/* ── Rutas públicas con StackLayout ─────────────────── */}
          <Route element={<StackLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registro" element={<VoiceRegisterPage />} />
            <Route path="/consentimiento" element={<ConsentPage />} />
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
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/* ── Diagnóstico — solo estudiante — StackLayout ─────── */}
          <Route element={<EstudianteGuard />}>
            <Route element={<StackLayout />}>
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
            </Route>

            {/* Estudiante — StackLayout (pantallas de lección y práctica) */}
            <Route element={<StackLayout />}>
              <Route path="/estudiante/lecciones" element={<LessonListPage />} />
              <Route path="/estudiante/leccion/:id" element={<LessonDetailPage />} />
              <Route path="/estudiante/leccion" element={<Navigate to="/estudiante/lecciones" replace />} />
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
              <Route path="/estudiante/ejercicio/:id" element={<ExerciseSelectionPage />} />
              <Route path="/estudiante/ejercicio" element={<ExerciseSelectionPage />} />
              <Route path="/estudiante/acierto" element={<ExerciseSuccessFeedbackPage />} />
              <Route path="/estudiante/intento" element={<ExerciseFriendlyAttemptPage />} />
              <Route path="/estudiante/resumen" element={<LessonSummaryPage />} />
            </Route>

            {/* Estudiante — TabLayout (pantallas principales con BottomNav) */}
            <Route element={<TabLayout />}>
              <Route path="/estudiante/inicio" element={<StudentHomePage />} />
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
            </Route>
          </Route>

          {/* ── Tutor — solo tutor — TutorLayout ───────────────── */}
          <Route element={<TutorGuard />}>
            <Route element={<TutorLayout />}>
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
            </Route>

            {/* Tutor — StackLayout para rutas de detalle */}
            <Route element={<StackLayout />}>
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
            </Route>
          </Route>

          {/* Ruta catch-all adicional */}
          <Route path="/tutor/perfil" element={<Navigate to="/tutor/inicio" replace />} />
        </Routes>
      </LessonSessionProvider>
    </AuthProvider>
  )
}
