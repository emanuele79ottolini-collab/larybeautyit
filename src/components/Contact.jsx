import { useState } from 'react'
import { contact, site } from '../content'
import { waLink } from '../lib/contact'
import ContactIcons, { WhatsAppIcon } from './ContactIcons'
import Reveal, { Heading } from './Reveal'

const initial = { nome: '', telefono: '', email: '', data: '', servizio: '', messaggio: '', privacy: false }
const field =
  'w-full rounded-xl border border-cream/20 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/40 outline-none transition focus:border-rose'

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const validate = () => {
    const e = {}
    if (form.nome.trim().length < 2) e.nome = 'Inserisci il tuo nome.'
    if (!/^[+\d][\d\s().-]{6,}$/.test(form.telefono.trim())) e.telefono = 'Inserisci un numero valido.'
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = 'Inserisci un’email valida.'
    if (!form.servizio) e.servizio = 'Scegli un servizio.'
    if (!form.privacy) e.privacy = 'Per procedere conferma di aver letto l’informativa.'
    return e
  }

  const submit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    const lines = [
      'Ciao Lary, vorrei prenotare una consulenza.',
      `Nome: ${form.nome}`,
      `Telefono: ${form.telefono}`,
      `Email: ${form.email}`,
      form.data && `Data evento: ${form.data}`,
      `Servizio: ${form.servizio}`,
      form.messaggio && `Messaggio: ${form.messaggio}`,
    ].filter(Boolean)
    window.open(waLink(lines.join('\n')), '_blank', 'noopener')
  }

  const Err = ({ k }) => (errors[k] ? <p className="mt-1 text-xs text-rose" role="alert">{errors[k]}</p> : null)

  return (
    <section id="contatti" className="bg-gradient-to-b from-moss/25 to-ink/40 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <span className="eyebrow">{contact.eyebrow}</span>
          <Heading parts={contact.title} em={1} />
          <p className="mt-5 max-w-md text-cream/75">{contact.text}</p>

          <form onSubmit={submit} noValidate className="glass mt-10 grid gap-4 p-6 sm:grid-cols-2 md:p-8">
            <div>
              <input className={field} placeholder="Nome" aria-label="Nome" value={form.nome} onChange={set('nome')} autoComplete="name" />
              <Err k="nome" />
            </div>
            <div>
              <input className={field} placeholder="Telefono" aria-label="Telefono" type="tel" value={form.telefono} onChange={set('telefono')} autoComplete="tel" />
              <Err k="telefono" />
            </div>
            <div>
              <input className={field} placeholder="Email" aria-label="Email" type="email" value={form.email} onChange={set('email')} autoComplete="email" />
              <Err k="email" />
            </div>
            <div>
              <input className={field} aria-label="Data evento" type="date" value={form.data} onChange={set('data')} />
            </div>
            <div className="sm:col-span-2">
              <select className={field} aria-label="Tipo di servizio" value={form.servizio} onChange={set('servizio')}>
                <option value="" className="text-ink">Tipo di servizio</option>
                {contact.serviceOptions.map((o) => <option key={o} value={o} className="text-ink">{o}</option>)}
              </select>
              <Err k="servizio" />
            </div>
            <textarea className={`${field} sm:col-span-2`} rows={4} placeholder="Messaggio" aria-label="Messaggio" value={form.messaggio} onChange={set('messaggio')} />

            <div className="sm:col-span-2">
              <label className="flex items-start gap-3 text-xs leading-relaxed text-cream/70">
                <input
                  type="checkbox"
                  checked={form.privacy}
                  onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#C9A27E]"
                />
                <span>
                  Ho letto la <a href="#/privacy" className="text-rose underline-offset-4 hover:underline">Privacy Policy</a> e
                  acconsento all’uso dei dati inseriti per rispondere alla mia richiesta.
                </span>
              </label>
              <Err k="privacy" />
            </div>

            <button type="submit" className="btn btn-solid gap-2 sm:col-span-2">
              <WhatsAppIcon className="h-4 w-4" /> Invia la richiesta su WhatsApp
            </button>
            <p className="text-xs text-cream/50 sm:col-span-2">
              Il modulo non salva i dati sul sito: apre WhatsApp con un messaggio già compilato, che invii solo se lo confermi tu.
            </p>
          </form>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col justify-center gap-4">
          <a
            href={waLink()}
            target="_blank" rel="noopener noreferrer"
            className="btn btn-solid gap-3 !py-6 !text-lg"
          >
            <WhatsAppIcon className="h-6 w-6" /> {contact.whatsappCta}
          </a>
          <div className="glass p-5">
            <span className="text-xs uppercase tracking-widest text-sage">Contatti</span>
            <p className="mt-1 text-sm text-cream/70">Scrivimi su WhatsApp, per email o seguimi su Instagram.</p>
            <ContactIcons size="md" className="mt-4" />
          </div>
          <div className="glass p-5">
            <span className="text-xs uppercase tracking-widest text-sage">Zona servita</span>
            <div className="font-serif text-2xl">{site.area}</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
