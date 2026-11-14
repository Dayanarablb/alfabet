import { useState, useCallback, useMemo, type ReactNode } from 'react'
import { AuthContext, type AuthContextType, type User, type UserRole } from './authContextDef'

export type { User, UserRole, AuthContextType }

const STORAGE_KEYS = {
  ROLE: 'alfabet_role',
  USER: 'alfabet_user',
  IS_MINOR: 'alfabet_is_minor',
  REGISTERED_NAME: 'alfabet_registered_name',
} as const

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<UserRole | null>(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEYS.ROLE)
      return stored === 'estudiante' || stored === 'tutor' ? stored : null
    } catch {
      return null
    }
  })

  const [user, setUserState] = useState<User | null>(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEYS.USER)
      return stored ? (JSON.parse(stored) as User) : null
    } catch {
      return null
    }
  })

  const [isMinor, setIsMinorState] = useState<boolean | null>(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEYS.IS_MINOR)
      return stored !== null ? (JSON.parse(stored) as boolean) : null
    } catch {
      return null
    }
  })

  const setRole = useCallback((newRole: UserRole | null) => {
    setRoleState(newRole)
    try {
      if (newRole) {
        sessionStorage.setItem(STORAGE_KEYS.ROLE, newRole)
      } else {
        sessionStorage.removeItem(STORAGE_KEYS.ROLE)
      }
    } catch {
      // Ignorar fallos de acceso a sessionStorage
    }
  }, [])

  const setIsMinor = useCallback((value: boolean | null) => {
    setIsMinorState(value)
    try {
      if (value !== null) {
        sessionStorage.setItem(STORAGE_KEYS.IS_MINOR, JSON.stringify(value))
      } else {
        sessionStorage.removeItem(STORAGE_KEYS.IS_MINOR)
      }
    } catch {
      // Ignorar
    }
  }, [])

  const setRegisteredName = useCallback((name: string) => {
    const trimmed = name.trim()
    setUserState((prev) => {
      const updated: User = prev
        ? { ...prev, name: trimmed || prev.name }
        : {
            id: `user_${Date.now()}`,
            name: trimmed || 'Estudiante',
            role: 'estudiante',
          }
      try {
        sessionStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(updated))
        if (trimmed) {
          sessionStorage.setItem(STORAGE_KEYS.REGISTERED_NAME, trimmed)
        }
      } catch {
        // Ignorar
      }
      return updated
    })
  }, [])

  const login = useCallback((chosenRole: UserRole, userData?: Partial<User>) => {
    let savedName = userData?.name
    if (!savedName) {
      try {
        savedName = sessionStorage.getItem(STORAGE_KEYS.REGISTERED_NAME) ?? undefined
      } catch {
        // Ignorar
      }
    }

    const newUser: User = {
      id: userData?.id ?? `user_${Date.now()}`,
      name: savedName ?? (chosenRole === 'estudiante' ? 'Carlos Andrade' : 'Profesora Elena'),
      role: chosenRole,
      email: userData?.email,
      phone: userData?.phone,
      token: userData?.token ?? `mock_jwt_${chosenRole}_${Date.now()}`,
      isMinor: userData?.isMinor ?? false,
    }

    setRole(chosenRole)
    setUserState(newUser)

    try {
      sessionStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(newUser))
    } catch {
      // Ignorar
    }
  }, [setRole])

  const logout = useCallback(() => {
    setRole(null)
    setUserState(null)
    setIsMinorState(null)
    try {
      sessionStorage.removeItem(STORAGE_KEYS.ROLE)
      sessionStorage.removeItem(STORAGE_KEYS.USER)
      sessionStorage.removeItem(STORAGE_KEYS.IS_MINOR)
      sessionStorage.removeItem(STORAGE_KEYS.REGISTERED_NAME)
    } catch {
      // Ignorar
    }
  }, [setRole])

  const value = useMemo<AuthContextType>(
    () => ({
      role,
      user,
      isAuthenticated: Boolean(role),
      isMinor,
      setRole,
      setIsMinor,
      setRegisteredName,
      login,
      logout,
    }),
    [role, user, isMinor, setRole, setIsMinor, setRegisteredName, login, logout]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
