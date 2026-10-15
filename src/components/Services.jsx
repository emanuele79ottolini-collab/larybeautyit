import { services } from '../content'
import Media from './Media'
import Reveal, { Heading } from './Reveal'

export default function Services() {
  return (
    <section id="servizi" className="bg-moss/25 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="eyebrow">{services.eyebrow}</span>
          <Heading parts={services.title} em={1} />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="glass group h-full overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Media src={s.image} alt={s.title} className="h-full w-full" imgClassName="transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl leading-tight">{s.title}</h3>
                  <p className="mt-3 text-sm text-cream/70">{s.text}</p>
                  <p className="mt-5 font-serif text-lg italic text-rose">{s.price}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
