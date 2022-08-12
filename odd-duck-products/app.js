'use strict'

console.log('hi');

// GLOBAL VARIABLES
let myContainer = document.querySelector('section');
let myButton = document.querySelector('section + div');
const UL = document.querySelector('#product-list');

let image1 = document.querySelector('#image-container img:first-child');
let image2 = document.querySelector('#image-container img:nth-child(2)');
let image3 = document.querySelector('#image-container img:nth-child(3)');

let allproduct = loadProduct();
let clicks = 0;
let lastThreeProducts = []

let clickAllowed = 25;

function main() {
  // for each  product in my array, generate a LI
  // ex: name had X views and was clicked on X times


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
  let unicorn = new product('unicorn-products');
  let waterCan = new product('waterCan-product');
  let wineGlass = new product('wineGlass-product');

  allproduct.push(bag, banana, bathroom, boots, breakfast,
    bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);

  for (let i = 0; i < allproduct.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${allproduct[i].name} had ${allproduct[i].views} views and was clicked on ${allproduct[i].clicks} times`;
    UL.appendChild(li);
  }

  // console.log(allproduct);

  renderProducts(allproduct);

  myContainer.addEventListener('click', handleproductClick);



}



function storeProducts() {
  let stringifiedProducts = JSON.stringify(product);
  console.log(stringifiedProducts);
  localStorage.setItem('Products', stringifiedProducts)
}


function loadProduct() {
  const product = JSON.parse(localStorage.getItem('product')) || [];

  const productArr = product.map((name) => new product(name))
  return productArr
}


// CONSTRUCTOR
function product(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `..imgs/${this.name}.${fileExtension}`;
  this.clicks = 0;
  this.views = 0;
}

// FUNCTIONS

function getRandomProduct(products) {
  return products[Math.floor(Math.random() * products.length)];
}

function renderProducts(products, lastProducts = []) {
  let threeProducts = []

  while (threeProducts.length < 3) {
    let newProduct = getRandomProduct(products);
    if (!threeProducts.includes(newProduct) && (!lastProducts.includes(newProduct))) {
      threeProducts.push(newProduct)
    }
  }

  let threeImages = [image1, image2, image3]

  for (let i = 0; i < threeProducts.length; i++) {
    renderProduct(threeProducts[i], threeImages[i])
    threeProducts[i].views++;
  }

  return threeProducts
}

function renderProduct(product, image) {
  image.src = product.src;
  image.alt = product.name;
}



function handleproductClick(event) {
  if (event.target === myContainer) {
    alert('Please choose a product');
  }
  clicks++;
  let clickedproduct = event.target.alt;
  console.log(clickedproduct);
  storeProducts();

  for (let i = 0; i < allproduct.length; i++) {
    if (clickedproduct === allproduct[i].name) {
      allproduct[i].clicks++;
      break;
    }
  }


  if (clicks === clickAllowed) {
    myButton.className = 'clicks-allowed';
    myContainer.removeEventListener('click', handleproductClick);
    myButton.addEventListener('click', handleButtonClick);
    storeProducts();
  }

  lastThreeProducts = renderProducts(allproduct, lastThreeProducts)
}





// function renderResults() 


// renderproduct();


function renderChart() {
  let product = [];
  let productViews = [];
  let productClicks = [];
  for (let i = 0; i < product.allproductArray.length; i++) {
    product.push(product[i].name);
    productViews.push(product[i].views);
    productClicks.push(product[i].clicks)
      break;
    }
  }

  const data = {
    labels: product,
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




main()
