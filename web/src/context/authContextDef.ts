import { createContext } from 'react'

export type UserRole = 'estudiante' | 'tutor'

export interface User {
  id: string
  name: string
  role: UserRole
  email?: string
  phone?: string
  token?: string
  isMinor?: boolean
}

export interface AuthContextType {
  role: UserRole | null
  user: User | null
  isAuthenticated: boolean
  isMinor: boolean | null
  setRole: (role: UserRole | null) => void
  setIsMinor: (isMinor: boolean | null) => void
  setRegisteredName: (name: string) => void
  login: (role: UserRole, userData?: Partial<User>) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
