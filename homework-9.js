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

import { comments } from "./comments.js";

console.log(comments.filter(comment => comment.email.includes('.com')));

// Задание- 8

const newComments = comments.map(comment => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
  };
});

console.log(newComments);

// Задание- 9

const shortComments = comments.map(comment => ({
  id: comment.id,
  name: comment.name
}));

console.log(shortComments);

// Задание- 10

const longComments = comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));

console.log(longComments);

// Задание- 11

const emails = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(emails);

const newEmails = comments.map(comment => comment.email);

console.log(newEmails);

// Задание- 12

console.log(newEmails.toString());
console.log(newEmails.join(', '));
