import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/Home'
import BeneficiariesPage from './pages/BeneficiariesPage'
import CampaignsPage from './pages/CampaignsPage'
import DonatePage from './pages/DonatePage'
import TransparencyPage from './pages/TransparencyPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beneficiaries" element={<BeneficiariesPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/transparency" element={<TransparencyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App