import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PERFIL_MOCK, type ProfileOption } from '../mocks'
import { Card, Button, AudioButton, Icon } from '../components/ui'

/**
 * Pantalla 2: Selección de Perfil (2._selecci_n_de_perfil → /perfil)
 * Permite escoger entre Estudiante, Tutor/Docente y Familiar con audio para cada opción.
 */
export function ProfileSelectionPage() {
  const navigate = useNavigate()
  const data = PERFIL_MOCK
  const [selectedRole, setSelectedRole] = useState<ProfileOption['id'] | null>(null)

  const handleSelect = (profile: ProfileOption) => {
    setSelectedRole(profile.id)
  }

  const handleContinue = () => {
    if (!selectedRole) return
    const chosen = data.profiles.find((p) => p.id === selectedRole)
    if (chosen) {
      navigate(chosen.route)
    } else {
      navigate('/registro')
    }
  }

  return (
    <div className="flex flex-col w-full py-space-sm gap-space-md">
      {/* Banner instruccional con narrador de voz */}
      <div className="w-full bg-surface-container-high text-on-surface rounded-2xl p-space-md shadow-sm border border-outline-variant/20 flex items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-sm min-w-0">
          <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 shadow-sm">
            <Icon name="record_voice_over" size={24} filled />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-label-md text-secondary font-semibold">
              Instrucción guiada
            </span>
            <p className="text-body-bold font-semibold text-on-surface truncate">
              {data.instructionText}
            </p>
          </div>
        </div>
        <AudioButton
          text={data.instructionAudioText}
          size="md"
          variant="primary"
          aria-label="Escuchar instrucción de la pantalla"
        />
      </div>

      {/* Título principal y subtítulo */}
      <header className="flex flex-col gap-1">
        <div className="flex items-center gap-space-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary-container inline-block" />
          <span className="text-label-md text-on-surface-variant font-medium">
            {data.stepIndicator}
          </span>
        </div>
        <div className="flex items-start justify-between gap-space-sm">
          <div>
            <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-primary font-bold tracking-tight">
              {data.title}
            </h1>
            <p className="text-body-lg text-on-surface-variant mt-0.5">
              {data.subtitle}
            </p>
          </div>
          <AudioButton
            text={`${data.title}. ${data.subtitle}`}
            size="md"
            variant="amber"
          />
        </div>
      </header>

      {/* Grupo de opciones de perfil táctiles */}
      <section
        role="radiogroup"
        aria-label="Selecciona tu perfil de usuario"
        className="flex flex-col gap-space-md w-full"
      >
        {data.profiles.map((profile) => {
          const isSelected = selectedRole === profile.id

          return (
            <Card
              key={profile.id}
              state={isSelected ? 'selected' : 'default'}
              interactive
              role="radio"
              aria-checked={isSelected}
              onClick={() => handleSelect(profile)}
              className="min-h-[110px] flex items-center justify-between gap-space-sm p-space-md"
            >
              <div className="flex items-center gap-space-md min-w-0 flex-1">
                {/* Pictograma distintivo */}
                <div
                  className={`
                    w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-colors
                    ${
                      isSelected
                        ? 'bg-primary text-on-primary'
                        : 'bg-surface-container-high text-primary'
                    }
                  `}
                >
                  <Icon name={profile.icon} size={32} filled={isSelected} />
                </div>

                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="text-headline-md font-headline-md font-bold text-on-surface">
                      {profile.title}
                    </h2>
                    {isSelected && (
                      <Icon
                        name="check_circle"
                        size={22}
                        filled
                        className="text-primary"
                      />
                    )}
                  </div>
                  <p className="text-body-lg text-on-surface-variant leading-snug">
                    {profile.subtitle}
                  </p>
                </div>
              </div>

              {/* Botón de Audio independiente por cada opción */}
              <div onClick={(e) => e.stopPropagation()}>
                <AudioButton
                  text={profile.audioText}
                  size="md"
                  variant={isSelected ? 'amber' : 'surface'}
                  aria-label={`Escuchar opción: ${profile.title}`}
                />
              </div>
            </Card>
          )
        })}
      </section>

      {/* Indicador de selección completada */}
      {selectedRole && (
        <div className="bg-surface-container p-space-sm rounded-xl flex items-center justify-between text-on-surface">
          <div className="flex items-center gap-2">
            <Icon name="done" size={22} className="text-primary" filled />
            <span className="text-label-md text-primary font-semibold">
              Perfil seleccionado
            </span>
          </div>
          <span className="text-label-md text-on-surface-variant">
            Listo para continuar
          </span>
        </div>
      )}

      {/* Botón Continuar (68px de alto, activo al elegir perfil) */}
      <div className="pt-space-sm">
        <Button
          variant={selectedRole ? 'primary' : 'secondary'}
          fullWidth
          disabled={!selectedRole}
          onClick={handleContinue}
          icon="arrow_forward"
          aria-label={
            selectedRole
              ? `Continuar como ${selectedRole}`
              : 'Selecciona una opción antes de continuar'
          }
        >
          {data.continueButtonText}
        </Button>
      </div>
    </div>
  )
}
