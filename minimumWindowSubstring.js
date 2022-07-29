/*
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that
every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 

Follow up: Could you find an algorithm that runs in O(m + n) time?

*/



/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
  let answer = '';
  if (s.length < t.length || t.length === 0) {
    return answer;
  }

  // Sliding window w/ 2 pointers, both Left & Right start at beginning of s.
  // Create char bank for t
  let tBank = {};
  let sBank = {};
  let numberConditions = 0;
  for (i = 0; i < t.length; i++) {
    if (tBank[t[i]] === null) {
      numberConditions++;
      tBank[t[i]] = 1;
    } else {
      tBank[t[i]] += 1;
    }
  }

  const checkHowManyConditions = () => {
    
  }
  // Increment Right
  // While validWindow === false && we haven't reached end of s, checking for presence of key chars.
    // Update sCount when finding key chars
    // If sCount > tCount, increment conditionsMet
    // Check if conditionsMet > # of unique chars in t; if true then validWindow = true
      // Save leftEdge & rightEdge of window && length
      // Compare to previous successful length; if length is smaller update leftEdge & rightEdge & length
  // While validWindow === true, increment L, starting from leftEdge
    // Check if the char we just passed decreases sCount; update conditionsMet
    // Check if conditionsMet < # of unique chars in t
      // If so then validWindow = false; return to incrementing Right
      // If not then continue to increment L

};