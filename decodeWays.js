/*
A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The answer is guaranteed to fit in a 32-bit integer.

 

Example 1:

Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
Example 3:

Input: s = "0"
Output: 0
Explanation: There is no character that is mapped to a number starting with 0.
The only valid mappings with 0 are 'J' -> "10" and 'T' -> "20", neither of which start with 0.
Hence, there are no valid ways to decode this since all digits need to be mapped.
Example 4:

Input: s = "06"
Output: 0
Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").
 

Constraints:

1 <= s.length <= 100
s contains only digits and may contain leading zero(s).
*/

/**
 * @param {string} s
 * @return {number}
 */

var numDecodings = function(s) {
  let answer = 0;

  // Check first letter
  if (s[0] === '0') {
    return answer;
  }
  // Check illegal last 2 letters
  if (s[s.length - 1] === '0') {
    if (s[s.length - 2] !== '1' && s[s.length - 2] !== '2') {
      return answer;
    }
  }

  const recursiveFork = (index) => {
    // Exit condition
    if (index === s.length - 2 && s[index + 1] === '0') {
      answer ++;
      return;
    }
    if (index === s.length - 1) {
      answer ++;
      return;
    }

    // Check one digit letter
    if (parseInt(s.slice(index, index + 1)) >= 1 && parseInt(s.slice(index, index + 1)) <= 26) {
      recursiveFork(index + 1);
    }
    // Check two digit letter
    if (parseInt(s.slice(index, index + 2)) >= 1 && parseInt(s.slice(index, index + 2)) <= 26) {
      recursiveFork(index + 2);
    }
    return;
  }

  // Iterate through parameter string
  recursiveFork(0);

  // Use recursion, slice
  // If current index === 0, continue
  // Check 1 digit & 2 digit letters; for valid entries (digit is between 1 & 26), recurse
  // At the end of each loop, increment answer counter

  return answer;
};
    