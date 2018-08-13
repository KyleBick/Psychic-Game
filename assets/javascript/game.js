var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];
var randLetter = randLetter;
var letters = "abcdefghijklmnopqrstuvwxyz";

randLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randLetter);

function compGuess() {
    randLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(randLetter);
}

document.onkeyup = function (event) {
var playerGuess = event.key;


if (playerGuess === randLetter) {
    won++;
    attempts = 10;
    usedArray = [];
}

compGuess();

if (playerGuess !== randLetter){
    attempts--;
}

if (attempts == 0) {
    lost++;
    usedArray = [];
    attempts = 10;
}

if (usedArray.indexOf(playerGuess) >= 0) {
}

else {
    usedArray.push(playerGuess);
    document.getElementById('playerGuess').innerHTML = usedArray;
    console.log(usedArray);
}

document.getElementById('won').innerHTML = won;
document.getElementById('lost').innerHTML = lost;
document.getElementById('attempts').innerHTML = attempts;

}