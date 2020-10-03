/*
The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
6.     312211
7.     13112221
8.     1113213211

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.
You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

Note: Each term of the sequence of integers will be represented as a string.


Example 1:
Input: 1
Output: "1"
Explanation: This is the base case.

Example 2:
Input: 4
Output: "1211"
Explanation: For n = 3 the term was "21" in which we have two groups "2" and "1", "2" can be read as "12" which means frequency = 1 and
value = 2, the same way "1" is read as "11", so the answer is the concatenation of "12" and "11" which is "1211".
*/

/*
  const produceNextNumber = (num) => {
    // Stringify number so you can loop through it
    let numStringified = JSON.stringify(num);
    let numberCount = 1;
    let currentStringifiedNumber = undefined;
    let nextStringifiedNumber = '';
    // Loop through string
    for (i = 0; i <= numStringified.length - 1; i++) {
      if (numStringified[i] === currentStringifiedNumber) {
        numberCount++;
      } else if (numStringified[i] !== currentStringifiedNumber) {
        if (i === 0) {
          currentStringifiedNumber = numStringified[0];
        } else {
          // When you encounter a new stringified number, store it, and keep going along string until you count all identical entries
          // Concatenate onto answer string the number of identical numbers, and the number in question
          nextStringifiedNumber = nextStringifiedNumber + JSON.stringify(numberCount) + currentStringifiedNumber;
          numberCount = 1;
          currentStringifiedNumber = numStringified[i];
        }
      };
    };
    nextStringifiedNumber = nextStringifiedNumber + JSON.stringify(numberCount) + currentStringifiedNumber;
    return JSON.parse(nextStringifiedNumber);
  };
*/

/**
 * @param {number} n
 * @return {string}
 */

var countAndSay = function(n) {
  let currentInteger = {
    counter: 1,
    val: 1,
  };

const countPlaces = (someNum) => {
  if (someNum === 0) {
    return 0;
  }
  let answer = 0;
  do {
    answer++;
  } while (someNum / Math.pow(10, answer) > 1);
  return answer;
};

  // Can't use stringify/parse method because javascript breaks above n = 9
  const produceNextNumber = (num) => {
    let placesCounter = 0;
    let storedDigit = undefined;
    let findCurrentDigit = (someNum, somePlace) => Math.floor(someNum % Math.pow(10, somePlace)/Math.pow(10, somePlace - 1));
    let currentDigit = undefined;
    let duplicateCounter = 0;
    let nextNumber = 0;
    do {
      placesCounter++; 
      currentDigit = findCurrentDigit(num, placesCounter);
      if (storedDigit === currentDigit) {
        duplicateCounter++;
      } else {
        // First time through
        if (placesCounter !== 1) {
          // Not first time but doesn't match up
          nextNumber = nextNumber + ((duplicateCounter + 1) * Math.pow(10, countPlaces(nextNumber) + 1)) + (storedDigit * Math.pow(10, countPlaces(nextNumber)));
          duplicateCounter = 0;
        };
        storedDigit = currentDigit;
      }
    } while (num/Math.pow(10, placesCounter) > 1)
    // Add final digits onto nextNumber after exiting do/while loop
    nextNumber = nextNumber + ((duplicateCounter + 1) * Math.pow(10, countPlaces(nextNumber) + 1)) + (storedDigit * Math.pow(10, countPlaces(nextNumber)));
    return nextNumber;
  };

  const computeNthTerm = (targetN) => {
    // Check if we've reached desired n
    if (currentInteger.counter === targetN) {
      // If yes, exit recursive function and return answer
      return;
    } else {
      // Else, recursively call on latest value
      currentInteger.counter++;
      currentInteger.val = produceNextNumber(currentInteger.val);
      computeNthTerm(targetN);
    }
  };

  computeNthTerm(n);
  return JSON.stringify(currentInteger.val);
};

console.log(countAndSay(8));
console.log(countAndSay(10))