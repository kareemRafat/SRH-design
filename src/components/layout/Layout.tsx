import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { PageSpinner } from './PageSpinner'
import { ScrollProgress } from './ScrollProgress'
import { ScrollTopButton } from './ScrollTopButton'
import { WhatsAppButton } from './WhatsAppButton'
import { useLanguage } from '../../hooks/useLanguage'

const INNER_PAGES = ['services', 'projects', 'agents', 'faq', 'contact', 'maintenance']

export function Layout() {
  const { pathname, hash } = useLocation()
  const { t } = useLanguage()
  const lastPathname = useRef<string | null>(null)

  useEffect(() => {
    const segment = pathname.replace(/^\//, '').split('/')[0] || 'home'
    const isInner = INNER_PAGES.includes(segment)

    document.body.classList.toggle('page-body', isInner)
    document.body.classList.toggle('maintenance-page', segment === 'maintenance')
    document.body.classList.toggle('agents-page', segment === 'agents')

    if (isInner) {
      document.body.dataset.page = segment
    } else {
      delete document.body.dataset.page
    }
  }, [pathname])

  useEffect(() => {
    const forceScrollTop = () => window.scrollTo(0, 0)
    window.addEventListener('popstate', forceScrollTop)
    window.addEventListener('pageshow', forceScrollTop)
    return () => {
      window.removeEventListener('popstate', forceScrollTop)
      window.removeEventListener('pageshow', forceScrollTop)
    }
  }, [])

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        lastPathname.current = pathname
        return
      }
    }
    if (lastPathname.current === null) {
      lastPathname.current = pathname
      return
    }
    if (lastPathname.current === pathname) return
    lastPathname.current = pathname
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <a href="#main-content" className="skip-link bg-navy-4 text-white px-4 py-2 rounded-md">
        {t('layout.skip')}
      </a>
      <Header />
      <ScrollProgress />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollTopButton />
      <WhatsAppButton />
      <PageSpinner />
    </div>
  )
}
