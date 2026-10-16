# Lary Makeup & Hair — sito one-page

Sito in React + Vite + Tailwind CSS + Framer Motion. Tutti i testi sono in italiano.

## Avvio

```bash
npm install
npm run dev
```

Poi apri l'indirizzo mostrato nel terminale (di solito http://localhost:5173).

## Foto e video

Metti i tuoi file nella cartella `public/media/` con questi nomi esatti. Finché mancano, il sito mostra un gradiente verde/crema.

| File | Uso |
| --- | --- |
| `hero.mp4` | video di sfondo della hero |
| `hero.jpg` | immagine di riserva della hero (e anteprima social) |
| `about.jpg` | ritratto per "Chi sono" |
| `portfolio-01.jpg` … `portfolio-09.jpg` | lavori del portfolio |
| `sposa.jpg`, `eventi.jpg`, `shooting.jpg`, `corsi.jpg` | immagini dei servizi (`sposa.jpg` è usata anche nella sezione Sposa) |

## Cambiare testi e contatti

Modifica solo `src/content.js`: nome, città, contatti, servizi, recensioni e dati del Titolare.

- **Contatti:** `contacts.whatsapp` (senza `+` né spazi) ed `contacts.email`. Il numero e l'email **non compaiono mai come testo** nel sito: sono usati solo dai link delle icone WhatsApp ed email.
- **Pagine legali:** Privacy Policy, Cookie Policy, Termini e Condizioni e Disclaimer sono in `src/legal.js` e si aprono su `#/privacy`, `#/cookie`, `#/termini`, `#/disclaimer`. Titolare, indirizzo (facoltativo), hosting e data di aggiornamento si cambiano in `legal` dentro `src/content.js`.
- **Importante:** le pagine legali descrivono solo ciò che il sito fa oggi (nessun cookie, nessuna newsletter, nessuna statistica, font ospitati sul sito). Se aggiungi analytics, newsletter, Trustpilot, mappe, video incorporati o altri servizi esterni, **vanno aggiornate** insieme a un eventuale banner cookie. Fai rivedere i testi da un professionista prima della pubblicazione definitiva.

Da sostituire prima di pubblicare:
- dominio (`site.url`);
- recensioni segnaposto `[RECENSIONE DA INSERIRE]`: usa solo recensioni reali;
- testo "Chi sono".

I prezzi non sono mostrati sul sito: i costi si comunicano con un preventivo personalizzato.

## Pubblicazione

```bash
npm run build
```

Il sito pronto per la pubblicazione è nella cartella `dist/`: caricane il contenuto sul tuo hosting. Per provarlo in locale: `npm run preview`.

## Pubblicare su GitHub Pages (per mostrarlo al cliente)

1. Crea un nuovo repository su GitHub (vuoto, senza README) e collega quello locale:
   ```bash
   git remote add origin https://github.com/TUO-UTENTE/NOME-REPO.git
   git push -u origin main
   ```
2. Su GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Ad ogni `git push` su `main` il workflow `.github/workflows/deploy.yml` costruisce e pubblica il sito.
   L'indirizzo sarà `https://TUO-UTENTE.github.io/NOME-REPO/`.

Note: GitHub Pages su repository **privati** richiede un piano a pagamento. Il sito contiene foto del cliente: usa un repository privato finché non hai l'ok a pubblicarle.

## Note

- Il form di contatto non usa un backend: all'invio apre WhatsApp con i dati compilati nel messaggio.
- La vecchia versione statica è in `old/index-statico.html`.
