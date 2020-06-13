document. addEventListener('DOMContentLoaded',() => {

	//card options
	const cardArray = [
	{
		name:'twitch',
		img: 'images/twitch.png'
	},
  {
  	name:'twitch',
  	img:'images/twitch.png'
  },
  {
  	name:'Youtube',
  	img:'images/Youtube.png'
  },
  {
  	name:'Youtube',
  	img:'images/Youtube.png'
  },
{
  	name:'aternos',
  	img:'images/aternos.png'
  },
{
  	name:'aternos',
  	img:'images/aternos.png'
  },
{
  	name:'penguin',
  	img:'images/penguin.png'
  },
{
  	name:'penguin',
  	img:'images/penguin.png'
  },
{
  	name:'mixer',
  	img:'images/mixer.jpg'
  },
{
  	name:'mixer',
  	img:'images/mixer.jpg'
  },
{
  	name:'ow',
  	img:'images/ow.png'
  },
{
  	name:'ow',
  	img:'images/ow.png'
  },
  ]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen= []
var cardsChosenId=[]
var cardsWon =[]

//create your board
function createBoard() {
	for (let i = 0; i < cardArray.length;i++){
		var card = document.createElement('img')
		card.setAttribute('src', 'images/starter.jpg')
		card.setAttribute('data-id', i)
		card.addEventListener('click', flipCard)
		grid.appendChild(card)
	}
}
//check for matches
function checkForMatch(){
	var cards = document.querySelectorAll('img')
	const optionOneId = cardsChosenId[0]
	const optionTwoId = cardsChosenId[1]
	if (cardsChosen[0]=== cardsChosen[1]){
		alert('You found a match')
		cards[optionOneId].setAttribute('src','images/blank.png')
		cards[optionTwoId].setAttribute('src', 'images/blank.png')
		cardsWon.push(cardsChosen)
	}else {
		cards[optionOneId].setAttribute('src','images/starter.jpg')
		cards[optionTwoId].setAttribute('src','images/starter.jpg')
		alert('Sorry, try again')
	}
	cardsChosen = []
	cardsChosenId = []
	resultDisplay.textContent = cardsWon.length
	if (cardsWon.length === cardArray.length/2){
		resultDisplay.textContent = 'Congratulations! You found them all!'
	}
}

//flip your card
function flipCard(){
	var cardId = this.getAttribute('data-id')
	cardsChosen.push(cardArray[cardId].name)
	cardsChosenId.push(cardId)
	this.setAttribute('src', cardArray[cardId].img)
	if(cardsChosen.length === 2){
		setTimeout(checkForMatch, 500)
	}
}

createBoard()


})		