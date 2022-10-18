/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

 

Example 1:


Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
Example 2:


Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

Constraints:

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1
 

Follow up:

A straightforward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  // Scan for 0s, record row & column
  // Store 0 status in arrays of length m, n
  // Iterate through 0status arrays
    // Row- use fill to fill rows with 0
    // Column- iterate through and set 0

  let rowIndexOfZeroes = new Array(matrix.length);
  let columnIndexOfZeroes = new Array(matrix[0].length);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rowIndexOfZeroes[i] = true;
        columnIndexOfZeroes[j] = true;
      }
    }
  }
  
  for (let k = 0; k < rowIndexOfZeroes; k++) {
    if (rowIndexOfZeroes[k] === true) matrix[k].fill(0);
  }
  for (let l = 0; l < columnIndexOfZeroes; l++) {
    if (columnIndexOfZeroes[l] === true) {
      for (let m = 0; m < matrix.length; m++) {
        matrix[m][l] = 0;
      }
    }
  }
};

/*
Your input
[[1,1,1],
[1,0,1],
[1,1,1]]
Output
[[1,1,1],
[1,0,1],
[1,1,1]]
Expected
[[1,0,1],
[0,0,0],
[1,0,1]]
*/