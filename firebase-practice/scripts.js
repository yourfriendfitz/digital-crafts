const log = console.log;

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
