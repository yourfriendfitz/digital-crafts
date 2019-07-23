const log = console.log;

let coffeeInput = document.getElementById("orderInput");

let emailOrderInput = document.getElementById("orderEmailInput");

let newOrderButton = document.getElementById("addOrder");

let emailSearchInput = document.getElementById("emailQuery");

let emailSearchButton = document.getElementById("orderEmailSearchButton");

let getAllOrdersButton = document.getElementById("getOrdersButton");

let orderListElement = document.getElementById("orderList");

let allOrdersUrl = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/";

let newOrderUrl = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/";

let orderEmailDeleteUrl =
  "http://dc-coffeerun.herokuapp.com/api/coffeeorders/emailaddress";

let newCoffee;
let newEmail;
let newEmailQuery;

const asyncDisplayOrders = async url => {
  clearOrders();
  let response = await fetch(url);
  let json = await response.json();
  if ((await json) === null) {
    orderListElement.innerHTML = `<div><h4 id="noOrder">No Orders by ${newEmailQuery}</h4></div>`;
    return;
  }
  let orders = await Object.values(json);
  await orders.forEach(order => {
    let orderElement = createOrderElement(order);
    orderListElement.insertAdjacentHTML("afterbegin", orderElement);
  });
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
  asyncDisplayOrders(orderEmailQueryUrl);
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
