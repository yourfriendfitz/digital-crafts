const log = console.log;

const [getItemsButton, addItemButton] = [
  document.getElementById("getItemsButton"),
  document.getElementById("addOrder")
];

const [itemInput, priceInput] = [
  document.getElementById("itemInput"),
  document.getElementById("priceInput")
];

const [hebRadio, krogerRadio, walmartRadio] = [
  document.getElementById("heb"),
  document.getElementById("kroger"),
  document.getElementById("walmart")
];

const [hebListElement, krogerListElement, walmartListElement] = [
  document.getElementById("hebList"),
  document.getElementById("krogerList"),
  document.getElementById("walmartList")
];

const groceryListElement = document.getElementById("groceryList");

const getStoreName = () => {
  if (hebRadio.checked) {
    return hebRadio.value;
  } else if (krogerRadio.checked) {
    return krogerRadio.value;
  } else if (walmartRadio.checked) {
    return walmartRadio.value;
  } else {
    return;
  }
};

const newItem = () => {
  return itemInput.value;
};

const newPrice = () => {
  return priceInput.value;
};

// firebase config is from firebase.js
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const addItemFirestore = (storeName, itemName, itemPrice) => {
  db.collection(storeName).add({
    item: itemName,
    price: itemPrice
  });
};

const deleteItemFirestore = (storeName, id) => {
  db.collection(storeName)
    .doc(id)
    .delete()
    .catch(function(error) {
      console.error("Error removing document: ", error);
    });
};

const getAllItemsFirestore = async () => {
  let firestoreArray = [];
  await db
    .collection("groceries")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        firestoreArray.push(doc);
      });
    });
};

const createItemElement = (storeName, itemName, itemPrice) => {
  return `
    <div class="item">
    <p>${itemName} - $${itemPrice}</p>
    <button onclick="deleteItemFirestore('${storeName}', '${itemName}', ${itemPrice})">Delete Item</button>
    </div>
    `;
};

const displayItems = firestoreArray => {
  firestoreArray.forEach(doc => {
    if (doc.storeName === "HEB") {
      doc.item.items.forEach(item => {
        if (item.item != null && item.price != null) {
          hebListElement.insertAdjacentHTML(
            "beforeend",
            createItemElement(doc.storeName, item.item, item.price)
          );
        }
      });
    }
    if (doc.storeName === "Kroger") {
      doc.item.items.forEach(item => {
        if (item.item != null && item.price != null) {
          krogerListElement.insertAdjacentHTML(
            "beforeend",
            createItemElement(doc.storeName, item.item, item.price)
          );
        }
      });
    }
    if (doc.storeName === "Walmart") {
      doc.item.items.forEach(item => {
        if (item.item != null && item.price != null) {
          walmartListElement.insertAdjacentHTML(
            "beforeend",
            createItemElement(doc.storeName, item.item, item.price)
          );
        }
      });
    }
  });
};

const clearLists = () => {
  hebListElement.innerHTML = "";
  krogerListElement.innerHTML = "";
  walmartListElement.innerHTML = "";
};

const clearInputs = () => {
  itemInput.value = "";
  priceInput.value = "";
};

db.collection("groceries").onSnapshot(async () => {
  clearLists();
  await displayItems(await getAllItemsFirestore());
});

addItemButton.addEventListener("click", async () => {
  addItemFirestore(getStoreName(), newItem(), newPrice());
  clearInputs();
});
