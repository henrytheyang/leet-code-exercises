/*
Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

 

Example 1:


Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.
Example 2:

Input: matrix = [["0"]]
Output: 0
Example 3:

Input: matrix = [["1"]]
Output: 1
 

Constraints:

rows == matrix.length
cols == matrix[i].length
1 <= row, cols <= 200
matrix[i][j] is '0' or '1'.
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  // Convert matrix into rows of historgrams
    // Each row is the sum total of current row and the height above it
    // If the current row index is 0, it's 0 height
  // Find the largest area of each row
  // Track the largest area as we go.
  let answer = 0;
  let rowArea;
  let board = new Array(matrix.length).fill(0).map(element => new Array(matrix[0].length));
  for (let i = 0; i < board[0].length; i++) {
    board[0][i] = matrix[0][i] * 1;
  }
  for (let j = 1; j < board.length; j++) {
    for (let k = 0; k < board[0].length; k++) {
      if (matrix[j][k] === '0') board[j][k] = 0;
      else board[j][k] = board[j - 1][k] + matrix[j][k] * 1
    }
  }
  
  const findLargestArea = (rowIndex) => {
    let heightStack = [];
    let indexStack = [];
    let tempIndex;
    let largestArea = 0;
    let currArea = 0;

    for (l = 0; l < board[rowIndex].length; l++) {
      if (heightStack.length === 0 || board[rowIndex][l] > heightStack[heightStack.length - 1]) {
        heightStack.push(board[rowIndex][l]);
        indexStack.push(l);
      } else if (board[rowIndex][l] < heightStack[heightStack.length - 1]) {
        while (board[rowIndex][l] < heightStack[heightStack.length - 1]) {
          tempIndex = indexStack.pop();
          currArea = (heightStack.pop()) *  (l - tempIndex);
          if (largestArea < currArea) largestArea = currArea;
        }
        heightStack.push(board[rowIndex][l]);
        indexStack.push(tempIndex);
      }
    }
    // Pop leftover areas
    while (heightStack.length > 0) {
      currArea = heightStack.pop() * (l - indexStack.pop());
      largestArea = Math.max(largestArea, currArea);
    }
    return largestArea;
  }

  for (let m = 0; m < board.length; m++) {
    rowArea = findLargestArea(m)
    if (answer < rowArea) answer = rowArea;
  }

  return answer;
};

maximalRectangle([
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]);