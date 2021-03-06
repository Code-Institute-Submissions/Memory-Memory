//const a variable with value that cannot be changed 
//let  a variable with value that can be changed
//var a variable with value that can be changed - global scope

// Music Player
let play = function () {
	document.getElementById("audio").play();
};


// refresh the page, start again
function reloadThePage() {
	window.location.reload();
}


// Countdown timer
var seconds = 60,
	$seconds = document.querySelector('#countdown');
(function countdown() {
	$seconds.textContent = `${seconds} second${seconds == 1 ? '' : 's'}`;
	if (seconds -- > 0) setTimeout(countdown, 1000);
	if (seconds === 0) {
		clearInterval(seconds);
		alert('OUT OF TIME!');
	}
})();


//THE GAME

//Array of Cards 
//two sets of colours for each card - to identify match
const cardArray = [{
		name: 'black',
		img: 'assets/img/black-dot.png'
	},
	{
		name: 'black',
		img: 'assets/img/black-dot.png'
	},
	{
		name: 'aqua',
		img: 'assets/img/aqua-dot.png'
	},
	{
		name: 'aqua',
		img: 'assets/img/aqua-dot.png'
	},
	{
		name: 'blue',
		img: 'assets/img/blue-dot.png'
	},
	{
		name: 'blue',
		img: 'assets/img/blue-dot.png'
	},
	{
		name: 'red',
		img: 'assets/img/red-dot.png'
	},
	{
		name: 'red',
		img: 'assets/img/red-dot.png'
	},
	{
		name: 'green',
		img: 'assets/img/green-dot.png'
	},
	{
		name: 'green',
		img: 'assets/img/green-dot.png'
	},
	{
		name: 'orange',
		img: 'assets/img/orange-dot.png'
	},
	{
		name: 'orange',
		img: 'assets/img/orange-dot.png'
	},
	{
		name: 'purple',
		img: 'assets/img/purple-dot.png'
	},
	{
		name: 'purple',
		img: 'assets/img/purple-dot.png'
	},
	{
		name: 'pink',
		img: 'assets/img/pink-dot.png'
	},
	{
		name: 'pink',
		img: 'assets/img/pink-dot.png'
	},
];

// shuffle cards
cardArray.sort(() => 0.5 - Math.random());
//grid 
const grid = document.querySelector('.grid');
//results 
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

//create your board
function createBoard() {
	//create
	for (let i = 0; i < cardArray.length; i++) {
		const card = document.createElement('img');
		//creates card by linking to the image
		card.setAttribute('src', 'assets/img/back.png');
		//gives the card a data-id - goes loops through the cards
		card.setAttribute('data-id', i);
		card.setAttribute('name', cardArray[i].name);
		//Listens for the card to be click and then flips
		card.addEventListener('click', flipCard);
		//images elements with different id's will be loaded to the grid using the appendchild
		grid.appendChild(card);
	}
}

//check for matches
function checkForMatch() {
	var cards = document.querySelectorAll('img');
	if (cardsChosenId[0] == cardsChosenId[1]) {
		cards[cardsChosenId[0]].setAttribute('src', 'assets/img/back.png');
		cards[cardsChosenId[1]].setAttribute('src', 'assets/img/back.png');

	} else if (cardsChosen[0] === cardsChosen[1]) {
		alert('Match Found, Well Done!');
		//set the matched cards to white 
		cards[cardsChosenId[0]].setAttribute('src', 'assets/img/white.png');
		cards[cardsChosenId[1]].setAttribute('src', 'assets/img/white.png');
		cards[cardsChosenId[0]].removeEventListener('click', flipCard);
		cards[cardsChosenId[1]].removeEventListener('click', flipCard);
		cardsWon.push(cardsChosen);
		//set unmatched cards to back position
	} else {
		cards[cardsChosenId[0]].setAttribute('src', 'assets/img/back.png');
		cards[cardsChosenId[1]].setAttribute('src', 'assets/img/back.png');
		alert('Try Again');
	}
	//Game Result 
	cardsChosen = [];
	cardsChosenId = [];
	resultDisplay.textContent = cardsWon.length;
	if (cardsWon.length === cardArray.length / 2) {
		resultDisplay.textContent = 'WINNER - MATCHED ALL';
	}
}

//flip your card              
function flipCard() {
	let cardId = this.getAttribute('data-id');
	let cardName = cardArray[cardId].name;
	console.log(cardId);
	console.log(cardName);
	cardsChosen.push(cardName);
	console.log(cardsChosen);
	cardsChosenId.push(cardId);
	console.log(cardsChosenId);
	this.setAttribute('src', cardArray[cardId].img);
	if (cardsChosen.length === 2) {
		setTimeout(checkForMatch, 500);
	}
}

createBoard();