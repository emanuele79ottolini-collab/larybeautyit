import { useCallback, useState } from 'react'
import { services } from '../content'
import Media from './Media'
import Reveal, { Heading } from './Reveal'
import VideoModal from './VideoModal'

export default function Services() {
  const [video, setVideo] = useState(null)
  const closeVideo = useCallback(() => setVideo(null), [])

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
              <article className="glass group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Media src={s.image} alt={s.title} className="h-full w-full" imgClassName="transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  {s.video && (
                    <button
                      type="button"
                      onClick={() => setVideo(s.video)}
                      className="absolute inset-0 flex items-center justify-center"
                      aria-label={`${s.video.label}: ${s.title}`}
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cream/60 bg-ink/50 text-cream backdrop-blur-md transition group-hover:scale-110 group-hover:border-rose group-hover:text-rose">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                      </span>
                    </button>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl leading-tight">{s.title}</h3>
                  <p className="mt-3 text-sm text-cream/70">{s.text}</p>
                  {s.video && (
                    <button
                      type="button"
                      onClick={() => setVideo(s.video)}
                      className="mt-4 self-start text-sm text-rose underline-offset-4 hover:underline"
                    >
                      ▶ {s.video.label}
                    </button>
                  )}
                  <p className="mt-auto pt-5 font-serif text-lg italic text-rose">{s.price}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <VideoModal video={video} onClose={closeVideo} />
    </section>
  )
}
