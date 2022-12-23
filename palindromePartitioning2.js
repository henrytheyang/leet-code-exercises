/*
Given a string s, partition s such that every 
substring
 of the partition is a 
palindrome
.

Return the minimum cuts needed for a palindrome partitioning of s.

 

Example 1:

Input: s = "aab"
Output: 1
Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
Example 2:

Input: s = "a"
Output: 0
Example 3:

Input: s = "ab"
Output: 1
 

Constraints:

1 <= s.length <= 2000
s consists of lowercase English letters only.
*/
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  // DP Solution
  // Construct DP table recording the min number of cuts to subdivide at each ending index
  // For each subsequent index check if each subsequence is a palindrome, then combine with 
  // each prev stored DP value to get min cuts

  
};