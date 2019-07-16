const log = console.log;

box1 = document.getElementById("box1");
box2 = document.getElementById("box2");
box3 = document.getElementById("box3");
clearButton = document.getElementById("clear");

boxArray = [box1, box2, box3];

const clearBoxes = elementsArray => {
  elementsArray.forEach(element => {
    element.innerHTML = "";
  });
};

const numbers = [1, 2, 3, 4, 5];

clearButton.addEventListener("click", () => clearBoxes(boxArray));
