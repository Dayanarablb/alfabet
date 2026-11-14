import type { Lesson, Exercise, Progress } from '../types'

export const MOCK_LESSONS: Lesson[] = [
  {
    id: 'm',
    letter: 'M',
    word: 'Manzana',
    imageUrl: '/img/apple.png',
    soundPhoneme: '/mmm/',
    description: 'Sonido suave con los labios juntos',
    audioText: 'Esta es la letra M. Suena mmm, como en Manzana.',
  },
  {
    id: 'p',
    letter: 'P',
    word: 'Pan',
    imageUrl: '/img/bread.png',
    soundPhoneme: '/ppp/',
    description: 'Sonido con los labios cerrados que se abren de golpe',
    audioText: 'Esta es la letra P. Suena ppp, como en Pan.',
  },
  {
    id: 'b',
    letter: 'B',
    word: 'Banano',
    imageUrl: '/img/bananas.png',
    soundPhoneme: '/bbb/',
    description: 'Sonido suave con ambos labios',
    audioText: 'Esta es la letra B. Suena bbb, como en Banano.',
  },
  {
    id: 'd',
    letter: 'D',
    word: 'Dinero',
    imageUrl: '/img/coins.png',
    soundPhoneme: '/ddd/',
    description: 'Sonido apoyando la lengua en los dientes',
    audioText: 'Esta es la letra D. Suena ddd, como en Dinero y monedas.',
  },
  {
    id: 'a',
    letter: 'A',
    word: 'Agua',
    icon: 'water_drop',
    soundPhoneme: '/aaa/',
    description: 'Vocal abierta y clara',
    audioText: 'Esta es la vocal A. Suena aaa, como en Agua fresca.',
  },
  {
    id: 'e',
    letter: 'E',
    word: 'Estrella',
    icon: 'star',
    soundPhoneme: '/eee/',
    description: 'Vocal media con sonrisa leve',
    audioText: 'Esta es la vocal E. Suena eee, como en Estrella brillante.',
  },
]

