import { useEffect, useState } from 'react'
import { contacts, media, site } from './content'
import { pages } from './legal'
import LegalPage from './components/LegalPage'
import { WhatsAppIcon } from './components/ContactIcons'
import { waLink } from './lib/contact'
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

// Le pagine legali usano indirizzi con hash (#/privacy, #/cookie, ...): funzionano su qualsiasi hosting statico
const getRoute = () => (window.location.hash.startsWith('#/') ? window.location.hash.slice(2) : '')

function useRoute() {
  const [route, setRoute] = useState(getRoute)
  useEffect(() => {
    const onChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

export default function App() {
  useStructuredData()
  const route = useRoute()
  const legalPage = pages[route] ? route : null

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
      <div
        aria-hidden="true"
        className={`fixed inset-0 -z-10 ${
          legalPage
            ? 'bg-ink/90' // pagine legali: sfondo più scuro per la massima leggibilità
            : 'bg-gradient-to-r from-ink/80 via-ink/50 to-transparent md:from-ink/60 md:via-transparent md:to-transparent'
        }`}
      />
      {legalPage ? (
        <LegalPage slug={legalPage} />
      ) : (
        <>
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
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Scrivici su WhatsApp"
            className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-rose text-ink shadow-lg shadow-ink/40 transition hover:scale-105 hover:bg-cream"
          >
            <WhatsAppIcon className="h-7 w-7" />
          </a>
        </>
      )}
    </>
  )
}
