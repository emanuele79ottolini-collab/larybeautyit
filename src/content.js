// Tutti i testi, i contatti e le immagini del sito sono qui.
// Modifica solo questo file per aggiornare il contenuto.

// Prefisso del percorso base (serve per GitHub Pages, dove il sito sta in /nome-repo/)
const p = (path) => import.meta.env.BASE_URL + path

export const site = {
  name: 'Lary',
  brand: 'Lary Makeup & Hair',
  role: 'Makeup & Hair Artist',
  city: 'Verona',
  fullName: 'Larisa Sarkisova',
  languages: 'Italiano · English · Русский',
  area: 'Verona, Venezia, Lago di Garda, Milano e Lago di Como',
  description:
    'Makeup & Hair Artist a Verona, Venezia, Lago di Garda e Milano: trucco e acconciature per spose, eventi e shooting.',
  url: 'https://www.example.com', // <- sostituisci con il tuo dominio
}

// Titolare del trattamento e dati usati nelle pagine legali (un solo punto da aggiornare)
export const legal = {
  owner: 'Larisa Sarkisova',
  ownerRole: 'Makeup & Hair Artist',
  address: '', // facoltativo: indirizzo/sede del Titolare. Se compilato, compare nelle pagine legali
  hosting: 'Hostinger', // fornitore di hosting del sito
  updated: '16 ottobre 2026', // data di ultimo aggiornamento delle pagine legali
}

export const contacts = {
  // Il numero NON viene mai mostrato in chiaro: è usato solo nei link all'icona WhatsApp.
  // Formato senza + e senza spazi (39 = Italia).
  whatsapp: '393203388027',
  whatsappMessage: 'Ciao Lary, vorrei prenotare una consulenza.',
  // L'indirizzo email è usato solo nel link dell'icona email.
  email: 'Larisa.sarkisov@gmail.com',
  instagram: 'https://www.instagram.com/larybeautyit',
  instagramHandle: '@larybeautyit',
}

