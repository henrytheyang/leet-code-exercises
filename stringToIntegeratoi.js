// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned.

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let INT_MAX = Math.pow(2, 31) - 1;
  let INT_MIN = -Math.pow(2, 31);
  let answer = 0;
  let indexFirstInteger = 0;
  let integers = {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    '-': true,
  };
  let isFirstNonWhitespaceAnInteger = (input) => {
    for (var i = 0; i < input.length; i++) {
      if (input[i] !== ' ') {
        if (integers[input[i]]) {
          indexFirstInteger = i;
          return true;
        } else {
          return false;
        }
      }
    }
  };
  if (!isFirstNonWhitespaceAnInteger(str)) {
    return answer;
  } else {
    for (var i = 0; i < str.length; i++) {

    }
  }
};