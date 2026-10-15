import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { contacts, nav, site } from '../content'

function InstagramIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open ? 'border-b border-cream/10 bg-ink/50 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="font-serif text-xl tracking-wide md:text-2xl">
          {site.name} <span className="text-sm font-light text-sage">Makeup &amp; Hair</span>
        </a>

        <nav className="glass hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex" aria-label="Principale">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="rounded-full px-4 py-2 text-sm transition hover:bg-cream/10 hover:text-rose">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={contacts.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/40 bg-ink/50 text-cream backdrop-blur-md transition hover:border-rose hover:text-rose"
          >
            <InstagramIcon />
          </a>
          <a href="#contatti" className="btn btn-solid hidden !py-2.5 md:inline-flex">Prenota</a>
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={open}
          >
            <span className={`h-px w-6 bg-cream transition ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-px w-6 bg-cream transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-px w-6 bg-cream transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden md:hidden"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col gap-1 px-5 pb-6">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-cream/10 py-3 font-serif text-2xl">
                  {n.label}
                </a>
              ))}
              <a href="#contatti" onClick={() => setOpen(false)} className="btn btn-solid mt-4">Prenota</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
