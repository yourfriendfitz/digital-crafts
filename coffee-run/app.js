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

let newCoffee;
let newEmail;
let newEmailQuery;

const asyncDisplayOrders = async (url) => {
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

const asyncDisplayOrder = async (url) => {
  clearOrders();
  let response = await fetch(url);
  let order = await response.json();
  if ((await json) === null) {
    orderListElement.innerHTML = `<div><h4 id="noOrder">No Orders by ${newEmailQuery}</h4></div>`;
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

const hide = elementId => {
  const element = document.getElementById(elementId);
  element.style.display = "none";
};

const asyncMakeNewOrder = async (url, coffee, email) => {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      emailAddress: email,
      coffee: coffee
    })
  });
};

const asyncGetOrderByEmail = async email => {
  clearOrders();
  let orderEmailQueryUrl = `http://dc-coffeerun.herokuapp.com/api/coffeeorders/${email}`;
  asyncDisplayOrder(orderEmailQueryUrl);
};

const asyncDeleteOrderByEmail = async email => {
  let orderEmailDeleteUrl = `http://dc-coffeerun.herokuapp.com/api/coffeeorders/${email}`;
  let orderDelete = await fetch(orderEmailDeleteUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
  await asyncDisplayOrders(allOrdersUrl);
};

const update = eventObj => {
  if (eventObj.srcElement.id === "orderInput") {
    newCoffee = coffeeInput.value;
  } else if (eventObj.srcElement.id === "orderEmailInput") {
    newEmail = emailOrderInput.value;
  } else if (eventObj.srcElement.id === "emailQuery") {
    newEmailQuery = emailSearchInput.value;
  } else {
    return;
  }
};

const clearInputs = () => {
  coffeeInput.value = "";
  emailOrderInput.value = "";
  emailSearchInput.value = "";
};

getAllOrdersButton.addEventListener("click", () => {
  asyncDisplayOrders(allOrdersUrl);
});

coffeeInput.addEventListener("change", e => {
  update(e);
});

emailOrderInput.addEventListener("change", e => {
  update(e);
});

emailSearchInput.addEventListener("change", e => {
  update(e);
});

newOrderButton.addEventListener("click", () => {
  clearInputs();
  asyncMakeNewOrder(newOrderUrl, newCoffee, newEmail).then(() => {
    asyncDisplayOrders(allOrdersUrl);
  });
});

emailSearchButton.addEventListener("click", () => {
  clearInputs();
  asyncGetOrderByEmail(newEmailQuery);
});
