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

Modifica solo `src/content.js`: nome, città, numero WhatsApp (senza `+` né spazi, es. `393331234567`), email, Instagram, servizi e prezzi ("da € __"), recensioni, P.IVA.

Da sostituire prima di pubblicare:
- numero WhatsApp (`39XXXXXXXXXX`), email, dominio (`site.url`) e P.IVA;
- recensioni segnaposto `[RECENSIONE DA INSERIRE]`: usa solo recensioni reali;
- testo "Chi sono" e prezzi;
- `public/privacy.html` e `public/cookie.html` (pagine segnaposto).

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
