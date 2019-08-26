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

const arr = [1, 2, 2, 3, 3, 4];
let duplicates = 0;
arr.reduce((a, b) => {
  if (a === b) {
    duplicates++;
  } else {
    return;
  }
});
