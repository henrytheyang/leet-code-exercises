/*
According to Wikipedia's article: "The Game of Life, also known simply as Life, is 
a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: 
live (represented by a 1) or dead (represented by a 0). Each cell interacts with its 
eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken 
  from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The next state is created by applying the above rules simultaneously to every cell in 
the current state, where births and deaths occur simultaneously. Given the current 
state of the m x n grid board, return the next state.

 

Example 1:
Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

Example 2:
Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]
 

Constraints:
m == board.length
n == board[i].length
1 <= m, n <= 25
board[i][j] is 0 or 1.
 

Follow up:
Could you solve it in-place? Remember that the board needs to be updated simultaneously: 
You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is 
infinite, which would cause problems when the active area encroaches upon the border of 
the array (i.e., live cells reach the border). How would you address these problems?
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  // Check neighbors, designate in place
  // Loop through final time to make needed changes
  // Potentially O(9n) time
  const checkNeighbors = (i, j) => {
    let dead = 0;
    let live = 0;

    for (let a = i - 1; a <= i + 1; a++) {
      for (let b = j - 1; b <= j + 1; b++) {
        if (a < 0 || a === board.length || b < 0 || b === board[0].length) continue;
        if (a === i && b === j) continue;
        if (board[a][b] === 0 || board[a][b] === 'l') dead++;
        else live++;
      }
    }
    if (board[i][j] === 0) {
      if (live === 3) board[i][j] = 'l';
    } else {
      if (live < 2) board[i][j] = 'd';
      else if (live > 3) board[i][j] = 'd';
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      checkNeighbors(i, j);
    }
  }

  for (let k = 0; k < board.length; k++) {
    for (let l = 0; l < board[0].length; l++) {
      if (board[k][l] === 'l') board[k][l] = 1;
      else if (board[k][l] === 'd') board[k][l] = 0;
    }
  }
};
gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])