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
      image: p('media/sposa.jpg'),
    },
    {
      title: 'Acconciature sposa ed eventi',
      text: 'Raccolti, onde morbide e pieghe studiate in armonia con abito e viso.',
      image: p('media/eventi.jpg'),
    },
    {
      title: 'Trucco per shooting e video',
      text: 'Look pensati per la camera: editoriali, campagne, book e riprese.',
      image: p('media/shooting.jpg'),
      // Video Instagram: si carica solo dopo il clic dell'utente (nessun contenuto esterno prima)
      video: {
        label: 'Guarda il video',
        title: 'Trucco per shooting e video',
        page: 'https://www.instagram.com/reel/DZNW1scsY-R/',
        embed: 'https://www.instagram.com/reel/DZNW1scsY-R/embed',
      },
    },
    {
      title: 'Corsi di self make-up',
      text: 'Impara a valorizzarti da sola, con prodotti e tecniche su misura per te.',
      image: p('media/corsi.jpg'),
    },
  ],
}

export const portfolio = {
  eyebrow: 'Portfolio',
  title: ['I miei', 'lavori'],
  filters: ['Tutti', 'Sposa', 'Eventi', 'Editorial'],
  items: [
    { src: p('media/portfolio-sposa-01.jpg'), category: 'Sposa', alt: 'Sposa sorridente sul lago con trucco luminoso e chignon morbido', h: 'aspect-[2/3]' },
    { src: p('media/portfolio-sposa-02.jpg'), category: 'Sposa', alt: 'Sposa sul lago con abito in tulle e acconciatura raccolta', h: 'aspect-[2/3]' },
    { src: p('media/portfolio-02.jpg'), category: 'Eventi', alt: 'Trucco occhi per serata di gala', h: 'aspect-square' },
    { src: p('media/portfolio-sposa-03.jpg'), category: 'Sposa', alt: 'Sistemazione del velo su una sposa con chignon', h: 'aspect-[9/16]' },
    { src: p('media/portfolio-sposa-04.jpg'), category: 'Sposa', alt: 'Ritocco del trucco a una sposa in terrazza con vista sulle montagne', h: 'aspect-video' },
    { src: p('media/portfolio-03.jpg'), category: 'Editorial', alt: 'Look editoriale con labbra intense', h: 'aspect-[4/5]' },
    { src: p('media/portfolio-sposa-05.jpg'), category: 'Sposa', alt: 'Trucco sposa in preparazione con vestaglia rosa', h: 'aspect-[9/16]' },
    { src: p('media/portfolio-sposa-06.jpg'), category: 'Sposa', alt: 'Acconciatura con onde morbide laterali e trucco naturale', h: 'aspect-[9/16]' },
    { src: p('media/portfolio-06.jpg'), category: 'Eventi', alt: 'Acconciatura elegante per cerimonia', h: 'aspect-[3/4]' },
    { src: p('media/portfolio-sposa-07.jpg'), category: 'Sposa', alt: 'Chignon intrecciato per una cerimonia in giardino', h: 'aspect-[4/3]' },
    { src: p('media/portfolio-07.jpg'), category: 'Editorial', alt: 'Beauty shooting con pelle luminosa', h: 'aspect-[4/5]' },
    { src: p('media/portfolio-sposa-08.jpg'), category: 'Sposa', alt: 'Trucco con pennello per un abito da cerimonia a fiori blu', h: 'aspect-[3/4]' },
    { src: p('media/portfolio-sposa-09.jpg'), category: 'Sposa', alt: 'Profilo con onde morbide, pelle luminosa e trucco occhi nei toni caldi', h: 'aspect-[3/4]' },
    { src: p('media/portfolio-sposa-10.jpg'), category: 'Sposa', alt: 'Ritratto con occhi illuminati e labbra nude, trucco elegante', h: 'aspect-[3/4]' },
    { src: p('media/portfolio-09.jpg'), category: 'Eventi', alt: 'Ospite di nozze con make-up elegante', h: 'aspect-[3/4]' },
  ],
}

export const bridal = {
  eyebrow: 'Sposa',
  title: ['Il giorno', 'del sì,', 'senza pensieri'],
  text: 'Il trucco e i capelli della sposa ti accompagnano in ogni foto. Per questo costruiamo il look insieme, passo dopo passo, con attenzione ai dettagli e ascolto: un risultato personalizzato che ti faccia sentire davvero te stessa, così potrai solo goderti il momento.',
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
    'Sono Larisa, per tutti Lary: Make-up Artist e Hair Stylist professionale, con una passione sincera per il mio lavoro. Mi prendo cura del tuo look nel giorno più importante della tua vita, con esperienza e sensibilità estetica.',
    'Creo un look completamente personalizzato, pensato per valorizzare la tua bellezza naturale con eleganza e armonia: luminoso, raffinato, mai artefatto. Il trucco resiste alle emozioni, agli abbracci e a una giornata intera di fotografie, e resto accanto a te anche durante il servizio fotografico per ogni ritocco. Posso occuparmi anche di mamma, testimoni e damigelle, fino a 5 persone nello stesso giorno.',
    'Scegliermi significa scegliere attenzione ai dettagli, ascolto e un risultato capace di farti sentire davvero te stessa. Ti raggiungo dove preferisci, a casa o in location. Parlo italiano, inglese e russo e lavoro a Verona, Venezia, sul Lago di Garda, a Milano e sul Lago di Como.',
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
  text: 'Contattami senza impegno: avrai tutto il tempo per capire se sono la professionista giusta per te. Raccontami la tua data e le tue idee e ti rispondo con una proposta su misura.',
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
