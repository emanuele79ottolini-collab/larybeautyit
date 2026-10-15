import { motion, useReducedMotion } from 'framer-motion'

// Fade + slide verso l'alto all'ingresso nel viewport.
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: reduce ? 0.01 : 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}

// Titolo con la parola/riga centrale in corsivo: ['Prima', 'parola', 'dopo'] -> evidenzia l'indice dato
export function Heading({ parts, em = 1, className = '' }) {
  return (
    <h2 className={`title ${className}`}>
      {parts.map((p, i) => (
        <span key={i}>{i === em ? <em>{p}</em> : p}{i < parts.length - 1 ? ' ' : ''}</span>
      ))}
    </h2>
  )
}
