import { AboutOverview } from '../../components/home/AboutOverview'
import { Seo } from '../../components/seo/Seo'
import { AgentsPreview } from '../../components/home/AgentsPreview'
import { BranchesSection } from '../../components/home/BranchesSection'
import { ContactSection } from '../../components/home/ContactSection'
import { FutureSection } from '../../components/home/FutureSection'
import { HomeHero } from '../../components/home/HomeHero'
import { HomeStats } from '../../components/home/HomeStats'
import { MaintenanceSection } from '../../components/home/MaintenanceSection'
import { PartnersStrip } from '../../components/home/PartnersStrip'
import { ProjectsStrip } from '../../components/home/ProjectsStrip'
import { Testimonials } from '../../components/home/Testimonials'
import { VisionSection } from '../../components/home/VisionSection'

export function HomePage() {
  return (
    <>
      <Seo titleKey="seo.title.home" descriptionKey="seo.description" />
      <HomeHero />
      <AboutOverview />
      <FutureSection />
      <VisionSection />
      <ProjectsStrip />
      <HomeStats />
      <Testimonials />
      {/* <EventsGallery /> */}
      <MaintenanceSection />
      <PartnersStrip />
      <AgentsPreview />
      <ContactSection />
      <BranchesSection />
    </>
  )
}
