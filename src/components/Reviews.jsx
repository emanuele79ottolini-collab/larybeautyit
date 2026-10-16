import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { reviews } from '../content'
import Reveal, { Heading } from './Reveal'

export default function Reviews() {
  const [i, setI] = useState(0)
  const n = reviews.items.length
  const r = reviews.items[i]
  const s = reviews.source

  return (
    <section id="recensioni" className="bg-ink/20 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="eyebrow">{reviews.eyebrow}</span>
          <Heading parts={reviews.title} em={1} />
        </Reveal>

        {s && (
          <Reveal delay={0.1}>
            <div className="glass mx-auto mt-12 max-w-xl p-8 md:p-10">
              <div className="text-xl tracking-widest text-rose" aria-hidden="true">★★★★★</div>
              <p className="mt-3 font-serif text-5xl text-cream">
                {s.rating}<span className="text-2xl text-cream/60"> / 5</span>
              </p>
              <p className="mt-2 text-sm uppercase tracking-widest text-sage">
                {s.count} recensioni su {s.name}
              </p>
              <p className="mt-5 text-cream/75">{reviews.text}</p>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-7">
                Leggi le recensioni su {s.name}
              </a>
            </div>
          </Reveal>
        )}

        {n > 0 && (
          <>
            <div className="mt-12 min-h-[18rem]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="glass p-8 md:p-12"
                >
                  <div className="text-xl tracking-widest text-rose" aria-label={`${r.stars} stelle su 5`}>
                    {'★'.repeat(r.stars)}
                  </div>
                  <blockquote className="mt-5 font-serif text-2xl italic leading-snug md:text-3xl">“{r.text}”</blockquote>
                  <figcaption className="mt-6 text-sm uppercase tracking-widest text-sage">{r.name}</figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-center gap-5">
              <button onClick={() => setI((i - 1 + n) % n)} className="btn btn-outline !px-5 !py-2" aria-label="Recensione precedente">←</button>
              <div className="flex gap-2">
                {reviews.items.map((_, k) => (
                  <button
                    key={k}
                    onClick={() => setI(k)}
                    aria-label={`Vai alla recensione ${k + 1}`}
                    className={`h-2 rounded-full transition-all ${k === i ? 'w-6 bg-rose' : 'w-2 bg-cream/30'}`}
                  />
                ))}
              </div>
              <button onClick={() => setI((i + 1) % n)} className="btn btn-outline !px-5 !py-2" aria-label="Recensione successiva">→</button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
