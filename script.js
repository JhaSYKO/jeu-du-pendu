// tableau de mot
const wordToFind = [
    'AUBOISDORMANT', 'TROISJOURS', 'PROVIST', 'TERIEUR', 'VERSE', 'MENTATION', 'ANNIE', 'VERSAIRE', 'HEANTIE', 'HALLE', 'KELPEUV', 'CONNERIE', 'TALO', 'COUVERT', 'EPERIL', 'SAHALOR', 'JAVEL', 'BOREALE', 'VESSEL', 'ERE', 'AFRITT', 'DEGOUT', 'HABA', 'DEJEU', 'TICHAUT', 'ALORS', 'RAVE', 'LAMINE', 'KENT', 'PAMINOU', 'GLACE', 'ONETTE', 'ZOLE', 'RATON', 'EVITABLE', 'CEPACARE', 'VOYANCE', 'STEROLE', 'HORRIS', 'TINE', 'SCYLLA', 'ORIAL', 'MAROLEX', 'COPTERE', 'DANLOSS', 'FILS', 'ILEOSUD', 'PISSER', 'ANNAMOUR', 'DUSTRIEL', 'AUBOISDORMANT', 'TROISJOURS', 'PROVIST', 'TERIEUR', 'VERSE', 'MENTATION', 'ANNIE', 'VERSAIRE', 'HEANTIE', 'HALLE', 'KELPEUV', 'CONNERIE', 'TALO', 'COUVERT', 'EPERIL', 'SAHALOR', 'JAVEL', 'BOREALE', 'VESSEL', 'ERE', 'AFRITT', 'DEGOUT', 'HABA', 'DEJEU', 'TICHAUT', 'ALORS', 'RAVE', 'LAMINE', 'KENT', 'PAMINOU', 'GLACE', 'ONETTE', 'ZOLE', 'RATON', 'EVITABLE', 'CEPACARE', 'VOYANCE', 'STEROLE', 'HORRIS', 'TINE', 'SCYLLA', 'ORIAL', 'MAROLEX', 'COPTERE', 'DANLOSS', 'FILS', 'ILEOSUD', 'PISSER', 'ANNAMOUR', 'DUSTRIEL'
]
// prend un mot au hasard
var chooseWord = getRandomInt(wordToFind.length);
var wordFind = wordToFind[chooseWord];
var wordLength = wordFind.length;

var recup = '';

$('#startGame').on('click', function(){

for(i=1; i<wordLength-1; i++)recup += '_ ';

// afficher le mot et cacher des lettres

for(i=0; i<wordLength; i++){
    secondWord.push(wordFind[i]);
}

$('#word').html(
    '<input id="generateWord" value="'+wordFind[0]+' '+recup+wordFind[wordLength-1]+'">'
    )
    console.log(secondWord)
})

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  var secondWord =[]
  
// récupérer l'input
$('#submitUser').on('click', function(){
    event.preventDefault();
    
    console.log(wordFind)
    var inputUser = $('#getinput').val();
    var upperUser = inputUser.toUpperCase();
    for(i=0; i<wordLength-1; i++){
        if(secondWord[i] == upperUser){
            console.log('got it')
            var test = secondWord[i].replace('_', upperUser)
            $('#word').html(
                '<input id="generateWord" value="'+secondWord[0]+' '+recup+test+secondWord[secondWord.length-1]+'">'
                )
            return
        }
        else{
            console.log('wrong')
        }
    }
})


// vérifier si l'input est égale à une lettre du mot donc afficher la lettre
// afficher la lettre trouver comme réussis
//sinon si l'input ne correspond a aucune lettre contenu dans le mot alors afficher érreur (image)
// afficher la lettre comme échec et apparition d'une image
// sinon demander à l'utilisateur de rentrer une lettre
// condition de win
// si toute les lettres du mot on été trouvé
// condition d'échec
// si le dessin complet apparait tu est pendu