
//Hidden/reveal elements of the DOM when buttong is clicked

document.getElementById("okButton")
        .addEventListener("click", function() {
  document.getElementById("welcome").hidden = true;
  document.getElementById("game").hidden = false;
}, false);

// Countdown for the game
document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDisplay = document.querySelector('#time-left')
    const startBtn = document.querySelector('#start-button')
    let timeLeft = 60
// function loop that does a countdown which stops at 0
    function countDown() {
        setInterval(function() {    
            if(timeLeft <= 0 ){
                clearInterval(timeLeft = 0)
            }

            timeLeftDisplay.innerHTML = timeLeft 
            timeLeft -= 1
        }, 1000)
        }
    startBtn.addEventListener('click', countDown)
    })



//THE GAME
// Flips the cards//

 const cards = [
{
	color: 'black',
	cardImage: 'assets/img/black-dot.png'
},
{	
	color: 'aqua',
	cardImage: 'assets/img/aqua-dot.png'
}, 
{
	color: 'blue',
	cardImage: 'assets/img/blue-dot.png'
},
{ 
	color: 'red',
	cardImage: 'assets/img/red-dot.png'
}, 
{
	color: 'green',
	cardImage: 'assets/img/green-dot.png'
}, 
{
	color: 'orange',
	cardImage: 'assets/img/orange-dot.png'
},
{ 
	color: 'purple',
	cardImage: 'assets/img/purple-dot.png'
},
{ 
	color: 'pink', 
	cardImage: 'assets/img/pink-dot.png'
}, 
]; 

function createBoard() {
	for (let i = 0; i < cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'assets/img/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

function flipCard() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();	
};


function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	};
};
createBoard();


//THE MODAL//
// Taken from Bootstrap //
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

$('#myModal').modal('hide')