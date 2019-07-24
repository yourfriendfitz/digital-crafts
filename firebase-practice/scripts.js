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

const createItemElement = (name, price) => {
  return `
    <div class="item">
    <p>${name} - $${price}</p>
    </div>
    `;
};

const displayItems = firestoreArray => {
  firestoreArray.forEach(doc => {
    if (doc.storeName === "HEB") {
      doc.item.items.forEach(item => {
        const newItem = createItemElement(item.item, item.price);
        hebListElement.insertAdjacentHTML("afterbegin", newItem);
      });
    }
    if (doc.storeName === "Kroger") {
      doc.item.items.forEach(item => {
        const newItem = createItemElement(item.item, item.price);
        krogerListElement.insertAdjacentHTML("afterbegin", newItem);
      });
    }
    if (doc.storeName === "Walmart") {
      doc.item.items.forEach(item => {
        const newItem = createItemElement(item.item, item.price);
        walmartListElement.insertAdjacentHTML("afterbegin", newItem);
      });
    }
  });
};

getItemsButton.addEventListener("click", async () => {
  groceryListElement.innerHTML = "";
  await displayItems(await getAllItemsFirestore());
});
