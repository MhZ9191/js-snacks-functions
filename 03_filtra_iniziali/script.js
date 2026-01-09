/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

const cArr = (exArr, char) => {
  const funArr = [];
  for (let i = 0; i < exArr.length; i++) {
    if (exArr[i].charAt(0) === char) {
      funArr.push(exArr[i]);
    }
  }

  return funArr;
};

// Invoca la funzione qui e stampa il risultato in console

const tryFunction = cArr(names, "A");

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

console.log(tryFunction);
