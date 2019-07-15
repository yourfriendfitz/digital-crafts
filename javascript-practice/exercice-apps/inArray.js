const arrayMaker = document.getElementById("addToArray");
const arrayToCheckAgainst = document.getElementById("arrayToCheckAgainst");

const inArrayInput = document.getElementById("inArray");
const inArrayTestButton = document.getElementById("inArrayTest");
const inArrayResultElement = document.getElementById("inArrayResult");

let mainArray = [];
let inArrayTestResult;

arrayMaker.addEventListener("keypress", function(e) {
  if (e.keyCode === 13) {
    mainArray.push(e.srcElement.value);
    arrayToCheckAgainst.innerHTML = mainArray;
  }
});

inArrayInput.addEventListener("change", function(e) {
  testItem = e.srcElement.value;
  testArray = JSON.stringify(mainArray);
  inArrayTestResult = testArray.includes(testItem);
});

const showInArrayResult = () => {
  inArrayResultElement.innerHTML = inArrayTestResult;
};
