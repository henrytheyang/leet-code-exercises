// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

var romanToInt = function(s) {
  var runningTotal = 0;
  const conversionFactor = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let currentIndex = 0;
  while (currentIndex < s.length - 1) {
//     debugger
    let currentLetter = s[currentIndex];
    let nextLetter = s[currentIndex + 1];
    if (conversionFactor[currentLetter] >= conversionFactor[nextLetter]) {
      runningTotal += conversionFactor[currentLetter];
    } else {
      runningTotal -= conversionFactor[currentLetter];
    }
    currentIndex += 1;
  }
  runningTotal += conversionFactor[s[s.length - 1]];
  return runningTotal;
};