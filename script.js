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
	"Freebie",
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
	"BIO-160"
];



var container;
var i = 0; // counter for loops
var topRow;
var columnContainer;
var leftColumn;
var rightColumn;
var bottomRow;
var divCreate;

window.addEventListener('load', initializer);

function initializer() { // initializes page
	container = document.getElementById('square');
	boardCreate();
}

function boardCreate() { // creates the board game layout
	for (i = 0; i < 3; i++) { // loads the three inner containers
		divCreate = document.createElement('div');
		container.appendChild(divCreate);
	}

	// adds ids to html elements created dynamically
	document.getElementsByTagName('div')[1].id = 'topRow';
	document.getElementsByTagName('div')[2].id = 'columnContainer';
	document.getElementsByTagName('div')[3].id = 'bottomRow';

	for (i = 0; i < 5; i++) { // loads 5 top boxes
		topRow = document.getElementById('topRow');
		divCreate = document.createElement('div');
		divCreate.innerHTML = classArray[i];
		topRow.appendChild(divCreate);
	}

	for (i = 0; i < 2; i++) { // loads the two column containers
		columnContainer = document.getElementById('columnContainer');
		divCreate = document.createElement('div');
		columnContainer.appendChild(divCreate);
	}

	// adds ids to more elememnts
	document.getElementsByTagName('div')[8].id = 'leftColumn';
	document.getElementsByTagName('div')[9].id = 'rightColumn';

	for (i = 0; i < 3; i++) { // creates 3 left column boxes
		leftColumn = document.getElementById('leftColumn');
		divCreate = document.createElement('div');
		divCreate.innerHTML = classArray[i + 12];
		leftColumn.appendChild(divCreate);
	}

	for (i = 0; i < 3; i++) { // creates 3 right column boxes
		rightColumn = document.getElementById('rightColumn');
		divCreate = document.createElement('div');
		divCreate.innerHTML = classArray[i + 5];
		rightColumn.appendChild(divCreate);
	}

	for (i = 0; i < 5; i++) { // loads 5 bottom boxes
		bottomRow = document.getElementById('bottomRow');
		divCreate = document.createElement('div');
		divCreate.innerHTML = classArray[i + 8];
		bottomRow.appendChild(divCreate);
	}

}

var rollButton = document.getElementById('button');
var firstDie = document.getElementById('firstDie');
var secondDie = document.getElementById('secondDie');
var turnCounter = 0;

rollButton.addEventListener('click', diceRoll);

function diceRoll(e) { // select random dice from array
	// indicates which player is up and records total spaces moved
	var firstRandomNum = Math.floor(Math.random() * 6);
	var SecondRandomNum = Math.floor(Math.random() * 6);
	firstDie.src = diceArray[firstRandomNum];
	secondDie.src = diceArray[SecondRandomNum];
	turnCounter++; // switch for each player's turn
	firstRandomNum += 1; // adds 1 since array begins at 0;
	SecondRandomNum += 1;
	var totalMoves = firstRandomNum + SecondRandomNum;
	console.log(totalMoves);

	switch (turnCounter % 2) { // switches between players' turn
		case 0:
			document.getElementById('playerOne').style.display = "block";
			document.getElementById('playerTwo').style.display = "none";
			break;
		case 1:
			document.getElementById('playerOne').style.display = "none";
			document.getElementById('playerTwo').style.display = "block";
			break;
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


var gradeButton = document.getElementById('gradeButton');
gradeButton.addEventListener('click', grader);
var grade;

function grader(e){
	grade = Math.floor(Math.random() * 11); // random number set to 11 for the 10 cards in the array

	switch(grade){
		case 1:
			alert(grade);

			break;
		case 2:
			alert(grade);
			break;
		case 3:
			alert(grade);
			break;
		case 4: alert(grade);
			break;
		case 5: alert(grade);
		break;
	}
}
