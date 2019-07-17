const changeSquares = () => {
  const [darkGrn, grn, lightGrn, yellowGrn, blank] = [
    "#196127",
    "#239a3b",
    "#7bc96f",
    "#c6e48b",
    "#ebedf0"
  ];
  const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const getSquareColor = (min, max) => {
    const colorNumber = randomBetween(min, max);
    if (colorNumber > 65) {
      return darkGrn;
    } else if (colorNumber > 50) {
      return grn;
    } else if (colorNumber > 40) {
      return lightGrn;
    } else if (colorNumber > 23) {
      return yellowGrn;
    } else {
      return blank;
    }
  };
  let daysArray = [];
  const htmlCollectionToArray = (htmlCollection, arr) => {
    for (index = 0; index < htmlCollection.length; index++) {
      arr.push(htmlCollection[index]);
    }
  };
  const days = document.getElementsByClassName("day");
  htmlCollectionToArray(days, daysArray);
  daysArray.forEach(day => {
    const min = 20;
    const max = 100;
    const squareColor = getSquareColor(min, max);
    day.setAttribute("fill", squareColor);
  });
};
changeSquares()
