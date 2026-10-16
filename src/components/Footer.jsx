import { legal, legalLinks, site } from '../content'
import ContactIcons from './ContactIcons'

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink/85 px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-sm text-cream/60 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-serif text-xl text-cream">{site.brand}</p>
          <p>{legal.owner} · {legal.ownerRole}</p>
        </div>
        <ContactIcons />
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Informazioni legali">
          {legalLinks.map((l) => (
            <a key={l.slug} href={`#/${l.slug}`} className="hover:text-rose">{l.label}</a>
          ))}
        </nav>
      </div>
      <p className="mt-6 text-center text-xs text-cream/40">© {new Date().getFullYear()} {site.brand}. Tutti i diritti riservati.</p>
    </footer>
  )
}
