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
  // Use trie data structure to organize words
    // Build a tree, with each child node a the next letter in a possible word
  // DFS for each spot in the board
    // Keep track of seen/unseen, backtracking as necessary
    // If the current spot matches a possible child node of the current layer of the trie
      // Check all valid neighbors to see if it is a possible child node
        // If it is, keep checking if it's a possible child node
      // If you reach a node marked as possible wordend, add word to answer
        // Backtrack
  let root = {
    isEnd: false,
    children: {},
  };
  let answer = [];
  let used = new Array(board.length).fill(0).map(val => new Array(board[0].length).fill(false));
  let foundWords = {};

  // Build tree
  for (let i = 0; i < words.length; i++) {
    let letter = 0;
    let currentNode = root;
    let word = words[i];
    while (letter <= words[i].length) {
      if (currentNode.children[word[letter]] === undefined) {
        currentNode.children[word[letter]] = {
          isEnd: false,
          children: {},
        }
      }
      if (letter === words[i].length) currentNode.isEnd = true;
      currentNode = currentNode.children[word[letter]];
      letter++;
    }
  }

  const searchNeighbors = (currJ, currK, currNode, stringBeingBuilt) => {
    let neighbors = [[currJ - 1, currK], [currJ + 1, currK], [currJ, currK - 1], [currJ, currK + 1]];
    for (let i = 0; i < neighbors.length; i++) {
      let r = neighbors[i][0];
      let c = neighbors[i][1];
      if (r < 0 || r === board.length || c < 0 || c === board[0].length) continue;
      if (currNode.children[board[r][c]]) { // Neighbor is valid child
        let concatString = stringBeingBuilt + board[r][c];
        if (currNode.children[board[r][c]].isEnd === true) { // Found end of valid word
          if (foundWords[concatString] !== true) answer.push(concatString);
        }
        used[r][c] = true;
        searchNeighbors(r, c, currNode.children[board[r][c]], concatString);
        used[r][c] = false;
      } 
    }
  }

  for (let j = 0; j < board.length; j++) { // Scan board
    for (let k = 0; k < board[0].length; k++) {
      let string = board[j][k];
      if (root.children[string]) { 
        if (root.children[string].isEnd === true) { // Found end of one letter word
          answer.push(string);
          foundWords[string] = true;
        } 
        used[j][k] = true; // Check if any longer words possible starting from this pos
        searchNeighbors(j, k, root.children[string], string); // FILL IN PARAMETERS
        used[j][k] = false;
      }
    }
  }
  return answer;
};

findWords([
  ["o","a","b","n"],["o","t","a","e"],["a","h","k","r"],["a","f","l","v"]
], ["oa","oaa"])

/*
Input
board =
[["o","a","b","n"],["o","t","a","e"],["a","h","k","r"],["a","f","l","v"]]
words =
["oa","oaa"]
13 / 64 testcases passed
Output
["oa","oa","oaa"]
Expected
["oa","oaa"]

*/



var findWordsBrute = function(board, words) {
  // Backtracking solution
  // Iterate through board
    // Compare current letter against first letter of each word in words
    // When there's a match, mark as seen and continue searching neighbors
    // If we reach the end of the word, add the word to the answer list, remove word from words, go to next board[i][j]
    // If we can't run into a dead end, backtrack, unmarking as seen
  let answer = [];
  let used = new Array(board.length).fill(0).map(element => new Array(board[0].length).fill(false));

  const searchNeighbors = (wordIndex, letterIndex, currentI, currentJ, board) => {
    let neighbors = [[currentI + 1, currentJ], [currentI - 1, currentJ], [currentI, currentJ + 1], [currentI, currentJ - 1]];
    for (let i = 0; i < neighbors.length; i++) {
      let r = neighbors[i][0];
      let c = neighbors[i][1];
      if (r < 0 || r === board.length || c < 0 || c === board[0].length) continue;
      if (board[r][c] === words[wordIndex][letterIndex] && used[r][c] === false) {
        if (letterIndex === words[wordIndex].length - 1) { // Found end of word
          answer.push(words[wordIndex]);
          words[wordIndex] = true;
          return true;
        }
        used[r][c] = true;
        searchNeighbors(wordIndex, letterIndex + 1, r, c, board);
        used[r][c] = false;
      }  
    }
    // Out of neighbors, have to backtrack
    return false;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      for (let k = 0; k < words.length; k++) {
        if (words[k] === true) continue;
        if (board[i][j] === words[k][0]) {
          if (words[k].length === 1) { // If the word is finished(one letter word)
            answer.push(words[k]);
            words[k] = true;
            break;
          }
          // If there are more letters in word
          used[i][j] = true;
          searchNeighbors(k, 1, i, j, board) // Reached end of tree, have to backtrack
          used[i][j] = false;
        }
      }
    }
  }
  return answer;
};