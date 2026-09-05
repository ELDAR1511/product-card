const cards = [
  {
    image: "images/photo_2.png",
    category: "для нормальной кожи",
    name: "Увлажняющая маска",
    description: "Способствует удерживанию влаги в верхних слоях кожи.",
    compound: [ "воски", "минералы", "масла" ],
    price: 3500,
    
  },
  {
    image: "images/photo_3.png",
    category: "для нормальной кожи",
    name: "Гель для умывания",
    description: "Интенсивно очищает, не повреждает защитный барьер кожи.",
    compound: [ "минералы", "витамины С, А, РР, В И Е", "солнцезащитные компоненты" ],
    price: 1650,
    
  },
  {
    image: "images/photo_1.jpg",
    category: "для нормальной кожи",
    name: "Увлажняющий мусс",
    description: "Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.",
    compound: [ "активные натуральные комплексы", "витамины С, А, РР, В И Е", "солнцезащитные компоненты" ],
    price: 2750
  },  
  {
    image: "images/photo_4.png",
    category: "для нормальной кожи",
    name: "Подарочный набор №1",
    description: "Набор, состоящий из увлажняющего крема и маски.",
    compound: [ "воски", "минералы", "масла" ],
    price: 4750
  },
  {
    image: "images/photo_5.png",
    category: "для нормальной кожи",
    name: "Подарочный набор №5",
    description: "Весь набор средств Invisible symphony, крем, маска, мусс и гель для умывания.",
    compound: [ "воски", "минералы", "масла" ],
    price: 7520
  }
];

const productCardTemplate = document.querySelector("#product-card-template");
const productList = document.querySelector(".product-list");

cards.forEach(card => {
  const cardClone = productCardTemplate.content.cloneNode(true);
  cardClone.querySelector(".card-image").src = card.image;
  cardClone.querySelector(".card-category").textContent = card.category;
  cardClone.querySelector(".card-name").textContent = card.name;
  cardClone.querySelector(".card-description").textContent = card.description;
  const compoundList = cardClone.querySelector(".card-compound");
  cardClone.querySelector(".card-price").textContent = card.price.toLocaleString() + " ₽";
  productList.appendChild(cardClone);
});