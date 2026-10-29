import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { portfolio } from '../content'
import Media from './Media'
import Reveal, { Heading } from './Reveal'

const PAGE = 12 // foto mostrate all'inizio e a ogni "Vedi altre foto"

export default function Portfolio() {
  const [filter, setFilter] = useState('Tutti')
  const [current, setCurrent] = useState(null)
  const [shown, setShown] = useState(PAGE)

  const items = portfolio.items.filter((p) => filter === 'Tutti' || p.category === filter)
  const visible = items.slice(0, shown)

  const close = useCallback(() => setCurrent(null), [])
  const step = useCallback(
    (d) => setCurrent((c) => (c === null ? c : (c + d + items.length) % items.length)),
    [items.length],
  )

  useEffect(() => {
    if (current === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [current, close, step])

  return (
    <section id="portfolio" className="bg-ink/20 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="eyebrow">{portfolio.eyebrow}</span>
          <Heading parts={portfolio.title} em={1} />
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filtra portfolio">
          {portfolio.filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => { setFilter(f); setCurrent(null); setShown(PAGE) }}
              className={`rounded-full border px-5 py-2 text-sm transition ${
                filter === f ? 'border-rose bg-rose text-ink' : 'border-cream/25 hover:border-rose hover:text-rose'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.button
                layout
                key={p.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setCurrent(i)}
                className="grain group block w-full overflow-hidden rounded-2xl"
                aria-label={`Apri: ${p.alt}`}
              >
                <Media src={p.src} alt={p.alt} className="aspect-[4/5] w-full" imgClassName="object-[50%_22%] transition duration-700 group-hover:scale-105" />
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {items.length > PAGE && (
          <div className="mt-10 flex flex-col items-center gap-3">
            <p className="text-sm text-cream/60">{visible.length} di {items.length} foto</p>
            {visible.length < items.length ? (
              <button type="button" onClick={() => setShown((n) => n + PAGE)} className="btn btn-outline">Vedi altre foto</button>
            ) : (
              <button type="button" onClick={() => setShown(PAGE)} className="btn btn-outline">Mostra meno</button>
            )}
          </div>
        )}
      </div>

      <AnimatePresence>
        {current !== null && items[current] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Immagine ingrandita"
          >
            <button onClick={close} className="absolute right-5 top-5 text-3xl text-cream hover:text-rose" aria-label="Chiudi">×</button>
            <button onClick={(e) => { e.stopPropagation(); step(-1) }} className="absolute left-3 text-4xl text-cream hover:text-rose md:left-8" aria-label="Precedente">‹</button>
            <div onClick={(e) => e.stopPropagation()} className="h-[80vh] w-full max-w-3xl">
              <Media src={items[current].src} alt={items[current].alt} className="h-full w-full rounded-2xl" imgClassName="!object-contain" lazy={false} />
            </div>
            <button onClick={(e) => { e.stopPropagation(); step(1) }} className="absolute right-3 text-4xl text-cream hover:text-rose md:right-8" aria-label="Successiva">›</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
