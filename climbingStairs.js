/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45

*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n = 1) {
    return 0;
  }

};

/*
n = 1, 0

n = 2, 11 2, 2
n = 3, 111 12 21, 3
n = 4, 1111 121 211 112 22, 5
n = 5, 11111 2111 1211 1121 1112 221 212 122, 8
n = 6, 111111 211111 12111 11211 11121 111112 2211 1221 1122 2121 2112 222, 12

n = 7, 17
*/