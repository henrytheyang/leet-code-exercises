/*
You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The testcases are generated so that the answer will be less than or equal to 2 * 109.

 

Example 1:


Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
Example 2:


Input: obstacleGrid = [[0,1],[0,0]]
Output: 1
 

Constraints:

m == obstacleGrid.length
n == obstacleGrid[i].length
1 <= m, n <= 100
obstacleGrid[i][j] is 0 or 1.
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  // Create dp hash table recording possible paths to current square
    // If the current square is an obstacle there are 0 paths
    // Current paths is sum of square to north and west
  // Return last entry of hash table
  let pathsToSquareDP = new Array(obstacleGrid.length);
  for (let i = 0; i < pathsToSquareDP.length; i++) {
    pathsToSquareDP[i] = new Array(obstacleGrid.length[0]);
  }
  pathsToSquareDP[0][0] = 1;
  let barrier = false;

  for (let j = 1; j < pathsToSquareDP[0].length; j++) {
    if (obstacleGrid[0][j] === 1) barrier = true;
    if (!barrier) pathsToSquareDP[0][j] = 1;
    else pathsToSquareDP[0][j] = 0;
  }

  barrier = false;
  for (let k = 1; k < pathsToSquareDP.length; k++) {
    if (obstacleGrid[k][0] === 1) barrier = true;
    if (!barrier) pathsToSquareDP[k][0] = 1;
    else pathsToSquareDP[k][0] = 0;
  }

  for (let l = 1; l < pathsToSquareDP.length; l++) {
    for (let m = 2; m < pathsToSquareDP[0].length; m++) {
      if (obstacleGrid[l][m] === 1) pathsToSquareDP[l][m] = 0;
      else pathsToSquareDP[l][m] = (pathsToSquareDP[l - 1][m] + pathsToSquareDP[l][m - 1]);
    }
  }

  return pathsToSquareDP[pathsToSquareDP.length - 1][pathsToSquareDP[0].length - 1];
};