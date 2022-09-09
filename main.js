// Variables

var selfCareCenterTitle = document.querySelector('#self-care-center-title')
var whichTypeOfMessageTitle = document.querySelector('#which-type-of-message-title')
var yourFavoritesTitle = document.querySelector('#your-favorites-title')
var selectionView = document.querySelector('#selection-view')
var displayedMessageView = document.querySelector('#displayed-message-view')
var favoriteMessagesView = document.querySelector('#favorite-messages-view')
var affirmationButton = document.querySelector('#affirmation-button')
var mantraButton = document.querySelector('#mantra-button')
var receiveMessageButton = document.querySelector('#receive-button')
var addToFavoritesButton = document.querySelector('#add-to-favorites-button')
var viewFavoritesButton = document.querySelector('#view-favorites-button')
var homeButton = document.querySelector('#home-button')
var message = document.querySelector('#displayed-message')
var image = document.querySelector('#image')
var favoriteMessagesList = document.querySelector('#favorite-messages-list')


// Event listeners

affirmationButton.addEventListener('click', getRandomAffirmation)
mantraButton.addEventListener('click', getRandomMantra)
receiveMessageButton.addEventListener('click', displayMessage)
addToFavoritesButton.addEventListener('click', addToFavorites)
viewFavoritesButton.addEventListener('click', viewFavorites)
homeButton.addEventListener('click', returnHome)

// Functions

function getRandomAffirmation() {
  currentMessage = affirmations[getRandomIndex(affirmations)]
}

function getRandomMantra() {
  currentMessage = mantras[getRandomIndex(mantras)]
}

function displayMessage() {
  message.innerText = currentMessage
  image.classList.add('hidden')
  message.classList.remove('hidden')
}

function addToFavorites(event) {
  event.preventDefault()
  if (!favoriteMessages.includes(currentMessage))
  favoriteMessages.push(currentMessage)
}

function viewFavorites() {
  favoriteMessagesList.innerHTML = ''
  for (var i = 0; i < favoriteMessages.length; i++) {
    favoriteMessagesList.innerHTML +=
    `
    <li class="savedMessagesFont">${favoriteMessages[i]}</>
    `
  }
  selectionView.classList.add('hidden')
  displayedMessageView.classList.add('hidden')
  favoriteMessagesView.classList.remove('hidden')
  yourFavoritesTitle.classList.remove('hidden')
  whichTypeOfMessageTitle.classList.add('hidden')
  homeButton.classList.remove('hidden')
  addToFavoritesButton.classList.add('hidden')
  viewFavoritesButton.classList.add('hidden')
}

function returnHome() {
  selectionView.classList.remove('hidden')
  displayedMessageView.classList.remove('hidden')
  favoriteMessagesView.classList.add('hidden')
  yourFavoritesTitle.classList.add('hidden')
  whichTypeOfMessageTitle.classList.remove('hidden')
  homeButton.classList.add('hidden')
  addToFavoritesButton.classList.remove('hidden')
  viewFavoritesButton.classList.remove('hidden')
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


// Message lists and data models

var currentMessage

var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
]

var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
]

var favoriteMessages = []
