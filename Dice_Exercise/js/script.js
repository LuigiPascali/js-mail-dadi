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

// Variabili per tenere traccia dei punteggi
let barneyScore = 0;
let frinkScore = 0;
let tieScore = 0;

// Funzione per lanciare i dadi e determinare il vincitore
function playGame() {
  // Genero un numero casuale da 1 a 6 per i due giocatori
  let barneyRoll = Math.floor(Math.random() * 6) + 1;
  let frinkRoll = Math.floor(Math.random() * 6) + 1;

  // Aggiorno il contenuto degli elementi HTML per visualizzare il risultato dei lanci dei dadi
  document.getElementById("barney-dice").innerHTML = "Barney rolled a " + barneyRoll;
  document.getElementById("frink-dice").innerHTML = "Prof. Frink rolled a " + frinkRoll;

  // Determino il vincitore in base ai punteggi ottenuti
  if (barneyRoll > frinkRoll) {
    // Barney vince
    barneyScore++; // Incrementa il punteggio di Barney
    const message = "Barney Win!...Buurp!!";
    setTimeout(function() {
      alert(message);
      if (barneyScore === 5) {
        alert("Barney: Dammi la cassa di Duff che mi spetta!!!!");
      }
    }, 50);
  } else if (frinkRoll > barneyRoll) {
    // Prof. Frink vince
    frinkScore++; // Incrementa il punteggio di Prof. Frink
    const message = "Prof. Frink Win!";
    setTimeout(function() {
      alert(message);
      if (frinkScore === 5) {
        alert("Prof Frink: Ora la tua anima è MIAAAAAAA!!!!");
      }
    }, 50);
  } else {
    // Pareggio
    tieScore++; // Incrementa il punteggio dei pareggi
    const message = "It's a Tie!";
    setTimeout(function() {
      alert(message);
    }, 50);
  }

  // Aggiorno il contenuto della card per visualizzare i punteggi aggiornati
  document.getElementById("barney-score").innerHTML = barneyScore;
  document.getElementById("frink-score").innerHTML = frinkScore;
  document.getElementById("tie-score").innerHTML = tieScore;
}
