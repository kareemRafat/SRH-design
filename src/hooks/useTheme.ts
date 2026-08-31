import { useCallback, useState } from 'react'

export type ThemeState = {
  isDark: boolean
  toggle: () => void
}

export function useTheme(): ThemeState {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark'),
  )

  const toggle = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      localStorage.setItem('srh-theme', next ? 'dark' : 'light')
      return next
    })
  }, [])

  return { isDark, toggle }
}
