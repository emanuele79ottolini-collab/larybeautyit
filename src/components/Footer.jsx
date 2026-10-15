import { contacts, footer, site } from '../content'

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink/85 px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-sm text-cream/60 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-serif text-xl text-cream">{site.brand}</p>
          <p>{site.vat}</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6" aria-label="Link legali e social">
          <a href={contacts.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-rose">Instagram</a>
          <a href={footer.privacy} className="hover:text-rose">Privacy Policy</a>
          <a href={footer.cookie} className="hover:text-rose">Cookie Policy</a>
        </nav>
        <p>© {new Date().getFullYear()} {site.brand}</p>
      </div>
    </footer>
  )
}
