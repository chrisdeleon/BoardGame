//  Chris de Leon
//  10/7/2022
//  CIS131 Midterm Project

var diceArray = [ // array with dice images
	"1.png",
	"2.png",
	"3.png",
	"4.png",
	"5.png",
	"6.png"
];


var lifeCardArray = [
	"Superiority complex got the best of you and cost you a class. Lose 1 course.",
	"You forgot how to center a div on your final exam. Lose 1 course.",
	"You found Stack Overflow and your grades suddenly improved. Gain 1 course.",
	"You were proactive with your coursework. Gain 1 course.",
	"Your cat spilled water on your PC and it caught on fire. Luckily, you backed-up your files. Nothing happens.",
	"Your cat spilled water on your PC and it caught on fire. You didn't have your files backed-up though. Lose 1 course.",
	"You fixed 100 bugs in your program, but another 32 popped up. You lose a bit of dignity, but nothing else.",
	"You set up your for-loop incorrectly and your computer blows up. Lose 1 course.",
	"Professor Markley wins the lottery and goes to Hawaii indefinitely. Gain 1 course. ",
	"Recursion example..." // loops a player back to the start
];

var classArray = [ // array with class names, excules CIS260
	"Start",
	"CIS-120",
	"CIS-130",
	"CIS-131",
	"Chance!",
	"CIS-151",
	"CIS-210",
	"Chance!",
	"CIS-244",
	"MTH-140",
	"MTH-141",
	"MTH-214",
	"Chance!",
	"PHY-120",
	"BIO-160",
	"Freebie!"
];




var i = 0; // counter for loops
for (i = 0; i < classArray.length; i++) { // loads array into HTML
	document.getElementById(i).innerHTML = classArray[i];
}

var rollButton = document.getElementById('button');
var firstDie = document.getElementById('firstDie');
var secondDie = document.getElementById('secondDie');
var turnCounter = 0;
var gradeVerifier = false; // ensures grade is clicked
var gradeButton = document.getElementById('gradeButton');
gradeButton.addEventListener('click', grader);
var singleGrade = false; // ensures only one grade
var gradeAlert = document.getElementById('gradeAlert');
var singleAlert = document.getElementById('singleAlert');
var p1Total = 0;
var p2Total = 0;
var clearTable = 0;


rollButton.addEventListener('click', diceRoll);

function diceRoll(e) { // select random dice from array
	// indicates which player is up and records total spaces moved

	var firstRandomNum = Math.floor(Math.random() * 6);
	var secondRandomNum = Math.floor(Math.random() * 6);
	firstDie.src = diceArray[firstRandomNum]; // changes the die's image
	secondDie.src = diceArray[secondRandomNum];
	firstRandomNum += 1; // added 1 so that math is correct;
	secondRandomNum += 1;
	var sum = firstRandomNum + secondRandomNum;
	clearTable++;

	if (gradeVerifier == false) { // if statement makes sure that player clicks grade button
		rollButton.style.backgroundColor = "white"; // resets any color added
		singleAlert.style.display = "none";
		grade.innerHTML = '<img src="canvas.png" alt="" class="canvas"><br>Grade: ';
		turnCounter++; // switch for each player's turn
		singleGrade = false; // resets grade
		clearTable++;

		switch (turnCounter % 2) { // switches between players' turn
			case 0: // second player's turn
				document.getElementById('playerOne').style.display = "block";
				document.getElementById('playerTwo').style.display = "none";
				p2Total += sum;
				if (p2Total >= 16) {
					var p2Remainder = p2Total % 16; // grabs remaining moves
					p2Total = 0; // resets the character to start position
					p2Total += p2Remainder; // allows for the remaining moves to play out
				}
				
				document.getElementById(p2Total).innerHTML += '<img src="patrick.png" alt="" class="small">'; // changes player 2's location
				break;
			case 1: // first player's turn
				document.getElementById('playerOne').style.display = "none";
				document.getElementById('playerTwo').style.display = "block";
				p1Total += sum;
				if (p1Total >= 16) {
					var p1Remainder = p1Total % 16; // grabs remaining moves
					p1Total = 0; // resets the character to start position
					p1Total += p1Remainder; // allows for the remaining moves to play out
				}
				if (clearTable >= 2) { // clears the table but keeps track of player 2's last location
					for (i = 0; i < classArray.length; i++) { // loads array into HTML
						document.getElementById(i).innerHTML = classArray[i];
					}
					document.getElementById(p2Total).innerHTML += '<img src="patrick.png" alt="" class="small">';
				}
				document.getElementById(p1Total).innerHTML += '<img src="spongebob.png" alt="" class="small">'; // changes player 1's location
				break;
		}
		gradeVerifier = true; // ensure button click is registered once.
	} else {
		gradeButton.style.backgroundColor = "#fa4c50";
		gradeAlert.style.display = "block";
	}
}


var grade = document.getElementById('grade');
var gradeRandomizer = 0;

function grader(e) { // function gives grade and allows for the next player to begin
	if (singleGrade == false) {
		gradeRandomizer += Math.floor(1 + Math.random() * 5); // 5 options that correspond to grades

		switch (gradeRandomizer) {
			case 1:
				grade.innerHTML += "A";
				break;
			case 2:
				grade.innerHTML += "B";
				break;
			case 3:
				grade.innerHTML += "C";
				break;
			case 4:
				grade.innerHTML += "D";
				break;
			case 5:
				grade.innerHTML += "F";
				break;
		}
		gradeVerifier = false;
		gradeButton.style.backgroundColor = "white";
		gradeAlert.style.display = "none";
		singleGrade = true;
		gradeRandomizer = 0;
	} else {
		singleAlert.style.display = "block";
		rollButton.style.backgroundColor = "#24d940";
	}
}

var playButton = document.getElementById('play');
var popup = document.getElementById('popup');
var body = document.getElementById('body');
var spongebob = document.getElementById('spongebob');
var patrick = document.getElementById('patrick');
var diceContainer = document.getElementById('diceContainer');

playButton.addEventListener('click', popupExit);

function popupExit(e) { // removes the popup screen
	popup.style.display = "none";
	body.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
	spongebob.src = "spongebob.png";
	patrick.src = "patrick.png";
	diceContainer.style.display = "block";
}

var rules = document.getElementById('rules');
rules.addEventListener('click', popupShow);

function popupShow(e) { // displays the rules again
	popup.style.display = "block";
	body.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
	spongebob.src = "";
	patrick.src = "";
	diceContainer.style.display = "none";
}







/* THIS CODE WORKS FOR A RANDOM CHANCE CARD

function chanceSelector(){
	var chance = Math.floor(Math.random() * 10);
	console.log(chance);
	switch(chance){ // chance card switch
		case 0:
		case 1:
		case 5: 
		case 7: // loses a course
			console.log(lifeCardArray[chance]);
			console.log(chance);
			break;
		case 2:
		case 3:
		case 8: // gains a course
			console.log(lifeCardArray[chance]);
			console.log(chance);
			break;
		case 4:
		case 6: // nothing happens
			console.log(lifeCardArray[chance]);
			console.log(chance);
			break;
		case 9: // send to beginning
			console.log('to the beginnging');
			console.log(chance);
			break;
	}
}	


*/