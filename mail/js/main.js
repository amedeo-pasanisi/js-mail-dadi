var lista = ["amedeo@gmail.com", "contessa@libero.it", "oflaga@outlook.com"];
console.log("Lista email: " + lista);

// Chiedi all’utente la sua email
var email = prompt("inserisci la tua email");
console.log("Email utente: " + email);

// controlla che sia nella lista di chi può accedere
for (i = 0; i < lista.length; i++) {
    
    if (lista[i] === email) {
        var presente;
        email = presente;
    }
}

// stampa un messaggio appropriato sull’esito del controllo.
if (email = presente) {
    console.log("La tua email è nella lista");
} else {
    console.log("La tua email non è nella lista");
}
