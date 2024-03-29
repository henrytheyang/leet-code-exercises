/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const letterBank = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }
  let answer = [];
  if (digits.length === 0) {
    return answer;
  }

  let currentDigit = 0;

  // Recrusive function until we reach digits.length
  const convertToLetters = (previousLevelLetters) => {
    let currentLevelLetters = [];

    // Do first letter, store in array, and run recrusive helper on it
    if (previousLevelLetters.length === 0) {
      currentLevelLetters = [...letterBank[digits[currentDigit]]];
    } else {      
      // Take previous array, add all possibile letters of the next digit to each item
      for (i = 0; i < previousLevelLetters.length; i++) {
        for (j = 0; j < letterBank[digits[currentDigit]].length; j++) {
          // Store in new array
          currentLevelLetters.push(previousLevelLetters[i] + letterBank[digits[currentDigit]][j]);
        }
      }
    }

    currentDigit++;

    // Recurse until the length of each array contents equals digits.length
    if (currentDigit < digits.length) {
      convertToLetters(currentLevelLetters);
    } else {
      answer = [...answer, ...currentLevelLetters];
    }
  }

  convertToLetters([]);
  return answer; 
};