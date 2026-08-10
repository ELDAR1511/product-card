// Задание- 2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.filter(number => number >= 5);

console.log(result);

// Задание- 3

const cars = ['mercedes', 'bmw', 'audi', 'toyota', 'mitsubishi'];

const allCars = cars.includes('bmw');

console.log(allCars);

// Задание- 4

function reverseArray(array) {
  return array.reverse();
}

console.log(reverseArray(numbers));
console.log(reverseArray(cars));

// Задание- 7

import { comments } from "./comments";