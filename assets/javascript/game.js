

//global variables
let numGuess = 15;
let wins = 0;
let lettersGuessed = [];
let words = ['scranton', 'beets', 'schrute', 'mifflin', 'dunder'];


//generates random number based on length of words array
const randomNum = Math.floor(Math.random() * words.length);

//stores the random element from words array
let chosenWord = words[randomNum];

// console.log(chosenWord.length);

//empty array to store word for the game
let progressWord = [];


//function to generate the underscores
let createUnderscore = () => {

    for (let i = 0; i < chosenWord.length; i++ ){
        progressWord.push('_ ')
        progressWord.toString()
        document.getElementById('current').innerHTML = progressWord.join(" ")
 
    }

}
console.log(progressWord);

//initial number of guesses to DOM
document.getElementById('remaining-guess').innerHTML = numGuess;
//initial wins to DOM
document.getElementById('wins').innerHTML = "Wins: " + wins;

//call for creating the underscore
createUnderscore();