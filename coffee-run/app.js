const log = console.log;

const coffeeInput = document.getElementById("orderInput");

const emailOrderInput = document.getElementById("orderEmailInput");

const newOrderButton = document.getElementById("addOrder");

const emailSearchInput = document.getElementById("emailQuery");

const emailSearchButton = document.getElementById("orderEmailSearchButton");

const getAllOrdersButton = document.getElementById("getOrdersButton");

const orderListElement = document.getElementById("orderList");

const allOrdersUrl = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/";

const newOrderUrl = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/";

const orderEmailDeleteUrl =
  "http://dc-coffeerun.herokuapp.com/api/coffeeorders/emailaddress";

const asyncDisplayOrders = async url => {
  clearOrders();
  let response = await fetch(url);
  let json = await response.json();
  let orders = Object.values(json);
  insertOrders(orders);
};

const insertOrders = orders => {
  orders.forEach(order => {
    let orderElement = createOrderElement(order);
    orderListElement.insertAdjacentHTML("afterbegin", orderElement);
  });
};

const insertOrder = order => {
  let orderElement = createOrderElement(json);
  orderListElement.insertAdjacentHTML("afterbegin", orderElement);
};

const asyncDisplayOrder = async url => {
  clearOrders();
  let response = await fetch(url);
  let order = await response.json();
  if ((await json) === null) {
    orderListElement.innerHTML = `
    <div>
    <h4 id="noOrder">No Orders by ${newEmailQuery}</h4>
    </div>
    `;
    return;
  } else {
    insertOrder(order);
  }
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

const asyncMakeNewOrder = async (url, coffee, email) => {
  await fetch(url, {
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

const asyncGetOrderByEmail = async email => {
  clearOrders();
  let orderEmailQueryUrl = `http://dc-coffeerun.herokuapp.com/api/coffeeorders/${email}`;
  asyncDisplayOrder(orderEmailQueryUrl);
};

const asyncDeleteOrderByEmail = async email => {
  const orderEmailDeleteUrl = `http://dc-coffeerun.herokuapp.com/api/coffeeorders/${email}`;
  await fetch(orderEmailDeleteUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
  await asyncDisplayOrders(allOrdersUrl);
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
  asyncDisplayOrders(allOrdersUrl);
});

newOrderButton.addEventListener("click", () => {
  clearInputs();
  asyncMakeNewOrder(newOrderUrl, newCoffee(), newEmail()).then(() => {
    asyncDisplayOrders(allOrdersUrl);
  });
});

emailSearchButton.addEventListener("click", () => {
  clearInputs();
  asyncGetOrderByEmail(newEmailQuery());
});
