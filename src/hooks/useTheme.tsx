import { useContext } from 'react'

import { ThemeContext } from '@/src/context/theme/ThemeContext'

export function useTheme() {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme de ver usado dentro de um ThemeProvider')
  }

  return context
}
