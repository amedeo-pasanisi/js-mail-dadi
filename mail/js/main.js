// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var lista = ["amedeo@gmail.com", "contessa@libero.it", "oflaga@outlook.com"];
console.log("Lista email: " + lista);

var email = prompt("inserisci la tua email");
console.log("Email utente: " + email);

var presente;

for (i = 0; i < lista.length; i++) {
    
    if (lista[i] === email) {
        email = presente
        console.log("La tua email è nella lista");
    }
}

if (email != presente) {
    console.log("La tua email non è nella lista");
}
