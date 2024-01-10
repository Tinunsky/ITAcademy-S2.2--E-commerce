// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional

// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var totalPrice = 0;
var totalItems = 0;

const checkoutTable = document.getElementById("cart_list");
const checkoutTotalItems = document.getElementById("count_product");
const checkoutTotalPrice = document.getElementById("total_price");

// Exercise 1
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cartList array

function buy(id) {
  for (i = 0; i < products.length; i++) {
    if (id === products[i].id) {
      console.log(`added product ${products[i].name}`);
      cartList.push(products[i]);

      // Show notice for the corresponding product
      const noticeContainer = document.querySelector(`#notice-${id}`);
      const noticeContent = document.createElement("div");
      noticeContent.classList.add("alert", "alert-success", "mt-2");
      noticeContent.role = "alert";
      noticeContent.innerHTML = `Product added to the cart!`;
      noticeContainer.appendChild(noticeContent);

      // delay added to hide the notice after a few seconds
      setTimeout(() => {
        noticeContainer.innerHTML = "";
      }, 1000);
    }
  }
  totalItems++;
  checkoutTotalItems.innerHTML = totalItems;
}

// Exercise 2
function cleanCart() {
  cartList = [];
  cart = [];
  checkoutTotalItems.innerHTML = 0;
  totalPrice = 0;
  totalItems = 0;
  checkoutTable.innerHTML = "";
  checkoutTotalPrice.innerHTML = totalPrice;
}

// Exercise 3
// Calculate total price of the cart using the "cartList" array
function calculateTotal() {
  for (const item of cartList) {
    totalPrice += item.price;
  }
}

// Exercise 4
// Using the "cartlist" array that contains all the items in the shopping cart,
// generate the "cart" array that does not contain repeated items, instead each item of this
// array "cart" shows the quantity of product.

function generateCart() {
  cart = [];
  for (const product of cartList) {
    let itemFound = false;
    for (const item of cart) {
      if (product.id === item.id) {
        item.quantity++;
        itemFound = true;
        continue;
      }
    }

    if (!itemFound) {
      product.quantity = 1;
      cart.push(product);
    }
  }
  console.log(cart);
}

// Apply promotions to each item in the array "cart"

function applyPromotionsCart() {
  totalPrice = 0;
  for (const item of cart) {
    item.subTotal = calculateSubtotal(item);
    item.subtotalWithDiscount = applyPromotionToItem(item);
    totalPrice += item.subtotalWithDiscount;
  }
}

function calculateSubtotal(item) {
  return item.price * item.quantity;
}

function applyPromotionToItem(item) {
  let subtotalWithDiscount = item.subTotal;
  if (item.offer) {
    if (item.quantity >= item.offer.number) {
      const discountAmount = (item.subTotal * item.offer.percent) / 100;
      subtotalWithDiscount = item.subTotal - discountAmount;
    }
  }
  return subtotalWithDiscount;
}

// Exercise 5
// Fill the shopping cart modal manipulating the shopping cart dom
function printCart() {
  checkoutTable.innerHTML = "";
  for (item of cart) {
    addItemRow(item);
  }
  checkoutTotalPrice.innerHTML = totalPrice;
}

function addItemRow(item) {
  const row = checkoutTable.insertRow();
  const cellName = row.insertCell(0);
  const cellPrice = row.insertCell(1);
  const cellQuantity = row.insertCell(2);
  const cellSubtotal = row.insertCell(3);

  cellName.outerHTML = `<th>${item.name}</th>`;
  cellPrice.innerText = item.price;
  cellQuantity.innerText = item.quantity;
  cellSubtotal.innerText = item.subtotalWithDiscount;
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
  // Find the index of the item in the cart array based on the id
  const index = cartList.findIndex((item) => item.id === id);

  if (index !== -1) {
    cartList.splice(index, 1);
    totalItems--;
    console.log(`removed product ${products[id - 1].name} with ID ${id}`);
    checkoutTotalItems.innerHTML = totalItems;

    // Show notice for the corresponding product
    const noticeContainer = document.querySelector(`#notice-${id}`);
    const noticeContent = document.createElement("div");
    noticeContent.classList.add("alert", "alert-warning", "mt-2");
    noticeContent.role = "alert";
    noticeContent.innerHTML = `Product removed from the cart!`;
    noticeContainer.appendChild(noticeContent);

    // delay added to hide the notice after a few seconds
    setTimeout(() => {
      noticeContainer.innerHTML = "";
    }, 1000);
  }
}

function open_modal() {
  console.log("Open Modal");
  generateCart();
  applyPromotionsCart();
  printCart();
}
