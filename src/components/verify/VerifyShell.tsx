import type { ReactNode } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import { useTheme } from '../../hooks/useTheme'

type VerifyShellProps = {
  children: ReactNode
  /** Wider container for the internal QR generator tool. */
  wide?: boolean
}

export function VerifyShell({ children, wide = false }: VerifyShellProps) {
  const { lang, toggle: toggleLang } = useLanguage()
  const { isDark, toggle: toggleTheme } = useTheme()

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-0 text-navy-6 dark:bg-navy-7 dark:text-slate-1">
      {/* Backdrop decor — navy depth + gold glow, inspired by the app palette */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-navy-4/15 to-transparent dark:from-navy-4/60" />
        <div className="absolute -top-24 start-1/2 h-72 w-[36rem] max-w-none -translate-x-1/2 rounded-full bg-gold-4/25 blur-3xl rtl:translate-x-1/2 dark:bg-gold-5/15" />
        <div className="absolute -bottom-32 -start-24 h-80 w-80 rounded-full bg-navy-3/15 blur-3xl dark:bg-navy-4/70" />
        <div className="absolute -bottom-32 -end-24 h-80 w-80 rounded-full bg-gold-4/15 blur-3xl dark:bg-navy-5/60" />
      </div>

      {/* Full-width dark brand band */}
      <div className="relative z-10 flex w-full justify-center bg-navy-6/85 py-4 backdrop-blur dark:bg-black/30">
        <img
          src="/assets/images/SRH-logo-optimized.webp"
          alt="SRH — Safe Reach for Elevators"
          className="h-16 w-auto object-contain drop-shadow-sm sm:h-20"
          loading="eager"
          decoding="async"
        />
      </div>

      <div
        className={`relative z-10 mx-auto flex w-full flex-col items-center px-5 pb-12 pt-8 sm:pb-16 sm:pt-10 ${
          wide ? 'max-w-5xl' : 'max-w-lg'
        }`}
      >
        <div className="flex w-full flex-col items-center justify-center pb-8 pt-4">
          {children}
        </div>

        {/* Footer controls + note */}
        <div className="flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Switch language"
            title={lang === 'ar' ? 'English' : 'عربي'}
            className="text-[11px] font-bold tracking-wider text-slate-4/70 transition-colors hover:text-gold-6 dark:text-slate-3/70 dark:hover:text-gold-3"
          >
            {lang === 'ar' ? 'EN' : 'AR'}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="text-slate-4/70 transition-colors hover:text-gold-6 dark:text-slate-3/70 dark:hover:text-gold-3"
          >
            {isDark ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>
        </div>
        <p className="mt-3 text-center text-[11px] font-medium tracking-wide text-slate-4/80 dark:text-slate-3/70" dir="ltr">
          srh-ksa.com
        </p>
      </div>
    </div>
  )
}
