import { Link } from 'react-router-dom'

const COLOR_GROUPS = [
  {
    title: 'Superficies y Fondos',
    colors: [
      { name: 'background', hex: '#f9f9ff', bgClass: 'bg-background', textClass: 'text-on-background' },
      { name: 'surface', hex: '#f9f9ff', bgClass: 'bg-surface', textClass: 'text-on-surface' },
      { name: 'surface-dim', hex: '#cfdaf2', bgClass: 'bg-surface-dim', textClass: 'text-on-surface' },
      { name: 'surface-bright', hex: '#f9f9ff', bgClass: 'bg-surface-bright', textClass: 'text-on-surface' },
      { name: 'surface-container-lowest', hex: '#ffffff', bgClass: 'bg-surface-container-lowest', textClass: 'text-on-surface' },
      { name: 'surface-container-low', hex: '#f0f3ff', bgClass: 'bg-surface-container-low', textClass: 'text-on-surface' },
      { name: 'surface-container', hex: '#e7eeff', bgClass: 'bg-surface-container', textClass: 'text-on-surface' },
      { name: 'surface-container-high', hex: '#dee8ff', bgClass: 'bg-surface-container-high', textClass: 'text-on-surface' },
      { name: 'surface-container-highest', hex: '#d8e3fb', bgClass: 'bg-surface-container-highest', textClass: 'text-on-surface' },
      { name: 'surface-variant', hex: '#d8e3fb', bgClass: 'bg-surface-variant', textClass: 'text-on-surface-variant' },
      { name: 'inverse-surface', hex: '#263143', bgClass: 'bg-inverse-surface', textClass: 'text-inverse-on-surface' },
    ],
  },
  {
    title: 'Primarios (Institucional / Navegación)',
    colors: [
      { name: 'primary', hex: '#00236f', bgClass: 'bg-primary', textClass: 'text-on-primary' },
      { name: 'on-primary', hex: '#ffffff', bgClass: 'bg-on-primary', textClass: 'text-primary' },
      { name: 'primary-container', hex: '#1e3a8a', bgClass: 'bg-primary-container', textClass: 'text-on-primary-container' },
      { name: 'on-primary-container', hex: '#90a8ff', bgClass: 'bg-on-primary-container', textClass: 'text-primary-container' },
      { name: 'inverse-primary', hex: '#b6c4ff', bgClass: 'bg-inverse-primary', textClass: 'text-primary' },
      { name: 'primary-fixed', hex: '#dce1ff', bgClass: 'bg-primary-fixed', textClass: 'text-on-primary-fixed' },
      { name: 'primary-fixed-dim', hex: '#b6c4ff', bgClass: 'bg-primary-fixed-dim', textClass: 'text-on-primary-fixed' },
      { name: 'on-primary-fixed', hex: '#00164e', bgClass: 'bg-on-primary-fixed', textClass: 'text-primary-fixed' },
      { name: 'on-primary-fixed-variant', hex: '#264191', bgClass: 'bg-on-primary-fixed-variant', textClass: 'text-primary-fixed' },
    ],
  },
  {
    title: 'Secundarios (Motivación / Acción)',
    colors: [
      { name: 'secondary', hex: '#904d00', bgClass: 'bg-secondary', textClass: 'text-on-secondary' },
      { name: 'on-secondary', hex: '#ffffff', bgClass: 'bg-on-secondary', textClass: 'text-secondary' },
      { name: 'secondary-container', hex: '#fe932c', bgClass: 'bg-secondary-container', textClass: 'text-on-secondary-container' },
      { name: 'on-secondary-container', hex: '#663500', bgClass: 'bg-on-secondary-container', textClass: 'text-secondary-fixed' },
      { name: 'secondary-fixed', hex: '#ffdcc3', bgClass: 'bg-secondary-fixed', textClass: 'text-on-secondary-fixed' },
      { name: 'secondary-fixed-dim', hex: '#ffb77d', bgClass: 'bg-secondary-fixed-dim', textClass: 'text-on-secondary-fixed' },
      { name: 'on-secondary-fixed', hex: '#2f1500', bgClass: 'bg-on-secondary-fixed', textClass: 'text-secondary-fixed' },
      { name: 'on-secondary-fixed-variant', hex: '#6e3900', bgClass: 'bg-on-secondary-fixed-variant', textClass: 'text-secondary-fixed' },
    ],
  },
  {
    title: 'Terciarios (Validación / Éxito)',
    colors: [
      { name: 'tertiary', hex: '#00311f', bgClass: 'bg-tertiary', textClass: 'text-on-tertiary' },
      { name: 'on-tertiary', hex: '#ffffff', bgClass: 'bg-on-tertiary', textClass: 'text-tertiary' },
      { name: 'tertiary-container', hex: '#004a31', bgClass: 'bg-tertiary-container', textClass: 'text-on-tertiary-container' },
      { name: 'on-tertiary-container', hex: '#27c38a', bgClass: 'bg-on-tertiary-container', textClass: 'text-tertiary' },
      { name: 'tertiary-fixed', hex: '#6ffbbe', bgClass: 'bg-tertiary-fixed', textClass: 'text-on-tertiary-fixed' },
      { name: 'tertiary-fixed-dim', hex: '#4edea3', bgClass: 'bg-tertiary-fixed-dim', textClass: 'text-on-tertiary-fixed' },
      { name: 'on-tertiary-fixed', hex: '#002113', bgClass: 'bg-on-tertiary-fixed', textClass: 'text-tertiary-fixed' },
      { name: 'on-tertiary-fixed-variant', hex: '#005236', bgClass: 'bg-on-tertiary-fixed-variant', textClass: 'text-tertiary-fixed' },
    ],
  },
  {
    title: 'Error y Delineado',
    colors: [
      { name: 'error', hex: '#ba1a1a', bgClass: 'bg-error', textClass: 'text-on-error' },
      { name: 'on-error', hex: '#ffffff', bgClass: 'bg-on-error', textClass: 'text-error' },
      { name: 'error-container', hex: '#ffdad6', bgClass: 'bg-error-container', textClass: 'text-on-error-container' },
      { name: 'on-error-container', hex: '#93000a', bgClass: 'bg-on-error-container', textClass: 'text-error-container' },
      { name: 'outline', hex: '#757682', bgClass: 'bg-outline', textClass: 'text-surface-container-lowest' },
      { name: 'outline-variant', hex: '#c5c5d3', bgClass: 'bg-outline-variant', textClass: 'text-on-surface' },
      { name: 'surface-tint', hex: '#4059aa', bgClass: 'bg-surface-tint', textClass: 'text-surface-container-lowest' },
      { name: 'on-surface', hex: '#111c2d', bgClass: 'bg-on-surface', textClass: 'text-surface' },
      { name: 'on-surface-variant', hex: '#444651', bgClass: 'bg-on-surface-variant', textClass: 'text-surface' },
    ],
  },
]

