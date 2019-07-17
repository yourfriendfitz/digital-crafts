let daysArray = [];
const htmlCollectionToArray = (htmlCollection, arr) => {
  for (index = 0; index < htmlCollection.length; index++) {
    arr.push(htmlCollection[index]);
  }
};
const days = document.getElementsByClassName("day");
htmlCollectionToArray(days, daysArray);
daysArray.forEach(day => {
  day.setAttribute("fill", "#196127");
});
