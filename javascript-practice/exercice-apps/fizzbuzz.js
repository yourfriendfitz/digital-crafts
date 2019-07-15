const fizzInput = document.getElementById("fizzbuzz");

const fizzbuzzTestButton = document.getElementById("fizzbuzzTest");
const fizzbuzzResultElement = document.getElementById("fizzbuzzResult");

let fizzbuzzTestResult;
let fizzbuzzToTest;

fizzInput.addEventListener("change", function(e) {
  if (isNaN(e.srcElement.value)) {
    return;
  } else {
    fizzbuzzToTest = e.srcElement.value;
  }
});

const fizzbuzz = (n) => {
    if(n % 15 == 0) {
        return "FizzBuzz"
    } else if (n % 3 == 0) {
        return "Fizz"
    } else if (n % 5 == 0) {
        return "Buzz"
    } else {
        return "Nothing is Fizzin or Buzzin Bud!"
    }
}

const showFizzbuzzResult = () => {
  fizzbuzzTestResult = fizzbuzz(fizzbuzzToTest)
  fizzbuzzResultElement.innerHTML = fizzbuzzTestResult;
};
