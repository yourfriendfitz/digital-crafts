const log = console.log;

const [getItemsButton, addItemButton] = [
  document.getElementById("getItemsButton"),
  document.getElementById("addOrder")
];

const [itemInput, priceInput] = [
  document.getElementById("itemInput"),
  document.getElementById("priceInput")
];

const newItem = () => {
  return itemInput.value;
};

const newPrice = () => {
  return priceInput.value;
};

// firebase config is from firebase.js
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.collection("groceries")
  .doc("HEB")
  .set({
    items: [
      { item: "eggs", price: 2.0 },
      { item: "milk", price: 1.5 },
      { item: "bread", price: 0.5 }
    ]
  })
  .then(function(docRef) {
    console.log("Document written");
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });
