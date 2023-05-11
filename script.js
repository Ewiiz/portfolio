const readline = require('readline-sync')

const blague = [
    {
        question: 'C\'est l\'histoire du ptit dej, tu la connais ?',
        reponse: 'Pas de bol.'
    },
    {
        question: 'C\'est l\'histoire d\'une blague vaseuse',
        reponse: 'Mets tes bottes.'
    },
    {
        question: 'C\'est l\'histoire d\'un pingouin qui respire par les fesses',
        reponse: 'Un jour il s’assoit et il meurt.'
    },
    {
        question: 'Comment appelle-t-on une chauve-souris avec une perruque ?',
        reponse: 'Une souris.'
    },
    {
        question: 'Que dit un escargot quand il croise une limace ?',
        reponse: '« Oh la belle décapotable ».'
    }
]

function blagueAletatoire() {
    const aleatoire = Math.floor(Math.random() * blague.length)

    console.log('Question: ' + blague[aleatoire].question)
    console.log('Réponse: ' + blague[aleatoire].reponse)
}

let autreQuestion = 'oui';

while (autreQuestion.toLowerCase() !== 'non') {
    autreQuestion = readline.question('Souhaitez-vous une autre blague ? ');

    if (autreQuestion.toLowerCase() !== 'non') {
        blagueAletatoire();
    }
}

