import { useEffect } from 'react'
import { legal, legalLinks, site } from '../content'
import { pages } from '../legal'
import ContactIcons from './ContactIcons'
import Footer from './Footer'

export default function LegalPage({ slug }) {
  const page = pages[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
    const previous = document.title
    document.title = `${page.title} | ${site.brand}`
    return () => { document.title = previous }
  }, [slug, page.title])

  return (
    <>
      <header className="border-b border-cream/10 bg-ink/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-serif text-xl tracking-wide md:text-2xl">
            {site.name} <span className="text-sm font-light text-sage">Makeup &amp; Hair</span>
          </a>
          <a href="#top" className="btn btn-outline !px-5 !py-2.5">← Torna al sito</a>
        </div>
      </header>

      <main className="px-5 py-16 md:px-8 md:py-24">
        <article className="mx-auto max-w-3xl">
          <span className="eyebrow">Informazioni legali</span>
          <h1 className="title">{page.title}</h1>
          <p className="mt-3 text-sm text-cream/60">Ultimo aggiornamento: {legal.updated}</p>
          <p className="mt-6 text-cream/80">{page.intro}</p>

          {page.sections.map((s) => (
            <section key={s.h} className="mt-10">
              <h2 className="text-2xl md:text-3xl">{s.h}</h2>
              {s.p?.map((t) => <p key={t} className="mt-3 text-cream/75">{t}</p>)}
              {s.ul && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-cream/75 marker:text-rose">
                  {s.ul.map((t) => <li key={t}>{t}</li>)}
                </ul>
              )}
              {s.table && (
                <div className="glass mt-4 overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="text-xs uppercase tracking-widest text-sage">
                      <tr>{s.table.head.map((h) => <th key={h} className="px-4 py-3 font-normal">{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((r) => (
                        <tr key={r[0]} className="border-t border-cream/10 text-cream/80">
                          {r.map((c, i) => <td key={i} className="px-4 py-3">{c}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {s.links && (
                <ul className="mt-3 space-y-2">
                  {s.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-rose underline-offset-4 hover:underline">{l.label}</a>
                    </li>
                  ))}
                </ul>
              )}
              {s.contact && <ContactIcons only={['wa', 'mail']} className="mt-5" />}
            </section>
          ))}

          <nav className="mt-14 border-t border-cream/10 pt-8" aria-label="Altre informative">
            <p className="text-xs uppercase tracking-widest text-sage">Altre informative</p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.filter((l) => l.slug !== slug).map((l) => (
                <li key={l.slug}><a href={`#/${l.slug}`} className="text-cream/80 hover:text-rose">{l.label}</a></li>
              ))}
            </ul>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  )
}
