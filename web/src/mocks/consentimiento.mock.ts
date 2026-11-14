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
  studentProgram: string
  representativeTitle: string
  representativeRelation: string
  pointsSectionTitle: string
  pointsSectionStandard: string
  points: CommitmentPoint[]
  checkboxLabel: string
  checkboxAudioText: string
  submitButtonText: string
}

export const CONSENTIMIENTO_MOCK: ConsentimientoData = {
  pageTitle: 'Autorización',
  headerBadge: 'Lectura Fácil • Compromiso de Cuidado',
  bannerTitle: 'Autorización y cuidado de menores',
  bannerSubtitle: 'Toca el altavoz naranja para escuchar la explicación completa en voz clara y pausada.',
  fullAudioText:
    'Autorización para el uso de la aplicación educativa. Este documento explica de forma clara y transparente cómo se cuidan los datos y la privacidad del estudiante menor de edad.',
  studentTitle: 'Estudiante',
  studentProgram: 'Programa de Alfabetización y Nivelación',
  representativeTitle: 'Representante legal',
  representativeRelation: 'Madre, padre o tutor responsable',
  pointsSectionTitle: 'Compromiso de cuidado y privacidad (4 puntos)',
  pointsSectionStandard: 'Protección de datos',
  points: [
    {
      number: 1,
      title: '¿Para qué se usa esta aplicación?',
      description:
        'Se utiliza exclusivamente para apoyar el aprendizaje de lectura y escritura: practicar los sonidos de las letras, reconocer palabras cotidianas y realizar ejercicios guiados paso a paso.',
      audioText:
        'Punto 1: ¿Para qué se usa esta aplicación? Se utiliza exclusivamente para practicar lectura, sonidos de letras y ejercicios educativos paso a paso.',
      icon: 'auto_stories',
    },
    {
      number: 2,
      title: 'El audio de voz no se almacena',
      description:
        'El reconocimiento de voz funciona únicamente en el momento de la práctica para evaluar la pronunciación. Las grabaciones de voz no se guardan en ningún servidor ni se almacenan en archivos.',
      audioText:
        'Punto 2: El audio de voz no se almacena. La voz solo se escucha en el instante de la práctica y nunca queda guardada en ningún servidor.',
      icon: 'mic_off',
    },
    {
      number: 3,
      title: 'Solo datos mínimos y sin servicios externos',
      description:
        'Solo solicitamos el nombre para personalizar las lecciones. No compartimos ni vendemos datos personales de menores de edad con empresas, anunciantes ni plataformas externas.',
      audioText:
        'Punto 3: Solo datos mínimos y sin servicios externos. Solo pedimos el nombre y nunca compartimos datos de menores con terceros.',
      icon: 'shield',
    },
    {
      number: 4,
      title: 'El representante puede revocar el permiso',
      description:
        'El padre, madre o tutor puede retirar la autorización en cualquier momento y solicitar la eliminación de los datos registrados sin ningún inconveniente.',
      audioText:
        'Punto 4: El representante puede revocar el permiso cuando lo desee y solicitar el borrado de sus datos en cualquier momento.',
      icon: 'cancel',
    },
  ],
  checkboxLabel: 'He leído o escuchado y acepto la autorización de uso educativo.',
  checkboxAudioText:
    'Casilla de confirmación: He leído o escuchado y acepto la autorización de uso educativo.',
  submitButtonText: 'Aceptar y continuar',
}
