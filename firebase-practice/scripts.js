const log = console.log;

const firebaseConfig = {
  apiKey: "AIzaSyCZq-6vpmc4Vl5d2aUJDFjHrBUWHKM0iz0",
  authDomain: "fitz-grocery.firebaseapp.com",
  databaseURL: "https://fitz-grocery.firebaseio.com",
  projectId: "fitz-grocery",
  storageBucket: "fitz-grocery.appspot.com",
  messagingSenderId: "10762804784",
  appId: "1:10762804784:web:0e060d1ed05db970"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.collection("groceries")
  .add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
