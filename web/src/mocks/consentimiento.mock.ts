export interface CommitmentPoint {
  number: number
  title: string
  description: string
  audioText: string
  icon: string
}

export interface ConsentimientoData {
  pageTitle: string
  headerBadge: string
  bannerTitle: string
  bannerSubtitle: string
  fullAudioText: string
  studentTitle: string
  studentName: string
  studentAge: string
  studentProgram: string
  representativeTitle: string
  representativeName: string
  representativeRelation: string
  pointsSectionTitle: string
  pointsSectionStandard: string
  points: CommitmentPoint[]
  checkboxLabel: string
  checkboxAudioText: string
  submitButtonText: string
}

export const CONSENTIMIENTO_MOCK: ConsentimientoData = {
  pageTitle: 'Autorización de Cuidado Educativo',
  headerBadge: 'Lectura Fácil • MinEduc Ecuador',
  bannerTitle: 'Autorización y cuidado de menores',
  bannerSubtitle: 'Toca el altavoz naranja para escuchar la explicación completa en voz humana clara y pausada.',
  fullAudioText:
    'Autorización y cuidado de menores. Este documento garantiza que los datos y la voz del estudiante están protegidos, son para fines educativos y la plataforma es totalmente gratuita.',
  studentTitle: 'Estudiante inscrito',
  studentName: 'David Pilataxi',
  studentAge: '15 años',
  studentProgram: 'Programa de Alfabetización Juvenil y Nivelación',
  representativeTitle: 'Representante legal acreditado',
  representativeName: 'Manuel Pilataxi',
  representativeRelation: 'Parentesco: Padre / Tutor legal',
  pointsSectionTitle: 'Compromiso de cuidado (4 puntos)',
  pointsSectionStandard: 'Estándar UNESCO',
  points: [
    {
      number: 1,
      title: '¿Para qué usamos la aplicación?',
      description:
        'Práctica de lectura guiada por voz, reconocimiento de letras y ejercicios de cálculo diario diseñados para la vida cotidiana de David.',
      audioText:
        'Punto 1: ¿Para qué usamos la aplicación? Práctica de lectura guiada por voz, reconocimiento de letras y ejercicios de cálculo diario.',
      icon: 'auto_stories',
    },
    {
      number: 2,
      title: 'Protección de la voz y datos personales',
      description:
        'La voz grabada se procesa de forma segura en el dispositivo, se borra automáticamente cada 30 días y nunca se comparte con terceros ni empresas comerciales.',
      audioText:
        'Punto 2: Protección de la voz y datos. La voz grabada se procesa en el dispositivo, se borra cada 30 días y nunca se comparte.',
      icon: 'lock_reset',
    },
    {
      number: 3,
      title: 'Sin publicidad ni costos ocultos',
      description:
        'La plataforma es 100% gratuita, educativa y pública con el aval del Ministerio de Educación de Ecuador. No contiene anuncios ni cobros.',
      audioText:
        'Punto 3: Sin publicidad ni costos. La plataforma es gratuita, pública y sin anuncios comerciales.',
      icon: 'sentiment_satisfied',
    },
    {
      number: 4,
      title: 'Derecho a revocar en todo momento',
      description:
        'El padre o tutor puede pausar o cancelar el permiso en cualquier momento desde su teléfono, sin perder el cupo ni afectar los estudios presenciales de David.',
      audioText:
        'Punto 4: Derecho a revocar. Puedes pausar o cancelar el permiso cuando desees desde tu teléfono sin perder el cupo.',
      icon: 'cancel',
    },
  ],
  checkboxLabel: 'He escuchado y acepto la autorización de uso educativo para David Pilataxi.',
  checkboxAudioText:
    'Casilla de confirmación: He escuchado y acepto la autorización de uso educativo para David Pilataxi.',
  submitButtonText: 'Aceptar y comenzar lecciones',
}
