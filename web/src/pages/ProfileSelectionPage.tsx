import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PERFIL_MOCK, type ProfileOption } from '../mocks'
import { Card, Button, AudioButton, Icon } from '../components/ui'
import { useAuth } from '../context/useAuth'
import type { UserRole } from '../context/AuthContext'

/**
 * Pantalla 2: Selección de Perfil (2._selecci_n_de_perfil → /perfil)
 * - "Familiar" se muestra deshabilitado con etiqueta "Próximamente".
 * - Guarda el rol en AuthContext antes de navegar a /registro.
 */
export function ProfileSelectionPage() {
  const navigate = useNavigate()
  const { setRole } = useAuth()
  const data = PERFIL_MOCK
  const [selectedRole, setSelectedRole] = useState<ProfileOption['id'] | null>(null)

  const handleSelect = (profile: ProfileOption) => {
    if (profile.disabled) return
    setSelectedRole(profile.id)
  }

  const handleContinue = () => {
    if (!selectedRole) return
    // Mapear id del perfil al rol del sistema
    const roleMap: Record<string, UserRole> = {
      estudiante: 'estudiante',
      docente: 'tutor',
    }
    const mappedRole = roleMap[selectedRole]
    if (mappedRole) {
      setRole(mappedRole)
    }
    navigate('/registro')
  }

  return (
    <div className="flex flex-col w-full py-space-sm gap-space-md">
      {/* Banner instruccional */}
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

      {/* Título principal */}
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

      {/* Opciones de perfil */}
      <section
        role="radiogroup"
        aria-label="Selecciona tu perfil de usuario"
        className="flex flex-col gap-space-md w-full"
      >
        {data.profiles.map((profile) => {
          const isSelected = selectedRole === profile.id
          const isDisabled = profile.disabled === true

          return (
            <div key={profile.id} className="relative">
              <Card
                state={isSelected ? 'selected' : 'default'}
                interactive={!isDisabled}
                role="radio"
                aria-checked={isSelected}
                aria-disabled={isDisabled}
                onClick={() => handleSelect(profile)}
                className={`min-h-[110px] flex items-center justify-between gap-space-sm p-space-md ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-center gap-space-md min-w-0 flex-1">
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
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-headline-md font-headline-md font-bold text-on-surface">
                        {profile.title}
                      </h2>
                      {isSelected && (
                        <Icon name="check_circle" size={22} filled className="text-primary" />
                      )}
                      {isDisabled && profile.comingSoon && (
                        <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-xs font-semibold">
                          Próximamente
                        </span>
                      )}
                    </div>
                    <p className="text-body-lg text-on-surface-variant leading-snug">
                      {profile.subtitle}
                    </p>
                  </div>
                </div>

                <div onClick={(e) => e.stopPropagation()}>
                  <AudioButton
                    text={profile.audioText}
                    size="md"
                    variant={isSelected ? 'amber' : 'surface'}
                    aria-label={`Escuchar opción: ${profile.title}`}
                  />
                </div>
              </Card>
            </div>
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

      {/* Botón Continuar */}
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
