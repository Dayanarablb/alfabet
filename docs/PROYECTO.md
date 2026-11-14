# Alfabet - Contexto del proyecto

Plataforma PWA de alfabetizacion inclusiva asistida por IA para jovenes y adultos
con dificultades de lectura/escritura (Ecuador). Proyecto de Aplicaciones Distribuidas (ESPE).

## Principios de UI
- Voz, audio e imagenes primero; poco texto; una accion principal por pantalla.
- Botones >= 64px, textos >= 18px, tipografia Lexend, sin MAYUSCULAS en frases.
- Error = tono ambar suave, nunca rojo agresivo. Feedback siempre positivo.
- Todo en espanol. Accesibilidad: aria-label, foco visible, contraste alto.

## Stack
- Frontend: React + Vite + TypeScript + Tailwind CSS v3 (NO actualizar a v4) + vite-plugin-pwa (carpeta /web)
- Backend: servicios independientes (gateway, auth, learning, ai) en /services, con Docker Compose
- BD: PostgreSQL 16 (docker-compose.yml en la raiz)
- IA: dos LLM (uno local con Ollama, otro por API gratuita) con roles tutor y evaluador y respaldo
- Voz: Web Speech API (STT y TTS del navegador)
- Node 24 LTS

## Alcance (fecha limite: 23 de dic de 2026)
Roles implementados: Estudiante y Tutor. Familiar y Administrador quedan solo como diseno.
Disenos de referencia: /design/mvp (cada carpeta tiene screen.png y code.html exportados de Stitch).
Los code.html usan Tailwind por CDN: NO usar el CDN, convertir a componentes React.

## Layouts (shell-type de Stitch)
- mobile_blank: sin barra | mobile_stack: boton volver | mobile_tab: barra inferior
  (Aprender, Practicar, Mi Progreso, Ayuda)

## Responsive
- Breakpoints:
  - Móvil: <640px
  - Tablet: 640px - 1023px
  - Escritorio: >=1024px
- Estudiante: Columna centrada con ancho máximo de 680px en todos los tamaños. En pantallas >=768px la barra inferior se limita a 680px y queda centrada.
- Tutor: En <1024px barra inferior (Inicio, Estudiantes, Dificultades, Perfil); en >=1024px barra lateral izquierda fija y contenido de hasta 1100px con rejilla.
- Viewport: Uso de min-h-dvh, respeto de safe areas (pt-safe, pb-safe), sin desbordamiento horizontal en 360px y respeto de prefers-reduced-motion.

## Reglas
- No modificar /design. Commits pequenos. Sin logica de negocio en componentes UI.
- Ningun secreto en el repositorio.