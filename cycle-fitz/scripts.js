
const EventEmitter = require("events");

const inputField = document.getElementById("input-text");

const inputDiv = document.getElementById("user-input");

const cart = [];

const cartListDiv = document.getElementById("cart-list");

const emitter = new events.EventEmitter();

const cartAdd = e => {
  // cartItem = document.createElement("span");
  // cartItem.setAttribute("class", "cart-item");
  // removeButton = document.createElement("button");
  // removeButton.setAttribute("onclick", "removeFromCart(this)");
  // removeButton.innerHTML = `remove`;
  // removeButton.setAttribute("class", "removeButton");
  // cartItem.innerHTML = `${e.id}`;
  // cartListDiv.appendChild(cartItem);
  // cartItem.appendChild(removeButton);
  cart.push(e.id);
  emitter.emit("addCart");
};

const updateCart = () => {
  const cartQuantity = document.getElementById("cart-quantity");
  currentquanity = cart.length;
  quantity = document.createElement("span");
  quantity.innerHTML = currentquanity;
  cartQuantity.appendChild(quantity);
};

document.addEventListener("addCart", updateCart());

const removeFromCart = e => {
  const cart = e.parentNode.parentNode;
  cart.removeChild(e.parentNode);
};

inputField.addEventListener("keypress", function(e) {
  const key = e.which || e.keyCode;
  if (key === 13) {
    const date = new Date();
    newItem = document.createElement("p");
    newItem.innerHTML = `${
      e.srcElement.value
    } visited on ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
    inputDiv.appendChild(newItem);
  }
});

redBike = document.getElementById("red bike");
blueBike = document.getElementById("blue bike");
// redBike.style.width = getComputedStyle(blueBike).width;
