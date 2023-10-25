const nomeUtente = prompt( "Inserisci il tuo nome", "Francesca");
const cognomeUtente = prompt( "Inserisci il tuo cognome", "Picoco");
const coloreUtente = prompt( "Inserisci il tuo colore", "carta da zucchero");
const passWord = "Francesca" + "Picoco" + "carta da zucchero";

document.getElementById("password").innerHTML = `Password: ${passWord} #23`;