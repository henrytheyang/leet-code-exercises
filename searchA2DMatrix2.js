/*
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
 

Example 1:


Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true
Example 2:


Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
Output: false
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= n, m <= 300
-109 <= matrix[i][j] <= 109
All the integers in each row are sorted in ascending order.
All the integers in each column are sorted in ascending order.
-109 <= target <= 109
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function(matrix, target) {
  // O(m, n) solution- because rows & col are sorted we can adjust the row/col of the search box
  // Start in top right
    // If the search value > target then we can eliminate the whole row, increment row
    // If the search value < target then we can eliminate the whole column, decrement col
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] < target) row++;
    else col--;
  }
  return false;
}

var binarySearchMatrix = function(matrix, target) {
  // Iterate through rows, checking if answer is within range
  // Binary search each row for target
  const binarySearchRow = (rowIdx) => {
    let low = 0;
    let high = matrix[0].length - 1;
    let mid;
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if (matrix[rowIdx][mid] === target) return true;
      else if (matrix[rowIdx][mid] < target) low = mid + 1;
      else high = mid - 1;
    }
    return false;
  }
  
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][matrix[i].length - 1] < target) continue;
    if (matrix[i][0] > target) break;
    if (binarySearchRow(i)) return true;
  }
  return false;
};