export const nav = [
  { label: 'Servizi', href: '#servizi' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Sposa', href: '#sposa' },
  { label: 'Chi sono', href: '#chi-sono' },
  { label: 'Contatti', href: '#contatti' },
]

export const media = {
  background: p('media/background.png'),
  heroVideo: p('media/hero.mp4'),
  heroImage: p('media/hero.jpg'),
  about: p('media/about.jpg'),
  bridal: p('media/sposa.jpg'),
}

export const hero = {
  eyebrow: 'Makeup & Hair Artist · Verona · Venezia · Lago di Garda',
  title: ['Il tuo momento,', 'firmato', 'da mani esperte.'], // la 2ª parola è in corsivo
  primaryCta: 'Prenota una consulenza',
  secondaryCta: 'Guarda il portfolio',
  card: {
    title: 'Bellezza su misura',
    text: 'Ogni viso è unico: ascolto, studio e creo il look che ti somiglia davvero.',
  },
}

export const services = {
  eyebrow: 'Servizi',
  title: ['Un look per ogni', 'occasione'],
  items: [
    {
      title: 'Trucco sposa',
      text: 'Un make-up luminoso e a lunga tenuta, dalla cerimonia all’ultimo ballo.',
      price: 'da € __',
      image: p('media/sposa.jpg'),
    },
    {
      title: 'Acconciature sposa ed eventi',
      text: 'Raccolti, onde morbide e pieghe studiate in armonia con abito e viso.',
      price: 'da € __',
      image: p('media/eventi.jpg'),
    },
    {
      title: 'Trucco per shooting e video',
      text: 'Look pensati per la camera: editoriali, campagne, book e riprese.',
      price: 'da € __',
      image: p('media/shooting.jpg'),
    },
    {
      title: 'Corsi di self make-up',
      text: 'Impara a valorizzarti da sola, con prodotti e tecniche su misura per te.',
      price: 'da € __',
      image: p('media/corsi.jpg'),
    },
  ],
}

export const portfolio = {
  eyebrow: 'Portfolio',
  title: ['I miei', 'lavori'],
  filters: ['Tutti', 'Sposa', 'Eventi', 'Editorial'],
  items: [
    { src: p('media/portfolio-01.jpg'), category: 'Sposa', alt: 'Sposa con trucco luminoso e acconciatura raccolta', h: 'aspect-[3/4]' },
    { src: p('media/portfolio-02.jpg'), category: 'Eventi', alt: 'Trucco occhi per serata di gala', h: 'aspect-square' },
    { src: p('media/portfolio-03.jpg'), category: 'Editorial', alt: 'Look editoriale con labbra intense', h: 'aspect-[4/5]' },
    { src: p('media/portfolio-04.jpg'), category: 'Sposa', alt: 'Sposa con onde morbide e velo', h: 'aspect-[3/5]' },
    { src: p('media/portfolio-05.jpg'), category: 'Sposa', alt: 'Dettaglio del trucco sposa naturale', h: 'aspect-square' },
    { src: p('media/portfolio-06.jpg'), category: 'Eventi', alt: 'Acconciatura elegante per cerimonia', h: 'aspect-[3/4]' },
    { src: p('media/portfolio-07.jpg'), category: 'Editorial', alt: 'Beauty shooting con pelle luminosa', h: 'aspect-[4/5]' },
    { src: p('media/portfolio-08.jpg'), category: 'Sposa', alt: 'Sposa durante la preparazione', h: 'aspect-square' },
    { src: p('media/portfolio-09.jpg'), category: 'Eventi', alt: 'Ospite di nozze con make-up elegante', h: 'aspect-[3/4]' },
  ],
}

export const bridal = {
  eyebrow: 'Sposa',
  title: ['Il giorno', 'del sì,', 'senza pensieri'],
  text: 'Il trucco e i capelli della sposa sono un dettaglio che ti accompagna in ogni foto. Per questo costruiamo il look insieme, passo dopo passo, perché tu possa solo goderti il momento.',
  image: p('media/sposa-giorno.png'),
  steps: [
    {
      title: 'Consulenza',
      text: 'Ci conosciamo, parliamo di te, dell’abito, della location e dello stile che sogni.',
    },
    {
      title: 'Prova trucco e capelli',
      text: 'Proviamo il look nel dettaglio e lo perfezioniamo finché ti senti davvero tu.',
    },
    {
      title: 'Il giorno del sì',
      text: 'Ti raggiungo a domicilio o in location, con tutto il necessario per ritocchi e puntualità.',
    },
  ],
  cta: 'Parliamo del tuo matrimonio',
}

export const about = {
  eyebrow: 'Chi sono',
  title: ['Ciao, sono', 'Lary'],
  image: p('media/about.jpg'),
  paragraphs: [
    'Sono Larisa, per tutti Lary: Makeup & Hair Artist. Parlo italiano, inglese e russo, così spose e clienti da tutto il mondo si sentono subito a casa. Lavoro a Verona, Venezia, sul Lago di Garda, a Milano e sul Lago di Como.',
    'Credo in una bellezza che sussurra, non che urla: valorizzare ciò che già hai, con eleganza e naturalezza.',
    'Prima di ogni appuntamento ti ascolto, perché un buon look nasce dal capire come vuoi sentirti. [SOSTITUISCI CON LA TUA STORIA E LA TUA FORMAZIONE]',
  ],
  points: [
    { title: 'Prodotti professionali cruelty-free', text: 'Selezionati per qualità, resa e rispetto della pelle.' },
    { title: 'Igiene certificata', text: 'Strumenti sanificati e attenzione massima per ogni cliente.' },
    { title: 'Trucco a lunga tenuta', text: 'Tecniche e prodotti pensati per durare tutta la giornata.' },
  ],
}

export const reviews = {
  eyebrow: 'Recensioni',
  title: ['Parlano', 'di me'],
  // Valutazione riassuntiva presa dal profilo su Matrimonio.com (aggiornare se cambia)
  source: {
    name: 'Matrimonio.com',
    url: 'https://www.matrimonio.com/trucco-sposa/larisa-sarkisova--e435203',
    rating: '5,0',
    count: 7,
    checkedOn: '16 ottobre 2026',
  },
  text: 'Le recensioni sono scritte da spose reali e pubblicate sul mio profilo di Matrimonio.com.',
  // Per mostrare anche il carosello, aggiungi qui recensioni con il consenso di chi le ha scritte:
  // { name: 'Nome', text: 'Testo della recensione', stars: 5 }
  items: [],
}

export const contact = {
  eyebrow: 'Contatti',
  title: ['Prenota la tua', 'consulenza'],
  text: 'Raccontami la tua data e le tue idee: ti rispondo con una proposta su misura.',
  serviceOptions: ['Trucco sposa', 'Acconciature sposa ed eventi', 'Trucco per shooting e video', 'Corsi di self make-up'],
  whatsappCta: 'Scrivimi su WhatsApp',
}

// Pagine legali: stesso elenco in footer, form e pagine (i testi sono in src/legal.js)
export const legalLinks = [
  { slug: 'privacy', label: 'Privacy Policy' },
  { slug: 'cookie', label: 'Cookie Policy' },
  { slug: 'termini', label: 'Termini e Condizioni' },
  { slug: 'disclaimer', label: 'Disclaimer' },
]
