/*
A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways).
For example, "11106" can be mapped into:

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

/*
  [1,1,1,0,6,]

[1,1,2,3,2,2]
*/


var numDecodings = function(s) {
  let answer = 0;
  // Case 1- Pair ending in 0 that's not 10 or 20- No solution, stop and return 0
  // Case 2- 0, inside a 10 or 20- use only double [i - 2] subproblem
  // Case 3- Pair that's > 26; use only single [i-1] subproblem
  // Case 4- Single and pair both valid; add previous 2 subproblems together
  let solutionTracker = [1];

  if (s.length === 0) {
    return answer;
  }
  if (s[0] === '0') {
    return answer;
  } else {
    solutionTracker[1] = 1;
  }
  
  // Starting at s[1]
  for (i = 2; i < s.length + 1; i++) {
    if (s[i - 1] === '0') {
      if (s[i - 2] == 1 || s[i - 2] == 2) {
        solutionTracker[i] = solutionTracker[i - 2];
      } else {
        return answer;
      }
    } else if (s[i - 2] == 2 && s[i - 1] > 6) {
      solutionTracker[i] = solutionTracker[i - 1];
    } else if (s[i - 2] >= 3) {
      solutionTracker[i] = solutionTracker[i - 1];
    } else if (s[i - 2] == 0) {
      solutionTracker[i] = solutionTracker[i - 1];
    } else {
      solutionTracker[i] = solutionTracker[i - 1] + solutionTracker[i - 2];
    }
  }
  answer = solutionTracker[s.length]
  console.log(answer);
  return answer;
};


numDecodings("2101"); // Giving 3, should be 1
