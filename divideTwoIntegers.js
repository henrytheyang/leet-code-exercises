/*
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

Note:

Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For this problem, assume that your function returns 231 − 1 when the division result overflows.
 

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = truncate(3.33333..) = 3.
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = truncate(-2.33333..) = -2.
Example 3:

Input: dividend = 0, divisor = 1
Output: 0
Example 4:

Input: dividend = 1, divisor = 1
Output: 1
 

Constraints:

-2^31 <= dividend, divisor <= 2^31 - 1
divisor != 0

*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

var divide = function(dividend, divisor) {
  let result = 0;
  let a = Math.abs(dividend);
  let b = Math.abs(divisor);
  let isPositive = true;
  if (dividend > 0 !== divisor > 0) {
    isPositive = false;
  }

  // Use bitwise operators to more quickly multiply divisor until the resulting number is larger than the dividend
  // Do the same for each remainder until the remainder is smaller than the divisor
  while (a >= b) {
    let count = 1;
    let bMultiple = b;
    while ((a >> 1) >= bMultiple) {
      count = count << 1;
      bMultiple = bMultiple << 1
    }
    result += count;
    a -= bMultiple;
  }
  if (!isPositive) {
    result *= -1;
  }
  if (result >= Math.pow(2, 31)) {
    return Math.pow(2, 31) - 1;
  } else if (result <= -1 * Math.pow(2, 31)) {
    return (-1 * Math.pow(2, 31));
  } else {
    return result;
  }
};

divide(10, 3);

// var divide = function(dividend, divisor) {
//   let result = 0;
//   let a = Math.abs(dividend);
//   let b = Math.abs(divisor);
//   let isPositive = true;
//   let answer =  0;
//   if (dividend > 0 !== divisor > 0) {
//     isPositive = false;
//   }

//   // Use bitwise operators to more quickly multiply divisor until the resulting number is larger than the dividend
//   // Do the same for each remainder until the remainder is smaller than the divisor
//   while (a >= b) {
//     let count = 0;
//     while (a >= (b << 1 << count)) {
//       count++;
//     }
//     result += 1 << count;
//     a -= b << count;
//   }
//   if (!isPositive) {
//     result *= -1;
//   }
//   if (result >= Math.pow(2, 31)) {
//     return Math.pow(2, 31) - 1;
//   } else if (result <= -1 * Math.pow(2, 31)) {
//     return (-1 * Math.pow(2, 31));
//   } else {
//     return result;
//   }
// };