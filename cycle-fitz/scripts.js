const navbar = document.getElementById("navbar");

const LScart = JSON.parse(localStorage.getItem('cart'))
const cart = LScart ? LScart : []

const cartListDiv = document.getElementById("cart-list");

const cartAdd = e => {
  cart.push(e.id);
  console.log(JSON.stringify(cart))
  localStorage.setItem('cart', JSON.stringify(cart))
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
  console.log(cart);
};

const loadCart = () => {
  cart.forEach(item => {
    cartItemDiv = document.createElement('div')
    cartItemDiv.setAttribute("class", "cart-item-div")
    cartItem = document.createElement("span");
    cartItem.setAttribute("class", "cart-item");
    removeButton = document.createElement("button");
    removeButton.setAttribute("onclick", "removeFromCart(this)");
    removeButton.innerHTML = `remove`;
    removeButton.setAttribute("class", "removeButton");
    cartItem.innerHTML = item;
    cartListDiv.appendChild(cartItemDiv);
    cartItemDiv.appendChild(cartItem)
    cartItemDiv.appendChild(removeButton);
  });
  updateCart();
};

const removeFromCart = e => {
  const cart = e.parentNode.parentNode;
  cart.removeChild(e.parentNode);
  console.log(e.parentNode)
};



