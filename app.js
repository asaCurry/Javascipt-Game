// set variables

var allOutcomes = [inputRock, inputPaper, inputScissors, inputLizard, inputSpock];


var inputRock = ["again", "lose", "win", "win", "lose" ];
var inputPaper = ["win", "again", "lose", "lose", "win" ];
var inputScissors = ["lose", "win", "again", "win", "lose" ];
var inputLizard = ["lose", "win", "lose", "again", "lose" ];
var inputSpock = ["win", "lose", "win", "lose", "again" ];





//reroll function

var reRoll = function(arrayName) {
	var randPlay = Math.floor(Math.random() *arrayName.length);
	 gameOutcome = arrayName[randPlay];
	console.log(randPlay);
	console.log(gameOutcome);
}
// check winner function

var checkAnswer = function() {
		if ( gameOutcome === "win") {
	console.log("You win!");
} else if ( gameOutcome === "lose") {
	console.log("you lose!");
} else {
	console.log("It's a draw, play agian.");
} ;
console.log("checked");	
}
/* ESTING jquery icon bounce

 $(document.getElementById("button-paper")).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

*/

//player inputs a value, the computer rolls and announces the winner 

var playerInputRock = function() {

	
	reRoll(inputRock);

 	checkAnswer();

	console.log("rock push");	
}

// 

var playerInputPaper = function() {

	reRoll(inputPaper);

 	checkAnswer();

 	console.log("paper push")

 }

var playerInputScissors = function() {

	reRoll(inputPaper);

 	checkAnswer();

	console.log("scissors push");	
}

var playerInputLizard = function() {

	reRoll(inputPaper);

 	checkAnswer();

	console.log("lizard push");	
}

var playerInputSpock = function() {

	reRoll(inputPaper);

 	checkAnswer();

	console.log("spock push");	
}
// buttons

document.getElementById('button-rock').onclick = playerInputRock;

document.getElementById('button-paper').onclick = playerInputPaper;

document.getElementById('button-scissors').onclick = playerInputScissors;

document.getElementById('button-lizard').onclick = playerInputLizard;

document.getElementById('button-spock').onclick = playerInputSpock;
	
