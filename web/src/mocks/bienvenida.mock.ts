export interface BienvenidaData {
  appName: string
  appTagline: string
  heroTitle: string
  audioWelcomeText: string
  audioSpeakerButtonText: string
  audioSpeakerSubtitle: string
  badgeTrust: string
  voiceGuideButtonText: string
  startButtonText: string
  haveAccountButtonText: string
  helpText: string
}

export const BIENVENIDA_MOCK: BienvenidaData = {
  appName: 'Alfabet',
  appTagline: 'Ecuador Lee y Crece',
  heroTitle: 'Aprende a leer y escribir a tu ritmo.',
  audioWelcomeText:
    'Bienvenida y bienvenido a Alfabet. Aprende a leer y escribir a tu propio ritmo. Toca el botón amarillo que dice Comenzar para dar tu primer paso.',
  audioSpeakerButtonText: 'Toca aquí para escuchar',
  audioSpeakerSubtitle: 'Voz clara y pausada',
  badgeTrust: 'Gratuito, seguro y para todos',
  voiceGuideButtonText: 'Voz guiada',
  startButtonText: 'Comenzar',
  haveAccountButtonText: 'Ya tengo cuenta',
  helpText: 'Si necesitas ayuda, pide a alguien de confianza que te acompañe.',
}
