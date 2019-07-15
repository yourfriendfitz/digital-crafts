const log = console.log;

const buttonOne = document.getElementById("one");
const buttonTwo = document.getElementById("two");
const buttonThree = document.getElementById("three");

const changeText = e => {
    console.log(e)
}

buttonOne.addEventListener("click", changeText(e))
