/*
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.

 

Example 1:


Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
Explanation: The input board is shown above and the only valid solution is shown below:


 

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit or '.'.
It is guaranteed that the input board has only one solution.

*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solveSudoku = function(board) {
  // Backtracking solution
  // Iterate through puzzle, filling in with increasing unused numbers
  // Validate if row/column/subgrid are valid
    // If yes continue
    // If no, backtrack and try another solution
  // Return valid board
  
  let bank = {
    row: {},
    column: {},
    subgrid: {},
  };
  let solved = false;

  // Populate bank for constant lookup
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (bank.row[i] === undefined) {
        bank.row[i] = {};
      } 
      if (bank.column[j] === undefined) {
        bank.column[j] = {};
      } 
      if (bank.subgrid[Math.floor(i / 3).toString() + Math.floor(j / 3).toString()] === undefined) {
        bank.subgrid[Math.floor(i / 3).toString() + Math.floor(j / 3).toString()] = {};
      } 
      if (board[i][j] === '.') {
        continue;
      }

      bank.row[i][board[i][j]] = true;
      bank.column[j][board[i][j]] = true;
      bank.subgrid[Math.floor(i / 3).toString() + Math.floor(j / 3).toString()][board[i][j]] = true;
    }
  }

  const validateEntry = (x, y, value) => {
    if (bank.row[x][value] === true) {
      return false;
    }
    if (bank.column[y][value] === true) {
      return false;
    }
    if (bank.subgrid[Math.floor(x/3).toString() + Math.floor(y/3).toString()][value] === true) {
      return false;
    }
    return true;
  };

  const fillBoard = (x, y) => {
    while (x < 9) {
      while (y <= 8) {
        if (board[x][y] !== '.') {
          if (x === 8 && y === 8) {
            solved = true;
            return board;
          }
          if (y < 8) {
            y++;
          } else {
            x++;
            y = 0;
          }
          continue;
        }

        // Do stuff
        for (let numberToTry = 1; numberToTry < 10; numberToTry++) {
          if (validateEntry(x, y, numberToTry) === true) {
            board[x][y] = numberToTry.toString();
            bank.row[x][numberToTry] = true;
            bank.column[y][numberToTry] = true;
            bank.subgrid[Math.floor(x/3).toString() + Math.floor(y/3).toString()][numberToTry] = true;
            // Exit loop and return board when board is filled in truthfully
            if (x === 8 && y === 8) {
              solved = true;
              console.log('returning board');
              return board;
            }
            // Recurse?
            if (y < 8) {
              fillBoard(x, y + 1);
            } else {
              fillBoard(x + 1, 0);
            }
            if (solved === false) {
              // Backtrack
              let lastTried = board[x][y];
              board[x][y] = '.';
              bank.row[x][lastTried] = undefined;
              bank.column[y][lastTried] = undefined;
              bank.subgrid[Math.floor(x/3).toString() + Math.floor(y/3).toString()][lastTried] = undefined;
            }
          }
        }
        return;
      }
    }
    return board;
  };
  fillBoard(0, 0);
};

solveSudoku([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]);
