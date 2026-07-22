// Задание 3
function weather(city, temperature) {
  console.log (`Сейчас в ${city} 
    температура- ${temperature} градусов по Цельсию.`);
}

weather('Черкесск', 20);

//Задание 4

let speedOfLight = 299792458; // м/с

if (speedOfLight > 299792458) {
  console.log('Сверхсветовая скорость');
} else if (speedOfLight === 299792458) {
  console.log('Скорость света');
} else {console.log('Субсветовая скорость');

}

//Задание 5

let product = 'Телефон';
let price = 1000;

function buyProduct(budget) {
  if (budget >= price) {
    console.log(`${product} приобретен. Спасибо за покупку!`);
  } else {
    let difference = price - budget;
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
