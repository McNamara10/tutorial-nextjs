# Note del Corso Next.js

In questo file verranno raccolti tutti gli appunti, i comandi e le riflessioni durante lo studio del corso.

## Diario di Bordo

### Comandi Utili
- `npm run dev`: Avvia il server di sviluppo locale.

---
*(Le note verranno aggiunte qui sotto)*

## Struttura del Progetto Next.js

Di seguito una panoramica delle convenzioni per cartelle e file in un progetto Next.js (App Router), basata sulla documentazione ufficiale.

### Cartelle di Primo Livello (Top-level folders)
- **`app/`**: La cartella principale che contiene tutte le rotte, i componenti e la logica dell'App Router.
- **`public/`**: Contiene asset statici come immagini, font e file che devono essere serviti direttamente dal browser.
- **`src/`**: (Opzionale) Cartella che può ospitare il codice sorgente dell'applicazione (inclusa la cartella `app`) per separare il codice dai file di configurazione nella root.

### File di Primo Livello (Top-level files)
- **`next.config.js`**: File di configurazione principale di Next.js.
- **`package.json`**: Gestisce le dipendenze del progetto e definisce gli script (es. `dev`, `build`, `start`).
- **`middleware.ts`**: Utilizzato per gestire logica lato server prima che una richiesta venga completata (es. autenticazione, redirect).
- **`instrumentation.ts`**: Configurazione per l'osservabilità e il monitoraggio (OpenTelemetry).
- **`.env*`**: File per le variabili d'ambiente (es. `.env.local`).
- **`.eslintrc.json`**: Configurazione per ESLint (linting del codice).
- **`tsconfig.json`**: Configurazione per TypeScript (o `jsconfig.json` per JavaScript).

### Convenzioni delle Cartelle di Rotta (Routing Folders)
- **`folder`**: Definisce un segmento di rotta (es. `app/dashboard` -> `/dashboard`).
- **`[segment]`**: Segmento dinamico (es. `app/blog/[slug]` -> `/blog/articolo-1`).
- **`(group)`**: Organizza le rotte in gruppi senza influenzare il percorso dell'URL (es. `(auth)/login` -> `/login`).
- **`_folder`**: Cartella privata, esclusa dal routing (utile per componenti interni o utility).
- **`@slot`**: Utilizzata per le **Parallel Routes** (permettono di mostrare più pagine nella stessa vista).

### File Speciali per le Rotte (Route Files)
- **`page.js`**: Il file principale che definisce l'interfaccia pubblica di una rotta. Senza questo file, la rotta non è accessibile.
- **`layout.js`**: Definisce un layout condiviso per una rotta e tutti i suoi segmenti figli. Mantiene lo stato e non si ricarica durante la navigazione.
- **`loading.js`**: Crea un'interfaccia di caricamento automatica utilizzando React Suspense.
- **`not-found.js`**: Definisce l'interfaccia da mostrare quando una risorsa non viene trovata (errore 404).
- **`error.js`**: Gestisce gli errori runtime per un segmento di rotta (Error Boundary).
- **`global-error.js`**: Gestisce gli errori critici che avvengono nel layout principale.
- **`route.js`**: Definisce un **Route Handler** (endpoint API lato server) per gestire richieste HTTP (GET, POST, ecc.).
- **`template.js`**: Simile al layout, ma a differenza di quest'ultimo, crea una nuova istanza del componente ad ogni cambio di rotta (utile per animazioni CSS).
- **`default.js`**: File di fallback per le Parallel Routes.

### File per i Metadata (SEO)
- **`favicon.ico`**: L'icona del sito visualizzata nella scheda del browser.
- **`icon.js` / `apple-icon.js`**: Genera dinamicamente icone per browser e dispositivi mobili.
- **`opengraph-image.js` / `twitter-image.js`**: Genera immagini per la condivisione sui social media.
- **`robots.txt`**: Istruzioni per i crawler dei motori di ricerca.
- **`sitemap.xml`**: Mappa del sito per migliorare l'indicizzazione SEO.
