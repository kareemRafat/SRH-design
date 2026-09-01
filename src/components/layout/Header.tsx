import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../../data/navigation'
import { useTheme } from '../../hooks/useTheme'
import { useLanguage } from '../../hooks/useLanguage'

function desktopNavClass({ isActive }: { isActive: boolean }) {
  return `relative pb-1 hover:text-gold-4 transition-colors ${
    isActive
      ? "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-4 after:h-0.5 after:rounded-full after:bg-gold-4"
      : ''
  }`
}

export function Header() {
  const { isDark, toggle } = useTheme()
  const { lang, toggle: toggleLang, t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const navToggleRef = useRef<HTMLButtonElement>(null)
  const mobileNavRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    if (!mobileOpen) return
    document.body.classList.add('mobile-nav-open')

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    const onOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node
      if (!mobileNavRef.current?.contains(target) && !navToggleRef.current?.contains(target)) {
        setMobileOpen(false)
      }
    }

    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    document.addEventListener('click', onOutsideClick)

    return () => {
      document.body.classList.remove('mobile-nav-open')
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('click', onOutsideClick)
    }
  }, [mobileOpen])

  const handleLangToggle = () => {
    toggleLang()
    setMobileOpen(false)
  }

  const mobileNavClass = `lg:hidden overflow-hidden bg-navy-7/95 backdrop-blur ${
    mobileOpen
      ? 'max-h-[520px] opacity-100 is-open'
      : 'max-h-0 opacity-0'
  }`

  return (
    <header
      className={`site-main-header fixed top-0 inset-x-0 z-20 bg-transparent ${
        scrolled ? 'is-scrolled' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="site-header-row flex items-center justify-between h-28 py-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/assets/images/SRH-logo-optimized.webp"
              width="314"
              height="150"
              alt="SRH"
              className="w-[157px] h-[75px]"
            />
          </Link>

          <nav
            aria-label={t('header.navPrimary')}
            className="desktop-nav hidden lg:flex items-center justify-self-center gap-8 font-medium text-sm text-white/90 bg-white/5 rounded-[40px] px-8 py-2.5"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.key}
                to={item.to}
                end={item.to === '/'}
                className={desktopNavClass}
              >
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
          </nav>

          <div className="site-header-actions flex items-center gap-1 sm:gap-2">
            <Link
              to="/contact"
              className="site-contact-link hidden sm:inline-flex items-center rounded-full border border-white/50 text-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-navy-6 transition-colors"
            >
              {t('header.contact')}
            </Link>

            <button
              id="lang-toggle-btn"
              type="button"
              onClick={handleLangToggle}
              className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy-3 text-white font-heading font-bold text-xs hover:bg-navy-2 transition-colors"
              aria-label={t('header.langSwitchAria')}
            >
              {lang === 'ar' ? 'En' : 'Ar'}
            </button>

            <button
              id="theme-toggle"
              type="button"
              onClick={toggle}
              aria-label={t('header.themeAria')}
              aria-pressed={isDark}
              className="inline-flex p-2 rounded-full text-white/90 hover:bg-white/10 transition-colors"
            >
              <svg className="theme-sun" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
              <svg className="theme-moon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </button>

            <button
              id="nav-toggle"
              ref={navToggleRef}
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={t('header.menuAria')}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className="lg:hidden p-2 rounded-md text-white"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="7" y1="12" x2="21" y2="12" />
                <line x1="11" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        <nav
          id="mobile-nav"
          ref={mobileNavRef}
          aria-label={t('header.navMobile')}
          className={mobileNavClass}
        >
          <div className="flex flex-col gap-1 pb-4 px-2 font-medium text-sm text-slate-1.5">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.key}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMobileOpen(false)}
                className="px-2 py-2 rounded-md hover:bg-navy-6/5 dark:hover:bg-white/10"
              >
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              end
              onClick={() => setMobileOpen(false)}
              className="px-2 py-2 rounded-md hover:bg-navy-6/5 dark:hover:bg-white/10 active:bg-[#a06a15] active:text-white"
            >
              {t('header.contact')}
            </NavLink>
            <button
              type="button"
              className="mobile-drawer-language w-10 h-10 rounded-full bg-navy-3 text-white font-heading font-bold text-xs"
              aria-label={t('header.langSwitchAria')}
              onClick={handleLangToggle}
            >
              {lang === 'ar' ? 'En' : 'Ar'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
