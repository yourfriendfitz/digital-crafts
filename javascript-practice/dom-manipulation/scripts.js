const log = console.log;

box1 = document.getElementById("box1");
box2 = document.getElementById("box2");
box3 = document.getElementById("box3");
clearButton = document.getElementById("clear");
restoreButton = document.getElementById("restore");

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

boxArray = [box1, box2, box3];

const clearBoxes = elementsArray => {
  elementsArray.forEach(element => {
    element.innerHTML = "";
  });
};

const restoreBoxes = elementsArray => {
  elementsArray.forEach(element => {
    element.innerHTML = lorem;
  });
};

const numbers = [1, 2, 3, 4, 5];

clearButton.addEventListener("click", () => clearBoxes(boxArray));
restoreButton.addEventListener("click", () => restoreBoxes(boxArray));
