import { createContext } from 'react'
import type { Language } from './translations'

export type LanguageContextValue = {
  lang: Language
  toggle: () => void
  t: <T = string>(key: string, vars?: Record<string, string | number>) => T
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export const LANG_KEY = 'srh-lang'

export function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return 'en'
  return localStorage.getItem(LANG_KEY) === 'ar' ? 'ar' : 'en'
}