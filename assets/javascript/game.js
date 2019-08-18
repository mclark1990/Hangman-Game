

//global variables

//game options
let words = ['scranton', 'beets', 'schrute', 'mifflin', 'dunder'];

//chosen word
let chosenWord = "";

//breaks chosen word into letters
let lettersChosenWord = [];

//number of underscores based on chosen word
let numBlanks = 0;

//for progress word during game, underscores and letters
let blanksAndCorrect = [];

//for letters already guessed
let alreadyGuessed = [];

//game counters
let wins = 0;
let losses = 0;
let guesses = 10;

//function to start and reset game
const startGame = () => {
    
//reset guesses    
guesses = 10;
    
//randomly choose from words array
chosenWord = words[Math.floor(Math.random() * words.length)];

//breaks into letters
lettersChosenWord = chosenWord.split("");

//sets to length of chosen word
numBlanks = lettersChosenWord.length;

console.log(chosenWord);
console.log(lettersChosenWord);
console.log(numBlanks);

//resets arrays
blanksAndCorrect = [];
alreadyGuessed = [];






//loop to add underscores for the chosen word
for (let i = 0; i < numBlanks; i++){
    blanksAndCorrect.push("_");
}
console.log(blanksAndCorrect);

//resets guesses to 10
document.getElementById('remaining-guess').innerHTML = guesses;

//pushes underscores to the current word
document.getElementById('current').innerHTML = blanksAndCorrect.join(" ");

//resets letters already guessed blank
document.getElementById('already-guessed').innerHTML = alreadyGuessed.join(" ")


}


startGame();