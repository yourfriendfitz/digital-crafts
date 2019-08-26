let num = 234;

const intToDigitsArray = num => {
  var digits = [];
  while (num > 0) {
    digits.push(num % 10);
    num = parseInt(num / 10);
  }
  digits.reverse();
  return digits;
};

intToDigitsArray(num);
