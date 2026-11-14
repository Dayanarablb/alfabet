export interface ProfileOption {
  id: 'estudiante' | 'docente' | 'familiar'
  title: string
  subtitle: string
  audioText: string
  icon: string
  disabled?: boolean
  comingSoon?: boolean
}

export interface PerfilData {
  stepIndicator: string
  title: string
  subtitle: string
  instructionText: string
  instructionAudioText: string
  profiles: ProfileOption[]
  continueButtonText: string
}

export const PERFIL_MOCK: PerfilData = {
  stepIndicator: 'Paso 1 de 3',
  title: '¿Quién eres tú?',
  subtitle: 'Toca el parlante para escuchar cada opción antes de elegir.',
  instructionText: 'Elige quién usará esta aplicación',
  instructionAudioText: 'Elige quién usará esta aplicación. Puedes ser estudiante, tutor o familiar.',
  continueButtonText: 'Continuar',
  profiles: [
    {
      id: 'estudiante',
      title: 'Estudiante',
      subtitle: 'Quiero aprender a leer y escribir',
      audioText: 'Opción uno: Estudiante. Quiero aprender a leer y escribir.',
      icon: 'menu_book',
    },
    {
      id: 'docente',
      title: 'Tutor o Docente',
      subtitle: 'Soy profesor o guía pedagógico',
      audioText: 'Opción dos: Tutor o Docente. Soy profesor o guía pedagógico.',
      icon: 'co_present',
    },
    {
      id: 'familiar',
      title: 'Familiar',
      subtitle: 'Acompaño a un familiar en sus estudios',
      audioText: 'Opción tres: Familiar. Próximamente disponible.',
      icon: 'diversity_1',
      disabled: true,
      comingSoon: true,
    },
  ],
}
