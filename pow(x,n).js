/*
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100
Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
 

Constraints:

-100.0 < x < 100.0
-231 <= n <= 231-1
-104 <= xn <= 104

*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  // Manipulate exponent by squaring x and halving exponent
  // If exponent is even multiply x by itself and half the exponent; recurse
      // 2^8 = 2^4 * 2^4 = 2^2 ^4
  // If exponent is odd multiply x by itself and subtract one from exponent, then divide by 2; multiply by exponent
      // 2^9 = 2^4 * 2^4 * 2 = (2^2 ^ 4) * 2
  if (n === 0 || x === 1) return 1;
  let power = Math.abs(n);
  let answer;
  if (power % 2 === 0) {
    answer = myPow(x * x, power/2);
  } else {
    answer = (myPow(x * x, (power - 1)/2)) * x;
  }
  if (n < 0) {
    return (1 / answer);
  } else {
    return answer;
  }
};

myPow(2, 10);
/*
Last executed input:
2.00000
-2147483648`
timeout
*/