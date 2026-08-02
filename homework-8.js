// Задание 3

const person = {
  name: 'Эльдар',
  lastName: 'Бутасов',
  job: 'Frontend-разработчик',
  age: 41,
  city: 'Черкесск',
  country: 'Россия',
  email: 'eldar15111984@gmail.com'
};

// Задание 4

const car = {
  brand: 'Mitsubishi',
  model: 'Expander Cross',
  year: 2024,
  color: 'серебристый',
  transmission: 'автоматическая',
  fuelType: 'бензин',
};

car.carOwner = 'Эльдар Бутасов';

console.log(car);

// Задание 5

function addMaxSpeed(car) {
  if ("максимальная скорость" in car) {
    return;
  }

  car["максимальная скорость"] = 220;
}

addMaxSpeed(car);

console.log(car);