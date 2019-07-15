const nonUniqueInput = document.getElementById("nonUnique");
const nonUniqueTestButton = document.getElementById("nonUniqueTest");
const nonUniqueResultElement = document.getElementById("nonUniqueResult");

let arrayToTest;
let nonUniqueTestResult;
let nonUniques;

nonUniqueInput.addEventListener("change", function(e) {
  regex = /\s/g;
  arrayToTest = e.srcElement.value;
  trimmedArray = arrayToTest.replace(regex, "");
  splitArrayToTest = [...trimmedArray];
  setArray = new Set(splitArrayToTest);
  nonUniques = JSON.stringify([...setArray].join(""));
});

const showNonUniqueResult = () => {
    nonUniqueResultElement.innerHTML = nonUniques
}
