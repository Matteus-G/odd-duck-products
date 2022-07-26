'use strict'

console.log('hi');

// GLOBAL VARIABLES
let myContainer = document.querySelector('section');
let myButton = document.querySelector('section + div');
let ul = document.querySelector('ul');

let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');

let allproducts = [];
let clicks = 0;

let clickAllowed = 25;


// CONSTRUCTOR

function product(name, src = 'jpg') {
  this.name = name;
  this.src = `imgs/${this.name}.${fileExtension}`;
  this.clicks = 0;
  this.views = 0;
}

// FUNCTIONS

function getRandomproducts() {
  return Math.floor(Math.random() * allproducts.length);
}

function renderproducts() {
  let products1 = getRandomproducts();
  let products2 = getRandomproducts();
  console.log(products1, products2);
  // seriously consider using an array here
  // remember how do you know if an array includes something?
  // Google it and find out
  while (products1 === products2) {
    products2 = getRandomproducts();
    console.log(products1, products2);
  }

  image1.src = allproducts[products1].src;
  image1.alt = allproducts[products1].name;
  allproducts[products1].views++;
  image2.src = allproducts[products2].src;
  image2.alt = allproducts[products2].name;
  allproducts[products2].views++;
  console.log(allproducts);
}

function handleproductsClick(event) {
  if (event.target === myContainer) {
    alert('Please choose a product');
  }
  clicks++;
  let clickedproducts = event.target.alt;
  console.log(clickedproducts);

  for (let i = 0; i< allproducts.length; i++) {
    if (clickedProducts === allproducts[i].name) {
      allproducts[i].clicks++;
      break;
    }
  }
  renderproducts();
  if (clicks === clickAllowed) {
    myButton.className = 'clicks-allowed';
    myContainer.removeEventListener('click', handleproductsClick);
    myButton.addEventListener('click', handleButtonClick);
  }
}

function handleButtonClick() {
  // if (clicks === clickAllowed) {
    renderResults();
  // }
}

function renderResults() {

  // for each  products in my array, generate a LI
  // ex: name had X views and was clicked on X times
  for (let i = 0; i < allproducts.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${allproducts[i].name} had ${allproducts[i].views} views and was clicked on ${allproducts[i].clicks} times`;
    ul.appendChild(li);
  }
}


let bag = new products('cruisin-products', 'png');
let banana = new products('float-your-products');
let bathroom = new products('products-out-of-hand');
let boots = new products('kissing-products');
let breakfast = new products('sassy-products');
let bubblegum = new products('smiling-products');
let chair = new products('sweater-products');
let cthulhu = new products('smiling-products');
let dogDuck = new products('sweater-products');
let dragon = new products('smiling-products');
let pen = new products('sweater-products');
let petSweep = new products('smiling-products');
let scissors = new products('sweater-products');
let shark = new products('sweater-products');
let sweep = new products('smiling-products');
let tauntaun = new products('sweater-products');
let unicorn = new products('sweater-products');
let waterCan = new products('sassy-products');
let wineGlass = new products('smiling-products');

allproducts.push(bag, banana, bathroom, boots, breakfast,
bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);

// console.log(allproducts);
rendelproducts();

myContainer.addEventListener('click', handleproductsClick);
