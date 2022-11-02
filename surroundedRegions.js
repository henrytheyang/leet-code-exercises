/*
Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

 

Example 1:


Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
Explanation: Notice that an 'O' should not be flipped if:
- It is on the border, or
- It is adjacent to an 'O' that should not be flipped.
The bottom 'O' is on the border, so it is not flipped.
The other three 'O' form a surrounded region, so they are flipped.
Example 2:

Input: board = [["X"]]
Output: [["X"]]
 

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 200
board[i][j] is 'X' or 'O'.
*/
 /**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  // Check for illegal 'O' on border, and mark each, and each 'O' connected to it
  // Flip every other 'O'
  const markPeripheral = (m, n) => {
    if (m - 1 >= 0 && board[m - 1][n] === 'O') {
      board[m - 1][n] = '*';
      markPeripheral(m - 1, n);
    }
    if (m + 1 <= board.length - 1 && board[m + 1][n] === 'O') {
      board[m + 1][n] = '*';
      markPeripheral(m + 1, n);
    }
    if (n - 1 >= 0 && board[m][n - 1] === 'O') {
      board[m][n - 1] = '*';
      markPeripheral(m, n - 1);
    }
    if (n + 1 <= board[0].length - 1 && board[m][n + 1] === 'O') {
      board[m][n + 1] = '*';
      markPeripheral(m, n + 1);
    }
  }

  for (let i = 0; i < board[0].length; i++) {
    if (board[0][i] === 'O') {
      board[0][i] = '*';
      markPeripheral(0, i);
    }
    if (board[board.length - 1][i] === 'O') {
      board[board.length - 1][i] = '*';
      markPeripheral(board.length - 1, i);
    }
  }
  for (let j = 0; j < board.length; j++) {
    if (board[j][0] === 'O') {
      board[j][0] = '*';
      markPeripheral(j, 0);
    }
    if (board[j][board[0].length - 1] === 'O') {
      board[j][board[0].length - 1] = '*';
      markPeripheral(j, board[0].length - 1);
    }
  }

  for (let l = 0; l < board.length; l++) {
    for (let m = 0; m < board[0].length; m++) {
      if (board[l][m] === 'O') board[l][m] = 'X';
      if (board[l][m] === '*') board[l][m] = 'O';
    }
  }
};

solve([
  ["O","O","O","O","X","X"],
  ["O","O","O","O","O","O"],
  ["O","X","O","X","O","O"],
  ["O","X","O","O","X","O"],
  ["O","X","O","X","O","O"],
  ["O","X","O","O","O","O"]
])

/*
Input
[
  ["O","O","O","O","X","X"],
  ["O","O","O","O","O","O"],
  ["O","X","O","X","O","O"],
  ["O","X","O","O","X","O"],
  ["O","X","O","X","O","O"],
  ["O","X","O","O","O","O"]]
Output
[
  ["O","O","O","O","X","X"],
  ["O","O","O","O","O","O"],
  ["O","X","O","X","O","O"],
  ["O","X","O","X","X","O"],
  ["O","X","O","X","O","O"],
  ["O","X","O","O","O","O"]]
Expected
[
  ["O","O","O","O","X","X"],
  ["O","O","O","O","O","O"],
  ["O","X","O","X","O","O"],
  ["O","X","O","O","X","O"],
  ["O","X","O","X","O","O"],
  ["O","X","O","O","O","O"]]
*/