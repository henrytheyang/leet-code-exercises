/*
Given a string s, partition s such that every 
substring
 of the partition is a 
palindrome
. Return all possible palindrome partitioning of s.

 

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
 

Constraints:

1 <= s.length <= 16
s contains only lowercase English letters.
*/
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  // Brute force solution + eliminating invalid nonpalindromes + backtracking + dfs
  // If we find a palindrome
    // Add it to a building solution
    // DFS on it
    // Base case- reach the end of the string
      // Add built solution to the answer array
    // Backtrack
      // Remove last thing added to solution being built
      // Continue palindrome search
  let answer = [];
  let solutionInProgress = [];
  const isPalindrome = (string, first, last) => {
    while (first < last) {
      if (string[first] !== string[last]) return false;
    }
    return true;
  }
  const dfs = (i, s, solutionInProgress) => {
    if (i === s.length) { // Base case, went past end of string
      answer.push(solutionInProgress.slice());
      return;
    }

    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j) === true) { // Palindrome detected
        solutionInProgress.push(s.slice(i, j + 1)); // Copy palindromic subsequence
        dfs(j + 1, s, solutionInProgress); // Add palindromic subsequence to solution
        solutionInProgress.pop(); // Backtrack
      }
    }
  }

  dfs(0, s, solutionInProgress);
  return answer
};



// var partition = function(s) {
//   // DP solution
//   // As we iterate down the string
//     // Send onto each subsequent index array of arrays of subsequences
//       // Prev palindromic subsequences
//         // Single letters
//         // Multiple letter subsequences
//         // If a new multi-letter palindromic subsequence is detected, start a new array and add to array
//       // New value is pushed onto prev arrays that were brought forward
//   // How to detect palindromic subsequence
//       // Does the new value match either
//         // Prev value
//         // Value before prev value
//   // If we're currently building a palindromic sequence, track all currently building sequences
  
//   let answer = [[s[0]]];
//   for (let i = 1; i < s.length; i++) {
//     // Push current value to every array in list
//     // New palindromic subsequence detected? Add to list

//   }
// };