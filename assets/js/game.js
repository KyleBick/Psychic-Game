//Create var's for wins, losses, attempts, used letters empty array, random letter for comp to pick from and letters in alphabet to pick from
var won = 0;
var losses = 0;
var attempts = 10;
var usedArray = [];
var randLetter = randLetter;
var letters = "abcdefghijklmnopqrstuvwxyz";

//computer needs to pick random letter
randLetter = letters[Math.floor(Math.random() * letters.length)];


function compGuess() {
    randLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(randLetter);
}

//players input 
document.onkeyup = function (event) {
var playerGuess = event.key;

//give users 10 guesses and add win to total wins
if (playerGuess === randLetter) {
    won++;
    attempts = 10;
    usedArray = [];
}

//deductattempts from user for guessing wrong letter
compGuess();

if (playerGuess !== randLetter){
    attempts--;
}
// if attempts reach 0 out of 10 player loses 
if (attempts == 0) {
    losses++;
    usedArray = [];
    attempts = 10;
}

if (usedArray.indexOf(playerGuess) >= 0) {
}

// push js to html by attatching it to an ID for displaying wins losses attempts and guessed letters
else {
    usedArray.push(playerGuess);
    document.getElementById('playerGuess').innerHTML = usedArray;
    console.log(usedArray);
}

document.getElementById('won').innerHTML = won;
document.getElementById('losses').innerHTML = losses;
document.getElementById('attempts').innerHTML = attempts;

}