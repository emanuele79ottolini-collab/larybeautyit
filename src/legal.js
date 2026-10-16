// Testi delle pagine legali. Titolare, contatti e date arrivano da content.js,
// così restano identici in tutto il sito. Descrivono SOLO ciò che il sito fa davvero:
// nessun cookie, nessuna newsletter, nessuna analisi statistica, nessun database.
import { legal, site } from './content'

const owner = `${legal.owner} (${legal.ownerRole})`
const browserHelp = [
  'Chrome: Impostazioni › Privacy e sicurezza › Cookie e altri dati dei siti',
  'Safari: Impostazioni › Privacy › Gestisci dati dei siti web',
  'Firefox: Impostazioni › Privacy e sicurezza › Cookie e dati dei siti web',
  'Edge: Impostazioni › Cookie e autorizzazioni sito',
]

export const pages = {
  privacy: {
    title: 'Privacy Policy',
    intro: `Questa informativa spiega come vengono trattati i dati personali di chi visita il sito ${site.brand} e usa i canali di contatto proposti, ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR).`,
    sections: [
      {
        h: '1. Titolare del trattamento',
        p: [
          `Il Titolare del trattamento è ${owner}${legal.address ? `, ${legal.address}` : ''}.`,
          'Per qualsiasi richiesta sui tuoi dati puoi usare le icone di contatto qui sotto.',
        ],
        contact: true,
      },
      {
        h: '2. Quali dati trattiamo',
        ul: [
          'Dati che fornisci volontariamente: se compili il modulo di contatto, nome, telefono, email, data dell’evento, tipo di servizio e messaggio; se scrivi su WhatsApp o via email, i dati che ci invii (ad esempio numero di telefono, nome del profilo e contenuto del messaggio).',
          'Dati di navigazione: come per ogni sito, il fornitore di hosting registra automaticamente informazioni tecniche necessarie al funzionamento e alla sicurezza (ad esempio indirizzo IP, data e ora della richiesta, pagina richiesta, browser e sistema operativo).',
        ],
        p: [
          'Il sito non usa strumenti di analisi statistica, di marketing o di profilazione e non iscrive a newsletter.',
        ],
      },
      {
        h: '3. Finalità e basi giuridiche',
        ul: [
          'Rispondere alle tue richieste di informazioni, consulenza o preventivo e gestire l’eventuale prenotazione: esecuzione di misure precontrattuali adottate su tua richiesta e, se si arriva a un incarico, esecuzione del contratto (art. 6, par. 1, lett. b GDPR).',
          'Adempiere a obblighi di legge, ad esempio fiscali e contabili, se il servizio viene prestato (art. 6, par. 1, lett. c GDPR).',
          'Garantire la sicurezza e il corretto funzionamento del sito e tutelare i diritti del Titolare: legittimo interesse (art. 6, par. 1, lett. f GDPR).',
        ],
        p: ['Non viene svolta alcuna attività di marketing diretto, di profilazione né di decisione automatizzata.'],
      },
      {
        h: '4. Come funziona il modulo di contatto',
        p: [
          'Il modulo non salva i dati in un database del sito. All’invio apre WhatsApp con un messaggio già compilato con le informazioni che hai inserito: il messaggio viene inviato solo se lo confermi tu in WhatsApp. Da quel momento i dati sono trattati attraverso WhatsApp e ricevuti dal Titolare.',
          'Per questo, prima dell’invio ti chiediamo di confermare di aver letto questa informativa. Fornire i dati è facoltativo, ma senza di essi non è possibile rispondere alla tua richiesta.',
        ],
      },
      {
        h: '5. Destinatari dei dati',
        p: ['I dati non sono diffusi. Possono essere conosciuti, nei limiti necessari, da:'],
        ul: [
          `il fornitore di hosting del sito (${legal.hosting}), che agisce come responsabile del trattamento per i soli dati di navigazione;`,
          'Meta Platforms Ireland Limited, se scegli di usare WhatsApp, di aprire il profilo Instagram o di caricare il video Instagram incorporato: in tal caso trattano i dati come titolari autonomi secondo le proprie informative;',
          'il fornitore del servizio email (ad esempio Google), se scegli di scrivere via email;',
          'professionisti e consulenti incaricati di adempimenti di legge (ad esempio commercialista), solo se il servizio viene prestato.',
        ],
      },
      {
        h: '6. Trasferimenti fuori dallo Spazio Economico Europeo',
        p: [
          'Il sito non trasferisce direttamente dati fuori dall’UE e non carica risorse da servizi esterni durante la navigazione, salvo il video di Instagram solo se premi “Carica il video” (i caratteri tipografici sono ospitati sul sito stesso). Se usi WhatsApp, Instagram, il video incorporato o l’email, i rispettivi fornitori possono trasferire dati extra-UE adottando le garanzie previste dal GDPR (ad esempio decisioni di adeguatezza o clausole contrattuali standard), come descritto nelle loro informative.',
        ],
      },
      {
        h: '7. Per quanto tempo conserviamo i dati',
        ul: [
          'Richieste di contatto non seguite da un incarico: per il tempo necessario a rispondere e, salvo diversa esigenza, non oltre 12 mesi dall’ultimo contatto.',
          'Dati relativi a servizi prestati: per la durata del rapporto e, per i documenti contabili e fiscali, per i termini previsti dalla legge (in genere 10 anni).',
          'Dati di navigazione (log tecnici): per il periodo stabilito dal fornitore di hosting, di norma limitato.',
        ],
      },
      {
        h: '8. I tuoi diritti',
        p: [
          'Puoi chiedere in qualsiasi momento l’accesso ai tuoi dati, la rettifica, la cancellazione, la limitazione del trattamento, la portabilità e opporti al trattamento basato sul legittimo interesse. Se il trattamento si basa sul consenso, puoi revocarlo senza pregiudicare la liceità del trattamento precedente.',
          'Per esercitare i diritti usa le icone di contatto in questa pagina. Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).',
        ],
        contact: true,
      },
      {
        h: '9. Minori',
        p: ['Il sito non è rivolto a minori di 14 anni. Se sei minorenne, invia richieste solo con il consenso di un genitore o di chi esercita la responsabilità genitoriale.'],
      },
      {
        h: '10. Link a siti di terzi',
        p: ['Il sito contiene collegamenti a servizi esterni (Instagram, WhatsApp e Matrimonio.com) e, su tua richiesta, un video incorporato da Instagram. Quando li apri lasci questo sito o ne attivi il contenuto: per il trattamento dei dati si applicano le informative dei rispettivi gestori.'],
      },
      {
        h: '11. Modifiche e collegamenti con le altre informative',
        p: ['Questa informativa può essere aggiornata, ad esempio se cambiano le funzioni del sito. La data di ultimo aggiornamento è indicata in alto. Per l’uso dei cookie vedi la Cookie Policy.'],
      },
    ],
  },

  cookie: {
    title: 'Cookie Policy',
    intro: `Questa pagina spiega se e come il sito ${site.brand} usa cookie e strumenti simili, in linea con la direttiva ePrivacy, il GDPR e le Linee guida del Garante per la protezione dei dati personali.`,
    sections: [
      {
        h: '1. Cosa sono i cookie',
        p: ['I cookie sono piccoli file di testo che un sito salva sul tuo dispositivo. Si distinguono in cookie tecnici (necessari al funzionamento), analitici, di profilazione/marketing e cookie di terze parti.'],
      },
      {
        h: '2. Cosa usa questo sito',
        p: ['Questo sito non installa cookie sul tuo dispositivo e non usa altri strumenti di tracciamento (ad esempio local storage, pixel o fingerprinting). Per questo motivo non mostra un banner cookie: l’unico contenuto di terze parti (un video di Instagram) si attiva solo se lo chiedi tu con un clic esplicito, come spiegato al punto 4.'],
        table: {
          head: ['Categoria', 'Usata dal sito', 'Note'],
          rows: [
            ['Cookie tecnici / necessari', 'No', 'Il sito funziona senza salvare cookie.'],
            ['Cookie analitici', 'No', 'Nessuno strumento di statistica o analisi del traffico.'],
            ['Cookie di marketing e profilazione', 'No', 'Nessuna pubblicità né remarketing.'],
            ['Cookie di terze parti', 'Solo su tua richiesta', 'Solo se premi “Carica il video” (Instagram). Prima del tuo clic nessun servizio esterno viene caricato.'],
          ],
        },
      },
      {
        h: '3. Caratteri tipografici e contenuti',
        p: ['I font e le immagini sono ospitati sul sito stesso: non vengono caricati da servizi esterni e quindi il tuo indirizzo IP non viene inviato a terzi per questo scopo.'],
      },
      {
        h: '4. Collegamenti a servizi di terzi',
        p: ['Il sito contiene link a Instagram e WhatsApp (Meta) e al profilo su Matrimonio.com. Solo se li apri, quei servizi possono usare cookie o strumenti simili secondo le proprie regole.',
          'Video Instagram incorporato: nella scheda “Trucco per shooting e video” puoi guardare un video senza lasciare il sito. Il video è ospitato da Instagram (Meta) e viene caricato solo dopo che premi “Carica il video”: da quel momento Instagram può impostare cookie e raccogliere dati secondo le proprie informative. Se non lo carichi, nessun dato viene inviato a Instagram.',
          'Per i dettagli consulta le informative dei gestori:'],
        links: [
          { label: 'Instagram – informativa sui dati e sui cookie', href: 'https://privacycenter.instagram.com/policy/' },
          { label: 'WhatsApp – informativa sulla privacy', href: 'https://www.whatsapp.com/legal/privacy-policy-eea' },
        ],
      },
      {
        h: '5. Se le cose cambiano',
        p: ['Se in futuro il sito userà cookie non strettamente necessari (ad esempio statistiche o altri contenuti incorporati di terze parti attivati in automatico), questa pagina verrà aggiornata e verrà richiesto il tuo consenso preventivo tramite un banner, con la possibilità di rifiutare con la stessa facilità con cui si accetta.'],
      },
      {
        h: '6. Come gestire i cookie dal browser',
        p: ['Puoi comunque controllare o cancellare i cookie dalle impostazioni del tuo browser:'],
        ul: browserHelp,
      },
      {
        h: '7. Altre informazioni',
        p: ['Per sapere come trattiamo i dati personali che ci invii consulta la Privacy Policy. Titolare e contatti sono gli stessi indicati lì.'],
        contact: true,
      },
    ],
  },

  termini: {
    title: 'Termini e Condizioni',
    intro: `Le presenti condizioni regolano l’uso del sito ${site.brand} e la richiesta di informazioni o consulenze sui servizi di trucco e acconciatura offerti dal Titolare, ${owner}.`,
    sections: [
      {
        h: '1. Oggetto',
        p: ['Il sito presenta i servizi di make-up e hair styling per spose, eventi e shooting, e permette di richiedere una consulenza. La navigazione è gratuita.'],
      },
      {
        h: '2. Richieste di consulenza e prenotazioni',
        p: [
          'L’invio di una richiesta tramite modulo, WhatsApp o email non costituisce prenotazione né obbliga alcuna delle parti. Il servizio si considera concordato solo dopo la conferma del Titolare, in base alla disponibilità per la data richiesta.',
          'Disponibilità, orari, luogo della prestazione e spostamenti sono definiti caso per caso nella conferma.',
        ],
      },
      {
        h: '3. Preventivi, acconti e disdette',
        p: [
          'Il sito non riporta prezzi. Il costo del servizio, l’eventuale acconto e le condizioni di modifica o disdetta sono comunicati nel preventivo o nella conferma e accettati da entrambe le parti prima della prestazione.',
        ],
      },
      {
        h: '4. Obblighi di chi richiede il servizio',
        ul: [
          'Fornire informazioni corrette e complete.',
          'Segnalare in anticipo allergie, sensibilità cutanee o condizioni che possano influire sul servizio.',
          'Essere presente all’orario e nel luogo concordati.',
        ],
      },
      {
        h: '5. Proprietà intellettuale',
        p: ['Testi, grafica, logo e fotografie del sito sono protetti dal diritto d’autore e dagli altri diritti di proprietà intellettuale. Le immagini che ritraggono persone sono pubblicate con il loro consenso e, dove presenti, con l’autorizzazione dei fotografi. Non è consentito riprodurre, copiare o riutilizzare i contenuti senza autorizzazione scritta.'],
      },
      {
        h: '6. Link a siti di terzi',
        p: ['Il sito rimanda a servizi esterni (ad esempio Instagram, WhatsApp e Matrimonio.com). Il Titolare non controlla quei servizi e non risponde dei loro contenuti o delle loro condizioni d’uso.'],
      },
      {
        h: '7. Responsabilità',
        p: ['Il Titolare cura i contenuti del sito, ma non garantisce che siano sempre completi o aggiornati. Per i limiti riguardanti i risultati dei trattamenti e le informazioni del sito vedi il Disclaimer. Restano ferme le norme di legge inderogabili e i diritti riconosciuti ai consumatori.'],
      },
      {
        h: '8. Privacy e cookie',
        p: ['Il trattamento dei dati personali è descritto nella Privacy Policy; l’uso di cookie nella Cookie Policy.'],
      },
      {
        h: '9. Modifiche',
        p: ['Le condizioni possono essere aggiornate; la versione in vigore è sempre quella pubblicata su questa pagina, con la data di ultimo aggiornamento.'],
      },
      {
        h: '10. Legge applicabile e foro competente',
        p: ['Si applica la legge italiana. Per le controversie con i consumatori è competente il giudice del luogo di residenza o domicilio del consumatore, se situato in Italia o nell’Unione Europea, come previsto dalla legge.'],
      },
    ],
  },

  disclaimer: {
    title: 'Disclaimer',
    intro: `Informazioni importanti sull’uso dei contenuti del sito ${site.brand}.`,
    sections: [
      {
        h: '1. Carattere informativo',
        p: ['I contenuti del sito hanno scopo informativo e di presentazione dei servizi. Non costituiscono un’offerta vincolante: le condizioni del servizio sono quelle indicate nel preventivo o nella conferma.'],
      },
      {
        h: '2. Risultati dei trattamenti',
        p: ['Le fotografie del portfolio mostrano esempi di lavoro. Il risultato di un trucco o di un’acconciatura dipende da molti fattori (caratteristiche della persona, condizioni di pelle e capelli, luce, durata, preferenze) e può quindi differire dagli esempi mostrati. Non viene garantito un risultato identico.'],
      },
      {
        h: '3. Salute e allergie',
        p: [
          'I servizi sono di natura estetica e non sostituiscono in alcun modo il parere di un medico o di un dermatologo.',
          'In caso di allergie, pelle sensibile o altre condizioni, è importante segnalarle in anticipo; su richiesta si può concordare una prova prima del giorno dell’evento.',
        ],
      },
      {
        h: '4. Disponibilità e informazioni',
        p: ['Date e disponibilità possono cambiare e vanno confermate direttamente con il Titolare, che comunica anche i costi con un preventivo personalizzato. Il Titolare si impegna a mantenere accurate le informazioni, senza garantirne l’assenza di errori o omissioni.'],
      },
      {
        h: '5. Recensioni e contenuti di terzi',
        p: ['La valutazione e le recensioni citate (anche tramite link a Matrimonio.com) esprimono le opinioni dei rispettivi autori e sono gestite dalla piattaforma che le ospita; la valutazione riportata sul sito può non essere aggiornata in tempo reale. Il Titolare non risponde dei contenuti dei siti e dei social a cui il sito rimanda.'],
      },
      {
        h: '6. Disponibilità del sito',
        p: ['Il sito è fornito “così com’è”: il Titolare non garantisce che sia sempre disponibile o privo di interruzioni.'],
      },
      {
        h: '7. Documenti collegati',
        p: ['Per l’uso del sito e dei servizi vedi i Termini e Condizioni; per i dati personali la Privacy Policy; per i cookie la Cookie Policy.'],
        contact: true,
      },
    ],
  },
}
