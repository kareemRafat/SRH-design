import { AboutHero } from '../../components/about/AboutHero'
import { Seo } from '../../components/seo/Seo'
import { CompanyOverview } from '../../components/about/CompanyOverview'
import { CoreValues } from '../../components/about/CoreValues'
import { Credentials } from '../../components/about/Credentials'
import { LeaderMessages } from '../../components/about/LeaderMessages'
import { FutureSection } from '../../components/home/FutureSection'
import { VisionSection } from '../../components/home/VisionSection'

export function AboutPage() {
  return (
    <>
      <Seo titleKey="seo.title.about" descriptionKey="seo.description" />
      <AboutHero />
      <CompanyOverview />
      <FutureSection />
      <VisionSection />
      <CoreValues />
      <LeaderMessages />
      <Credentials />
    </>
  )
}
