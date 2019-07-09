const inputField = document.getElementById("input-text");

const inputDiv = document.getElementById("user-input");

const navbar = document.getElementById("navbar");

const cart = [];

const cartListDiv = document.getElementById("cart-list");

const cartAdd = e => {
  cart.push(e.id);
  updateCart();
};

const updateCart = () => {
  const cartQuantity = document.getElementById("cart-quantity");
  currentquanity = cart.length;
  quantity = document.createElement("span");
  quantity.innerHTML = `(${currentquanity})`;
  quantity.setAttribute("id", "itemsInCart");
  cartQuantity.childNodes.forEach(node => {
    if (node.id === "itemsInCart") {
      cartQuantity.removeChild(node);
    }
  });
  cartQuantity.appendChild(quantity);
};

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
