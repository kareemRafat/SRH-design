import { useState } from 'react'
import { useLanguage } from '../../hooks/useLanguage'

type BranchId = 'sa' | 'dubai' | 'egypt'

type Branch = {
  id: BranchId
  tabKey: string
  nameKey: string
  addressKey: string
  src: string
}

// Google Maps embeds provided by the client (one per branch)
const BRANCHES: Branch[] = [
  {
    id: 'sa',
    tabKey: 'home.contact.tab.sa',
    nameKey: 'branches.sa.name',
    addressKey: 'branches.sa.address',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.8582025604214!2d39.885469199999996!3d21.356087600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c20523c74528d7%3A0x31bd244eaef1dfe2!2z2LTYsdmD2Kkg2KfZhNmI2LXZiNmEINin2YTYotmF2YYg2YTZhNmF2LXYp9i52K8!5e0!3m2!1sen!2seg!4v1787409870857!5m2!1sen!2seg',
  },
  {
    id: 'dubai',
    tabKey: 'home.contact.tab.dubai',
    nameKey: 'branches.dubai.name',
    addressKey: 'branches.dubai.address',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.933011725372!2d55.3477472!3d25.2728388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dae40bf79f7%3A0x982de13a1e1d9d33!2sSicher%20Mayor%20Investments%20LLC!5e0!3m2!1sen!2seg!4v1787409903668!5m2!1sen!2seg',
  },
  {
    id: 'egypt',
    tabKey: 'home.contact.tab.egypt',
    nameKey: 'branches.egypt.name',
    addressKey: 'branches.egypt.address',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.6216505029206!2d31.4271966!3d30.019018499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cde9ff13f89%3A0xb3e7b722ced22cc7!2sRaya%20offices!5e0!3m2!1sen!2seg!4v1787409926143!5m2!1sen!2seg',
  },
]

export function BranchMapTabs() {
  const { t } = useLanguage()
  const [active, setActive] = useState<BranchId>('sa')
  const branch = BRANCHES.find((b) => b.id === active) ?? BRANCHES[0]

  return (
    <div>
      <div role="tablist" aria-label={t('branches.title2')} className="flex flex-wrap justify-center gap-2 mb-4">
        {BRANCHES.map((b) => {
          const selected = b.id === active
          return (
            <button
              key={b.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(b.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors border ${
                selected
                  ? 'bg-navy-4 dark:bg-white text-white dark:text-navy-6 border-navy-4 dark:border-white'
                  : 'text-navy-4 dark:text-white border-navy-4/30 dark:border-white/30 hover:border-navy-4 dark:hover:border-white'
              }`}
            >
              {t(b.tabKey)}
            </button>
          )
        })}
      </div>

      <div
        role="tabpanel"
        className="rounded-2xl overflow-hidden shadow-sm h-80 border border-slate-0.5 dark:border-slate-6"
      >
        <iframe
          key={branch.id}
          title={t(branch.nameKey)}
          src={branch.src}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>

      <p className="text-center text-sm font-medium text-navy-4 dark:text-white mt-4">{t(branch.nameKey)}</p>
      <p className="text-center text-xs sm:text-sm text-slate-4 dark:text-slate-2 mt-1 leading-relaxed">
        {t(branch.addressKey)}
      </p>
    </div>
  )
}
