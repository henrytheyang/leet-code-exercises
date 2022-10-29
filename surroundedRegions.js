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
  // When we find first O start tracking current streak
    // If we reach edge of board without enclosing, delete streak
    // If we encounter another O in the row below it, it's part of the current streak, keep checking
    // If we ever reach an edge with an O and it's not enclosed, delete current streak
  let queuePossible = [];
  let confirmedFlips = [];
  let seen = new Array(board.length).fill(0).map(x => new Array(board[0].length).fill(false));
  
  const checkPeripheralO = (m, n) => {
    // If we encounter O on invalid edge return O
    // Else return all Os to check
    let detected = [];
    if (board[m - 1][n] === 'O') {
      if (m - 1 === 0) {
        return false
      } else detected.push({m: m - 1, n: n});
    } 
    if (board[m + 1][n] === 'O') {
      if (m + 1 === board.length - 1) {
        return false
      } else detected.push({m: m + 1, n: n});
    } 
    if (board[m][n - 1] === 'O') {
      if (n - 1 === 0) {
        return false
      } else detected.push({m: m, n: n - 1})
    }
    if (board[m][n + 1] === 'O') {
      if (n + 1 === board[0].length - 1) {
        return false
      } else detected.push({m: m, n: n + 1});
    }
    // only here if we pass all
    queuePossible = [...queuePossible, ... detected]
    return true;
  }

  for (let i = 1; i < board.length - 1; i++) {
    for (let j = 1; j < board[0].length - 1; j++) {
      if (seen[i][j] === true) continue;

      seen[i][j] = true;
      if (board[i][j] === 'O') {
        queuePossible.push({m: i, n: j});
        if (checkPeripheralO(i, j) === true) {
          let counter = 0;
          while (queuePossible.length > counter) {
            let currentCoord = queuePossible[counter];
            counter++;
            seen[currentCoord.m][currentCoord.n] = true;
            if (checkPeripheralO(currentCoord.m, currentCoord.n) === false) {
              queuePossible = [];
            }
          }
          if (queuePossible.length > 0) {
            confirmedFlips = [...confirmedFlips, ...queuePossible];
            queuePossible = [];
          }
        }
      }
    }
  }
  for (let k = 0; k < confirmedFlips.length; k++) {
    board[confirmedFlips[k].m][confirmedFlips[k].n] = 'X';
  }
};

solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]])