var reverse = function(x) {
  let answer = '';
  let trailingZeroFlag = true;
  let checkForTrailingZero = (someChar) => {
    if (someChar !== '0') {
      trailingZeroFlag = false;
    }
  }
  if (x < 0) {
    answer = '-';
  }
  let inputToString = x.toString();
  for (var i = inputToString.length - 1; i >= 0; i--) {
    if (trailingZeroFlag) {
      checkForTrailingZero();
    }
    if (inputToString[i] !== '-' && !trailingZeroFlag) {
      answer += inputToString[i];
    }
  }
  return parseInt(answer);
};


// reverse(120);