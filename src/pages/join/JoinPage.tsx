import { PageHero } from '../../components/layout/PageHero'
import { Reveal } from '../../components/layout/Reveal'
import { Seo } from '../../components/seo/Seo'
import { JoinForm } from '../../components/join/JoinForm'
import { useLanguage } from '../../hooks/useLanguage'

export function JoinPage() {
  const { t, lang } = useLanguage()

  const PILLARS = [
    {
      titleKey: 'joinPage.pillars.growth.title',
      descKey: 'joinPage.pillars.growth.desc',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
    },
    {
      titleKey: 'joinPage.pillars.safety.title',
      descKey: 'joinPage.pillars.safety.desc',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      titleKey: 'joinPage.pillars.culture.title',
      descKey: 'joinPage.pillars.culture.desc',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      titleKey: 'joinPage.pillars.rewards.title',
      descKey: 'joinPage.pillars.rewards.desc',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
    },
  ]

  const DEPARTMENTS = [
    {
      key: 'sales',
      titleKey: 'joinPage.dept.sales',
      descKey: 'joinPage.dept.salesDesc',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      key: 'hr',
      titleKey: 'joinPage.dept.hr',
      descKey: 'joinPage.dept.hrDesc',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      key: 'technical',
      titleKey: 'joinPage.dept.technical',
      descKey: 'joinPage.dept.technicalDesc',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      key: 'maintenance',
      titleKey: 'joinPage.dept.maintenance',
      descKey: 'joinPage.dept.maintenanceDesc',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      key: 'accounting',
      titleKey: 'joinPage.dept.accounting',
      descKey: 'joinPage.dept.accountingDesc',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
    },
    {
      key: 'marketing',
      titleKey: 'joinPage.dept.marketing',
      descKey: 'joinPage.dept.marketingDesc',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 11 18-5v12L3 14v-3z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      ),
    },
    {
      key: 'executive',
      titleKey: 'joinPage.dept.executive',
      descKey: 'joinPage.dept.executiveDesc',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
  ]

  return (
    <>
      <Seo titleKey="seo.title.join" descriptionKey="seo.description" />

      {/* Hero */}
      <PageHero title={t('joinPage.hero.title')} />

      {/* Intro Section (Intro text with luxury split styling) */}
      <section className="inner-section py-16 sm:py-24" aria-labelledby="join-intro-heading">
        <div className="site-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Image & Stats Card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal variant="left">
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-7 group">
                    <img
                      loading="lazy"
                      decoding="async"
                      src="/assets/images/ele2.webp"
                      alt={t('joinPage.intro.title')}
                      className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-7/90 via-navy-6/30 to-transparent"></div>

                    {/* Floating Quality Badge */}
                    <div className="absolute bottom-6 inset-x-6 bg-white/95 dark:bg-navy-7/95 backdrop-blur-md rounded-2xl p-5 border border-white/20 dark:border-white/10 shadow-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gold-4/20 text-gold-5 flex items-center justify-center shrink-0">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-navy-6 dark:text-white">
                            {lang === 'ar' ? 'بيئة مهنية استثنائية' : 'Exceptional Career Growth'}
                          </p>
                          <p className="text-xs text-slate-4 dark:text-slate-3">
                            {lang === 'ar' ? 'معايير عالمية للسلامة والابتكار والجودة' : 'Global safety, innovation & quality standards'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative backdrop accent */}
                  <div className="absolute -top-4 -start-4 w-32 h-32 bg-gold-4/15 rounded-full blur-2xl -z-10"></div>
                  <div className="absolute -bottom-4 -end-4 w-40 h-40 bg-navy-3/20 rounded-full blur-3xl -z-10"></div>
                </div>
              </Reveal>
            </div>

            {/* Right Intro Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <Reveal>
                <p className="text-gold-5 font-semibold text-sm tracking-wide uppercase mb-3 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-gold-5 inline-block"></span>
                  {t('joinPage.kicker')}
                </p>
                <h2 id="join-intro-heading" className="section-title text-navy-6 dark:text-white mb-6">
                  {t('joinPage.intro.title')} <span className="text-gold-5 my-4">{t('joinPage.intro.span')}</span>
                </h2>

                {/* Primary Intro Quote Box */}
                <div className="relative rounded-2xl bg-slate-0/60 dark:bg-slate-8/80 p-6 sm:p-8 border-s-4 border-gold-5 mb-8 shadow-sm">
                  <div className="text-gold-4/30 absolute top-3 end-4 text-5xl font-serif select-none pointer-events-none">
                    &rdquo;
                  </div>
                  <p className="text-base sm:text-lg leading-[2] text-navy-5 dark:text-slate-1 font-medium relative z-10">
                    {t('joinPage.intro.text')}
                  </p>
                </div>

                {/* Quick stats / Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-8 border border-slate-0 dark:border-slate-7">
                    <p className="text-2xl font-bold text-gold-5">+100</p>
                    <p className="text-xs text-slate-4 dark:text-slate-3 font-medium mt-1">
                      {lang === 'ar' ? 'كفاءة وخبير متخصص' : 'Specialized Experts'}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-8 border border-slate-0 dark:border-slate-7">
                    <p className="text-2xl font-bold text-gold-5">7</p>
                    <p className="text-xs text-slate-4 dark:text-slate-3 font-medium mt-1">
                      {lang === 'ar' ? 'قطاعات وإدارات تخصصية' : 'Core Business Depts'}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-8 border border-slate-0 dark:border-slate-7 col-span-2 sm:col-span-1">
                    <p className="text-2xl font-bold text-gold-5">100%</p>
                    <p className="text-xs text-slate-4 dark:text-slate-3 font-medium mt-1">
                      {lang === 'ar' ? 'التزام بالسلامة والتطوير' : 'Safety Commitment'}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars / Culture Section */}
      <section className="inner-section is-soft py-16 sm:py-24" aria-labelledby="join-pillars-heading">
        <div className="site-shell">
          <Reveal className="mb-14">
            <p className="text-gold-5 font-semibold text-sm tracking-wide uppercase mb-2">
              {t('joinPage.pillars.kicker')}
            </p>
            <h2 id="join-pillars-heading" className="section-title text-navy-6 dark:text-white">
              {t('joinPage.pillars.title')} <span className='my-4'>{t('joinPage.pillars.span')}</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.titleKey} variant="zoom">
                <div className="h-full bg-white dark:bg-slate-8 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-0 dark:border-slate-7 flex flex-col justify-between group">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gold-4/15 dark:bg-gold-5/20 text-gold-6 dark:text-gold-4 flex items-center justify-center mb-6 group-hover:bg-gold-5 group-hover:text-white transition-colors duration-300">
                      {pillar.icon}
                    </div>
                    <h3 className="text-lg font-bold text-navy-6 dark:text-white mb-3">
                      {t(pillar.titleKey)}
                    </h3>
                    <p className="text-sm text-slate-4 dark:text-slate-3 leading-relaxed">
                      {t(pillar.descKey)}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-0 dark:border-slate-7 flex items-center justify-between text-xs font-semibold text-gold-5">
                    <span>0{i + 1}</span>
                    <span className="w-8 h-[1px] bg-gold-5/40"></span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths / Departments */}
      <section className="inner-section is-soft py-16 sm:py-20" aria-labelledby="join-depts-heading">
        <div className="site-shell">
          <Reveal className="mb-14">
            <p className="text-gold-5 font-semibold text-sm tracking-wide uppercase mb-2">
              {t('joinPage.departments.kicker')}
            </p>
            <h2 id="join-depts-heading" className="section-title text-navy-6 dark:text-white">
              {t('joinPage.departments.title')} <span className='my-4'>{t('joinPage.departments.span')}</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative">
            {DEPARTMENTS.map((dept, index) => (
              <Reveal key={dept.key}>
                <div className="bg-white dark:bg-slate-8 rounded-2xl p-6 border border-slate-0 dark:border-slate-7 shadow-sm h-full flex flex-col justify-between relative overflow-hidden group">
                  <span className="absolute -top-3 -end-1 text-6xl font-black text-slate-0/70 dark:text-slate-7/50 select-none pointer-events-none group-hover:text-gold-4/15 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-navy-4/10 dark:bg-white/5 text-navy-4 dark:text-gold-4 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {dept.icon}
                    </div>
                    <h3 className="text-base font-bold text-navy-6 dark:text-white mb-2">
                      {t(dept.titleKey)}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-4 dark:text-slate-3 leading-relaxed">
                      {t(dept.descKey)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="inner-section py-16 sm:py-24" aria-labelledby="join-form-heading">
        <div className="site-shell">
          {/* Shared Header */}
          <div className="mb-8">
            <p className="text-gold-5 font-semibold text-sm tracking-wide uppercase mb-2">
              {t('joinPage.form.span')}
            </p>
            <h2 id="join-form-heading" className="section-title text-navy-6 dark:text-white">
              {t('joinPage.form.title')}
            </h2>
          </div>

          {/* Form & Sidebar Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <JoinForm />
            </div>

            {/* Sidebar Column - Tips & HR Contact */}
            <div className="space-y-6">
              {/* Application Tips Card */}
              <div className="bg-slate-0/60 dark:bg-slate-8 rounded-3xl p-6 sm:p-8 border border-slate-1/40 dark:border-slate-7 shadow-sm">
                <h3 className="text-lg font-bold text-navy-6 dark:text-white mb-4 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold-5">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                  {lang === 'ar' ? 'نصائح لتقديم متميز' : 'Application Tips'}
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-4 dark:text-slate-3 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-5 font-bold">•</span>
                    <span>
                      {lang === 'ar'
                        ? 'تأكد من كتابة الاسم الرباعي ورقم الواتساب بشكل دقيق.'
                        : 'Ensure your full name and WhatsApp number are accurate.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-5 font-bold">•</span>
                    <span>
                      {lang === 'ar'
                        ? 'أرفق سيرة ذاتية حديثة بصيغة PDF موضحاً بها أحدث الخبرات والمهارات.'
                        : 'Attach an up-to-date CV in PDF format highlighting your recent experience.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-5 font-bold">•</span>
                    <span>
                      {lang === 'ar'
                        ? 'حدد القسم والدولة المناسبة لتسهيل توجيه طلبك للإدارة المختصة.'
                        : 'Select the exact department and country to route your application faster.'}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Recruitment Inquiries Card */}
              <div className="bg-white dark:bg-slate-8 rounded-3xl p-6 sm:p-8 border border-slate-0 dark:border-slate-7 shadow-sm">
                <h3 className="text-lg font-bold text-navy-6 dark:text-white mb-4">
                  {lang === 'ar' ? 'استفسارات التوظيف' : 'Recruitment Inquiries'}
                </h3>
                <div className="space-y-3 text-xs sm:text-sm">
                  <a
                    href="mailto:info@srh-ksa.com"
                    className="flex items-center gap-3 text-navy-5 dark:text-slate-2 hover:text-gold-5 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold-5 shrink-0">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>info@srh-ksa.com</span>
                  </a>
                  <a
                    href="tel:+966571608000"
                    className="flex items-center gap-3 text-navy-5 dark:text-slate-2 hover:text-gold-5 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold-5 shrink-0">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span dir="ltr">00966 571 608 000</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
