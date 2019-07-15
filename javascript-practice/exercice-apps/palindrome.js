
const palindromeInput = document.getElementById("palindrome");
const palindromeTestButton = document.getElementById("palindromeTest");
const palindromeResultElement = document.getElementById("palindromeResult");

let palindromeToTest;
let palindromeTestResult;

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
  palindromeTestResult = lowerRegexStr === reverseStr;
};

const showPalindromeTestResult = () => {
  testPalindrome(palindromeToTest);
  palindromeResultElement.innerHTML = palindromeTestResult;
};
