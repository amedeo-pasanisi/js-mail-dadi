// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var dadoGiocatore = Math.floor(Math.random() * 5) + 1;
console.log("Hai fatto " + dadoGiocatore);

var dadoComputer = Math.floor(Math.random() * 5) + 1;
console.log("Il computer ha fatto " + dadoComputer);

if (dadoGiocatore > dadoComputer) {
    console.log("Hai vinto!");
} else if (dadoGiocatore == dadoComputer) {
    console.log("hai pareggiato!");
} else if (dadoGiocatore < dadoComputer) {
    console.log("hai perso!");
}
