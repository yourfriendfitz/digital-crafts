const log = console.log;

const paragraphOne = document.getElementById("one");
const paragraphTwo = document.getElementById("two");
const paragraphThree = document.getElementById("three");

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const shortText = "Lorem ipsum dolor sit amet.";

const changeText = e => {
  paragraphId = e.parentNode.childNodes[1].id;
  if (paragraphId === "one") {
    if (paragraphOne.innerHTML === longText) {
      paragraphOne.innerHTML = shortText;
    } else {
      paragraphOne.innerHTML = longText;
    }
  }
};
