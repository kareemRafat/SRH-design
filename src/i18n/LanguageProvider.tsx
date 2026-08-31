import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { translations } from './translations'
import { LanguageContext, getStoredLanguage } from './language-context'
import type { Language } from './translations'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(getStoredLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next: Language = prev === 'en' ? 'ar' : 'en'
      localStorage.setItem('srh-lang', next)
      return next
    })
  }, [])

  const t = useCallback(
    <T,>(key: string, vars?: Record<string, string | number>): T => {
      const value = translations[lang][key]
      if (typeof value === 'string') {
        if (!vars) return value as T
        return value.replace(/\{(\w+)\}/g, (match, name) =>
          String(vars[name] ?? match),
        ) as T
      }
      return (value ?? key) as T
    },
    [lang],
  )

  const value = useMemo(() => ({ lang, toggle, t }), [lang, toggle, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}