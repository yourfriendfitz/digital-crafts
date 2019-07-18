const log = console.log

const htmlCollectionToArray = (htmlCollection, arr) => {
    for (index = 0; index < htmlCollection.length; index++) {
      arr.push(htmlCollection[index]);
    }
  };

const sayHello = () => {
  log("hello")
}

window.setTimeout(sayHello, 5000)
window.setInterval(sayHello, 5000)