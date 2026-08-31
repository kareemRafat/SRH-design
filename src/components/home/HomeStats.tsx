import { Reveal } from '../layout/Reveal'
import { StatBand } from '../ui/StatBand'

export function HomeStats() {
  return (
    <section className="py-14 bg-slate-0 dark:bg-slate-8">
      <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <StatBand variant="cards" />
      </Reveal>
    </section>
  )
}
