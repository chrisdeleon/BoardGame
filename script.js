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

var scoreArray = [ // array with random letter grades
	"A",
	"B",
	"C",
	"D",
	"F",
];

var classArray = [ // array with class names, excules CIS260
	"CIS-101",
	"CIS-120",
	"CIS-130",
	"CIS-131",
	"CIS-150",
	"CIS-151",
	"CIS-210",
	"CIS-250",
	"CIS-244",
	"MTH-140",
	"MTH-141",
	"MTH-214",
	"PLS-101",
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
	console.log(firstRandomNum);
	console.log(SecondRandomNum);
	console.log(totalMoves);

	switch (turnCounter % 2) {
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