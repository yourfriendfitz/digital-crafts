const arraySmallestMaker = document.getElementById("smallestArray");
const arrayToCheckSmallest = document.getElementById("arrayToCheckSmallest");

const smallestTestButton = document.getElementById("smallestTest");
const smallestResultElement = document.getElementById("smallestResult");

let smallestArray = [];
let smallestTestResult;

arraySmallestMaker.addEventListener("keypress", function(e) {
  if (e.keyCode === 13) {
    if (isNaN(e.srcElement.value)) {
      return;
    } else {
      smallestArray.push(e.srcElement.value);
      arrayToCheckSmallest.innerHTML = smallestArray;
    }
  }
});

const showSmallestResult = () => {
  smallestTestResult = smallestArray.reduce(function(a, b) {
    return Math.min(a, b);
  });
  smallestResultElement.innerHTML = smallestTestResult;
};
