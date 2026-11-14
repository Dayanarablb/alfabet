import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  AudioButton,
  MicButton,
  Card,
  ProgressBar,
  Chip,
  TextField,
  Icon,
  TopBar,
  BottomNav,
  type CardState,
  type NavTab,
} from '../components/ui'

export function DesignSystemPage() {
  // Estados para pruebas interactivas de componentes
  const [micState, setMicState] = useState<'idle' | 'listening'>('idle')
  const [selectedCard, setSelectedCard] = useState<CardState>('default')
  const [progressStep, setProgressStep] = useState(2)
  const [selectedChips, setSelectedChips] = useState<Record<string, boolean>>({
    manzana: true,
    ma: false,
    me: true,
  })
  const [textInputValue, setTextInputValue] = useState('')
  const [inputListening, setInputListening] = useState(false)
  const [activeTab, setActiveTab] = useState<NavTab>('aprender')

  const toggleChip = (id: string) => {
    setSelectedChips((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col">
      {/* TopBar en contexto */}
      <TopBar
        title="Catálogo de Componentes"
        subtitle="Sistema de Diseño Alfabet (UI Kit)"
        showBack={true}
        onBack={() => window.history.back()}
        audioText="Catálogo de componentes del sistema de diseño Alfabet. Aquí puedes probar todos los botones, tarjetas y elementos táctiles."
        rightElement={
          <Link
            to="/"
            className="px-space-sm py-2 rounded-full bg-surface-container text-primary text-label-md font-semibold hover:bg-surface-container-high transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            aria-label="Ver paleta de tokens y colores"
          >
            Ver tokens
          </Link>
        }
      />

      <main className="flex-1 w-full max-w-4xl mx-auto px-margin py-space-lg flex flex-col gap-space-xl pb-32">
        <header className="flex flex-col gap-space-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-label-md font-semibold w-fit shadow-xs">
            <Icon name="widgets" size={20} />
            <span>Biblioteca UI Reutilizable</span>
          </div>
          <h2 className="text-headline-lg font-headline-lg text-primary">
            Componentes Accesibles para Jóvenes y Adultos
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            Cada componente cumple con áreas táctiles mínimas de 48px, contraste alto,
            ausencia de mayúsculas en frases y soporte nativo para audio y voz.
          </p>
        </header>

        {/* 1. Botones (Button) */}
        <section className="flex flex-col gap-space-md" aria-labelledby="section-buttons">
          <div className="flex items-center gap-space-xs border-b border-outline-variant/30 pb-2">
            <Icon name="smart_button" size={28} className="text-primary" />
            <h3 id="section-buttons" className="text-headline-md font-headline-md text-primary">
              1. Botones Principales (Altura mínima 64px, Forma Pill)
            </h3>
          </div>

          <div className="bg-surface-container-lowest p-space-md rounded-2xl border border-outline-variant/30 flex flex-col gap-space-md shadow-sm">
            <div className="flex flex-col gap-space-xs">
              <span className="text-label-md text-on-surface-variant font-semibold">
                Variante Primary (Azul Institucional / Navegación)
              </span>
              <div className="flex flex-wrap gap-space-sm items-center">
                <Button variant="primary" icon="volume_up">
                  Escuchar instrucción
                </Button>
                <Button variant="primary" trailingIcon="arrow_forward">
                  Continuar
                </Button>
                <Button variant="primary" disabled icon="lock">
                  Bloqueado
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-space-xs">
              <span className="text-label-md text-on-surface-variant font-semibold">
                Variante Amber (Ámbar de Acción / Motivación)
              </span>
              <div className="flex flex-wrap gap-space-sm items-center">
                <Button variant="amber" icon="mic">
                  Toca y responde
                </Button>
                <Button variant="amber" icon="auto_stories">
                  Comenzar lección
                </Button>
                <Button variant="amber" disabled icon="hourglass_empty">
                  Procesando
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-space-xs">
              <span className="text-label-md text-on-surface-variant font-semibold">
                Variante Secondary (Fondo Blanco / Borde Sólido 2px)
              </span>
              <div className="flex flex-wrap gap-space-sm items-center">
                <Button variant="secondary" icon="replay">
                  Repetir audio
                </Button>
                <Button variant="secondary" icon="arrow_back">
                  Volver al inicio
                </Button>
                <Button variant="secondary" disabled>
                  No disponible
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Botón de Audio (AudioButton) */}
        <section className="flex flex-col gap-space-md" aria-labelledby="section-audio">
          <div className="flex items-center gap-space-xs border-b border-outline-variant/30 pb-2">
            <Icon name="volume_up" size={28} className="text-secondary" />
            <h3 id="section-audio" className="text-headline-md font-headline-md text-primary">
              2. Botón de Audio Omnipresente (AudioButton ≥52px)
            </h3>
          </div>

          <div className="bg-surface-container-lowest p-space-md rounded-2xl border border-outline-variant/30 flex flex-col gap-space-md shadow-sm">
            <p className="text-body-lg text-on-surface-variant">
              Toca cualquier botón para escuchar el texto sintetizado en español. Al reproducir
              muestra una animación de onda sonora.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
              <div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between gap-space-xs">
                <div>
                  <p className="text-body-bold font-semibold text-on-surface">Instrucción 1</p>
                  <p className="text-label-md text-on-surface-variant text-sm">Variante ámbar</p>
                </div>
                <AudioButton
                  text="Bienvenido. Selecciona la letra que suena al inicio de la palabra manzana."
                  variant="amber"
                  size="md"
                />
              </div>

              <div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between gap-space-xs">
                <div>
                  <p className="text-body-bold font-semibold text-on-surface">Instrucción 2</p>
                  <p className="text-label-md text-on-surface-variant text-sm">Variante azul</p>
                </div>
                <AudioButton
                  text="La letra eme suena mmm. Como cuando algo está rico."
                  variant="primary"
                  size="md"
                />
              </div>

              <div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between gap-space-xs">
                <div>
                  <p className="text-body-bold font-semibold text-on-surface">Instrucción 3</p>
                  <p className="text-label-md text-on-surface-variant text-sm">Variante superficie</p>
                </div>
                <AudioButton
                  text="Excelente progreso. Has completado tres días seguidos de práctica."
                  variant="surface"
                  size="md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Botón de Micrófono (MicButton) */}
        <section className="flex flex-col gap-space-md" aria-labelledby="section-mic">
          <div className="flex items-center gap-space-xs border-b border-outline-variant/30 pb-2">
            <Icon name="mic" size={28} className="text-primary" />
            <h3 id="section-mic" className="text-headline-md font-headline-md text-primary">
              3. Botón de Micrófono (MicButton 72 a 80px)
            </h3>
          </div>

          <div className="bg-surface-container-lowest p-space-md rounded-2xl border border-outline-variant/30 flex flex-col items-center sm:flex-row sm:justify-around gap-space-lg shadow-sm">
            <div className="flex flex-col items-center gap-2">
              <span className="text-label-md text-on-surface-variant font-semibold">
                Estado Inactivo (idle)
              </span>
              <MicButton state="idle" label="Presiona para hablar" />
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-label-md text-on-surface-variant font-semibold">
                Estado Escuchando (listening con halo pulsante)
              </span>
              <MicButton state="listening" label="Escuchando tu voz..." />
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-label-md text-on-surface-variant font-semibold">
                Interactivo (Toca para alternar)
              </span>
              <MicButton
                state={micState}
                onClick={() => setMicState((prev) => (prev === 'idle' ? 'listening' : 'idle'))}
              />
            </div>
          </div>
        </section>

        {/* 4. Tarjetas Táctiles (Card) */}
        <section className="flex flex-col gap-space-md" aria-labelledby="section-cards">
          <div className="flex items-center gap-space-xs border-b border-outline-variant/30 pb-2">
            <Icon name="view_agenda" size={28} className="text-primary" />
            <h3 id="section-cards" className="text-headline-md font-headline-md text-primary">
              4. Tarjetas Táctiles (Card: default, selected, success, tryAgain)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            {/* Default */}
            <Card
              state="default"
              interactive
              onClick={() => setSelectedCard('default')}
              aria-label="Tarjeta en estado por defecto"
            >
              <div className="flex items-start justify-between gap-space-sm">
                <div>
                  <span className="text-label-md text-on-surface-variant font-semibold">
                    Estado: Default
                  </span>
                  <h4 className="text-headline-md font-headline-md text-primary">
                    Opción neutral
                  </h4>
                  <p className="text-body-lg text-on-surface-variant mt-1">
                    Superficie blanca con borde tenue y descanso visual.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-outline">
                  <Icon name="radio_button_unchecked" size={26} />
                </div>
              </div>
            </Card>

            {/* Selected */}
            <Card
              state="selected"
              interactive
              onClick={() => setSelectedCard('selected')}
              aria-label="Tarjeta en estado seleccionado"
            >
              <div className="flex items-start justify-between gap-space-sm">
                <div>
                  <span className="text-label-md text-primary font-bold">
                    Estado: Selected
                  </span>
                  <h4 className="text-headline-md font-headline-md text-primary">
                    Opción elegida
                  </h4>
                  <p className="text-body-lg text-on-surface-variant mt-1">
                    Borde azul de 3px con fondo suave y elevación táctil.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
                  <Icon name="check" size={28} />
                </div>
              </div>
            </Card>

            {/* Success */}
            <Card
              state="success"
              interactive
              onClick={() => setSelectedCard('success')}
              aria-label="Tarjeta en estado de éxito"
            >
              <div className="flex items-start justify-between gap-space-sm">
                <div>
                  <span className="text-label-md text-tertiary font-bold flex items-center gap-1">
                    <Icon name="verified" size={18} filled />
                    Estado: Success (Acierto)
                  </span>
                  <h4 className="text-headline-md font-headline-md text-tertiary">
                    ¡Muy bien hecho!
                  </h4>
                  <p className="text-body-lg text-on-surface mt-1">
                    Borde esmeralda suave con tono afirmativo de avance.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-sm">
                  <Icon name="check_circle" size={28} filled />
                </div>
              </div>
            </Card>

            {/* Try Again */}
            <Card
              state="tryAgain"
              interactive
              onClick={() => setSelectedCard('tryAgain')}
              aria-label="Tarjeta en estado de retroalimentación amigable"
            >
              <div className="flex items-start justify-between gap-space-sm">
                <div>
                  <span className="text-label-md text-secondary-container font-bold flex items-center gap-1">
                    <Icon name="favorite" size={18} filled />
                    Estado: TryAgain (Amigable)
                  </span>
                  <h4 className="text-headline-md font-headline-md text-on-surface">
                    Escucha otra vez
                  </h4>
                  <p className="text-body-lg text-on-surface-variant mt-1">
                    Tono ámbar cálido y de aliento. Nunca rojo punitivo.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-sm">
                  <Icon name="refresh" size={28} />
                </div>
              </div>
            </Card>
          </div>
          <p className="text-label-md text-on-surface-variant text-center">
            Estado actualmente seleccionado en la prueba: <strong className="text-primary">{selectedCard}</strong>
          </p>
        </section>

        {/* 5. Barra de Progreso Segmentada (ProgressBar) */}
        <section className="flex flex-col gap-space-md" aria-labelledby="section-progress">
          <div className="flex items-center gap-space-xs border-b border-outline-variant/30 pb-2">
            <Icon name="linear_scale" size={28} className="text-primary" />
            <h3 id="section-progress" className="text-headline-md font-headline-md text-primary">
              5. Barra de Progreso Segmentada en Pastillas (Pills)
            </h3>
          </div>

          <div className="bg-surface-container-lowest p-space-md rounded-2xl border border-outline-variant/30 flex flex-col gap-space-md shadow-sm">
            <div className="flex flex-col gap-space-xs">
              <span className="text-label-md text-on-surface-variant font-semibold">
                Variante Esmeralda (Éxito / Aprendizaje)
              </span>
              <ProgressBar totalSteps={5} currentStep={progressStep} variant="emerald" />
            </div>

            <div className="flex flex-col gap-space-xs">
              <span className="text-label-md text-on-surface-variant font-semibold">
                Variante Ámbar (Práctica / Racha)
              </span>
              <ProgressBar totalSteps={4} currentStep={3} variant="amber" />
            </div>

            <div className="flex flex-col gap-space-xs">
              <span className="text-label-md text-on-surface-variant font-semibold">
                Variante Azul Primario (Diagnóstico / Evaluaciones)
              </span>
              <ProgressBar totalSteps={6} currentStep={5} variant="primary" />
            </div>

            {/* Controles para probar la barra interactiva */}
            <div className="flex items-center justify-center gap-space-sm pt-2">
              <Button
                variant="secondary"
                disabled={progressStep <= 0}
                onClick={() => setProgressStep((p) => Math.max(0, p - 1))}
              >
                Paso anterior
              </Button>
              <Button
                variant="primary"
                disabled={progressStep >= 5}
                onClick={() => setProgressStep((p) => Math.min(5, p + 1))}
              >
                Siguiente paso
              </Button>
            </div>
          </div>
        </section>

        {/* 6. Fichas de Palabras y Sílabas (Chip) */}
        <section className="flex flex-col gap-space-md" aria-labelledby="section-chips">
          <div className="flex items-center gap-space-xs border-b border-outline-variant/30 pb-2">
            <Icon name="label" size={28} className="text-primary" />
            <h3 id="section-chips" className="text-headline-md font-headline-md text-primary">
              6. Fichas de Palabras y Sílabas (Chip ≥54px, Tipografía 20px)
            </h3>
          </div>

          <div className="bg-surface-container-lowest p-space-md rounded-2xl border border-outline-variant/30 flex flex-col gap-space-md shadow-sm">
            <div className="flex flex-col gap-space-xs">
              <span className="text-label-md text-on-surface-variant font-semibold">
                Sílabas fonéticas para formar palabras
              </span>
              <div className="flex flex-wrap gap-space-sm">
                {['ma', 'me', 'mi', 'mo', 'mu'].map((silaba) => (
                  <Chip
                    key={silaba}
                    label={silaba}
                    selected={selectedChips[silaba]}
                    onClick={() => toggleChip(silaba)}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-space-xs">
              <span className="text-label-md text-on-surface-variant font-semibold">
                Palabras completas de la vida cotidiana
              </span>
              <div className="flex flex-wrap gap-space-sm">
                {['manzana', 'pan', 'plátano', 'leche', 'agua'].map((palabra) => (
                  <Chip
                    key={palabra}
                    label={palabra}
                    leadingIcon="school"
                    selected={selectedChips[palabra]}
                    onClick={() => toggleChip(palabra)}
                  />
                ))}
                <Chip label="bloqueada" disabled />
              </div>
            </div>
          </div>
        </section>

        {/* 7. Campo de Texto (TextField) */}
        <section className="flex flex-col gap-space-md" aria-labelledby="section-textfield">
          <div className="flex items-center gap-space-xs border-b border-outline-variant/30 pb-2">
            <Icon name="input" size={28} className="text-primary" />
            <h3 id="section-textfield" className="text-headline-md font-headline-md text-primary">
              7. Campo de Texto (TextField ≥64px con Botón de Micrófono)
            </h3>
          </div>

          <div className="bg-surface-container-lowest p-space-md rounded-2xl border border-outline-variant/30 flex flex-col gap-space-lg shadow-sm">
            <TextField
              label="Escribe o dicta tu nombre completo"
              placeholder="Ejemplo: Carmen Andrade"
              value={textInputValue}
              onChange={(e) => setTextInputValue(e.target.value)}
              onMicClick={() => setInputListening((prev) => !prev)}
              isListening={inputListening}
              helperText="Puedes tocar el micrófono de la derecha para dictar con tu propia voz."
            />

            <TextField
              label="Número de cédula o teléfono celular"
              placeholder="099 123 4567"
              leadingIcon="badge"
              audioHelpText="Por favor escribe los diez números de tu cédula o los dígitos de tu celular."
              error="Ingresa un número válido de 10 dígitos"
            />

            <TextField
              label="Campo deshabilitado"
              placeholder="No disponible por el momento"
              disabled
            />
          </div>
        </section>

        {/* 8. Envoltorio de Iconos (Icon) */}
        <section className="flex flex-col gap-space-md" aria-labelledby="section-icons">
          <div className="flex items-center gap-space-xs border-b border-outline-variant/30 pb-2">
            <Icon name="interests" size={28} className="text-primary" />
            <h3 id="section-icons" className="text-headline-md font-headline-md text-primary">
              8. Envoltorio de Iconos Material Symbols (Icon)
            </h3>
          </div>

          <div className="bg-surface-container-lowest p-space-md rounded-2xl border border-outline-variant/30 flex flex-wrap items-center gap-space-md shadow-sm">
            {[
              { name: 'auto_stories', label: 'auto_stories' },
              { name: 'volume_up', label: 'volume_up' },
              { name: 'mic', label: 'mic' },
              { name: 'check_circle', label: 'check_circle' },
              { name: 'arrow_back', label: 'arrow_back' },
              { name: 'edit_note', label: 'edit_note' },
              { name: 'stars', label: 'stars' },
              { name: 'help_outline', label: 'help_outline' },
              { name: 'person', label: 'person' },
            ].map((ic) => (
              <div
                key={ic.name}
                className="flex flex-col items-center justify-center p-space-sm bg-surface-container rounded-xl min-w-[90px] gap-1"
              >
                <div className="flex items-center gap-2">
                  <Icon name={ic.name} size={30} className="text-primary" />
                  <Icon name={ic.name} size={30} filled className="text-secondary" />
                </div>
                <span className="text-label-md text-on-surface-variant text-xs">{ic.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 9 & 10. BottomNav en contexto */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