const TYPOGRAPHY_STYLES = [
  {
    token: 'headline-xl',
    specs: '36px / 48px · Bold (700) · -0.01em',
    className: 'text-headline-xl font-headline-xl font-bold',
    sample: 'Aprende a leer y escribir',
  },
  {
    token: 'headline-xl-mobile',
    specs: '30px / 40px · Bold (700)',
    className: 'text-headline-xl-mobile font-headline-xl-mobile font-bold',
    sample: 'Aprende a tu propio ritmo',
  },
  {
    token: 'headline-lg',
    specs: '28px / 38px · Bold (700)',
    className: 'text-headline-lg font-headline-lg font-bold',
    sample: 'Lección de hoy: Letra M',
  },
  {
    token: 'headline-lg-mobile',
    specs: '24px / 34px · Bold (700)',
    className: 'text-headline-lg-mobile font-headline-lg-mobile font-bold',
    sample: 'Escucha y selecciona la correcta',
  },
  {
    token: 'headline-md',
    specs: '22px / 32px · Semibold (600)',
    className: 'text-headline-md font-headline-md font-semibold',
    sample: 'Palabras cotidianas de la comunidad',
  },
  {
    token: 'body-xl',
    specs: '20px / 32px · Regular (400) · +0.01em',
    className: 'text-body-xl font-body-xl font-normal',
    sample: 'La manzana es dulce y de color rojo brillante.',
  },
  {
    token: 'body-lg',
    specs: '18px / 28px · Regular (400) · +0.01em',
    className: 'text-body-lg font-body-lg font-normal',
    sample: 'Toca el botón azul para escuchar la pronunciación despacio.',
  },
  {
    token: 'body-bold',
    specs: '18px / 28px · Semibold (600)',
    className: 'text-body-bold font-body-bold font-semibold',
    sample: '¡Muy bien! Has completado la primera lección.',
  },
  {
    token: 'label-lg',
    specs: '18px / 26px · Semibold (600) · +0.02em',
    className: 'text-label-lg font-label-lg font-semibold',
    sample: 'Continuar con el ejercicio',
  },
  {
    token: 'label-md',
    specs: '16px / 24px · Medium (500) · +0.02em',
    className: 'text-label-md font-label-md font-medium',
    sample: 'Asistencia de voz activada',
  },
]

