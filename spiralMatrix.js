/*
Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  // Set 4 boundaries- top right bottom left
  // Spiral and traverse until we start on the boundary
  // When we hit the boundary, decrement boundary and then turn in the new direction
  let vector = ['right', 'down', 'left', 'up'];
  let vectorIndex = 0;
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;
  let answer = [];
  do {
    if (vector[vectorIndex] === 'right') {
      for (let i = left; i < matrix[0].length; i++) {
        answer.push(matrix[top][i]);
      }
      top++;
    } else if (vector[vectorIndex] === 'down') {
      for (let j = top; j < matrix.length; j++) {
        answer.push(matrix[j][right]);
      }
      right--;
    } else if (vector[vectorIndex] === 'left') {
      for (let k = right; k >= left; k--) {
        answer.push(matrix[bottom][k]);
      }
      bottom--;
    } else if (vector[vectorIndex] === 'up') {
      for (let l = bottom; l >= top; l--) {
        answer.push(matrix[l][left]);
      }
      left++;
    }

    if (vectorIndex === 3) {
      vectorIndex = 0;
    } else vectorIndex++
  } while (top !== bottom && left !== right)

  return answer;
};
spiralOrder([[1,2,3],[4,5,6],[7,8,9]])
/*
Your input
[[1,2,3],[4,5,6],[7,8,9]]
Output
[1,2,3,6,9,8,7]
Expected
[1,2,3,6,9,8,7,4,5]
*/