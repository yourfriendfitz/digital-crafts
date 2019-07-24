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
  const groceryStore = db.collection("groceries").doc(storeName);
  groceryStore.update({
    items: firebase.firestore.FieldValue.arrayUnion({
      item: itemName,
      price: itemPrice
    })
  });
};

const deleteItemFirestore = (storeName, itemName, itemPrice) => {
  const groceryStore = db.collection("groceries").doc(storeName);
  groceryStore.update({
    items: firebase.firestore.FieldValue.arrayRemove({
      item: itemName,
      price: itemPrice
    })
  });
};

const getAllItemsFirestore = async () => {
  let firestoreArray = [];
  await db
    .collection("groceries")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        firestoreArray.push({ storeName: doc.id, item: doc.data() });
      });
    });
  return firestoreArray;
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
