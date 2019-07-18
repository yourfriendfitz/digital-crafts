// import { resolve } from "path";
// import { rejects } from "assert";

const log = console.log;

const paragraphs = document.getElementsByTagName("p");

const paragraphsArray = [];

const htmlCollectionToArray = (htmlCollection, arr) => {
  for (index = 0; index < htmlCollection.length; index++) {
    arr.push(htmlCollection[index]);
  }
};

htmlCollectionToArray(paragraphs, paragraphsArray);

// const addImg = () => {
//   paragraphsArray.forEach(paragraph => {
//     paragraph.innerHTML += `<img class="image" src="https://i.imgur.com/uXah5QE.jpg">`;
//   });
// };

// // window.setTimeout(sayHello, 5000)
// // window.setInterval(addImg, 10)

// const mkCard = () => {
//   log("card made");
// };
// const firstCallback = callback => {
//   debugger;
//   secondCallback(callback);
// };
// const secondCallback = callback => {
//   callback();
// };

// const add = callback => {
//   callback();
// };
// add(() => {
//   log("callback function called");
// });

const fetchPhotos = new Promise((resolve, reject) => {
  let photos = [];
  setTimeout(() => {
    photos = ["photo1", "photo2"];
  }, 2000);
  if (photos.length === 2) {
    resolve(() => {
      return photos;
    });
  } else {
    reject(Error("photos not loaded"));
  }
});
