Carosello Mono Array
===

## Consegna
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

**MILESTONE 1**
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

**MILESTONE 2**
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

**MILESTONE 3**
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

**BONUS 1:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

**BONUS 2:**
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

## Step da seguire:
Milestone 1:

1. Primo passo è creare la struttura base del nostro slider. Questo include la creazione dell'elemento contenitore che conterrà tutti gli elementi dello slider, e la creazione degli elementi singoli delle slide.

2. Successivamente, creeremo delle classi che utilizzeremo per gestire lo stile e la manipolazione dello slider. Queste classi saranno utilizzate per mostrare o nascondere le singole slide, e per definire lo stile dei pulsanti di navigazione e dei pallini che indicano la slide attuale.

Milestone 2:

1. Il primo passo per il nostro Milestone 2 sarà quello di creare un array contenente gli src delle immagini che vogliamo mostrare nello slider.

2. Successivamente, utilizzeremo un ciclo for per iterare attraverso l'array e creare un template literal per ogni immagine.

3. Imposteremo di default tutte le immagini come nascoste, tranne la prima che avrà una classe specifica che la renderà visibile.

4. Infine, utilizzeremo JavaScript per far funzionare lo slider, aggiungendo la logica per mostrare e nascondere le immagini in base al pulsante di navigazione o al pallino cliccato.

Milestone 3:

1. Il primo passo per il nostro Milestone 3 sarà quello di gestire il click dei pulsanti di navigazione "Next" e "Prev".

2. Quando viene premuto il pulsante "Next", mostreremo l'immagine successiva e nasconderemo quella precedente.

3. Quando viene premuto il pulsante "Prev", mostreremo l'immagine precedente e nasconderemo quella successiva.

4. Utilizzeremo JS per aggiungere la logica necessaria a questi pulsanti, in modo che possano effettivamente navigare tra le diverse slide dello slider.