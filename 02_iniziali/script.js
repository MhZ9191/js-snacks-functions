/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

const cArray = (arr) => {
  const tmpArr = [];
  for (let i = 0; i < arr.length; i++) {
    tmpArr[i] = arr[i][0];
    //!oppure
    //tmpArr[i] = arr[i].charAt(0);
  }
  return tmpArr;
};

// Invoca la funzione qui e stampa il risultato in console

const initialNames = cArray(names);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

console.table(initialNames);
