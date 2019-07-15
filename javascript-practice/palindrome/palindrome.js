const log = console.log;

palindromeInput = document.getElementById("palindrome");
testButton = document.getElementById("test");
const resultElement = document.getElementById("result");

let palindromeToTest;
let testResult;

palindromeInput.addEventListener("change", function(e) {
  palindromeToTest = e.srcElement.value;
});

const testPalindrome = str => {
  const regex = /[^A-Za-z0-9]/g;
  let lowerRegexStr = str.toLowerCase().replace(regex, " ");
  let reverseStr = lowerRegexStr
    .split("")
    .reverse()
    .join("");
  testResult = lowerRegexStr === reverseStr;
};

const showPalindromeTestResult = () => {
  testPalindrome(palindromeToTest);
  resultElement.innerHTML = testResult;
};