const RADII = [
  { token: 'rounded-sm', label: 'sm: 0.5rem (8px)', className: 'rounded-sm' },
  { token: 'rounded', label: 'DEFAULT: 1rem (16px)', className: 'rounded' },
  { token: 'rounded-md', label: 'md: 1.5rem (24px)', className: 'rounded-md' },
  { token: 'rounded-lg', label: 'lg: 2rem (32px)', className: 'rounded-lg' },
  { token: 'rounded-xl', label: 'xl: 3rem (48px)', className: 'rounded-xl' },
  { token: 'rounded-full', label: 'full: 9999px', className: 'rounded-full' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-background pt-safe pb-safe px-margin selection:bg-secondary-fixed">
      <header className="max-w-4xl mx-auto py-space-lg border-b border-outline-variant/40 flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-sm">
          <div className="w-14 h-14 rounded-md bg-primary flex items-center justify-center text-on-primary shadow-md">
            <span className="material-symbols-outlined text-3xl">auto_stories</span>
          </div>
          <div>
            <h1 className="text-headline-lg font-headline-lg text-primary">Alfabet</h1>
            <p className="text-label-md font-label-md text-on-surface-variant">Sistema de Diseño & Verificación de Tokens</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-space-xs">
          <Link
            to="/design-system"
            className="px-space-sm py-1.5 rounded-full bg-primary text-on-primary text-label-md font-semibold inline-flex items-center gap-1.5 shadow-sm hover:bg-primary-container transition-colors"
          >
            <span className="material-symbols-outlined text-xl">widgets</span>
            Ver componentes UI
          </Link>
          <span className="px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container text-label-md font-semibold inline-flex items-center gap-1.5 shadow-sm">
            <span className="material-symbols-outlined text-xl">palette</span>
            Tokens Verificados
          </span>
          <span className="px-space-sm py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-label-md font-semibold inline-flex items-center gap-1.5">
            <span className="material-symbols-outlined text-xl">offline_pin</span>
            100% Offline
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-space-lg flex flex-col gap-space-xl">
        {/* Paleta de colores */}
        <section className="flex flex-col gap-space-md">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-2xl">colorize</span>
            <h2 className="text-headline-md font-headline-md text-primary">Paleta de Colores Oficial</h2>
          </div>
          <div className="flex flex-col gap-space-lg">
            {COLOR_GROUPS.map((group) => (
              <div key={group.title} className="bg-surface-container-lowest p-space-md rounded-md shadow-sm border border-outline-variant/30">
                <h3 className="text-body-bold font-body-bold text-on-surface mb-space-sm">{group.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-space-xs">
                  {group.colors.map((c) => (
                    <div
                      key={c.name}
                      className={`p-space-sm rounded border border-outline-variant/30 flex flex-col justify-between min-h-[90px] shadow-xs ${c.bgClass} ${c.textClass}`}
                    >
                      <span className="text-label-md font-semibold leading-tight">{c.name}</span>
                      <span className="text-label-md opacity-80 font-mono text-xs">{c.hex}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tipografía */}
        <section className="flex flex-col gap-space-md">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-2xl">text_fields</span>
            <h2 className="text-headline-md font-headline-md text-primary">Escala Tipográfica (Lexend Variable)</h2>
          </div>
          <div className="bg-surface-container-lowest p-space-md rounded-md shadow-sm border border-outline-variant/30 flex flex-col divide-y divide-outline-variant/20">
            {TYPOGRAPHY_STYLES.map((style) => (
              <div key={style.token} className="py-space-sm first:pt-0 last:pb-0 flex flex-col gap-1">
                <div className="flex flex-wrap items-center justify-between gap-2 text-on-surface-variant">
                  <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-label-md font-mono">
                    {style.token}
                  </span>
                  <span className="text-label-md">{style.specs}</span>
                </div>
                <p className={`${style.className} text-on-surface pt-1`}>{style.sample}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Formas y Bordes */}
        <section className="flex flex-col gap-space-md">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-2xl">shapes</span>
            <h2 className="text-headline-md font-headline-md text-primary">Bordes Redondeados (Border Radius)</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm">
            {RADII.map((r) => (
              <div
                key={r.token}
                className={`p-space-md bg-primary-fixed text-on-primary-fixed border-2 border-primary-container flex flex-col items-center justify-center text-center shadow-sm min-h-[100px] ${r.className}`}
              >
                <span className="text-label-lg font-bold">{r.token}</span>
                <span className="text-label-md opacity-85">{r.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Iconografía Material Symbols */}
        <section className="flex flex-col gap-space-md">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-2xl">interests</span>
            <h2 className="text-headline-md font-headline-md text-primary">Iconografía (Material Symbols Outlined)</h2>
          </div>
          <div className="bg-surface-container-lowest p-space-md rounded-md shadow-sm border border-outline-variant/30 flex flex-wrap items-center gap-space-md">
            {[
              { icon: 'auto_stories', label: 'Biblioteca' },
              { icon: 'volume_up', label: 'Audio' },
              { icon: 'mic', label: 'Micrófono' },
              { icon: 'check_circle', label: 'Acierto' },
              { icon: 'arrow_back', label: 'Volver' },
              { icon: 'refresh', label: 'Repetir' },
              { icon: 'help_outline', label: 'Ayuda' },
              { icon: 'person', label: 'Estudiante' },
              { icon: 'trending_up', label: 'Progreso' },
            ].map((item) => (
              <div key={item.icon} className="flex flex-col items-center gap-1 p-space-xs rounded bg-surface-container-low min-w-[80px]">
                <span className="material-symbols-outlined text-3xl text-primary">{item.icon}</span>
                <span className="text-label-md text-on-surface-variant text-xs">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Botones de acción táctiles */}
        <section className="flex flex-col gap-space-md">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-2xl">touch_app</span>
            <h2 className="text-headline-md font-headline-md text-primary">Componentes Táctiles (Botones &gt;= 64px)</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
            <button
              type="button"
              className="min-h-[64px] px-space-md py-space-sm bg-primary text-on-primary rounded-full text-label-lg font-bold flex items-center justify-center gap-space-sm shadow-md active:scale-98 transition-transform"
            >
              <span className="material-symbols-outlined text-2xl">volume_up</span>
              Escuchar Instrucción
            </button>
            <button
              type="button"
              className="min-h-[64px] px-space-md py-space-sm bg-secondary-container text-on-secondary-container rounded-full text-label-lg font-bold flex items-center justify-center gap-space-sm shadow-md active:scale-98 transition-transform"
            >
              <span className="material-symbols-outlined text-2xl">mic</span>
              Presiona para Hablar
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
