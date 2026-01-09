/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.

//! prima versione
//* const greet = (name) => console.log(`ciao ${name}`);

const greet = (name) => {
  const union = "ciao " + name;
  return union;
};

// Invoca la funzione qui e stampa il risultato in console

//! prima versione
//* greet("mario");

const salutaMario = greet("Mario");

//Risultato atteso se si passa 'Mario': // ciao Mario

console.log(salutaMario);
