import { useState, useRef, type ChangeEvent, type DragEvent, type FormEvent } from 'react'
import { useToast } from '../../hooks/useToast'
import { useLanguage } from '../../hooks/useLanguage'

export function JoinForm() {
  const { showToast } = useToast()
  const { t, lang } = useLanguage()

  const [fileName, setFileName] = useState<string | null>(null)
  const [fileSize, setFileSize] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(2)
      setFileSize(`${sizeInMB} MB`)
    } else {
      setFileName(null)
      setFileSize(null)
    }
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) {
      if (fileInputRef.current) {
        const dataTransfer = new DataTransfer()
        dataTransfer.items.add(file)
        fileInputRef.current.files = dataTransfer.files
      }
      setFileName(file.name)
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(2)
      setFileSize(`${sizeInMB} MB`)
    }
  }

  const handleRemoveFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    setFileName(null)
    setFileSize(null)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setIsSubmitting(true)

    // Simulate network submission
    await new Promise((resolve) => setTimeout(resolve, 900))

    showToast(t('joinPage.form.toast'))
    form.reset()
    handleRemoveFile()
    setIsSubmitting(false)
  }

  return (
    <form
      id="join-career-form"
      className="bg-white dark:bg-slate-8 rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-0 dark:border-slate-7 text-navy-6 dark:text-slate-1 transition-colors"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name (4 parts) */}
        <div className="space-y-2">
          <label htmlFor="join-fullname" className="block text-sm font-semibold text-navy-5 dark:text-white">
            {t('joinPage.form.fullNameLabel')} <span className="text-gold-5">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-slate-4 dark:text-slate-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <input
              id="join-fullname"
              name="fullName"
              type="text"
              required
              placeholder={t('joinPage.form.fullNamePlaceholder')}
              className="w-full ps-11 pe-4 py-3.5 rounded-xl border border-slate-1.5 dark:border-slate-6 bg-slate-0/60 dark:bg-slate-7/70 text-sm text-navy-6 dark:text-white placeholder:text-slate-3 dark:placeholder:text-slate-4 focus:outline-none focus:ring-2 focus:ring-gold-5 focus:bg-white dark:focus:bg-slate-7 transition-all"
            />
          </div>
        </div>

        {/* WhatsApp Phone */}
        <div className="space-y-2">
          <label htmlFor="join-phone" className="block text-sm font-semibold text-navy-5 dark:text-white">
            {t('joinPage.form.phoneLabel')} <span className="text-gold-5">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-[#25D366]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <input
              id="join-phone"
              name="phone"
              type="tel"
              required
              dir="ltr"
              placeholder={t('joinPage.form.phonePlaceholder')}
              className="w-full ps-11 pe-4 py-3.5 rounded-xl border border-slate-1.5 dark:border-slate-6 bg-slate-0/60 dark:bg-slate-7/70 text-sm text-navy-6 dark:text-white placeholder:text-slate-3 dark:placeholder:text-slate-4 focus:outline-none focus:ring-2 focus:ring-gold-5 focus:bg-white dark:focus:bg-slate-7 transition-all text-start"
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <label htmlFor="join-email" className="block text-sm font-semibold text-navy-5 dark:text-white">
            {t('joinPage.form.emailLabel')} <span className="text-gold-5">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-slate-4 dark:text-slate-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            <input
              id="join-email"
              name="email"
              type="email"
              required
              dir="ltr"
              placeholder={t('joinPage.form.emailPlaceholder')}
              className="w-full ps-11 pe-4 py-3.5 rounded-xl border border-slate-1.5 dark:border-slate-6 bg-slate-0/60 dark:bg-slate-7/70 text-sm text-navy-6 dark:text-white placeholder:text-slate-3 dark:placeholder:text-slate-4 focus:outline-none focus:ring-2 focus:ring-gold-5 focus:bg-white dark:focus:bg-slate-7 transition-all text-start"
            />
          </div>
        </div>

        {/* Country (Multi-choice select) */}
        <div className="space-y-2">
          <label htmlFor="join-country" className="block text-sm font-semibold text-navy-5 dark:text-white">
            {t('joinPage.form.countryLabel')} <span className="text-gold-5">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-slate-4 dark:text-slate-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </span>
            <select
              id="join-country"
              name="country"
              required
              defaultValue=""
              className="w-full ps-11 pe-10 py-3.5 rounded-xl border border-slate-1.5 dark:border-slate-6 bg-slate-0/60 dark:bg-slate-7/70 text-sm text-navy-6 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-5 focus:bg-white dark:focus:bg-slate-7 transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled>
                {t('joinPage.form.countryPlaceholder')}
              </option>
              <option value="saudi-arabia">{t('joinPage.country.sa')}</option>
              <option value="uae">{t('joinPage.country.ae')}</option>
              <option value="egypt">{t('joinPage.country.eg')}</option>
              <option value="other">{t('joinPage.country.other')}</option>
            </select>
            <span className="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none text-slate-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </div>
        </div>

        {/* Department (Multi-choice select) */}
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="join-department" className="block text-sm font-semibold text-navy-5 dark:text-white">
            {t('joinPage.form.deptLabel')} <span className="text-gold-5">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-slate-4 dark:text-slate-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </span>
            <select
              id="join-department"
              name="department"
              required
              defaultValue=""
              className="w-full ps-11 pe-10 py-3.5 rounded-xl border border-slate-1.5 dark:border-slate-6 bg-slate-0/60 dark:bg-slate-7/70 text-sm text-navy-6 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-5 focus:bg-white dark:focus:bg-slate-7 transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled>
                {t('joinPage.form.deptPlaceholder')}
              </option>
              <option value="sales">{t('joinPage.deptOpt.sales')}</option>
              <option value="hr">{t('joinPage.deptOpt.hr')}</option>
              <option value="technical">{t('joinPage.deptOpt.technical')}</option>
              <option value="maintenance">{t('joinPage.deptOpt.maintenance')}</option>
              <option value="accounting">{t('joinPage.deptOpt.accounting')}</option>
              <option value="marketing">{t('joinPage.deptOpt.marketing')}</option>
              <option value="executive">{t('joinPage.deptOpt.executive')}</option>
            </select>
            <span className="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none text-slate-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </div>
        </div>

        {/* CV Upload */}
        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-semibold text-navy-5 dark:text-white">
            {t('joinPage.form.cvLabel')} <span className="text-gold-5">*</span>
          </label>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-3 ${
              isDragging
                ? 'border-gold-5 bg-gold-0.5/50 dark:bg-navy-6/80 ring-2 ring-gold-5'
                : 'border-slate-2 dark:border-slate-6 bg-slate-0/40 dark:bg-slate-7/40 hover:border-gold-4 hover:bg-slate-0 dark:hover:bg-slate-7'
            }`}
          >
            <input
              ref={fileInputRef}
              id="join-cv"
              name="cv"
              type="file"
              required
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />

            <div className="w-14 h-14 rounded-2xl bg-gold-4/15 dark:bg-gold-5/20 text-gold-6 dark:text-gold-4 flex items-center justify-center shadow-inner">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>

            {fileName ? (
              <div className="flex items-center gap-3 bg-white dark:bg-slate-6 px-4 py-2.5 rounded-xl border border-gold-4/40 shadow-sm" onClick={(e) => e.stopPropagation()}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold-5 shrink-0">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <div className="text-start">
                  <p className="text-xs font-semibold text-navy-6 dark:text-white truncate max-w-[220px] sm:max-w-xs">{fileName}</p>
                  <p className="text-[11px] text-slate-4 dark:text-slate-3">{fileSize}</p>
                </div>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  aria-label={t('joinPage.form.cvRemove')}
                  className="ms-2 p-1 text-slate-4 hover:text-red-500 rounded-full hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            ) : (
              <div>
                <p className="text-sm font-medium text-navy-5 dark:text-slate-1">
                  {t('joinPage.form.cvDragDrop')}
                </p>
                <p className="text-xs text-slate-4 dark:text-slate-3 mt-1">
                  {t('joinPage.form.cvPlaceholder')}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Notes (Optional) */}
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="join-notes" className="block text-sm font-semibold text-navy-5 dark:text-white">
            {t('joinPage.form.notesLabel')}
          </label>
          <textarea
            id="join-notes"
            name="notes"
            rows={3}
            placeholder={t('joinPage.form.notesPlaceholder')}
            className="w-full px-4 py-3.5 rounded-xl border border-slate-1.5 dark:border-slate-6 bg-slate-0/60 dark:bg-slate-7/70 text-sm text-navy-6 dark:text-white placeholder:text-slate-3 dark:placeholder:text-slate-4 focus:outline-none focus:ring-2 focus:ring-gold-5 focus:bg-white dark:focus:bg-slate-7 transition-all resize-none"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-0 dark:border-slate-7">
        <p className="text-xs text-slate-4 dark:text-slate-3 leading-relaxed text-center sm:text-start max-w-sm">
          {lang === 'ar'
            ? 'سيتم التعامل مع جميع بياناتك وسيرتك الذاتية بسرية تامة ومراجعتها من قبل قسم الموارد البشرية.'
            : 'All your personal information and CV will be treated with strict confidentiality and evaluated by our HR team.'}
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-navy-4 hover:bg-navy-3 active:bg-gold-6 text-white px-10 py-3.5 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{t('joinPage.form.submitting')}</span>
            </>
          ) : (
            <>
              <span>{t('joinPage.form.submit')}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={lang === 'ar' ? 'rotate-180' : ''}
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  )
}
