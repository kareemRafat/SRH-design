import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/home/HomePage'
import { AboutPage } from './pages/about/AboutPage'
import { ServicesPage } from './pages/services/ServicesPage'
import { ServiceCatalogPage } from './pages/services/CatalogPage'
import { ProjectsPage } from './pages/projects/ProjectsPage'
import { ProjectDetailsPage } from './pages/projects/ProjectDetailsPage'
import { AgentsPage } from './pages/agents/AgentsPage'
import { ContactPage } from './pages/contact/ContactPage'
import { MaintenancePage } from './pages/maintenance/MaintenancePage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceCatalogPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/maintenance" element={<MaintenancePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
