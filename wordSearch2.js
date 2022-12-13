/*
Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells 
are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

 

Example 1:


Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]
Example 2:


Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []
 

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 12
board[i][j] is a lowercase English letter.
1 <= words.length <= 3 * 104
1 <= words[i].length <= 10
words[i] consists of lowercase English letters.
All the strings of words are unique.
*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  // Backtracking solution
  // Iterate through board
    // Compare current letter against first letter of each word in words
    // When there's a match, mark as seen and continue searching neighbors
    // If we reach the end of the word, add the word to the answer list, remove word from words, go to next board[i][j]
    // If we can't run into a dead end, backtrack, unmarking as seen
  let answer = [];
  let used = new Array(board.length).fill(0).map(element => new Array(board[0].length).fill(false));
  let wordCompleted;

  const searchNeighbors = (wordIndex, letterIndex, i, j) => {
    let neighbors = [[i + 1, j], [i - 1][j], [i][j - 1], [i][j + 1]];
    let foundNext = false;
    for (let i = 0; i < neighbors.length; i++) {
      let r = neighbors[i][0];
      let c = neighbors[i][1];
      if (r < 0 || r > board.length || c < 0 || c > board[0].length) continue;
      if (board[r][c] === words[wordIndex][letterIndex]) {
        if (letterIndex === words[wordIndex].length - 1) { // Found end of word
          answer.push(words[wordIndex]);
          words[wordIndex] = true;
          wordCompleted = true;
          return;
        }
      used[r][c] = true;
      searchNeighbors(wordIndex, letterIndex + 1, r, c);
      used[r][c] = false;
      }
    }
    // Out of neighbors, have to backtrack
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      for (let k = 0; k < words.length; k++) {
        if (words[k] === true) continue;
        wordCompleted = false;
        if (board[i][j] === words[k][0]) {
          // If the word is finished(one letter word)
          if (words[k].length === 1) {
            answer.push(words[k]);
            words[k] = true;
            break;
          }
          // If there are more letters in word
          used[i][j] = true;
          searchNeighbors(k, 1, i, j);
          used[i][j] = false;
          if (wordCompleted === true) break;
        }
      }
    }
  }
  return answer;
};