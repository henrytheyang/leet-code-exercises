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
  answer = parseInt(answer);
  if (answer < -Math.pow(2, 31) || answer > Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return answer;      
  }
};


// reverse(120);