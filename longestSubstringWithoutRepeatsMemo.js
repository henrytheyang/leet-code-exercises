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
  let substringBank = [];
  let sliceOfTempAnswer = '';
  // example substringBank entry: {sub:'abc'};
  if (s === '') {
    return 0;
  }
  // To memoize:
  // Add bank of previous substring searches
    // As we add strings to answer string while on current i, add string results to 
    // following indices.
    // When starting the loop at the next index i, start further down using the saved substring
  for (i = 0; i <= s.length - answer.length; i++) {
    // Check bank for existing substring, then update tempAnswer and advance i beyond last index to test;
    // Skip all s[i] scans that have been memoized
    if (substringBank[i] !== undefined) {
      continue;
    }
    // Retrieve memoized data, if any
    if (substringBank[i] !== undefined) {
      tempAnswer = substringBank[i];
    } 
    for (j = i; j <= s.length - 1; j++) {
      if (charBank[s[j]] === undefined) {
        charBank[s[j]] = true;
        tempAnswer = tempAnswer + s[j];
        if (tempAnswer.length > answer.length) {
          answer = tempAnswer;
        }
      } else {
        // When we run into a repeat, update the subStringBank data for all indices running the length of the current substring
        for (k = i; k <= i + tempAnswer.length - 1; k++) {
          // abca
          // 0123
          // Lop off chars from the beginning of string and update substringBank[k] with remainder if it's longer than current substring[k];
          sliceOfTempAnswer = tempAnswer.slice(k);
          if (sliceOfTempAnswer.length > substringBank[k]) {
            substringBank[k] = sliceOfTempAnswer;
          }
          charBank = {};
          tempAnswer = '';
        }
        break;
      }
    }
  }
  console.log(`answer = ${answer}`);
  return answer.length;
};

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
//expected 6, got 5. Cut off the first t from answer
console.log(lengthOfLongestSubstring('bbtablud'));