var lista = ["amedeo@gmail.com", "contessa@libero.it", "offlaga@outlook.com"];
console.log("Lista email: " + lista);

// Chiedi all’utente la sua email
var email = prompt("inserisci la tua email");
console.log("Email utente: " + email);

// controlla che sia nella lista di chi può accedere
for (i = 0; i < lista.length; i++) {
    
    if (email === lista[i]) {

        email = true;
    }
}

// stampa un messaggio appropriato sull’esito del controllo.
if (email == true) {
    console.log("La tua email è nella lista");
} else {
    console.log("La tua email non è nella lista");
}