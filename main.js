// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova

// inizializzo larray con i cognomi
var cognomi = ["Rossi", "Bianchi", "Sasso", "Verdi"];

// chiedo il cognome allutente
var cognomeUtente = prompt("inserisci il tuo cognome");

// inserisco il nuovo cognome nellarray
cognomi.push(cognomeUtente);
// stampo la lista non ordinata e salvo il contenuto in una variabile
document.getElementById('my-id').innerHTML = "Lista non ordinata: " + cognomi;
var contenutoPrecedente = document.getElementById('my-id').innerHTML;
// ordino larray in ordine alfabetico
cognomi.sort();
// cerco la posizione del nuovo cognome e la salvo in una variabile
var posizioneCognome = cognomi.indexOf(cognomeUtente);
// stampo loutput completo
document.getElementById('my-id').innerHTML = contenutoPrecedente + "<br>" + "Lista cognomi in ordine alfabetico: " + cognomi + "<br>" + "Il nuovo cognome si trova alla posizione con indice: " + posizioneCognome;