export const MOCK_EXERCISES: Record<string, Exercise[]> = {
  m: [
    {
      id: 'ex-m-1',
      lessonId: 'm',
      type: 'selection',
      prompt: '¿Cuál empieza con M?',
      audioPrompt: 'Escucha con atención: ¿cuál de estas palabras empieza con el sonido mmm de la letra M?',
      options: [
        {
          id: 'opt-manzana',
          label: 'MANZANA',
          imageUrl: '/img/apple.png',
          audioText: 'Manzana',
        },
        {
          id: 'opt-pan',
          label: 'PAN',
          imageUrl: '/img/bread.png',
          audioText: 'Pan',
        },
      ],
      correctOptionId: 'opt-manzana',
      hintText: 'Recuerda que empieza con el sonido /mmm/ como en MANZANA',
      hintAudioText: 'Recuerda que empieza con los labios juntos haciendo el sonido mmm, como en Manzana.',
    },
    {
      id: 'ex-m-2',
      lessonId: 'm',
      type: 'selection',
      prompt: 'Elige la palabra que empieza con M',
      audioPrompt: 'Toca la palabra que comienza con la letra M.',
      options: [
        {
          id: 'opt-dinero',
          label: 'DINERO',
          imageUrl: '/img/coins.png',
          audioText: 'Dinero',
        },
        {
          id: 'opt-manzana-2',
          label: 'MANZANA',
          imageUrl: '/img/apple.png',
          audioText: 'Manzana',
        },
      ],
      correctOptionId: 'opt-manzana-2',
      hintText: 'Piensa en una fruta roja y fresca: Manzana.',
      hintAudioText: 'Piensa en una fruta roja y dulce que suena mmm al comenzar: Manzana.',
    },
  ],
  p: [
    {
      id: 'ex-p-1',
      lessonId: 'p',
      type: 'selection',
      prompt: '¿Cuál empieza con P?',
      audioPrompt: '¿Cuál de estas palabras empieza con el sonido ppp de la letra P?',
      options: [
        {
          id: 'opt-pan-p',
          label: 'PAN',
          imageUrl: '/img/bread.png',
          audioText: 'Pan',
        },
        {
          id: 'opt-banano-p',
          label: 'BANANO',
          imageUrl: '/img/bananas.png',
          audioText: 'Banano',
        },
      ],
      correctOptionId: 'opt-pan-p',
      hintText: 'Recuerda el pan calientito del desayuno: Pan.',
      hintAudioText: 'Recuerda el pan recién horneado: suena ppp, Pan.',
    },
  ],
  b: [
    {
      id: 'ex-b-1',
      lessonId: 'b',
      type: 'selection',
      prompt: '¿Cuál empieza con B?',
      audioPrompt: 'Selecciona la fruta que empieza con el sonido bbb de la letra B.',
      options: [
        {
          id: 'opt-banano-b',
          label: 'BANANO',
          imageUrl: '/img/bananas.png',
          audioText: 'Banano',
        },
        {
          id: 'opt-manzana-b',
          label: 'MANZANA',
          imageUrl: '/img/apple.png',
          audioText: 'Manzana',
        },
      ],
      correctOptionId: 'opt-banano-b',
      hintText: 'Es una fruta amarilla y dulce: Banano.',
      hintAudioText: 'Es una fruta amarilla y rica que empieza con B: Banano.',
    },
  ],
  d: [
    {
      id: 'ex-d-1',
      lessonId: 'd',
      type: 'selection',
      prompt: '¿Cuál empieza con D?',
      audioPrompt: '¿Cuál de estas opciones empieza con el sonido ddd de la letra D?',
      options: [
        {
          id: 'opt-dinero-d',
          label: 'DINERO',
          imageUrl: '/img/coins.png',
          audioText: 'Dinero',
        },
        {
          id: 'opt-pan-d',
          label: 'PAN',
          imageUrl: '/img/bread.png',
          audioText: 'Pan',
        },
      ],
      correctOptionId: 'opt-dinero-d',
      hintText: 'Sirve para comprar en el mercado: Dinero y monedas.',
      hintAudioText: 'Sirve para comprar en la tienda: suena ddd, Dinero.',
    },
  ],
  a: [
    {
      id: 'ex-a-1',
      lessonId: 'a',
      type: 'selection',
      prompt: '¿Cuál empieza con A?',
      audioPrompt: 'Selecciona la palabra que empieza con la vocal A.',
      options: [
        {
          id: 'opt-agua-a',
          label: 'AGUA',
          icon: 'water_drop',
          audioText: 'Agua',
        },
        {
          id: 'opt-pan-a',
          label: 'PAN',
          imageUrl: '/img/bread.png',
          audioText: 'Pan',
        },
      ],
      correctOptionId: 'opt-agua-a',
      hintText: 'Es vital para beber y cocinar: Agua.',
      hintAudioText: 'Es fresca y transparente, suena aaa: Agua.',
    },
  ],
  e: [
    {
      id: 'ex-e-1',
      lessonId: 'e',
      type: 'selection',
      prompt: '¿Cuál empieza con E?',
      audioPrompt: 'Selecciona lo que brilla en el cielo y empieza con la vocal E.',
      options: [
        {
          id: 'opt-estrella-e',
          label: 'ESTRELLA',
          icon: 'star',
          audioText: 'Estrella',
        },
        {
          id: 'opt-manzana-e',
          label: 'MANZANA',
          imageUrl: '/img/apple.png',
          audioText: 'Manzana',
        },
      ],
      correctOptionId: 'opt-estrella-e',
      hintText: 'Brilla en la noche en el cielo: Estrella.',
      hintAudioText: 'Brilla en la noche en el cielo, suena eee: Estrella.',
    },
  ],
}

export const INITIAL_MOCK_PROGRESS: Record<string, Progress> = {
  m: { lessonId: 'm', completed: true, stars: 3 },
  p: { lessonId: 'p', completed: false, stars: 0 },
  b: { lessonId: 'b', completed: false, stars: 0 },
  d: { lessonId: 'd', completed: false, stars: 0 },
  a: { lessonId: 'a', completed: true, stars: 3 },
  e: { lessonId: 'e', completed: false, stars: 0 },
}
