/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Example 4:
Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // Loop through every index position. Find longest substring from each starting point
    // Loop through subsequent letters to build longest substring
    // Store encountered characters in an object
    // Check each letter to see if it's in the letter bank
      // If it's missing, add it to the letter bank and update longest substring
      // If it's present, stop the interior loop.
        // Compare present substring to stored longest substring.
          // If new substring is longer, store it as longest substring
    // Check if we've reached prohibitive distance from end
};