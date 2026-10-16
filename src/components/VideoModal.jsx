import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Video Instagram incorporato con consenso: finché l'utente non preme "Carica il video"
// non viene fatta nessuna richiesta a Instagram (nessun cookie, nessun dato inviato).
export default function VideoModal({ video, onClose }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!video) return
    setLoaded(false)
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

          <div onClick={(e) => e.stopPropagation()} className="max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-2xl">
            {loaded ? (
              <iframe
                src={video.embed}
                title={video.title}
                className="h-[720px] max-h-[86vh] w-full rounded-2xl border-0 bg-cream"
                allow="encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <div className="glass p-7 text-center">
                <h3 className="text-2xl">{video.title}</h3>
                <p className="mt-4 text-sm text-cream/75">
                  Questo video è ospitato da Instagram (Meta). Se lo carichi, Instagram può usare cookie e raccogliere dati
                  secondo le proprie informative. Finché non premi il pulsante, nessun dato viene inviato.
                </p>
                <button type="button" onClick={() => setLoaded(true)} className="btn btn-solid mt-6 w-full">
                  Carica il video
                </button>
                <a href={video.page} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-3 w-full">
                  Guarda su Instagram
                </a>
                <p className="mt-5 text-xs text-cream/50">
                  Più informazioni nella <a href="#/cookie" onClick={onClose} className="text-rose underline-offset-4 hover:underline">Cookie Policy</a>.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
