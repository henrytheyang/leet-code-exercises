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
  let answerLength = 0;
  let charBank = {};
  let trailingPointer = 0;

  // Iterate first pointer, adding each char to the bank
  for (leadingPointer = 0; leadingPointer < s.length; leadingPointer++) {
    if (charBank[s[leadingPointer]] === undefined || charBank[s[leadingPointer]] < trailingPointer) {
      charBank[s[leadingPointer]] = leadingPointer;
    } else {
      // When we find a repeat:    
        // Calculate length of substring
        // Compare with longest substring length, if longer update
        // Advance trailing pointer until one past repeated char
        // Cont
      trailingPointer = charBank[s[leadingPointer]] + 1;
      charBank[s[leadingPointer]] = leadingPointer;
      // for (prop in charBank) {
      //   if (charBank[prop] < trailingPointer) {
      //     delete charBank[prop];
      //   }
      // }
    }
    if (answerLength < leadingPointer - trailingPointer + 1) {
      answerLength = leadingPointer - trailingPointer + 1
    }
  }
  return answerLength;
};

/*
Input
"abba"
Output
3
Expected
2
*/

console.log(lengthOfLongestSubstring('abba'));