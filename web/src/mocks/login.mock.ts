export interface LoginData {
  pageTitle: string
  pageSubtitle: string
  welcomeBannerTitle: string
  welcomeBannerSubtitle: string
  audioGuideTitle: string
  audioGuideSubtitle: string
  audioGuideText: string
  voiceLoginTag: string
  voiceLoginTitle: string
  voiceLoginSubtitle: string
  voiceLoginAudioText: string
  dividerText: string
  cedulaLabel: string
  cedulaPlaceholder: string
  cedulaAudioText: string
  pinLabel: string
  pinPlaceholder: string
  pinAudioText: string
  biometricTitle: string
  biometricSubtitle: string
  forgotPasswordText: string
  submitButtonText: string
  encouragementTitle: string
  encouragementText: string
  mockRoles: {
    estudiante: {
      name: string
      route: string
    }
    tutor: {
      name: string
      route: string
    }
  }
}

export const LOGIN_MOCK: LoginData = {
  pageTitle: 'Inicio de Sesión',
  pageSubtitle: 'Ingreso a tus clases',
  welcomeBannerTitle: 'Bienvenido a tu aula',
  welcomeBannerSubtitle: 'Alfabet te da la bienvenida',
  audioGuideTitle: 'Escuchar ayuda',
  audioGuideSubtitle: 'Toca aquí para escuchar cómo ingresar',
  audioGuideText: 'Puedes decir tu número en voz alta con el botón del micrófono o escribirlo abajo con calma.',
  voiceLoginTag: 'Opción más fácil y rápida',
  voiceLoginTitle: 'Entrar con mi voz',
  voiceLoginSubtitle: 'Di tu nombre o tu número aquí',
  voiceLoginAudioText: 'Toca el micrófono grande y di tu nombre o número de teléfono despacio.',
  dividerText: 'O escribe tus datos',
  cedulaLabel: 'Tu teléfono o cédula',
  cedulaPlaceholder: 'Ejemplo: 0991234567',
  cedulaAudioText: 'Escribe tu número de teléfono celular o los diez dígitos de tu cédula de identidad.',
  pinLabel: 'Tu clave o código PIN',
  pinPlaceholder: 'Código de 4 números',
  pinAudioText: 'Ingresa tu código secreto o los cuatro números de tu PIN.',
  biometricTitle: 'Acceso con mi huella',
  biometricSubtitle: 'Toca el sensor de tu teléfono',
  forgotPasswordText: '¿Olvidaste tu clave o necesitas ayuda?',
  submitButtonText: 'Ingresar a mis clases',
  encouragementTitle: 'Cada día aprendemos juntos',
  encouragementText: 'Tus clases guardan tus avances paso a paso de forma segura.',
  mockRoles: {
    estudiante: {
      name: 'Estudiante (Carlos)',
      route: '/estudiante/inicio',
    },
    tutor: {
      name: 'Tutor / Docente (Elena)',
      route: '/tutor/inicio',
    },
  },
}
