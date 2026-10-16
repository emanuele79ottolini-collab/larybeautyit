import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { hero, media } from '../content'

const item = (i) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay: 0.2 + i * 0.18, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const [videoOk, setVideoOk] = useState(true)
  const [imgOk, setImgOk] = useState(true)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '20%'])

  const motionProps = (i) => (reduce ? {} : item(i))

  return (
    <section id="top" ref={ref} className="relative isolate min-h-screen overflow-hidden">
      <motion.div style={{ y }} className="grain absolute inset-0 -z-10 scale-110 ">
        {imgOk && (
          <img src={media.heroImage} alt="" onError={() => setImgOk(false)} className="absolute inset-0 h-full w-full object-cover" />
        )}
        {videoOk && (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay muted loop playsInline
            poster={media.heroImage}
            onError={() => setVideoOk(false)}
          >
            <source src={media.heroVideo} type="video/mp4" onError={() => setVideoOk(false)} />
          </video>
        )}
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/10" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-10 pt-32 md:px-8">
        <motion.span {...motionProps(0)} className="eyebrow !text-cream/80">{hero.eyebrow}</motion.span>
        <motion.h1 {...motionProps(1)} className="max-w-4xl text-5xl leading-[1.05] md:text-8xl">
          {hero.title[0]} <em>{hero.title[1]}</em> {hero.title[2]}
        </motion.h1>
        <motion.div {...motionProps(2)} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#contatti" className="btn btn-solid">{hero.primaryCta}</a>
          <a href="#portfolio" className="btn btn-outline">{hero.secondaryCta}</a>
        </motion.div>

        <div className="mt-14 flex flex-col gap-4 md:mt-auto md:flex-row md:items-end md:justify-between md:pt-20">
          <motion.div {...motionProps(3)} className="glass max-w-sm p-6 md:order-1">
            <h3 className="text-2xl">{hero.card.title}</h3>
            <p className="mt-2 text-sm text-cream/75">{hero.card.text}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
