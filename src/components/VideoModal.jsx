import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Finestra video. Se esiste un file locale (video.file, es. public/media/video-sposa.mp4)
// il video si riproduce direttamente dal sito, senza servizi esterni.
// Altrimenti viene aperto il player di Instagram: il caricamento parte solo dopo il clic
// sul pulsante di riproduzione (che è preceduto da una nota visibile sul contenuto di terze parti).
export default function VideoModal({ video, onClose }) {
  const [local, setLocal] = useState(true)
  const [wide, setWide] = useState(false)

  useEffect(() => {
    if (!video) return
    setLocal(Boolean(video.file))
    setWide(false)
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [video, onClose])

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
        >
          <button onClick={onClose} className="absolute right-5 top-5 text-3xl text-cream hover:text-rose" aria-label="Chiudi">×</button>

          <div
            onClick={(e) => e.stopPropagation()}
            className={`max-h-[92vh] w-full overflow-y-auto rounded-2xl ${wide ? 'max-w-3xl' : 'max-w-[420px]'}`}
          >
            {local ? (
              <video
                src={video.file}
                title={video.title}
                className="max-h-[86vh] w-full rounded-2xl bg-ink"
                controls
                autoPlay
                playsInline
                onLoadedMetadata={(e) => setWide(e.currentTarget.videoWidth > e.currentTarget.videoHeight)}
                onError={() => setLocal(false)}
              />
            ) : !video.embed ? (
              <p className="glass p-6 text-center text-sm text-cream/75">Video non disponibile al momento.</p>
            ) : (
              <>
                <iframe
                  src={video.embed}
                  title={video.title}
                  className="h-[720px] max-h-[82vh] w-full rounded-2xl border-0 bg-cream"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />
                <p className="mt-3 text-center text-xs text-cream/60">
                  Video ospitato da Instagram ·{' '}
                  <a href={video.page} target="_blank" rel="noopener noreferrer" className="text-rose underline-offset-4 hover:underline">Apri su Instagram</a>
                  {' · '}
                  <a href="#/cookie" onClick={onClose} className="text-rose underline-offset-4 hover:underline">Cookie Policy</a>
                </p>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
