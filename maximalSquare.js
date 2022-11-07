/*
Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

 

Example 1:


Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4
Example 2:


Input: matrix = [["0","1"],["1","0"]]
Output: 1
Example 3:

Input: matrix = [["0"]]
Output: 0
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] is '0' or '1'.
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  // Create dp square tracking how many rows deep the 1s are
  // If a dp row contains as many columns as the rows deep of 1s, that's a square
  // Track the current max squares

  let answer = 0;
  let dp = new Array(matrix.length).fill(0).map(element => new Array(matrix[0].length));
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0) dp[i][j] = matrix[i][j] === '0' ? 0 : 1;
      else if (matrix[i][j] === '0') dp[i][j] = 0;
      else dp[i][j] = dp[i][j] + 1;
    }
  }

  for (let k = 0; k < dp.length; k++) {
    for (let l = 0; l < dp[0].length; l++) {
      if (dp[k][l] === 0) continue;
      let minHeight = dp[k][l];
      let counter = 0;
      for (let m = l; m >= 0; m--) {
        if (dp[k][m] === 0) break;
        if (dp[k][m] < minHeight) minHeight = dp[k][m];
        if (counter === 0) counter = 1;
        else counter++;
        if (minHeight > answer && counter > answer) answer = Math.min(answer, minHeight);
      }
    }
  }
  return answer;
};

maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])
/*
Your input
[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output
0
Expected
4
*/