import { useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { Link } from 'react-router-dom'
import { EMPLOYEES, type Employee } from '../../data/employees'
import { VerifyShell } from '../../components/verify/VerifyShell'
import { useLanguage } from '../../hooks/useLanguage'
import { useToast } from '../../hooks/useToast'

function downloadQrPng(employee: Employee) {
  const svg = document.getElementById(`qr-${employee.token}`)?.querySelector('svg')
  if (!svg) return

  const size = 512
  const xml = new XMLSerializer().serializeToString(svg)
  const blob = new Blob([xml], { type: 'image/svg+xml;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const img = new Image()

  img.onload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      URL.revokeObjectURL(url)
      return
    }
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, size, size)
    ctx.drawImage(img, 0, 0, size, size)
    URL.revokeObjectURL(url)
    const a = document.createElement('a')
    a.download = `srh-id-${employee.idNo}.png`
    a.href = canvas.toDataURL('image/png')
    a.click()
  }
  img.src = url
}

export function IdGeneratorPage() {
  const { t } = useLanguage()
  const { showToast } = useToast()
  const origin =
    typeof window === 'undefined' ? '' : window.location.origin

  useEffect(() => {
    const previous = document.title
    document.title = `${t('idAdmin.title')} | SRH`
    return () => {
      document.title = previous
    }
  }, [t])

  const copyLink = async (employee: Employee) => {
    const url = `${origin}/id/${employee.token}`
    try {
      await navigator.clipboard.writeText(url)
      showToast(t('idAdmin.copied'))
    } catch {
      showToast(url)
    }
  }

  return (
    <VerifyShell wide>
      <div className="w-full text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-6 dark:text-gold-3">
          {t('idAdmin.kicker')}
        </p>
        <h1 className="mt-2 font-heading text-3xl font-bold text-navy-6 dark:text-white sm:text-4xl">
          {t('idAdmin.title')}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-4 dark:text-slate-3">
          {t('idAdmin.intro')}
        </p>
      </div>

      <div className="mt-10 grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {EMPLOYEES.map((employee) => (
          <div
            key={employee.token}
            className="rounded-[1.75rem] bg-gradient-to-b from-gold-3/70 via-gold-5/25 to-navy-4/25 p-px shadow-xl shadow-navy-6/15 dark:shadow-black/40"
          >
            <div className="flex h-full flex-col rounded-[calc(1.75rem-1px)] bg-white p-5 dark:bg-navy-6">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="truncate font-heading text-base font-bold text-navy-6 dark:text-white">
                    {employee.name}
                  </h2>
                  <p className="text-xs font-medium text-slate-4 dark:text-slate-3" dir="ltr">
                    {employee.idNo} · {employee.title}
                  </p>
                </div>
                <Link
                  to={`/id/${employee.token}`}
                  className="shrink-0 rounded-full bg-navy-4 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-navy-5 dark:bg-gold-5 dark:text-navy-6 dark:hover:bg-gold-4"
                >
                  {t('idAdmin.open')}
                </Link>
              </div>

              <div id={`qr-${employee.token}`} className="mx-auto mt-4 rounded-2xl bg-white p-4 shadow-inner ring-1 ring-slate-0">
                {origin && (
                  <QRCodeSVG
                    value={`${origin}/id/${employee.token}`}
                    size={168}
                    level="M"
                    aria-label={`QR for ${employee.name}`}
                  />
                )}
              </div>

              <p className="mt-3 truncate text-center text-[11px] font-medium text-slate-4 dark:text-slate-3" dir="ltr">
                {origin}/id/{employee.token}
              </p>

              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  onClick={() => void copyLink(employee)}
                  className="flex-1 rounded-full border border-navy-4/25 px-3 py-2.5 text-xs font-bold text-navy-4 transition-colors hover:border-gold-5 hover:text-gold-6 dark:border-white/20 dark:text-gold-3 dark:hover:border-gold-4"
                >
                  {t('idAdmin.copy')}
                </button>
                <button
                  type="button"
                  onClick={() => downloadQrPng(employee)}
                  className="flex-1 rounded-full bg-gradient-to-l from-gold-4 to-gold-5 px-3 py-2.5 text-xs font-bold text-navy-6 transition-opacity hover:opacity-90"
                >
                  {t('idAdmin.download')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </VerifyShell>
  )
}
