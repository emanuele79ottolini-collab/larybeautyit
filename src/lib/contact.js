import { contacts } from '../content'

// Link WhatsApp: il numero resta nell'URL del link e non compare mai come testo nella pagina.
export const waLink = (text = contacts.whatsappMessage) =>
  `https://wa.me/${contacts.whatsapp}?text=${encodeURIComponent(text)}`

export const mailLink = (subject = 'Richiesta di informazioni') =>
  `mailto:${contacts.email}?subject=${encodeURIComponent(subject)}`
