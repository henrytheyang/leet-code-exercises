/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

 

Example 1:

Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.
Example 2:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 3:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= num <= 3999
*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  // Divide by orders of ten, starting from 1000 and going down
  // Use Math.floor of each division to find numbers for each place
  // Mod after division is for the next few places
  let answer = '';
  let currentInt = 0;
  let checkingPlace = 3;

  while (checkingPlace >= 0) {
    currentInt = Math.floor(num / Math.pow(10, checkingPlace))
    if (currentInt < 1) {
      checkingPlace --;
      continue;
    }

    if (currentInt <= 3) {
      if (checkingPlace === 3) answer = answer.padEnd(answer.length + currentInt, 'M');
      else if (checkingPlace === 2) answer = answer.padEnd(answer.length + currentInt, 'C');
      else if (checkingPlace === 1) answer = answer.padEnd(answer.length + currentInt, 'X');
      else if (checkingPlace === 0) answer = answer.padEnd(answer.length + currentInt, 'I');
    }
    else if (currentInt === 4) {
      if (checkingPlace === 2) answer = answer + 'CD';
      else if (checkingPlace === 1) answer = answer + 'XL';
      else if (checkingPlace === 0) answer = answer + 'IV';
    }
    else if (currentInt >= 5 && currentInt < 9) {
      if (checkingPlace === 2) {
        answer = answer + 'D';
        answer = answer.padEnd(answer.length + currentInt - 5, 'C')
      }
      else if (checkingPlace === 1) {
        answer = answer + 'L';
        answer = answer.padEnd(answer.length + currentInt - 5, 'X')
      }
      else if (checkingPlace === 0) {
        answer = answer + 'V';
        answer = answer.padEnd(answer.length + currentInt - 5, 'I')
      }
    }
    else if (currentInt === 9){
      if (checkingPlace === 2) answer = answer + 'CM';
      else if (checkingPlace === 1) answer = answer + 'XC';
      else if (checkingPlace === 0) answer = answer + 'IX';
    }

    num = num % Math.pow(10, checkingPlace);
    checkingPlace--;
  }
  return answer;
};

intToRoman(58)

/*
Input
58
Output
"LV"
Expected
"LVIII"
*/
