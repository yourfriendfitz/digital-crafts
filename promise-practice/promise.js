const log = console.log;

// let promise = new Promise((resolve, reject) => {
//   let arr = [1, 2];
//   setTimeout(() => {
//     resolve(arr);
//   }, 5000);
// });

// promise
//   .then(arr => {
//     log(arr);
//     return arr;
//   })
//   .then(arr => {
//     setTimeout(() => {
//       log(`second then ${arr}`);
//     }, 2000);
//   })
//   .catch(err => {
//     log(err);
//   });

const bitcoin = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("BITCOIN");
  }, 500);
});

const ether = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ETHERIUM");
  }, 700);
});

const lite = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("LITECOIN");
  }, 1000);
});

Promise.all([bitcoin, ether, lite]).then(data => {
  log(data);
});
