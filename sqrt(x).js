/*
Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

 

Example 1:

Input: x = 4
Output: 2
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
 

Constraints:
0 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0) {
    return 0;
  }
  // Binary search between x & 1 until we find the two numbers that bracket; take lower
  let low = 1;
  let high = x;
  let middle;
  while (high - low > 1) {
    middle = Math.floor((high + low) / 2);
    // Answer less than middle
    if (middle * middle > x) {
      high = middle;
    } else {
      low = middle;
    }
  }
  return low;
};

mySqrt(4);