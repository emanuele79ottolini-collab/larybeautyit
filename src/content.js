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
    'Makeup & Hair Artist a Verona, Venezia, Lago di Garda e Milano: trucco e acconciature per spose e shooting.',
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
      // Video riprodotto direttamente dal sito (file in public/media)
      video: {
        label: 'Guarda il video',
        title: 'Trucco sposa',
        file: p('media/video-sposa-servizio.mp4'),
      },
    },
    {
      title: 'Acconciature sposa',
      text: 'Raccolti, onde morbide e pieghe studiate in armonia con abito e viso.',
      image: p('media/eventi.jpg'),
    },
    {
      title: 'Trucco per shooting e video',
      text: 'Look pensati per la camera: editoriali, campagne, book e riprese.',
      image: p('media/shooting.jpg'),
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
  filters: ['Tutti', 'Sposa', 'Editorial'],
  items: [
    { src: p('media/portfolio-sposa-01.jpg'), category: 'Sposa', alt: 'Sposa sorridente sul lago con trucco luminoso e chignon morbido' },
    { src: p('media/portfolio-sposa-17.jpg'), category: 'Sposa', alt: 'Sposa con labbra rosso intenso e onde morbide raccolte di lato' },
    { src: p('media/portfolio-editorial-02.jpg'), category: 'Editorial', alt: 'Look vintage anni Cinquanta con foulard a pois, su un’auto d’epoca' },
    { src: p('media/portfolio-sposa-11.jpg'), category: 'Sposa', alt: 'Ritratto di sposa con chignon morbido e trucco luminoso' },
    { src: p('media/portfolio-sposa-18.jpg'), category: 'Sposa', alt: 'Sposa con velo, bouquet di rose bianche e trucco naturale' },
    { src: p('media/portfolio-editorial-03.jpg'), category: 'Editorial', alt: 'Shooting vintage con foulard e guanti bianchi' },
    { src: p('media/portfolio-sposa-13.jpg'), category: 'Sposa', alt: 'Sposa con velo e bouquet su un’auto d’epoca' },
    { src: p('media/portfolio-sposa-12.jpg'), category: 'Sposa', alt: 'Sposa di profilo con ricci morbidi e sorriso' },
    { src: p('media/portfolio-editorial-05.jpg'), category: 'Editorial', alt: 'Ritratto con onde morbide e trucco luminoso in una sala d’epoca' },
    { src: p('media/portfolio-sposa-02.jpg'), category: 'Sposa', alt: 'Sposa sul lago con abito in tulle e acconciatura raccolta' },
    { src: p('media/portfolio-sposa-14.jpg'), category: 'Sposa', alt: 'Sposa sul lago con velo e abito bianco' },
    { src: p('media/portfolio-editorial-01.jpg'), category: 'Editorial', alt: 'Modella in abito nero nel verde, trucco e capelli curati' },
    { src: p('media/portfolio-sposa-15.jpg'), category: 'Sposa', alt: 'Sposa sorridente con bouquet di fiori' },
    { src: p('media/portfolio-sposa-16.jpg'), category: 'Sposa', alt: 'Sposa in vestaglia bianca dopo il trucco' },
    { src: p('media/portfolio-editorial-06.jpg'), category: 'Editorial', alt: 'Raccolto morbido e spettinato con trucco caldo, di profilo' },
    { src: p('media/portfolio-sposa-19.jpg'), category: 'Sposa', alt: 'Trucco naturale e capelli sciolti con onde leggere' },
    { src: p('media/portfolio-sposa-21.jpg'), category: 'Sposa', alt: 'Chignon morbido e trucco fresco prima della cerimonia' },
    { src: p('media/portfolio-sposa-22.jpg'), category: 'Sposa', alt: 'Onde morbide ramate, dettaglio dell’acconciatura di spalle' },
    { src: p('media/portfolio-sposa-20.jpg'), category: 'Sposa', alt: 'Capelli lunghi scuri con onde e trucco occhi definito' },
    { src: p('media/portfolio-sposa-06.jpg'), category: 'Sposa', alt: 'Acconciatura con onde morbide laterali e trucco naturale' },
    { src: p('media/portfolio-editorial-04.jpg'), category: 'Editorial', alt: 'Dietro le quinte di uno shooting: Larisa con la modella' },
    { src: p('media/portfolio-sposa-08.jpg'), category: 'Sposa', alt: 'Trucco con pennello per un abito da cerimonia a fiori blu' },
    { src: p('media/portfolio-sposa-09.jpg'), category: 'Sposa', alt: 'Profilo con onde morbide, pelle luminosa e trucco occhi nei toni caldi' },
    { src: p('media/portfolio-sposa-05.jpg'), category: 'Sposa', alt: 'Trucco sposa in preparazione con vestaglia rosa' },
    { src: p('media/portfolio-sposa-03.jpg'), category: 'Sposa', alt: 'Sistemazione del velo su una sposa con chignon' },
    { src: p('media/portfolio-sposa-07.jpg'), category: 'Sposa', alt: 'Chignon intrecciato per una cerimonia in giardino' },
    { src: p('media/portfolio-sposa-04.jpg'), category: 'Sposa', alt: 'Ritocco del trucco a una sposa in terrazza con vista sulle montagne' },
    { src: p('media/portfolio-sposa-23.jpg'), category: 'Sposa', alt: 'Coda alta lucida e trucco occhi con eyeliner' },
    { src: p('media/portfolio-sposa-24.jpg'), category: 'Sposa', alt: 'Sposa con chignon basso liscio e labbra rosse' },
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
  // Video Instagram: si carica solo dopo il clic dell'utente (nessun contenuto esterno prima)
  video: {
    label: 'Guarda il video',
    title: 'Il giorno del sì',
    file: p('media/video-sposa.mp4'),
  },
}

export const about = {
  eyebrow: 'Chi sono',
  title: ['Ciao, sono', 'Lary'],
  image: p('media/about.jpg'),
  // Frase d'apertura, in evidenza sotto il titolo
  lead: 'Truccatrice e hair stylist professionista, creo look impeccabili e personalizzati che rispecchiano il tuo stile e la tua personalità: per un matrimonio, un’occasione speciale o un glamour di ogni giorno.',
  paragraphs: [
    'Sono Larisa, per tutti Lary. Il mio stile è moderno e luminoso, costruito su prodotti ad alte prestazioni e sulle ultime tendenze del settore. La mia firma è una pelle radiosa e un’estetica contemporanea, per chi desidera un servizio di lusso discreto, professionale e impeccabile.',
    'Il trucco resiste alle emozioni, agli abbracci e a una giornata intera di fotografie, e resto accanto a te anche durante il servizio fotografico per ogni ritocco. Posso occuparmi anche di mamma, testimoni e damigelle, fino a 5 persone nello stesso giorno.',
    'Scegliermi significa scegliere attenzione ai dettagli, ascolto e un risultato capace di farti sentire davvero te stessa. Parlo fluentemente italiano, russo e inglese. Lavoro sul Lago di Garda, mi sposto a Verona, Venezia, Milano e sul Lago di Como, e sono disponibile per matrimoni in tutta Italia e in Europa.',
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
  serviceOptions: ['Trucco sposa', 'Acconciature sposa', 'Trucco per shooting e video', 'Corsi di self make-up'],
  whatsappCta: 'Scrivimi su WhatsApp',
}

// Pagine legali: stesso elenco in footer, form e pagine (i testi sono in src/legal.js)
export const legalLinks = [
  { slug: 'privacy', label: 'Privacy Policy' },
  { slug: 'cookie', label: 'Cookie Policy' },
  { slug: 'termini', label: 'Termini e Condizioni' },
  { slug: 'disclaimer', label: 'Disclaimer' },
]
