/* 

  Genero un numero casuale da 1 a 6 per il player

  Genero un numero casuale da 1 a 6 per il computer

  Stampo in console i punteggi

  Determino il vincitore in base al punteggio più alto
    SE il numero del player è più alto di quello del cpu => player vince
    ALTRIMENTI SE il numero del cpu è più alto di quello del player => cpu vince
    ALTRIMENTI il numero è uguale => c'è un pareggio
  
  Stampo in console il risultato

  Fine.
*/

//   Genero un numero casuale da 1 a 6 per il player
//  const playerResult = Math.floor(Math.random() * 6) + 1;

//   Genero un numero casuale da 1 a 6 per il computer
//  const computerResult = Math.floor(Math.random() * 6) + 1;

//   Stampo i punteggi del player e del computer
//  console.log("Player: " + playerResult);
//  console.log("Computer: " + computerResult);

//   Determino il vincitore in base al punteggio più alto
//   if (playerResult > computerResult) {
//     console.log("Player Win!");
// } else if (playerResult < computerResult) {
//     console.log("Computer Win!");
// } else {
//     console.log("Draw!");
// }

function playGame() {
  // Genero un numero casuale da 1 a 6 per i due player
    let barneyRoll = Math.floor(Math.random() * 6) + 1;
    let frinkRoll = Math.floor(Math.random() * 6) + 1;
  
  // Aggiorno il contenuto degli elementi HTML per visualizzare il risultato dei lanci dei dadi
    document.getElementById("barney-dice").innerHTML = "Barney rolled a " + barneyRoll;
    document.getElementById("frink-dice").innerHTML = "Prof. Frink rolled a " + frinkRoll;
  
  // Creao la variabile per memorizzare il vincitore 
    let winner;

  // Determino il vincitore in base ai punteggi ottenuti e utilizzo setTimeout per ritardare l'apertura dell'alert
    if (barneyRoll > frinkRoll) {
      winner = "Barney";
      const message = "Barney Win!...Buurp!!";
      setTimeout(function() {
        alert(message);
      }, 50);
    } else if (frinkRoll > barneyRoll) {
      winner = "Prof. Frink";
      const message = "Prof. Frink Win!";
      setTimeout(function() {
        alert(message);
      }, 50);
    } else {
      winner = "It's a Tie!";
      const message = "It's a Tie!";
      setTimeout(function() {
        alert(message);
      }, 50);
    }
}
