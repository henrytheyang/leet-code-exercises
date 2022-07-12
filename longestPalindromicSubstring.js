/*
Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.

*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length === 0) {
    return '';
  }

  if (s.length === 1) {
    return s;
  }

  let answer = s[0];

  // Iterate through string
  for (i = 1; i < s.length; i++) {
    // Use middle out method to check for palindrome
    let left = i - 1;
    let right = i + 1;
    while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
      if (right - left + 1 > answer.length) {
        answer = s.slice(left, right + 1);
      }
    }

    // If current string === next string, run middle out again, checking for double letter in the center palindrome
    if (s[i] === s[i + 1]) {
      let left = i - 1;
      let right = i + 2;
      if (answer.length < 2) { 
        answer = s.slice(i, i + 1);
      }
      while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
        if (right - left + 1 > answer.length) {
          answer = s.slice(left, right);
        }
      }
    }

  }
  console.log(`answer = ${answer}`)
  return answer;
};

longestPalindrome("babad");