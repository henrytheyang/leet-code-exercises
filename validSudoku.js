/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.

*/

/**
 * @param {character[][]} board
 * @return {boolean}
*/
var isValidSudoku = function(board) {
  let bank = {
    row: {},
    column: {},
    subbox: {},
  };
  // Iterate through arrays
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // For each item, check the row/column/sub-box bank
        // If the row/column/sub-box bank doesn't exist create it
        // If the entry for the row/column/sub-box is false, mark true and continue
        // If the entry for the row/column/sub-box is true, break and return false
      if (bank[row][i] === undefined) {           // Check row
        bank[row][i] = {};
      } 
      if (bank[row][i][board[i][j]] === undefined) {
        bank[row][i][board[i][j]] = true;
      } else {
        return false;
      }

      if (bank[column][j] === undefined) {        // Check column
        bank[column][j] = {};
      }
      if (bank[column][j][board[i][j]] === undefined) {
        bank[column][j][board[i][j]] = true;
      } else {
        return false;
      }

      let subboxi = Math.floor(i/3);
      let subboxj = Math.floor(j/3);
      if (bank[subbox][subboxi + subboxj] === undefined) {
        bank[subbox][subboxi + subboxj] = {};
      }
      if (bank[subbox][subboxi + subboxj][board[i][j]] === undefined) {
        bank[subbox][subboxi + subboxj][board[i][j]] = true;
      } else {
        return false;
      }
    }
  }
  return true;
};