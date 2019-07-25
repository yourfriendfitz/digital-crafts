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

const getHEBDocs = async () => {
  const snapshot = await firebase
    .firestore()
    .collection("HEB")
    .get();
  return snapshot.docs.map(doc => {
    return new Object({
      data: doc.data(),
      id: doc.id
    });
  });
};

const getKrogerDocs = async () => {
  const snapshot = await firebase
    .firestore()
    .collection("Kroger")
    .get();
  return snapshot.docs.map(doc => {
    return new Object({
      data: doc.data(),
      id: doc.id
    });
  });
};

const getWalmartDocs = async () => {
  const snapshot = await firebase
    .firestore()
    .collection("Walmart")
    .get();
  return snapshot.docs.map(doc => {
    return new Object({
      data: doc.data(),
      id: doc.id
    });
  });
};

const getAllItemsFirestore = async () => {
  return {
    HEB: await getHEBDocs(),
    Kroger: await getKrogerDocs(),
    Walmart: await getWalmartDocs()
  };
};

const createItemElement = (id, storeName, itemName, itemPrice) => {
  return `
    <div class="item">
    <p>${itemName} - $${itemPrice}</p>
    <button onclick="deleteItemFirestore(${storeName}, ${id})">Delete Item</button>
    </div>
    `;
};

// a.forEach(b => b.forEach(c => log(c.name, c.price)));
// db.collection("HEB")
//   .get()
//   .then(heb => heb.docs.forEach(doc => log(doc.id)));

const displayItems = object => {
  object.HEB.forEach(doc => {
    doc.map(doc =>
      hebListElement.insertAdjacentHTML(
        "beforebegin",
        createItemElement(doc.id, "HEB", doc.data.item, doc.data.price)
      )
    );
  });
  object.Kroger.forEach(doc => {
    doc.map(doc =>
      krogerListElement.insertAdjacentHTML(
        "beforebegin",
        createItemElement(doc.id, "HEB", doc.data.item, doc.data.price)
      )
    );
  });
  object.Walmart.forEach(doc => {
    doc.map(doc =>
      walmartListElement.insertAdjacentHTML(
        "beforebegin",
        createItemElement(doc.id, "HEB", doc.data.item, doc.data.price)
      )
    );
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

// db.collection("groceries").onSnapshot(async () => {
//   clearLists();
//   await displayItems(await getAllItemsFirestore());
// });

addItemButton.addEventListener("click", async () => {
  addItemFirestore(getStoreName(), newItem(), newPrice());
  clearInputs();
});
