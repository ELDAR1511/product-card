// Задание 3

function weather(city, temperature) {
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию.`);
}

weather('Черкесск', 20);

//Задание 4

const SPEED_OF_LIGHT = 299792458; // м/с

function checkSpeedOfLight(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log('Сверхсветовая скорость');
  } else if (speed === SPEED_OF_LIGHT) {
    console.log('Скорость света');
  } else {
    console.log('Субсветовая скорость');
  }
}

checkSpeedOfLight(300000000);
checkSpeedOfLight(299792458);
checkSpeedOfLight(200000000);

//Задание 5

let product = 'Телефон';
let price = 1000;

function buyProduct(budget) {
  if (budget >= price) {
    console.log(`${product} приобретен. Спасибо за покупку!`);
  } else {
    const difference = price - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс.`);
  }
}

buyProduct(900);
buyProduct(1000);

//Задание 6

function accessControl(age) {
  if (age >= 18) {
    console.log("Вход на территорию разрешён.");
  } else {
    console.log("Вход на территорию запрещён.");
  }
}

accessControl(20);
accessControl(16);

//Задание 7

let name = 'Эльдар';
let age = 41;
let city = 'Черкесск';
