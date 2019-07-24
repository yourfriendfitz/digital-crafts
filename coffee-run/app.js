const log = console.log;

const [coffeeInput, emailOrderInput, emailSearchInput] = [
  document.getElementById("orderInput"),
  document.getElementById("orderEmailInput"),
  document.getElementById("emailQuery")
];

const [newOrderButton, emailSearchButton, getAllOrdersButton] = [
  document.getElementById("addOrder"),
  document.getElementById("orderEmailSearchButton"),
  document.getElementById("getOrdersButton")
];

const orderListElement = document.getElementById("orderList");

const orderUrl = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/";

const asyncDisplayOrders = async url => {
  clearOrders();
  const response = await fetch(url);
  const json = await response.json();
  const orders = Object.values(json);
  insertOrders(orders);
};

const insertOrders = orders => {
  orders.forEach(order => {
    const orderElement = createOrderElement(order);
    orderListElement.insertAdjacentHTML("afterbegin", orderElement);
  });
};

const insertOrder = order => {
  const orderElement = createOrderElement(order);
  orderListElement.insertAdjacentHTML("afterbegin", orderElement);
};

const asyncDisplayOrder = async (url, email) => {
  clearOrders();
  const response = await fetch(url);
  const order = await response.json();
  if ((await order) === null) {
    orderListElement.innerHTML = `
    <div>
    <h4 id="noOrder">No Orders by ${email}</h4>
    </div>
    `;
    return;
  }
  insertOrder(order);
};

const createOrderElement = object => {
  return `
  <div id="${object.emailAddress}" class="order">
  <h4>Email: ${object.emailAddress}</h4>
  <p>Order: ${object.coffee}</p>
  <button onclick="asyncDeleteOrderByEmail('${
    object.emailAddress
  }')">Delete Order</button>
  </div>
  `;
};

const clearOrders = () => {
  orderListElement.innerHTML = "";
};

const makeNewOrder = (url, coffee, email) => {
  if ((coffee() === "") | (email() === "")) {
    return;
  }
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      emailAddress: email(),
      coffee: coffee()
    })
  });
};

const getOrderByEmail = email => {
  clearOrders();
  let orderEmailQueryUrl = `http://dc-coffeerun.herokuapp.com/api/coffeeorders/${email}`;
  asyncDisplayOrder(orderEmailQueryUrl, email);
};

const asyncDeleteOrderByEmail = async email => {
  const orderEmailDeleteUrl = `http://dc-coffeerun.herokuapp.com/api/coffeeorders/${email}`;
  await fetch(orderEmailDeleteUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
  asyncDisplayOrders(orderUrl);
};

const newCoffee = () => {
  return coffeeInput.value;
};

const newEmail = () => {
  return emailOrderInput.value;
};

const newEmailQuery = () => {
  return emailSearchInput.value;
};

const clearInputs = () => {
  coffeeInput.value = "";
  emailOrderInput.value = "";
  emailSearchInput.value = "";
};

getAllOrdersButton.addEventListener("click", () => {
  asyncDisplayOrders(orderUrl);
});

newOrderButton.addEventListener("click", async () => {
  await makeNewOrder(orderUrl, newCoffee, newEmail);
  await asyncDisplayOrders(orderUrl);
  clearInputs();
});

emailSearchButton.addEventListener("click", () => {
  getOrderByEmail(newEmailQuery());
  clearInputs();
});
