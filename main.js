// Изменение цвета всех карточек

const productCards = document.querySelectorAll('.card');
const changeColorAllCardsButton = document.querySelector('#change-color-all-cards');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';

changeColorAllCardsButton.addEventListener('click', () => {productCards.forEach(card => {card.style.backgroundColor = greenColorHash;});});

// Изменение цвета первой карточки

const firstProductCard = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {firstProductCard.style.backgroundColor = blueColorHash;});

// Открытие страницы Google.com

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', () => {openGoogle();});

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть страницу Google.com?');
  if (answer===true) {window.open('https://www.google.com');}else {return;}
}

// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => 
  outputConsoleLog('Привет, мир!'));

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

