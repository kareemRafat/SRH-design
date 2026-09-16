import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { findEmployeeByToken } from '../../data/employees'
import { EmployeeIdCard } from '../../components/verify/EmployeeIdCard'
import { VerifyShell } from '../../components/verify/VerifyShell'
import { useLanguage } from '../../hooks/useLanguage'

export function VerifyPage() {
  const { token } = useParams<{ token: string }>()
  const { t } = useLanguage()
  const employee = findEmployeeByToken(token)

  // Hidden page: plain document.title, no canonical/OG tags, no inbound links.
  useEffect(() => {
    const previous = document.title
    document.title = employee
      ? `${employee.name} | SRH`
      : `${t('verify.notFoundTitle')} | SRH`
    return () => {
      document.title = previous
    }
  }, [employee, t])

  return (
    <VerifyShell>
      {employee ? (
        <>
          <h1 className="sr-only">{employee.name}</h1>
          <EmployeeIdCard employee={employee} />
        </>
      ) : (
        <div className="flex w-full flex-col items-center px-2 py-6 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-4/10 text-navy-4 dark:bg-white/5 dark:text-gold-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </span>
            <h1 className="mt-5 font-heading text-xl font-bold text-navy-6 dark:text-white">
              {t('verify.notFoundTitle')}
            </h1>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-4 dark:text-slate-3">
              {t('verify.notFoundText')}
            </p>
            <Link
              to="/"
              className="mt-6 text-sm font-bold text-gold-6 underline decoration-gold-5/50 underline-offset-4 hover:text-gold-5 dark:text-gold-3"
            >
              {t('verify.backHome')}
            </Link>
        </div>
      )}
    </VerifyShell>
  )
}
