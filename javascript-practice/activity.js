const range = (size, startAt = 0) => {
  return [...Array(size).keys()].map(i => i + startAt);
};

const betweenRange = (a, b) => {
  range50to80 = range(80, 50);
  if (range50to80.includes(a + b)) {
    return 65;
  } else {
    return 80;
  }
};
