/* 
    Genero un numero casuale da 1 a 6 per il player

    Genero un numero casuale da 1 a 6 per il computer

    Stampo in console i punteggi

    Determino il vincitore in base al punteggio più alto
        SE il numero del player è più alto di quello del cpu => player vince
        ALTRIMENTI SE il numero del cpu è più alto di quello del player => cpu vince
        ALTRIMENTI il numero è uguale => c'è un pareggio
    
    Stampo in console il risultato
*/

// Genero un numero casuale da 1 a 6 per il player
 const playerResult = Math.floor(Math.random() * 6) + 1;

// Genero un numero casuale da 1 a 6 per il computer
 const computerResult = Math.floor(Math.random() * 6) + 1;

// Stampo i punteggi del player e del computer
 console.log("Player: " + playerResult);
 console.log("Computer: " + computerResult);

// Determino il vincitore in base al punteggio più alto
  if (playerResult > computerResult) {
    console.log("Player Win!");
} else if (playerResult < computerResult) {
    console.log("Computer Win!");
} else {
    console.log("Draw!");
}

