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

const getHEBItemsFirestore = async () => {
  return {
    HEB: await getHEBDocs()
  };
};

const getKrogerItemsFirestore = async () => {
  return {
    Kroger: await getKrogerDocs()
  };
};

const getWalmartItemsFirestore = async () => {
  return {
    Walmart: await getWalmartDocs()
  };
};

const createItemElement = (id, storeName, itemName, itemPrice) => {
  return `
    <div class="item">
    <p>${itemName} - $${itemPrice}</p>
    <button onclick="deleteItemFirestore('${storeName}', '${id}')">Delete Item</button>
    </div>
    `;
};

const displayHEBItems = object => {
  object.HEB.forEach(doc => {
    hebListElement.insertAdjacentHTML(
      "afterbegin",
      createItemElement(doc.id, "HEB", doc.data.item, doc.data.price)
    );
  });
};

const displayKrogerItems = object => {
  object.Kroger.forEach(doc => {
    krogerListElement.insertAdjacentHTML(
      "afterbegin",
      createItemElement(doc.id, "Kroger", doc.data.item, doc.data.price)
    );
  });
};

const displayWalmartItems = object => {
  object.Walmart.forEach(doc => {
    walmartListElement.insertAdjacentHTML(
      "afterbegin",
      createItemElement(doc.id, "Walmart", doc.data.item, doc.data.price)
    );
  });
};

const clearHEBList = () => {
  hebListElement.innerHTML = "";
};

const clearKrogerList = () => {
  krogerListElement.innerHTML = "";
};

const clearWalmartList = () => {
  walmartListElement.innerHTML = "";
};

const clearInputs = () => {
  itemInput.value = "";
  priceInput.value = "";
};

// firebase is down, retry signIn when working properly
const signIn = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  firebase
    .auth()
    .getRedirectResult()
    .then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      return result.user;
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};

db.collection("HEB").onSnapshot(async () => {
  clearHEBList();
  await displayHEBItems(await getHEBItemsFirestore());
});

db.collection("Kroger").onSnapshot(async () => {
  clearKrogerList();
  await displayKrogerItems(await getKrogerItemsFirestore());
});

db.collection("Walmart").onSnapshot(async () => {
  clearWalmartList();
  await displayWalmartItems(await getWalmartItemsFirestore());
});

addItemButton.addEventListener("click", async () => {
  addItemFirestore(getStoreName(), newItem(), newPrice());
  clearInputs();
});
