'use strict'

console.log('hi');

// GLOBAL VARIABLES
let myContainer = document.querySelector('section');
let myButton = document.querySelector('section + div');
let ul = document.querySelector('ul');

let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');

let allproduct = [];
let clicks = 0;

let clickAllowed = 25;

function loadProduct() {
  const product = JSON.parse(localStorage.getItem('product')) || [];
  cart = new product(product);
}
// CONSTRUCTOR

function product(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `..imgs/${this.name}.${fileExtension}`;
  this.clicks = 0;
  this.views = 0;
}

// FUNCTIONS

function getRandomproduct() {
  return Math.floor(Math.random() * allproduct.length);
}

function renderproduct() {
  let product1 = getRandomproduct();
  let product2 = getRandomproduct();
  let product3 = getRandomproduct();
  console.log(product1, product2, product3);
  // seriously consider using an array here
  // remember how do you know if an array includes something?
  // Google it and find out

  while (product1 === product2) (product1 === product3)(product2 === product3); {
    product2 = getRandomproduct();
    product1 = getRandomproduct
    product3 = getRandomproduct
    console.log(product1, product2, product3);
  }
  

  image1.src = allproduct[product1].src;
  image1.alt = allproduct[product1].name;
  allproduct[product1].views++;
  image2.src = allproduct[product2].src;
  image2.alt = allproduct[product2].name;
  allproduct[product2].views++;

  image3.src = allproduct[product3].src;
  image3.alt = allproduct[product3].name;
  allproduct[product3].views++;
  console.log(allproduct);
}

  function handleproductClick(event) {
    if (event.target === myContainer) {
      alert('Please choose a product');
    }
    clicks++;
    let clickedproduct = event.target.alt;
    console.log(clickedproduct);

    for (let i = 0; i < allproduct.length; i++) {
      if (clickedproduct === allproduct[i].name) {
        allproduct[i].clicks++;
        break;
      }
    }
    renderproduct();
    if (clicks === clickAllowed) {
      myButton.className = 'clicks-allowed';
      myContainer.removeEventListener('click', handleproductClick);
      myButton.addEventListener('click', handleButtonClick);
    }
  }


  function handleButtonClick() {
    // if (clicks === clickAllowed) {
    renderResults();

    // }
  }

function renderResults() {

  // for each  product in my array, generate a LI
  // ex: name had X views and was clicked on X times
  for (let i = 0; i < allproduct.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${allproduct[i].name} had ${allproduct[i].views} views and was clicked on ${allproduct[i].clicks} times`;
    ul.appendChild(li);
  }

}




  let bag = new product('bag-product');
  let banana = new product('banana-product');
  let bathroom = new product('bathroom-product');
  let boots = new product('boots-product');
  let breakfast = new product('breakfast-product');
  let bubblegum = new product('bubblegum-product');
  let chair = new product('chair-product');
  let cthulhu = new product('cthulhu-product');
  let dogDuck = new product('dogDuck-product');
  let dragon = new product('gragon-product');
  let pen = new product('pen-product');
  let petSweep = new product('petSweep-product');
  let scissors = new product('scissors-product');
  let shark = new product('shark-product');
  let sweep = new product('sweep-product', '.png');
  let tauntaun = new product('tauntaun-product');
  let unicorn = new product('unicorn-roducts');
  let waterCan = new product('waterCan-product');
  let wineGlass = new product('wineGlass-product');

  allproduct.push(bag, banana, bathroom, boots, breakfast,
    bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);

  // console.log(allproduct);
renderproduct();
function renderChart() {
  let productName = [];
  let productViews = [];
  let productClicks = [];
  for (let i = 0; i < product.allproductArray.length; i++){
    if (clickedproduct === product.allproductArray[i].name) {
      product.allproductArray[i].clicks++;
      break;
    }
  }
  }

  const data = {
    labels: productName,
    datasets: [{
      label: 'Views',
      data: productViews,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)'
      ],
      borderWidth: 1
    },
    {
      label: 'Clicks',
      data: productClicks,
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgb(255, 159, 64)'
      ],
      borderWidth: 1
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  let canvasChart = document.getElementById('myChart');
  const myChart = new Chart(canvasChart, config);



  myContainer.addEventListener('click', handleproductClick);
