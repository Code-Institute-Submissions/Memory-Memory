//Music intitaliser 


//styling the h1

//Hidden/reveal elements of the DOM when buttong is clicked

  document.getElementById("okButton");
  document.addEventListener("click", function() {
  document.getElementById("welcome").hidden = true;
  document.getElementById("grid").hidden = false;
}, false);

let play = function(){document.getElementById("audio").play()}

//THE GAME
// Flips the cards//

 const cardArray= [
{
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
	img: 'assets/img/aqua-dot.png'
},
{
	name: 'blue',
	img: 'assets/img/aqua-dot.png'
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
	img: 'assets/img/green-dot.png'
},
{
	name: 'orange',
	img: 'assets/img/green-dot.png'
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
document.addEventListener('DOMContentLoaded', () => {

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'assets/img/back.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'assets/img/back.png')
      cards[optionTwoId].setAttribute('src', 'assets/img/back.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
       cards[optionOneId].setAttribute('src', 'assets/img/white.png')
      cards[optionTwoId].setAttribute('src', 'assets/img/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'assets/img/back.png')
      cards[optionTwoId].setAttribute('src', 'assets/img/back.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

   createBoard()
})