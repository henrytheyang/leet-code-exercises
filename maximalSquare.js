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

  // Space consideration- O(m * n)
    // Since we only need the info from the prev row, we only need to save one row at a time.
    // We can reduce space complexity to O(n)

  // Time complexity- O(m * n * k), where k is avg length our loop backtracks to look for new square
    // We can decrease some linear amount of time by making our code fill in dp and check for new area as we go
  let length = 0;
  let dp = new Array(matrix[0].length);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0) dp[j] = matrix[i][j] * 1;
      else if (matrix[i][j] ===  '0') dp[j] = 0;
      else {
        dp[j] = dp[j] === 0 ? 1 : dp[j] + 1;
      }

      let minHeight = dp[j];
      let counter = 0;
      for (let k = j; k >= 0; k--) {
        if (dp[k] === 0) break;
        if (dp[k] < minHeight) minHeight = dp[k];
        counter = counter === 0 ? 1 : counter + 1;
        if (minHeight > length && counter > length) length = Math.min(counter, minHeight);
      }
    }
  }
  return length * length;
}
maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])


var maximalSquareBigSpace = function(matrix) {
  // Create dp square tracking how many rows deep the 1s are
  // If a dp row contains as many columns as the rows deep of 1s, that's a square
  // Track the current max squares

  // Space consideration- O(m * n)
    // Since we only need the info from the prev row, we only need to save one row at a time.
    // We can reduce space complexity to O(n)

  // Time complexity- O(m * n * k), where k is avg length our loop backtracks to look for new square
    // We can decrease some linear amount of time by making our code fill in dp and check for new area as we go

  let length = 0;
  let dp = new Array(matrix.length).fill(0).map(element => new Array(matrix[0].length));
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0) dp[i][j] = matrix[i][j] === '0' ? 0 : 1;
      else if (matrix[i][j] === '0') dp[i][j] = 0;
      else dp[i][j] = dp[i - 1][j] + 1;
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
        if (minHeight > length && counter > length) length = Math.min(counter, minHeight);
      }
    }
  }
  return length * length;
};
/*
Your input
[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output
0
Expected
4
*/