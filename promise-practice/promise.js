const log = console.log;

let promise = new Promise((resolve, reject) => {
  let arr = [1, 2];
  setTimeout(() => {
    resolve(arr);
  }, 5000);
});

promise
  .then(arr => {
    log(arr);
    return arr;
  })
  .then(arr => {
    setTimeout(() => {
      log(`second then ${arr}`);
    }, 2000);
  });
