import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CommunityGallery from './components/CommunityGallery'
import Philosophy from './components/Philosophy'
import Protocol from './components/Protocol'
import Membership from './components/Membership'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-charcoal min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <CommunityGallery />
      <Philosophy />
      <Protocol />
      <Membership />
      <Footer />
    </div>
  )
}
