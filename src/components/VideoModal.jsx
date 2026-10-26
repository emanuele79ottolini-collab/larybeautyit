import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Finestra video: riproduce direttamente dal sito il file MP4 indicato in video.file
// (cartella public/media). Nessun servizio esterno, nessun cookie.
export default function VideoModal({ video, onClose }) {
  const [failed, setFailed] = useState(false)
  const [wide, setWide] = useState(false)

  useEffect(() => {
    if (!video) return
    setFailed(false)
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
            {failed ? (
              <p className="glass p-6 text-center text-sm text-cream/75">Video non disponibile al momento.</p>
            ) : (
              <video
                src={video.file}
                title={video.title}
                className="max-h-[86vh] w-full rounded-2xl bg-ink"
                controls
                autoPlay
                playsInline
                onLoadedMetadata={(e) => setWide(e.currentTarget.videoWidth > e.currentTarget.videoHeight)}
                onError={() => setFailed(true)}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
