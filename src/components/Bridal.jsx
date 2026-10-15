import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { bridal } from '../content'
import Media from './Media'
import Reveal, { Heading } from './Reveal'

export default function Bridal() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const draw = useSpring(scrollYProgress, { stiffness: 80, damping: 25 })

  return (
    <section id="sposa" className="bg-gradient-to-b from-ink/20 to-moss/25 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="grain overflow-hidden rounded-3xl">
            <Media src={bridal.image} alt="Sposa con trucco e acconciatura eseguiti da Lary" className="aspect-[4/5] w-full" lazy />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">{bridal.eyebrow}</span>
            <Heading parts={bridal.title} em={1} />
            <p className="mt-6 max-w-lg text-cream/75">{bridal.text}</p>
          </Reveal>

          <div ref={ref} className="relative mt-12 pl-10">
            <div className="absolute bottom-2 left-[11px] top-2 w-px bg-cream/15" />
            <motion.div style={{ scaleY: draw }} className="absolute bottom-2 left-[11px] top-2 w-px origin-top bg-rose" />
            {bridal.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1} className="relative mb-10 last:mb-0">
                <span className="absolute -left-10 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-rose bg-moss text-xs text-rose">
                  {i + 1}
                </span>
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-1 text-sm text-cream/70">{s.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <a href="#contatti" className="btn btn-solid">{bridal.cta}</a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
