/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

 

Example 1:


Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
Example 2:

Input: grid = [[1,2,3],[4,5,6]]
Output: 12
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 100
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  // Create dp table recording minimum sum to arrive at each square
  // Each square is the sum of the squares above and to the left
  // Return last square
  let smallestPathHere = new Array(grid.length);
  for (let i = 0; i < grid[0].length; i++) {
    smallestPathHere[i] = new Array(grid[0].length);
  }

  smallestPathHere[0][0] = grid[0][0];
  for (let j = 1; j < smallestPathHere[0].length; j++) {
    smallestPathHere[0][j] = smallestPathHere[0][j - 1] + grid[0][j];
  }
  for (let k = 1; k < smallestPathHere.length; k++) {
    smallestPathHere[k][0] = smallestPathHere[k - 1][0] + grid[k][0];
  }

  for (let l = 1; l < smallestPathHere.length; l++) {
    for (let m = 1; m < smallestPathHere[0].length; m++) {
      smallestPathHere[l][m] = Math.min(smallestPathHere[l - 1][m], smallestPathHere[l][m - 1]) + grid[l][m];
    }
  }

  return smallestPathHere[grid.length - 1][grid[0].length - 1];
};

minPathSum([[1,2,3],[4,5,6]])