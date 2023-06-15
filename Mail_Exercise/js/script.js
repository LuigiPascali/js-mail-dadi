/* 
    Creo una lista degli indirizzi email consentiti

        Richiedo di inserire la mail, facendo apparire a schermo un prompt
            SE non vengono inseriti "@" o ".com" => appare un alert con scritto "l'indirizzo mail non è valido"
            ALTRIMENTI => eseguo un ciclo per controllare se l'indirizzo email è presente nella lista
        
        Ciclo controllo presenza lista mail
            SE l'inidirizzo mail è presente nella lista
                ALLORA parte un alert con scritto "Accesso Consentito"
            ALTRIMENTI 
                ALLORA parte un alert con scritto "Accesso Non Autorizzato"
    
    Fine
*/

// Creo un'array con una lista degli indirizzi email consentiti
const accessList = ['gigino@gmail.com', 'gigetto@gmail.com', 'gigione@gmail.com', 'gigioneggio@gmail.com', 'gigi@gmail.com', 'g@gmail.com', 'boolean@gmail.com', 'classe@gmail.com', '101@gmail.com'];

// Richiedo all'utente di inserire la sua email
const userMail = prompt('Inserisci la tua email:');

// Controllo se l'email dell'utente è nella lista di accesso
let isMailValid = false;

if (userMail.includes('@') && userMail.includes('.com')) {
for (let i = 0; i < accessList.length; i++) {
    if (accessList[i] === userMail) {
        isMailValid = true;
    break;
        }
    }
} else {
    alert('Indirizzo email non valido');
}

// Stampo un messaggio in base all'esito del controllo
if (isMailValid) {
    console.log('Accesso consentito. Benvenuto!');
} else {
    console.log('Spiacenti, non sei autorizzato ad accedere!');
}




