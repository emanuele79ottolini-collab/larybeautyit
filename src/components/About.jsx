import { about } from '../content'
import Media from './Media'
import Reveal, { Heading } from './Reveal'

export default function About() {
  return (
    <section id="chi-sono" className="bg-moss/25 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="grain overflow-hidden rounded-[2.5rem]">
            <Media src={about.image} alt="Ritratto di Lary, Makeup & Hair Artist" className="aspect-[4/5] w-full" />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <span className="eyebrow">{about.eyebrow}</span>
            <Heading parts={about.title} em={1} />
            {about.paragraphs.map((p) => (
              <p key={p} className="mt-5 max-w-xl text-cream/75">{p}</p>
            ))}
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {about.points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="glass h-full p-5">
                  <h3 className="text-xl leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-cream/65">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
