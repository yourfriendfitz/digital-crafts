const arraySortMaker = document.getElementById("sortArray");
const arrayToSort = document.getElementById("arrayToSort");

const sortTestButton = document.getElementById("sortTest");
const sortResultElement = document.getElementById("sortResult");

let sortArray = [];
let sortTestResult;

arraySortMaker.addEventListener("keypress", function(e) {
  if (e.keyCode === 13) {
    if (isNaN(e.srcElement.value)) {
      return;
    } else {
      sortArray.push(e.srcElement.value);
      arrayToSort.innerHTML = sortArray;
    }
  }
});

const showSortResult = () => {
  sortTestResult = sortArray.sort(function(a, b) {
    return a - b;
  });
  sortResultElement.innerHTML = sortTestResult;
};
