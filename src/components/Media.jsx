import { useState } from 'react'

// Immagine con gradiente verde/crema di riserva finché il file non esiste.
export default function Media({ src, alt = '', className = '', imgClassName = '', lazy = true }) {
  const [ok, setOk] = useState(true)
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-moss via-sage/60 to-cream/80 ${className}`}>
      {ok && (
        <img
          src={src}
          alt={alt}
          loading={lazy ? 'lazy' : 'eager'}
          onError={() => setOk(false)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  )
}
