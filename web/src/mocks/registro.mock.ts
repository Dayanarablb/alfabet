export interface RegistroData {
  pageTitle: string
  welcomeTitle: string
  instructionText: string
  instructionAudioText: string
  voiceSectionTitle: string
  voiceSectionSubtitle: string
  voiceSectionAudioText: string
  micButtonLabel: string
  micListeningLabel: string
  voiceFeedbackText: string
  dividerText: string
  nameLabel: string
  namePlaceholder: string
  nameAudioText: string
  phoneLabel: string
  phonePlaceholder: string
  phoneAudioText: string
  fastAccessText: string
  submitButtonText: string
  tutorHelpText: string
}

export const REGISTRO_MOCK: RegistroData = {
  pageTitle: 'Sesión de Aprendizaje',
  welcomeTitle: '¡Te damos la bienvenida!',
  instructionText: 'Dinos tu nombre o tu número de teléfono para comenzar.',
  instructionAudioText: 'Te damos la bienvenida. Dinos tu nombre o tu número de teléfono para comenzar a aprender.',
  voiceSectionTitle: 'Habla con nosotros',
  voiceSectionSubtitle: 'No necesitas escribir si no quieres. Solo pulsa el botón y di tu nombre con claridad.',
  voiceSectionAudioText: 'No necesitas escribir si no quieres. Solo pulsa el botón grande de micrófono y di tu nombre con calma.',
  micButtonLabel: 'Toca y di tu nombre',
  micListeningLabel: 'Te estamos escuchando...',
  voiceFeedbackText: '¡Te escuchamos! Bienvenida y bienvenido.',
  dividerText: 'O escribe si prefieres',
  nameLabel: 'Tu nombre',
  namePlaceholder: 'Ejemplo: Carmen',
  nameAudioText: 'Escribe tu nombre o cómo te gusta que te llamen.',
  phoneLabel: 'Tu teléfono o código',
  phonePlaceholder: '099 123 4567',
  phoneAudioText: 'Escribe tu número de teléfono celular para guardar tus avances.',
  fastAccessText: 'Acceso rápido sin escribir',
  submitButtonText: 'Entrar a mi clase',
  tutorHelpText: '¿Necesitas ayuda de un guía?',
}
