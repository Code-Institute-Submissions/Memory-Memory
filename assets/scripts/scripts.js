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
    img: 'img/black-dot.png'
},
{
	name: 'black',
    img: 'img/black-dot.png'
},
{	
	name: 'aqua',
	img: 'img/aqua-dot.png'
}, 
{	
	name: 'aqua',
	img: 'img/aqua-dot.png'
}, 
{
	name: 'blue',
	img: 'img/blue-dot.png'
},
{
	name: 'blue',
	img: 'img/blue-dot.png'
},
{ 
	name: 'red',
	img: 'img/red-dot.png'
}, 
{ 
	name: 'red',
	img: 'img/red-dot.png'
}, 
{
	name: 'green',
	img: 'img/green-dot.png'
}, 
{
	name: 'green',
	img: 'img/green-dot.png'
}, 
{
	name: 'orange',
	img: 'img/orange-dot.png'
},
{
	name: 'orange',
	img: 'img/orange-dot.png'
},
{ 
	name: 'purple',
	img: 'img/purple-dot.png'
},
{ 
	name: 'purple',
	img: 'img/purple-dot.png'
},
{ 
	name: 'pink', 
	img: 'img/pink-dot.png'
}, 
{ 
	name: 'pink', 
	img: 'img/pink-dot.png'
}, 
]; 


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
      card.setAttribute('src', 'img/back.png')
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
      cards[optionOneId].setAttribute('src', 'img/back.png')
      cards[optionTwoId].setAttribute('src', 'img/back.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', '')
      cards[optionTwoId].setAttribute('src', 'img/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'img/../back.png')
      cards[optionTwoId].setAttribute('src', 'img/back.png')
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

  createBoard();



createBoard();
//THE MODAL//
// Taken from Bootstrap //
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var recipient = button.data('whatever'); // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);
  modal.find('.modal-title').text('New message to ' + recipient);
  modal.find('.modal-body input').val(recipient);
});

$('#myModal').modal('hide');

function newFunction() {
    createBoard();
}

// Countdown for the game
document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDisplay = document.querySelector('#time-left');
    const startBtn = document.querySelector('#start-button');
    let timeLeft = 60;
// function loop that does a countdown which stops at 0
    function countDown() {
        setInterval(function() {    
            if(timeLeft <= 0 ){
                clearInterval(timeLeft = 0);
            }

            timeLeftDisplay.innerHTML = timeLeft 
            timeLeft -= 1;
        }, 1000);
        }
    startBtn.addEventListener('click', countDown);
    });
