import { Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="site-footer">
      <div className="site-shell site-footer-grid">
        <Link to="/" className="site-footer-brand">
          <picture className="site-footer-logo-picture">
            <source
              media="(max-width: 639.98px)"
              srcSet="/assets/images/SRH-logo-mob-footer.svg"
            />
            <img
              src="/assets/images/SRH-logo-footer.svg"
              alt={t('footer.logoAlt')}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </Link>

        <div className="footer-menu">
          <h2>{t('footer.menuTitle')}</h2>
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/about">{t('nav.about')}</Link>
          <Link to="/#values">{t('footer.values')}</Link>
          <Link to="/#vision">{t('footer.vision')}</Link>
          <Link to="/services">{t('nav.services')}</Link>
          <Link to="/contact">{t('header.contact')}</Link>
        </div>

        <div className="footer-links">
          <h2>{t('footer.linksTitle')}</h2>
          <Link to="/projects">{t('nav.projects')}</Link>
          <Link to="/agents">{t('agents.menu')}</Link>
          <Link to="/maintenance">{t('footer.maintenance')}</Link>
          <Link to="/#vision">{t('footer.vision')}</Link>
          <Link to="/#values">{t('footer.values')}</Link>
        </div>

        <div className="site-footer-contact">
          <h2>{t('footer.contactTitle')}</h2>
          <p className="footer-contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21z" />
              <circle cx="12" cy="9.5" r="2.3" />
            </svg>
            <span>{t('footer.address')}</span>
          </p>
          <a className="footer-contact-item" href="tel:+966571608000">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 5c0 8.3 6.7 15 15 15l3-4-6-3-2 2c-2-1-4-3-5-5l2-2-3-6-4 3Z" />
            </svg>
            <span dir="ltr">00966 571 608 000</span>
          </a>
          <a className="footer-contact-item" href="tel:8001240604">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 5c0 8.3 6.7 15 15 15l3-4-6-3-2 2c-2-1-4-3-5-5l2-2-3-6-4 3Z" />
            </svg>
            <span dir="ltr">800 124 0604</span>
          </a>
          <a className="footer-contact-item" href="tel:+966125395117">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 5c0 8.3 6.7 15 15 15l3-4-6-3-2 2c-2-1-4-3-5-5l2-2-3-6-4 3Z" />
            </svg>
            <span dir="ltr">012 539 5117</span>
          </a>
          <a className="footer-contact-item" href="mailto:info@srh-ksa.com">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 6 8 7 8-7" />
            </svg>
            <span>info@srh-ksa.com</span>
          </a>
          <div className="site-socials" aria-label={t('footer.socialAria')}>
            <a href="https://www.facebook.com/SRHKSA" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialFacebook')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.65 15.4 3.6 14.3 3.6c-2.3 0-3.9 1.4-3.9 4v2.3H7.7V13h2.7v8h3.1z" />
              </svg>
            </a>
            <a href="https://x.com/SRH__KSA" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialX')}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.9 2H22l-7.6 8.7L23 22h-7l-5.5-6.8L4 22H1l8.1-9.3L1.3 2h7.2l5 6.2L18.9 2Zm-1.2 18h1.7L7.1 4h-1.8l12.4 16Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/srh.ksa/" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialInstagram')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/srh-ksa/" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialLinkedIn')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.5 8h3V22h-3V8zm6.5 0h2.9v1.98h.04c.4-.76 1.4-1.98 3.1-1.98 3.3 0 3.9 2.2 3.9 5.03V22h-3v-6.3c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.44 1.6-2.44 3.3V22h-3V8z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@SRH-KSA" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialYoutube')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className="site-copyright">{t('footer.copyright')}</p>
      <div className="footer-badges">
        <span>{t('footer.license')}</span>
        <span>{t('footer.cr')}</span>
      </div>
    </footer>
  )
}
