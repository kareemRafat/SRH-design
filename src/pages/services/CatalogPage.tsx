import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PageHero } from '../../components/layout/PageHero'
import { Reveal } from '../../components/layout/Reveal'
import { Seo } from '../../components/seo/Seo'
import { getCatalog } from '../../data/catalogs'
import type { DataTable, Localized, ProductModel } from '../../data/catalogs/types'
import { useLanguage } from '../../hooks/useLanguage'

function SpecSheet({
  model,
  index,
  localize,
}: {
  model: ProductModel
  index: number
  localize: (value: Localized) => string
}) {
  return (
    <Reveal delay={index * 60}>
      <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 dark:bg-slate-7 dark:ring-white/10">
        <header className="border-b border-slate-0.5 px-6 py-5 dark:border-slate-6 sm:px-8">
          <h3 className="font-heading text-xl font-bold text-[#252943] dark:text-white">
            {localize(model.name)}
          </h3>
          <p className="mt-1 text-sm font-medium text-gold-6 dark:text-gold-3">
            {localize(model.tagline)}
          </p>
        </header>
        <div className="grid gap-x-10 border-s-4 border-gold-5 px-6 py-4 dark:border-slate-6 sm:px-8 md:grid-cols-2">
          <dl className="divide-y divide-slate-0.5 dark:divide-slate-6">
            {model.specs.slice(0, Math.ceil(model.specs.length / 2)).map((row) => (
              <div key={row.value + row.label.en} className="grid grid-cols-2 gap-2 py-2 text-sm">
                <dt className="text-[var(--page-muted)]">{localize(row.label)}</dt>
                <dd className="text-end font-medium text-navy-4 dark:text-slate-1">{row.value}</dd>
              </div>
            ))}
          </dl>
          <dl className="divide-y divide-slate-0.5 dark:divide-slate-6">
            {model.specs.slice(Math.ceil(model.specs.length / 2)).map((row) => (
              <div key={row.value + row.label.en} className="grid grid-cols-2 gap-2 py-2 text-sm">
                <dt className="text-[var(--page-muted)]">{localize(row.label)}</dt>
                <dd className="text-end font-medium text-navy-4 dark:text-slate-1">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        {model.footnote ? (
          <p className="px-6 pb-5 text-xs text-gold-6 dark:text-gold-3 sm:px-8">
            {localize(model.footnote)}
          </p>
        ) : null}
      </article>
    </Reveal>
  )
}

function SpecTable({ table, localize }: { table: DataTable; localize: (v: Localized) => string }) {
  return (
    <Reveal>
      <article className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 dark:ring-white/10">
        <header className="bg-[linear-gradient(94deg,#151930,#3F4670)] px-6 py-4 sm:px-8">
          <h3 className="font-heading text-base font-bold text-white">{localize(table.title)}</h3>
        </header>
        <div className="overflow-x-auto bg-white dark:bg-slate-7">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-6">
                {table.columns.map((column) => (
                  <th
                    key={column.en}
                    className="px-4 py-3 text-start font-heading text-xs font-bold uppercase tracking-wide text-navy-4 dark:text-white"
                  >
                    {localize(column)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-0.5 dark:divide-slate-6">
              {table.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="text-navy-4 dark:text-slate-1">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-2.5">
                      {typeof cell === 'string' ? cell : localize(cell)}
                    </td>
                  ))}
                </tr>
              ))}
              {table.remark ? (
                <tr>
                  <td
                    colSpan={table.columns.length}
                    className="px-4 py-2.5 text-start text-xs text-[var(--page-muted)]"
                  >
                    {localize(table.remark)}
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </article>
    </Reveal>
  )
}

export function ServiceCatalogPage() {
  const { slug } = useParams()
  const { lang, t } = useLanguage()
  const catalog = getCatalog(slug)
  const L = (value: Localized) => value[lang]

  const navItems = useMemo(
    () =>
      catalog
        ? [
            { id: 'overview', label: L(catalog.overview.heading) },
            { id: 'safety', label: L(catalog.safety.heading) },
            { id: 'products', label: L(catalog.products.heading) },
            { id: 'optional', label: L(catalog.optionalSpecs.heading) },
            { id: 'devices', label: L(catalog.safetyDevices.heading) },
            { id: 'install', label: L(catalog.install.heading) },
            { id: 'sketches', label: L(catalog.sketches.heading) },
          ]
        : [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [catalog, lang],
  )

  if (!catalog) {
    return (
      <section className="inner-section">
        <div className="site-shell">
          <p className="body-copy text-[var(--page-muted)]">{t('services.catalog.notFound')}</p>
          <Link
            to="/services"
            className="mt-6 inline-flex items-center rounded-full bg-navy-4 hover:bg-navy-3 !text-white px-8 py-3 text-sm font-medium transition-colors"
          >
            {t('services.catalog.back')}
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <Seo titleKey="seo.title.services" descriptionKey="seo.description" />
      <PageHero title={L(catalog.hero.title)} highlight={catalog.hero.badge} />

      <nav
        aria-label={t('services.catalog.navAria')}
        className="sticky top-[112px] z-10 py-3"
      >
        <div className="site-shell flex justify-center">
          <div className="flex w-max max-w-full items-center gap-1.5 overflow-x-auto rounded-full border border-slate-0.5/80 bg-white/90 p-1.5 shadow-lg shadow-navy-4/10 backdrop-blur-md [scrollbar-width:none] dark:border-slate-6/70 dark:bg-slate-7/90 [&::-webkit-scrollbar]:hidden">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex shrink-0 items-center gap-0.5 whitespace-nowrap rounded-full bg-slate-100 px-3 py-2.5 text-xs font-semibold text-[#252943] transition-colors duration-200 hover:bg-slate-200 dark:bg-slate-6 dark:text-white dark:hover:bg-slate-5"
              >
                <span
                  className="me-2 font-heading text-xs font-bold tabular-nums text-gold-5 dark:text-gold-3"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero image */}
      <section className="inner-section">
        <div className="site-shell">
          <img
            src={catalog.hero.image}
            alt={L(catalog.hero.imageAlt)}
            className="aspect-[21/9] w-full rounded-2xl object-cover shadow-md"
          />
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="inner-section scroll-mt-[176px]">
        <div className="site-shell grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="section-title">
              {L(catalog.overview.heading)} <span>{catalog.hero.badge}</span>
            </h2>
            <p className="body-copy mt-6 leading-[1.9] text-[var(--page-muted)]">
              {L(catalog.overview.text)}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl bg-[linear-gradient(135deg,#151930,#3F4670)] p-8 text-white">
              <h3 className="font-heading text-lg font-bold">{L(catalog.overview.highlightsHeading)}</h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/85">
                {catalog.overview.highlights.map((highlight) => (
                  <li key={highlight.en} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-4" aria-hidden="true" />
                    {L(highlight)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Safety */}
      <section id="safety" className="inner-section is-soft scroll-mt-[176px]">
        <div className="site-shell">
          <Reveal>
            <h2 className="section-title">
              {L(catalog.safety.heading).split(' ')[0]}{' '}
              <span>{L(catalog.safety.heading).split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="body-copy mt-4 max-w-2xl text-[var(--page-muted)]">{L(catalog.safety.intro)}</p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {catalog.safety.features.map((feature, index) => (
              <Reveal key={feature.title.en} delay={index * 70}>
                <article className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 dark:bg-slate-7 dark:ring-white/10">
                  <span className="mb-4 block h-0.5 w-10 bg-gold-5" aria-hidden="true" />
                  <h3 className="font-heading font-bold text-navy-4 dark:text-white">
                    {L(feature.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.8] text-[var(--page-muted)]">
                    {L(feature.text)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="inner-section scroll-mt-[176px]">
        <div className="site-shell">
          <Reveal>
            <h2 className="section-title">{L(catalog.products.heading)}</h2>
          </Reveal>
          <Reveal delay={80}>
            <img
              src={catalog.products.image}
              alt={L(catalog.products.imageAlt)}
              loading="lazy"
              decoding="async"
              className="my-10 aspect-[21/9] w-full rounded-2xl object-cover shadow-md"
            />
          </Reveal>
          <div className="space-y-8">
            {catalog.products.models.map((model, index) => (
              <SpecSheet key={model.id} model={model} index={index} localize={L} />
            ))}
          </div>
        </div>
      </section>

      {/* Optional specs */}
      <section id="optional" className="inner-section scroll-mt-[176px]">
        <div className="site-shell">
          <Reveal>
            <h2 className="section-title">{L(catalog.optionalSpecs.heading)}</h2>
            <p className="mt-3 text-sm font-medium text-gold-6 dark:text-gold-3">
              {catalog.optionalSpecs.appliesTo}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 dark:ring-white/10">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-0.5 bg-white dark:divide-slate-6 dark:bg-slate-7">
                  {catalog.optionalSpecs.rows.map((row) => (
                    <tr key={row.label.en} className="grid grid-cols-1 sm:table-row">
                      <th className="px-6 py-3 text-start font-semibold text-navy-4 dark:text-white sm:w-64">
                        {L(row.label)}
                      </th>
                      <td className="px-6 py-3 text-[var(--page-muted)]">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-[var(--page-muted)]">
              {L(catalog.optionalSpecs.footnote)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Safety devices */}
      <section id="devices" className="inner-section is-soft scroll-mt-[176px]">
        <div className="site-shell">
          <Reveal>
            <h2 className="section-title">{L(catalog.safetyDevices.heading)}</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 dark:ring-white/10">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-sm">
                  <thead>
                    <tr className="bg-[linear-gradient(94deg,#151930,#3F4670)] text-white">
                      {catalog.safetyDevices.columns.map((column) => (
                        <th
                          key={column.en}
                          className="px-5 py-3 text-start font-heading text-xs font-bold uppercase tracking-wide"
                        >
                          {L(column)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-0.5 bg-white dark:divide-slate-6 dark:bg-slate-7">
                    {catalog.safetyDevices.rows.map((row) => (
                      <tr key={row.device.en}>
                        <td className="px-5 py-3 font-semibold text-navy-4 dark:text-white">
                          {L(row.device)}
                        </td>
                        <td className="px-5 py-3 text-[var(--page-muted)]">{L(row.description)}</td>
                        <td className="px-5 py-3">
                          <span
                            className={`inline-block rounded-full px-3 py-1 text-[11px] font-semibold ${
                              row.kind === 'standard'
                                ? 'bg-gold-5/15 text-gold-6 dark:text-gold-3'
                                : 'bg-slate-200/70 text-slate-500 dark:bg-slate-6 dark:text-slate-2'
                            }`}
                          >
                            {row.kind === 'standard' ? t('services.catalog.standard') : t('services.catalog.optional')}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4 text-xs text-[var(--page-muted)]">
              {L(catalog.safetyDevices.footnote)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Install arrangements */}
      <section id="install" className="inner-section scroll-mt-[176px]">
        <div className="site-shell">
          <Reveal>
            <h2 className="section-title">{L(catalog.install.heading)}</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {catalog.install.items.map((item, index) => (
              <Reveal key={item.title.en} delay={index * 60}>
                <article className="flex h-full flex-col rounded-2xl border border-slate-0.5 p-6 dark:border-slate-6">
                  <span className="font-heading text-sm font-bold text-gold-6 dark:text-gold-3">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 font-heading font-bold text-navy-4 dark:text-white">
                    {L(item.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.8] text-[var(--page-muted)]">{L(item.text)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sketches */}
      <section id="sketches" className="inner-section is-soft scroll-mt-[176px]">
        <div className="site-shell">
          <Reveal>
            <h2 className="section-title">{L(catalog.sketches.heading)}</h2>
            <p className="body-copy mt-4 text-[var(--page-muted)]">{L(catalog.sketches.intro)}</p>
          </Reveal>
          <div
            className={
              catalog.sketches.fullWidth ? 'mt-10 space-y-8' : 'mt-10 grid gap-8 lg:grid-cols-2'
            }
          >
            {catalog.sketches.tables.map((table) => (
              <SpecTable key={table.id} table={table} localize={L} />
            ))}
          </div>
          <p className="mt-8 text-xs leading-relaxed text-[var(--page-muted)]">
            {L(catalog.sketches.notes)}
          </p>
        </div>
      </section>

      <section className="inner-section">
        <div className="site-shell">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-navy-4 hover:bg-navy-3 !text-white px-8 py-3 text-sm font-medium transition-colors rtl:flex-row-reverse"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4 rtl:rotate-180"
              aria-hidden="true"
            >
              <path d="M19 12H5m0 0 6 6m-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t('services.catalog.back')}
          </Link>
        </div>
      </section>
    </>
  )
}
