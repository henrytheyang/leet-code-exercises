/*
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

Example 1:


Input: m = 3, n = 7
Output: 28
Example 2:

Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
 

Constraints:

1 <= m, n <= 100
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // This is a permutation problem with identical elements
  // Unique permutations = (number of choices)! / ( (number of identical objects a)! * (number of identical objects b)! ... )
  const findFactorial = (num) => {
    let answer = 1;
    for (let i = 1; i < num; i++) {
      answer = answer * (i + 1);
    }
    return answer;
  }
  return findFactorial(m - 1 + n - 1)/(findFactorial(m - 1) * findFactorial(n - 1));
};
uniquePaths(3, 7);

var uniquePathsDP = function(m, n) {
  // DP solution with hash table
  // Record number of paths to square in question
    // First row is all 1s, first column is all 1s
    // Every square is the sum of the squares above and to the left
    // Fill in the table until we get to the last square
  let answerTable = new Array(m);
  for (let i = 0; i < m; i++) {
    answerTable[i] = new Array(n);
    answerTable[i][0] = 1;
  }
  answerTable[0].fill(1);
  for (let j = 1; j < m; j++) {
    for (let k = 1; k < n; k++) {
      answerTable[j][k] = answerTable[j - 1][k] + answerTable[j][k - 1];
    }
  }
  return answerTable[m - 1][n - 1];
}

