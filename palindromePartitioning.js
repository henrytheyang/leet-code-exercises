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
  // DP solution
  // As we iterate down the string
    // Send onto each subsequent index array of arrays of subsequences
      // Prev palindromic subsequences
        // Single letters
        // Multiple letter subsequences
        // If a new multi-letter palindromic subsequence is detected, start a new array and add to array
      // New value is pushed onto prev arrays that were brought forward
  // How to detect palindromic subsequence
    // Stack
      // Does the new value match either
        // Top of stack
        // Value under top of stack 
};