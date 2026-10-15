import { useEffect } from 'react'
import { contacts, media, site } from './content'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Bridal from './components/Bridal'
import About from './components/About'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Dati strutturati JSON-LD generati da content.js
function useStructuredData() {
  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': ['BeautySalon', 'LocalBusiness'],
      name: site.brand,
      description: site.description,
      founder: { '@type': 'Person', name: site.fullName, knowsLanguage: ['it', 'en', 'ru'] },
      url: site.url,
      email: contacts.email,
      image: `${site.url}/media/hero.jpg`,
      areaServed: site.area,
      address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: 'IT' },
      sameAs: [contacts.instagram],
    }
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.text = JSON.stringify(data)
    document.head.appendChild(el)
    return () => el.remove()
  }, [])
}

export default function App() {
  useStructuredData()
  return (
    <>
      {/* Sfondo fisso sfuocato: sostituisci public/media/background.png per cambiarlo */}
      <div aria-hidden="true" className="fixed inset-0 -z-20 bg-ink">
        <img
          src={media.background}
          alt=""
          className="absolute right-0 top-0 h-full w-full object-cover object-top opacity-40 md:w-[55%] md:opacity-100"
          style={{ maskImage: 'linear-gradient(to right, transparent, #000 45%)', WebkitMaskImage: 'linear-gradient(to right, transparent, #000 45%)' }}
        />
      </div>
      {/* sfumatura da sinistra: la foto si dissolve nel fondo e la pagina resta leggibile */}
      <div aria-hidden="true" className="fixed inset-0 -z-10 bg-gradient-to-r from-ink/80 via-ink/50 to-transparent md:from-ink/60 md:via-transparent md:to-transparent" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Bridal />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
