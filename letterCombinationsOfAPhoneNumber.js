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
  const addMoreLetters = (arrPreviousLetters) => {
    let newLayerLetters = [];

    // First iteration
    if (arrPreviousLetters.length === 0) {
      newLayerLetters = [...letterBank[digits[0]]];
    } else {      
      // Take previous array, add all possibile letters of the next digit to each item
      for (i = 0; i < arrPreviousLetters.length; i++) {
        for (j = 0; j < letterBank[digits[currentDigit]].length; j++) {
          newLayerLetters.push(arrPreviousLetters[i] + letterBank[digits[currentDigit]][j]);
        }
      }
    }
    
    currentDigit++;
    // Store in new array
    if (currentDigit < digits.length) {
      addMoreLetters(newLayerLetters);
    } else {
      // Recurse until the length of each array contents equals digits.length
      answer = [...answer, ...newLayerLetters];
    }
  }

  // Do first letter, store in array, and run recrusive helper on it
  
};