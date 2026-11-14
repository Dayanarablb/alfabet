import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CONSENTIMIENTO_MOCK } from '../mocks'
import { Card, Button, AudioButton, Icon } from '../components/ui'

/**
 * Pantalla 5: Consentimiento Informado para Menores (c8._consentimiento_informado_para_menores → /consentimiento)
 * Formato de lectura fácil, 4 puntos clave UNESCO con audio individual y casilla de confirmación.
 */
export function ConsentPage() {
  const navigate = useNavigate()
  const data = CONSENTIMIENTO_MOCK
  const [accepted, setAccepted] = useState(false)

  const handleSubmit = () => {
    if (!accepted) return
    navigate('/diagnostico/intro')
  }

  return (
    <div className="flex flex-col w-full py-space-xs gap-space-md">
      {/* Banner Principal con Audioasistencia */}
      <div className="bg-primary text-on-primary rounded-2xl p-space-md shadow-md flex flex-col gap-space-sm border border-outline-variant/20">
        <div className="flex items-start justify-between gap-space-sm">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-space-xs mb-1">
              <Icon name="verified_user" size={20} filled className="text-tertiary-fixed" />
              <span className="text-label-md text-primary-fixed uppercase tracking-wider font-semibold text-xs">
                {data.headerBadge}
              </span>
            </div>
            <h1 className="text-headline-md font-headline-md font-bold text-surface-bright leading-tight mb-1">
              {data.bannerTitle}
            </h1>
            <p className="text-body-lg text-primary-fixed leading-snug">
              {data.bannerSubtitle}
            </p>
          </div>
          <AudioButton
            text={data.fullAudioText}
            size="lg"
            variant="amber"
            aria-label="Escuchar explicación completa de autorización"
          />
        </div>
      </div>

      {/* Ficha Oficial de Estudiante y Representante */}
      <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm border border-outline-variant/30 flex flex-col gap-space-sm">
        <div className="flex items-center gap-space-xs text-secondary">
          <Icon name="badge" size={24} />
          <h2 className="text-label-lg font-bold text-on-surface">
            Datos de la matrícula educativa
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-space-sm">
          {/* Estudiante */}
          <div className="bg-surface-container-low rounded-xl p-space-sm flex items-center gap-space-sm flex-1">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
              <Icon name="school" size={26} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-label-md text-on-surface-variant font-medium text-xs">
                {data.studentTitle}
              </p>
              <p className="text-body-bold font-bold text-primary truncate">
                {data.studentName} <span className="font-normal text-on-surface-variant text-sm">({data.studentAge})</span>
              </p>
              <p className="text-label-md text-secondary truncate text-xs">
                {data.studentProgram}
              </p>
            </div>
          </div>

          {/* Representante */}
          <div className="bg-surface-container-low rounded-xl p-space-sm flex items-center gap-space-sm flex-1">
            <div className="w-12 h-12 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
              <Icon name="family_restroom" size={26} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-label-md text-on-surface-variant font-medium text-xs">
                {data.representativeTitle}
              </p>
              <p className="text-body-bold font-bold text-on-surface truncate">
                {data.representativeName}
              </p>
              <p className="text-label-md text-on-surface-variant text-xs">
                {data.representativeRelation}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Los 4 Puntos Clave de Cuidado con Audio Individual */}
      <section className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between px-space-xs">
          <h2 className="text-headline-md font-headline-md font-bold text-primary">
            {data.pointsSectionTitle}
          </h2>
          <span className="text-label-md text-on-surface-variant font-medium text-sm">
            {data.pointsSectionStandard}
          </span>
        </div>

        {data.points.map((point) => (
          <Card
            key={point.number}
            state="default"
            className="flex flex-col gap-space-xs p-space-md"
          >
            <div className="flex items-start justify-between gap-space-sm">
              <div className="flex items-center gap-space-sm min-w-0">
                <div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0">
                  <Icon name={point.icon} size={22} />
                </div>
                <div className="min-w-0">
                  <span className="text-label-md text-secondary uppercase font-bold text-xs tracking-wider">
                    Punto {point.number}
                  </span>
                  <h3 className="text-body-bold font-bold text-on-surface leading-tight">
                    {point.title}
                  </h3>
                </div>
              </div>
              <AudioButton
                text={point.audioText}
                size="sm"
                variant="surface"
                aria-label={`Escuchar punto ${point.number}: ${point.title}`}
              />
            </div>
            <p className="text-body-lg text-on-surface-variant leading-relaxed pl-1 pt-1">
              {point.description}
            </p>
          </Card>
        ))}
      </section>

      {/* Casilla de Verificación Táctil Amplia */}
      <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm border border-outline-variant/30 flex flex-col gap-space-sm">
        <div className="flex items-start justify-between gap-space-sm">
          <label className="flex items-start gap-space-sm cursor-pointer select-none flex-1">
            <input
              type="checkbox"
              id="check-consentimiento"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="w-7 h-7 mt-0.5 rounded-lg text-primary focus:ring-0 cursor-pointer accent-primary shrink-0"
            />
            <span className="text-body-bold font-semibold text-on-surface leading-snug">
              {data.checkboxLabel}
            </span>
          </label>
          <AudioButton
            text={data.checkboxAudioText}
            size="sm"
            variant="surface"
          />
        </div>

        {/* Botón de Aceptación y Continuación */}
        <div className="pt-space-xs">
          <Button
            variant={accepted ? 'primary' : 'secondary'}
            fullWidth
            disabled={!accepted}
            onClick={handleSubmit}
            icon="check_circle"
            aria-label="Aceptar consentimiento y comenzar lecciones"
          >
            {data.submitButtonText}
          </Button>
        </div>
      </div>
    </div>
  )
}
