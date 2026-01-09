/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

const countVow = (exStr) => {
  const vocali = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < exStr.length; i++) {
    if (vocali.includes(exStr[i])) count++;
    //oppure ciclo for
    // for (let m = 0; m < vocali.length; m++) {
    //   if (exStr[i] === vocali[m]) count++;
    // }
  }

  return count;
};

// Invoca la funzione qui e stampa il risultato in console

const tryVocali = countVow(word);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

console.log(tryVocali);
