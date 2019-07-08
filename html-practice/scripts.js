const inputField = document.getElementById("input-text");
const inputDiv = document.getElementById("user-input");
const cart = [];
const cartListDiv = document.getElementById("cart-list");
const cartAdd = e => {
  cartItem = document.createElement("ul");
  cartItem.innerHTML = `- ${e.id} -`;
  cartListDiv.appendChild(cartItem);
};
inputField.addEventListener("keypress", function(e) {
  const key = e.which || e.keyCode;
  if (key === 13) {
    const date = new Date();
    newItem = document.createElement("p");
    newItem.innerHTML = `${e.srcElement.value} visited on ${
      date.toLocaleDateString()
    } at ${date.toLocaleTimeString()}`;
    inputDiv.appendChild(newItem);
  }
});
