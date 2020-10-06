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
  let charBank = {};
  let answer = '';
  let tempAnswer = '';
  if (s === '') {
    return 0;
  }
  // To memoize:
  // Add bank of previous substring searches
    // As we add strings to answer string while on current i, add string results to 
    // following indices.
    // When starting the loop at the next index i, start further down using the saved substring

  for (i = 0; i <= s.length - answer.length; i++) {
    for (j = i; j <= s.length - 1; j++) {
      if (charBank[s[j]] === undefined) {
        charBank[s[j]] = true;
        tempAnswer = tempAnswer + s[j];
        if (tempAnswer.length > answer.length) {
          answer = tempAnswer;
        }
      } else {
        charBank = {};
        tempAnswer = '';
        break;
      }
    }
  }
  return answer.length;
};

// lengthOfLongestSubstring("abcabcbb");
// Output 2, expected 3
// console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("bbbbb"));