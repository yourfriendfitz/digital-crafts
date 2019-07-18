const log = console.log

const htmlCollectionToArray = (htmlCollection, arr) => {
    for (index = 0; index < htmlCollection.length; index++) {
      arr.push(htmlCollection[index]);
    }
  };