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
  let validWindowFound = false;
  if (s.length < t.length || t.length === 0) {
    return '';
  }

  // Sliding window w/ 2 pointers, both Left & Right start at beginning of s.
  // Create char bank for t
  let tBank = {};
  let sBank = {};
  let numberConditions = 0;
  for (i = 0; i < t.length; i++) {
    if (tBank[t[i]] === undefined) {
      numberConditions += 1;
      tBank[t[i]] = 1;
    } else {
      tBank[t[i]] += 1;
    }
  }
  
  let leftPointer = 0;
  let rightPointer = 0;
  let validWindowLeft = null;
  let validWindowRight = null;
  let length = null;

  // If sCount > tCount, increment conditionsMet
  // Check if conditionsMet > # of unique chars in t; if true then validWindowFound = true
    // Save leftEdge & rightEdge of window && length
    // Compare to previous successful length; if length is smaller update leftEdge & rightEdge & length
  const checkHowManyConditions = () => {
    let satisfiedCondition = 0;
    for (var prop in tBank) {
      if (sBank[prop] >= tBank[prop]) {
        satisfiedCondition += 1;
      }
    }
    if (satisfiedCondition >= numberConditions) {
      validWindowFound = true;
      // Updating when we find smaller window
      if (length === null || rightPointer - leftPointer + 1 < length) {
        validWindowLeft = leftPointer;
        validWindowRight = rightPointer;
        length = rightPointer - leftPointer + 1;
      }
    } else {
      validWindowFound = false;
    }
  };

  while (rightPointer < s.length) {
    // Check at rightPointer
    // While validWindowFound === false && we haven't reached end of s, checking for presence of key chars.
    if (validWindowFound === false) {
      // Update sCount when finding key chars
      if (tBank[s[rightPointer]]) {
        sBank[s[rightPointer]] = sBank[s[rightPointer]] + 1 || 1;
        checkHowManyConditions();
      }
      if (validWindowFound === false) {
        rightPointer++;
      }
    } else {
      // While validWindowFound === true, increment L, starting from leftEdge
      while (validWindowFound === true) {
        // Check if char we are passing decreases sCount
        if (sBank[s[leftPointer]] !== undefined) {
          if (sBank[s[leftPointer]] >= 1) {
            sBank[s[leftPointer]]--;
          }
        }
        leftPointer++;
        // Check if conditionsMet < # of unique chars in t
          // If so then validWindowFound = false; return to incrementing Right
          // If not then continue to increment L
        checkHowManyConditions();
      }
      rightPointer++;
    }
  }
  if (validWindowLeft !== null && validWindowRight !== null) {
    console.log(s.slice(validWindowLeft, validWindowRight + 1))
    return s.slice(validWindowLeft, validWindowRight + 1);
  } else {
    return '';
  }
};

minWindow("ADOBECODEBANC", "ABC");
/*
Your input
"ADOBECODEBANC"
"ABC"

Output
"BA"
Expected
"BANC"

*/