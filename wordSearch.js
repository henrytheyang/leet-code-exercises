/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 

Follow up: Could you use search pruning to make your solution faster with a larger board?

*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  // Iterate through matrix;
  // When we find start of the word, check the surrounding letters
    // Check if we have used this letter before; if yes, skip this letter and continue to next adjacent
    // If we haven't used before, note that we've used this letter and check for the next letter
    let answer = false;
    let usedLetters = new Array(board.length).fill(0).map(() => new Array(board[0].length).fill(false));
    let checkNeighbors = (m, n, strIndex) => { // Need to undo usedLetters status for deadbranch
      while (strIndex <= word.length - 1) {
        if (m - 1 >= 0 && board[m - 1][n] === word[strIndex] && usedLetters[m - 1][n] === false) {
          if (strIndex < word.length - 1) {
            usedLetters[m - 1][n] = true;
            checkNeighbors(m - 1, n, strIndex + 1);
            usedLetters[m - 1][n] = false;
          } else {
            answer = true;
            return;
          }
        }
        if (m + 1 <= board.length - 1 && board[m + 1][n] === word[strIndex] && usedLetters[m + 1][n] === false) {
          if (strIndex < word.length - 1) {            
            usedLetters[m + 1][n] = true;
            checkNeighbors(m + 1, n, strIndex + 1);
            usedLetters[m + 1][n] = false;
          } else {
            answer = true;
            return;
          }
        }
        if (n - 1 >= 0 && board[m][n - 1] === word[strIndex] && usedLetters[m][n - 1] === false) {
          if (strIndex < word.length - 1) {
            usedLetters[m][n - 1] = true;
            checkNeighbors(m, n - 1, strIndex + 1)
            usedLetters[m][n - 1] = false;
          } else {
            answer = true;
            return;
          }
        }
        if (n + 1 <= board[0].length - 1 && board[m][n + 1] === word[strIndex] && usedLetters[m][n + 1] === false) {
          if (strIndex < word.length - 1) {
            usedLetters[m][n + 1] = true;
            checkNeighbors(m, n + 1, strIndex + 1);
            usedLetters[m][n + 1] = false;
          } else {
            answer = true;
            return;
          }
        }
        return;
      }
    }
  
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] === word[0]) {
          usedLetters[i][j] = true;  
          checkNeighbors(i, j, 1)
          usedLetters[i][j] = false;
        };
        if (answer) return answer;
      }
    }

    return answer;
};
exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED");
/*
board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
*/
