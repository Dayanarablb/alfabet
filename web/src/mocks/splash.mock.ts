export interface SplashData {
  badgeCountry: string
  badgeSystem: string
  brandTitle: string
  brandHighlight: string
  brandTagline: string
  quoteTitle: string
  quoteText: string
  loadingLabel: string
  audioText: string
  offlineText: string
  regionsText: string
}

export const SPLASH_MOCK: SplashData = {
  badgeCountry: 'Ecuador Aprende',
  badgeSystem: 'Sistema Seguro',
  brandTitle: 'Alfabet',
  brandHighlight: 'IA',
  brandTagline: 'Educación inclusiva y sin barreras en Ecuador',
  quoteTitle: 'Preparando tus lecciones...',
  quoteText: '«Cada palabra que aprendes abre un nuevo camino.»',
  loadingLabel: 'Cargando tu contenido...',
  audioText:
    'Bienvenido a Alfabet. Educación inclusiva en Ecuador. Preparando tus lecciones. Cada palabra que aprendes abre un nuevo camino.',
  offlineText: 'Funciona también sin internet',
  regionsText: 'Quito • Guayaquil • Cuenca • Comunidades del Ecuador',
}
