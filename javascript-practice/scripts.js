const log = console.log;

const paragraphOne = document.getElementById("one");
const paragraphTwo = document.getElementById("two");
const paragraphThree = document.getElementById("three");

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const shortText = "Lorem ipsum dolor sit amet.";

const changeText = e => {
  paragraphId = e.parentNode.childNodes[1].id;
  paragraph = document.getElementById(paragraphId)
  if (paragraph.innerHTML === longText) {
    paragraph.innerHTML = shortText;
  } else {
    paragraph.innerHTML = longText;
  }
};

const insertText = element => {
    element.innerHTML = longText
}

paragraphOne.addEventListener("load", insertText(paragraphOne))
paragraphTwo.addEventListener("load", insertText(paragraphTwo))
paragraphThree.addEventListener("load", insertText(paragraphThree))
