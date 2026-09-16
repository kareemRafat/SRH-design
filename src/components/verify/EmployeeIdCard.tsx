import type { Employee } from '../../data/employees'
import { useLanguage } from '../../hooks/useLanguage'

function initials(name: string): string {
  return name
    .split(' ')
    .map((part) => part.charAt(0))
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

// Browsers treat "-" as a line-break point ("Al-" / "Qahtani" on narrow
// screens). Render names with a non-breaking hyphen (U+2011, identical look)
// so long names wrap only at spaces — for current and future employees.
function noBreakHyphen(value: string): string {
  return value.replace(/-/g, '‑')
}

export function EmployeeIdCard({ employee }: { employee: Employee }) {
  const { t, lang } = useLanguage()
  const isAr = lang === 'ar'

  const name = noBreakHyphen(isAr && employee.nameAr ? employee.nameAr : employee.name)
  const title = isAr && employee.titleAr ? employee.titleAr : employee.title
  const department =
    isAr && employee.departmentAr ? employee.departmentAr : employee.department
  const secondaryNameRaw = isAr ? employee.name : employee.nameAr
  const secondaryName = secondaryNameRaw ? noBreakHyphen(secondaryNameRaw) : undefined
  // App's Arabic typeface (Readex Pro) — matches the global html[dir='rtl'] rule,
  // so Arabic names render identically in both language modes.
  const arabicFont = { fontFamily: "'Readex Pro','Poppins',sans-serif" } as const

  return (
    <div className="flex w-full flex-col items-center text-center">
      {/* Photo with verified seal */}
      <div className="relative">
        {employee.photo ? (
          <img
            src={employee.photo}
            alt={name}
            className="h-32 w-32 rounded-full object-cover object-top ring-2 ring-gold-4 ring-offset-4 ring-offset-transparent"
            loading="eager"
            decoding="async"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-navy-4 to-navy-6 text-4xl font-bold text-gold-3 ring-2 ring-gold-4 ring-offset-4 ring-offset-transparent"
          >
            {initials(employee.name)}
          </div>
        )}
        <span
          title={t('verify.verified')}
          aria-label={t('verify.verified')}
          className="absolute -bottom-1 -end-1 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg ring-4 ring-slate-0 dark:ring-navy-7"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </span>
      </div>

      {/* Identity */}
      <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.3em] text-gold-6 dark:text-gold-3">
        {t('verify.cardKicker')}
      </p>
      <h1 className="mt-1 font-heading text-3xl font-bold leading-tight text-navy-6 hyphens-none break-normal dark:text-white sm:text-4xl">
        {name}
      </h1>
          {secondaryName && secondaryName !== name ? (
            <p
              className="mt-1.5 text-xl font-semibold text-slate-5 dark:text-slate-2"
              style={arabicFont}
            >
              {secondaryName}
            </p>
          ) : null}
      <p className="mt-1.5 text-base font-semibold text-navy-5 dark:text-slate-1">
        {title}
      </p>

      {/* Divider */}
      <div aria-hidden="true" className="my-7 h-px w-24 bg-gradient-to-l from-transparent via-gold-5 to-transparent" />

      {/* Details — plain rows, no boxes */}
      <dl className="w-full max-w-xs divide-y divide-navy-4/10 text-start dark:divide-white/10">
        <div className="flex items-baseline justify-between gap-4 py-3">
          <dt className="text-xs font-semibold uppercase tracking-wider text-slate-4 dark:text-slate-3">
            {t('verify.idNo')}
          </dt>
          <dd className="text-base font-bold text-navy-6 dark:text-white" dir="ltr">
            {employee.idNo}
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 py-3">
          <dt className="text-xs font-semibold uppercase tracking-wider text-slate-4 dark:text-slate-3">
            {t('verify.department')}
          </dt>
          <dd className="text-base font-bold text-navy-6 dark:text-white">
            {department}
          </dd>
        </div>
        {employee.phone && (
          <div className="flex items-baseline justify-between gap-4 py-3">
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-4 dark:text-slate-3">
              {t('verify.phone')}
            </dt>
            <dd className="text-base font-bold text-navy-6 dark:text-white" dir="ltr">
              <a href={`tel:${employee.phone.replace(/\s/g, '')}`}>{employee.phone}</a>
            </dd>
          </div>
        )}
        <div className="py-4 text-center">
          <p className="text-sm font-semibold leading-relaxed text-navy-6 dark:text-white">
            {t('footer.address')}
          </p>
        </div>
      </dl>
    </div>
  )
}
