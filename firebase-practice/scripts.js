const log = console.log;

// firebase config is from firebase.js
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// db.collection("groceries")
//   .add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   })
//   .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//     console.error("Error adding document: ", error);
//   });

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
