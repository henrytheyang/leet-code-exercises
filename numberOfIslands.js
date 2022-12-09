/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), 
return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or 
vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // Iterate through matrix, marking each spot as visited
  // Skip all visited spots
  // When we encounter a 1, increment the number of islands
    // Scan all neighbors, mark as visited
    // If we encounter more 1s, scan all neighbors
    // Once we finish scanning all neighbors, continue with iteration through matrix
  let islands = 0;
  let visited = new Array(grid.length).fill(0).map(element => new Array(grid[0].length).fill(false));

  const scanNeighbors = (r, c) => {
    if (r - 1 >= 0 &&  visited[r - 1][c] === false) {
      visited[r - 1][c] = true;
      scanNeighbors(r - 1, c)
    }
    if (r + 1 < grid.length && visited[r + 1][c] === false) {
      visited[r + 1][c] = true;
      scanNeighbors(r + 1, c);
    }
    if (c - 1 >= 0 &&  visited[r][c - 1] === false) {
      visited[r][c - 1] = true;
      scanNeighbors(r, c - 1);
    }
    if (c + 1 < grid[0].length && visited[r][c + 1] === false) {
      visited[r][c + 1] = true;
      scanNeighbors(r, c + 1);
    }
  }

  for (let i = 0; i < grid.length; i ++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (visited[i][j] === true) continue;
      visited[i][j] = true;
      if (grid[i][j] === 1) {
        islands++;
        scanNeighbors(i, j);
      }
    }
  }
  return islands;
};

numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]);