import { useLayoutEffect, useState } from 'react'
import { FAQS } from '../../data/faqs'
import { useLanguage } from '../../hooks/useLanguage'

export function FaqAccordion() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(() => {
    const index = FAQS.findIndex((faq) => faq.defaultOpen)
    return index >= 0 ? index : null
  })

  useLayoutEffect(() => {
    if (openIndex === null) return
    const trigger = document.querySelector<HTMLButtonElement>(
      '[data-faq-trigger][aria-expanded="true"]'
    )
    const panel = trigger?.nextElementSibling as HTMLElement | null
    if (panel) panel.style.maxHeight = `${panel.scrollHeight}px`
  }, [openIndex])

  const closeOpenPanel = () => {
    const trigger = document.querySelector<HTMLButtonElement>(
      '[data-faq-trigger][aria-expanded="true"]'
    )
    const panel = trigger?.nextElementSibling as HTMLElement | null
    if (panel) panel.style.maxHeight = '0px'
  }

  const handleToggle = (index: number) => {
    if (openIndex === index) {
      closeOpenPanel()
      setOpenIndex(null)
    } else {
      closeOpenPanel()
      setOpenIndex(index)
    }
  }

  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <article className="faq-card" data-faq-item key={faq.key}>
            <button
              type="button"
              data-faq-trigger
              aria-expanded={isOpen}
              onClick={() => handleToggle(index)}
            >
              <span>{t(`faq.${faq.key}.q`)}</span>
              <span data-faq-icon aria-hidden="true">
                {isOpen ? t('faq.close') : t('faq.open')}
              </span>
            </button>
            <div data-faq-panel>
              <p>{t(`faq.${faq.key}.a`)}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}