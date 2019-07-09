const navbar = document.getElementById("navbar");

const LScart = JSON.parse(localStorage.getItem("cart"));
const cart = LScart ? LScart : [];

const cartListDiv = document.getElementById("cart-list");

const cartAdd = e => {
  cart.push(e.id);
  localStorage.setItem("cart", JSON.stringify(cart));
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

const loadCart = () => {
  cart.forEach(item => {
    cartItemDiv = document.createElement("div");
    cartItemDiv.setAttribute("class", "cart-item-div");
    cartItem = document.createElement("span");
    cartItem.setAttribute("class", "cart-item");
    removeButton = document.createElement("button");
    removeButton.setAttribute("onclick", "removeFromCart(this)");
    removeButton.innerHTML = `remove`;
    removeButton.setAttribute("class", "removeButton");
    cartItem.innerHTML = item;
    cartListDiv.appendChild(cartItemDiv);
    cartItemDiv.appendChild(cartItem);
    cartItemDiv.appendChild(removeButton);
  });
  updateCart();
};

const removeFromCart = e => {
  const cartElement = e.parentNode.parentNode;
  cartElement.removeChild(e.parentNode);
  itemToRem = e.parentNode.childNodes[0].innerHTML;
  console.log(itemToRem);
  let searching = true;
  cart.forEach((item, index) => {
    while (searching) {
      if (itemToRem === item) {
        const removeItem = cart.splice(index, 1);
        searching = false;
      }
    }
  });
  localStorage.setItem('cart', JSON.stringify(cart))
  updateCart()
};
