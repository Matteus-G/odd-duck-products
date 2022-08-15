'use strict'

//console.log('hi');

// GLOBAL VARIABLES
function product(name, fileExtension = 'jpg', clicks = 0, views = 0) {
  this.name = name;
  this.fileExtension = fileExtension;
  this.src = `imgs/${this.name}.${fileExtension}`;
  this.clicks = clicks;
  this.views = views;
}

let myContainer = document.querySelector('section');
let myButton = document.querySelector('section + div');
const UL = document.querySelector('#product-list');

let image1 = document.querySelector('#image-container img:first-child');
let image2 = document.querySelector('#image-container img:nth-child(2)');
let image3 = document.querySelector('#image-container img:nth-child(3)');

function loadProduct() {
  //const product = JSON.parse(localStorage.getItem('product')) || [];
  let potentialProducts = localStorage.getItem('productOrders');
  console.log(potentialProducts);
  if (potentialProducts) {
    let parsedOrders = JSON.parse(potentialProducts);
    console.log(parsedOrders);
    const productArr = parsedOrders.map((obj) => {
      console.log(obj);
     return new product(obj.name, obj.fileExtension, obj.clicks, obj.views);
    });
    console.log(productArr);
    return productArr

  }
  else {
    let productArr = main();
    console.log(productArr);
    return productArr;
  }
}
let allproduct = loadProduct();
let clicks = 0;
let lastThreeProducts = []

let clickAllowed = 25;

renderProducts(allproduct);
myContainer.addEventListener('click', handleproductClick);
function main() {
  // for each  product in my array, generate a LI
  // ex: name had X views and was clicked on X times


  let bag = new product('bag');
  let banana = new product('banana');
  let bathroom = new product('bathroom');
  let boots = new product('boots');
  let breakfast = new product('breakfast');
  let bubblegum = new product('bubblegum');
  let chair = new product('chair');
  let cthulhu = new product('cthulhu');
  let dogDuck = new product('dog-duck');
  let dragon = new product('dragon');
  let pen = new product('pen');
  let petSweep = new product('pet-sweep');
  let scissors = new product('scissors');
  let shark = new product('shark');
  let sweep = new product('sweep', 'png');
  let tauntaun = new product('tauntaun');
  let unicorn = new product('unicorn');
  let waterCan = new product('water-can');
  let wineGlass = new product('wine-glass');

  return [bag, banana, bathroom, boots, breakfast,
    bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass];



  // console.log(allproduct);







}



function storeProduct() {
  console.log(allproduct);
  let stringfiedProducts = JSON.stringify(allproduct);
  console.log(stringfiedProducts);
  localStorage.setItem('productOrders', stringfiedProducts);
}

function getProducts() {
  // let potentialProducts = localStorage.getItem('productOrders');
  if (localStorage.productOrders) {
    // let parseOrders = JSON.parse(localStorage.allProducts);
    allProducts = JSON.parse(localStorage.getItem('productChosen'));
    for (let productChosen of allProducts) {
      //console.log(productChosen);
      let name = productChosen.name;
      let src = productChosen.src;
      let clicks = productChosen.clicks;
      let views = productChosen.views;

    }
  }
}






// CONSTRUCTOR


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
    // console.log(threeProducts[i]);
    renderProduct(threeProducts[i], threeImages[i])
    //this is saving to my temporary 3 products array when it needs to persist in my all products arr
    threeProducts[i].views++;
  }

  //return threeProducts
}

function renderProduct(product, image) {
  console.log(product);
  image.src = product.src;
  image.alt = product.name;
}



function handleproductClick(event) {
  if (event.target === myContainer) {
    alert('Please choose a product');
  }
  clicks++;
  let clickedproduct = event.target.alt;
  //console.log(clickedproduct);


  for (let i = 0; i < allproduct.length; i++) {
    if (clickedproduct === allproduct[i].name) {
      allproduct[i].clicks++;
      //console.log(allproduct[i]);
      break;
    }
  }



  if (clicks === clickAllowed) {
    myButton.className = 'clicks-allowed';
    myContainer.removeEventListener('click', handleproductClick);
    renderChart();
    storeProduct();
    for (let i = 0; i < allproduct.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${allproduct[i].name} had ${allproduct[i].views} views and was clicked on ${allproduct[i].clicks} times`;
      UL.appendChild(li);
    }
  }

  lastThreeProducts = renderProducts(allproduct, lastThreeProducts)
}

//renderProducts();
//if (clicks === clickAllowed) {

//myContainer.removeEventListener('click', handleProductClick);
//renderChart();



// function renderResults() 


// renderproduct();


function renderChart() {
  let product = [];
  let productViews = [];
  let productClicks = [];
  for (let i = 0; i < allproduct.length; i++) {
    product.push(allproduct[i].name);
    productViews.push(allproduct[i].views);
    productClicks.push(allproduct[i].clicks)
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
        'rgb(234, 37, 209)'
      ],
      borderWidth: 1
    },
    {
      label: 'Clicks',
      data: productClicks,
      backgroundColor: [
        'rgba(209, 237, 242, 0.2)'
      ],
      borderColor: [
        'rgb(190, 90, 80)'
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
}
