import { Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useAuth } from '../context/useAuth'
import type { UserRole } from '../context/AuthContext'

interface RoleGuardProps {
  allowedRole: UserRole
  children?: ReactNode
}

/**
 * Protege rutas por rol. Si el rol activo no coincide, redirige a /perfil.
 */
export function RoleGuard({ allowedRole, children }: RoleGuardProps) {
  const { role } = useAuth()

  if (role !== allowedRole) {
    return <Navigate to="/perfil" replace />
  }

  return <>{children}</>
}
