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

car.carOwner = person;

console.log(car);

// Задание 5

function checkAndAddMaxSpeed(carObject) {
  if (!Object.hasOwn(carObject, "maxSpeed")) {
    carObject.maxSpeed = 220;
  }
}

checkAndAddMaxSpeed(car);

console.log(car);

// Задание 6

function showProperty(object, propertyName) {
  console.log(object[propertyName]);
}

showProperty(car, "brand");

// Задание 7

const cars = ['mercedes', 'bmw', 'audi', 'toyota', 'mitsubishi'];
console.log(cars);

// Задание 8

const detectiveBooks = [
  {
    title: "Шерлок Холмс",
    author: "Артур Конан Дойл",
    year: 1892,
    coverColor: "темно-зеленый",
    genre: "детектив"
  },
  {
    title: "Убийство в Восточном экспрессе",
    author: "Агата Кристи",
    year: 1934,
    coverColor: "синий",
    genre: "детектив"
  },
  {
    title: "Девушка с татуировкой дракона",
    author: "Стиг Ларссон",
    year: 2005,
    coverColor: "черный",
    genre: "детектив"
  },
  {
    title: "Имя розы",
    author: "Умберто Эко",
    year: 1980,
    coverColor: "бордовый",
    genre: "детектив"
  },
];

detectiveBooks.push({
    title: "Азазель",
    author: "Борис Акунин",
    year: 1998,
    coverColor: "красный",
    genre: "детектив"
  });

  // Задание 9

const dramaBooks = [
  {
    title: "Ромео и Джульетта",
    author: "Уильям Шекспир",
    year: 1597,
    coverColor: "красный",
    genre: "драма"
  },
  {
    title: "Гроза",
    author: "Александр Островский",
    year: 1859,
    coverColor: "синий",
    genre: "драма"
  },
  {
    title: "Вишневый сад",
    author: "Антон Чехов",
    year: 1904,
    coverColor: "зелёный",
    genre: "драма"
  }
];

const books = [...detectiveBooks, ...dramaBooks];

console.log(books);

// Задание 10

function addIsRare(books) {
  return books.map(book => {
    const isRare = book.year < 1900;
    return {
       ...book,
        isRare: isRare 
      };
  });
}