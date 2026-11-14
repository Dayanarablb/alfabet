export interface NotFoundOption {
  title: string
  subtitle: string
  icon: string
  route: string
}

export interface NotFoundData {
  pageTitle: string
  audioGuideTitle: string
  audioGuideText: string
  bannerBadge: string
  mainTitle: string
  mainDescription: string
  savedProgressBadge: string
  optionsSectionTitle: string
  options: NotFoundOption[]
  supportTitle: string
  supportSubtitle: string
  supportActionText: string
}

export const NOT_FOUND_MOCK: NotFoundData = {
  pageTitle: 'Sesión de Lectura',
  audioGuideTitle: 'Toca aquí para escuchar qué sucedió y cómo volver a tu camino',
  audioGuideText:
    'No te preocupes. Este camino no está disponible en este momento, pero todos tus avances y medallas están guardados. Puedes tocar el botón para volver a tu pantalla de inicio.',
  bannerBadge: 'Tu esfuerzo sigue seguro',
  mainTitle: '¡Ups! Este camino no está disponible en este momento.',
  mainDescription:
    'Puede que la lección haya cambiado de lugar o que la conexión esté descansando. Todo tu progreso y tus medallas están a salvo en tu teléfono.',
  savedProgressBadge: 'Tus 14 palabras aprendidas están guardadas',
  optionsSectionTitle: '¿Hacia dónde deseas ir ahora?',
  options: [
    {
      title: 'Volver a mi pantalla de inicio',
      subtitle: 'Ir a la portada de mi cartilla',
      icon: 'home',
      route: '/',
    },
    {
      title: 'Ir a mis lecciones',
      subtitle: 'Continuar con el programa de aprendizaje',
      icon: 'auto_stories',
      route: '/estudiante/inicio',
    },
    {
      title: 'Ver mis lecciones guardadas',
      subtitle: 'Funciona sin internet ni saldo móvil',
      icon: 'offline_pin',
      route: '/sin-conexion',
    },
  ],
  supportTitle: '¿Necesitas ayuda de un tutor comunitario?',
  supportSubtitle: 'Estamos disponibles para guiarte por teléfono paso a paso.',
  supportActionText: 'Llamar a mi tutor',
}
