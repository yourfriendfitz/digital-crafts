const arrayLargestMaker = document.getElementById("largestArray");
const arrayToCheckLargest = document.getElementById("arrayToCheckLargest");

const largestTestButton = document.getElementById("largestTest");
const largestResultElement = document.getElementById("largestResult");

let largestArray = [];
let largestTestResult;

arrayLargestMaker.addEventListener("keypress", function(e) {
  if (e.keyCode === 13) {
    if (isNaN(e.srcElement.value)) {
      return;
    } else {
      largestArray.push(e.srcElement.value);
      arrayToCheckLargest.innerHTML = largestArray;
    }
  }
});

const showLargestResult = () => {
  largestTestResult = largestArray.reduce(function(a, b) {
    return Math.max(a, b);
  });
  largestResultElement.innerHTML = largestTestResult;
};
